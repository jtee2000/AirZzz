@bookings.each do |booking| 
    json.set! booking.id do 
        json.extract! booking, :start_date, :end_date, :listing_id, :guests
    end
end 
