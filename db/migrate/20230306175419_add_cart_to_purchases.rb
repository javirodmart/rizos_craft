class AddCartToPurchases < ActiveRecord::Migration[7.0]
  def change
    add_reference :purchases, :cart, null: false, foreign_key: true
  end
end
