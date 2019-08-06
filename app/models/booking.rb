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
        # debugger
        Booking
        .where.not(id: self.id)
        .where(listing_id: listing_id)
        .where.not("start_date > ? OR end_date < ?", self.end_date, self.start_date)
    end

    def ensure_nonoverlapping_requests 
        # debugger
        overlapping_requests.empty? 
    end

end
