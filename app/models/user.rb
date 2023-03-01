class User < ApplicationRecord
    has_secure_password
    validates :email, uniqueness: :true 
    has_many :carts
    has_many :items, through: :carts
    def to_s 
        email
    end
    after_create do 
        user = Stripe::Customer.create(email: email,name: "#{first_name} #{last_name}")
        update(stripe_customer_id: user.id)
    end
end
