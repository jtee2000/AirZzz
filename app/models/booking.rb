# == Schema Information
#
# Table name: bookings
#
#  id         :bigint           not null, primary key
#  listing_id :integer          not null
#  start_date :date             not null
#  end_date   :date             not null
#  guests     :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  user_id    :integer
#

class Booking < ApplicationRecord 
    validates :listing_id, :user_id, :start_date, :end_date, :guests, presence: true 

    belongs_to :listing,
        foreign_key: :listing_id, 
        dependent: :destroy,
        class_name: :Listing

    def overlapping_requests 
        Booking
        .where.not(id: self.id)
        .where(listing_id: self.listing_id)
        .where('start_date > :end_date OR end_date < :start_date',
                 start_date: start_date, end_date: end_date)
    end

    def ensure_nonoverlapping_requests 
        overlapping_requests.empty? 
    end

end
