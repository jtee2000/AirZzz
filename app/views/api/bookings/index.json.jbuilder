@bookings.each do |booking| 
    json.set! booking.id do 
        json.extract! booking, :id, :start_date, :end_date, :listing_id, :guests, :user_id
        json.extract! booking.listing.photos.first, :service_url
        json.extract! booking.listing, :title
    end
end 
