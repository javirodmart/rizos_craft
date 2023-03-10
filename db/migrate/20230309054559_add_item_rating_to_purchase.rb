class AddItemRatingToPurchase < ActiveRecord::Migration[7.0]
  def change
    add_column :purchases, :item_rating, :integer
  end
end
