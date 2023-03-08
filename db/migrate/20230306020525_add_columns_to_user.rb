class AddColumnsToUser < ActiveRecord::Migration[7.0]
  def change
    add_column :users, :state, :string
    add_column :users, :city, :string
    add_column :users, :line1, :string
    add_column :users, :line2, :string
    add_column :users, :postal_code, :string
  end
end
