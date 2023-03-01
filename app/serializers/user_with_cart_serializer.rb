class UserWithCartSerializer < ActiveModel::Serializer
  # attributes :id, :first_name, :last_name, :username, :email, :img_url,:password, :password_confirmation
  has_many :carts
  has_many :items
end
