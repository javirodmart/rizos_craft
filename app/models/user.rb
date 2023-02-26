class User < ApplicationRecord
    has_secure_password
    validates :email , presence: true
    validates :email, uniqueness: :true 
    validates :password,presence: true

    has_many :carts
    has_many :items, through: :carts
end
