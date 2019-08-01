class CreateListings < ActiveRecord::Migration[5.1]
  def change
    create_table :listings do |t|
      t.string :title, null: false
      t.string :description, null: false 
      t.integer :price, null: false 
      t.integer :guests, null: false 
      t.integer :beds, null: false 
      t.integer :bedrooms, null: false 
      t.integer :baths, null: false 
      t.float :longitude, null: false 
      t.float :latitude, null: false 
      t.timestamps 
    end
  end
end
