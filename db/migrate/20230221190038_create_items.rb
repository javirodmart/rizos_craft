class CreateItems < ActiveRecord::Migration[7.0]
  def change
    create_table :items do |t|
      t.string :name
      t.float :price
      t.string :img_url
      t.string :description

      t.timestamps
    end
  end
end
