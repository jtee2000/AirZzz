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
    

end
