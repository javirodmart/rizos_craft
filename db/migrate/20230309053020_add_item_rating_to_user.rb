class AddItemRatingToUser < ActiveRecord::Migration[7.0]
  def change
    add_column :users, :item_rating, :integer
  end
end
