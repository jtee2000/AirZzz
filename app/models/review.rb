# == Schema Information
#
# Table name: reviews
#
#  id            :bigint           not null, primary key
#  user_id       :integer          not null
#  listing_id    :integer          not null
#  body          :text             not null
#  accuracy      :integer
#  communication :integer
#  cleanliness   :integer
#  location      :integer
#  check_in      :integer
#  value         :integer
#

class Review < ApplicationRecord 
    validates :user_id, :listing_id, :accuracy, :communication, :cleanliness, :location, :check_in, :value, :body, presence: true 

    belongs_to :listing, 
        foreign_key: :listing_id, 
        class_name: :Listing 

    belongs_to :user



end 
