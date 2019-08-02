class UpdateListings < ActiveRecord::Migration[5.1]
  def change
    change_column :listings, :description, :text
  end
end
