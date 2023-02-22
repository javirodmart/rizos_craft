class User < ApplicationRecord
    has_secure_password
    has_many :cart_items
    has_many :items, through: :carts
end
