class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name,:email, :img_url,:password, :password_confirmation, :stripe_customer_id, :state,
  :city,
   :line1,
   :line2,
   :postal_code,
  :country,:admin
  has_many :items,include: :cart
  has_many :carts,include: :items
 

end
