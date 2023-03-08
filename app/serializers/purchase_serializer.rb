class PurchaseSerializer < ActiveModel::Serializer
  attributes :id,:user_id,:item_id
  
  belongs_to :user
  belongs_to :item


 
end
