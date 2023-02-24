class Item < ApplicationRecord
    # has_one :main_image_attachment, dependent: :destroy
    # has_one :main_image_blob, through: :main_image_attachment
    has_one_attached :image, dependent: :destroy
    has_many :carts, dependent: :destroy
    has_many :items, through: :carts
end
