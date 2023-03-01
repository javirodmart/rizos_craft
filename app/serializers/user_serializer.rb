class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name,:email, :img_url,:password, :password_confirmation, :stripe_customer_id
  has_many :items
end
