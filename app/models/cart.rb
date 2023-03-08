class Cart < ApplicationRecord
 has_many :purchases
  belongs_to :user
  belongs_to :item
end
