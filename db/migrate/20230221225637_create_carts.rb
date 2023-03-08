class CreateCarts < ActiveRecord::Migration[7.0]
  def change
    create_table :carts do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :item, null: false, foreign_key: true
      t.string :name
      t.integer :price
      t.string :img_url
      t.string :description

      t.timestamps
    end
  end
end
