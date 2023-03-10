class PurchaseSerializer < ActiveModel::Serializer
  attributes :id,:user_id,:item_id,:item_rating,:created_at
  
  belongs_to :user
  belongs_to :item


 
end
