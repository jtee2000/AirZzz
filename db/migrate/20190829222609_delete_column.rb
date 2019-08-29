class DeleteColumn < ActiveRecord::Migration[5.2]
  def change
    remove_column :reviews, :rating
    add_column :reviews, :accuracy, :integer
    add_column :reviews, :communication, :integer
    add_column :reviews, :cleanliness, :integer
    add_column :reviews, :location, :integer 
    add_column :reviews, :check_in, :integer 
    add_column :reviews, :value, :integer
    
  end
end
