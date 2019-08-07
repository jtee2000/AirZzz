
@bookings.each do |booking| 
    json.set! booking.listing_id 
        json.extract! booking, :listing_id, :start_date, :end_date
    end
end
