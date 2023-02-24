class User < ApplicationRecord
    has_secure_password
    has_many :carts
    has_many :items, through: :carts
end
