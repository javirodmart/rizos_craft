class Item < ApplicationRecord
    # has_one :main_image_attachment, dependent: :destroy
    # has_one :main_image_blob, through: :main_image_attachment
    has_one_attached :image, dependent: :destroy
    has_many :carts, dependent: :destroy
    has_many :items, through: :carts

    def to_s 
        name
    end

    after_create do 
        product = Stripe::Product.create(name: name,images:[ img_url] )
        price = Stripe::Price.create(product: product, unit_amount: self.price, currency:"usd")
        update(stripe_product_id: product.id) 
    end
end
