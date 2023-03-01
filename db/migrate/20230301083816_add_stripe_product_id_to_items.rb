class AddStripeProductIdToItems < ActiveRecord::Migration[7.0]
  def change
    add_column :items, :stripe_product_id, :string
  end
end
