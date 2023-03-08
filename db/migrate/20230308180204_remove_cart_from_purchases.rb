class RemoveCartFromPurchases < ActiveRecord::Migration[7.0]
  def change
    remove_column :purchases, :cart_id
  end
end
