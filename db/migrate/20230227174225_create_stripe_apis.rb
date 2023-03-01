class CreateStripeApis < ActiveRecord::Migration[7.0]
  def change
    create_table :stripe_apis do |t|

      t.timestamps
    end
  end
end
