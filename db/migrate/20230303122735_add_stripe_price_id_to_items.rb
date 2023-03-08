class AddStripePriceIdToItems < ActiveRecord::Migration[7.0]
  def change
    add_column :items, :stripe_price_id, :string
  end
end
