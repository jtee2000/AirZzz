class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :email, null: false
      t.string :fname, null: false
      t.string :lname, null: false
      t.string :pswword_digest, null: false
      t.string :session_token, null: false 
      t.timestamps 
    end
  end
end
