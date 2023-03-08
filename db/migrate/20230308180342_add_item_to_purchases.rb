class AddItemToPurchases < ActiveRecord::Migration[7.0]
  def change
    add_reference :purchases, :item
  end
end
