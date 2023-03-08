class RemoveItemIdFromPurchase < ActiveRecord::Migration[7.0]
  def change
    remove_column :purchases, :item_id
  end
end
