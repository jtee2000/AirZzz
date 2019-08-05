class CreateBookings < ActiveRecord::Migration[5.2]
  def change
    create_table :bookings do |t|
      t.integer :listing_id, null: false 
      t.date :start_date, null: false 
      t.date :end_date, null: false 
      t.integer :guests, null: false 
      t.timestamps
    end
  end
end
