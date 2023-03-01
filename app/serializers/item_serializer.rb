class ItemSerializer < ActiveModel::Serializer
  attributes :id,:name, :price, :img_url, :description,:stripe_product_id
  
end
