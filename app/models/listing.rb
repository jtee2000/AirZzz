# == Schema Information
#
# Table name: listings
#
#  id          :bigint           not null, primary key
#  title       :string           not null
#  description :text             not null
#  price       :integer          not null
#  guests      :integer          not null
#  beds        :integer          not null
#  bedrooms    :integer          not null
#  baths       :integer          not null
#  longitude   :float            not null
#  latitude    :float            not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Listing < ApplicationRecord 
    validates :title, :description, :price, :guests, :beds, :bedrooms, :baths, :longitude, :latitude, presence: true 

    has_many_attached :photos
    
    has_many :bookings

    has_many :reviews, 
        foreign_key: :listing_id, 
        class_name: :Review 

    def self.in_bounds(bounds)
        Listing
            .where("latitude < ?", bounds[:northEast][:lat])
            .where("latitude > ?", bounds[:southWest][:lat])
            .where("longitude > ?", bounds[:southWest][:lng])
            .where("longitude < ?", bounds[:northEast][:lng])

    end

end
