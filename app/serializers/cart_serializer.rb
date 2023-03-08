class CartSerializer < ActiveModel::Serializer
  attributes :id,:item_id ,:user_id,:item,:name,:price,:description,:img_url
  


  
end
