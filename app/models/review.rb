# == Schema Information
#
# Table name: reviews
#
#  id         :bigint           not null, primary key
#  user_id    :integer          not null
#  listing_id :integer          not null
#  body       :text             not null
#

class Review < ApplicationRecord 
    validates :user_id, :listing_id, :body, presence: true 

    belongs_to :listing 
        foreign_key: :listing_id, 
        class_name: :Listing 

    



end 
