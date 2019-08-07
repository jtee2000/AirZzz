class Api::BookingsController < ApplicationController 

    def create 
        @booking = Booking.new(booking_params)
        if @booking.ensure_nonoverlapping_requests && @booking.save
            render :show
        else  
            render json: ['Booking request invalid'], status: 400
        end
    end 

    def index 
        debugger
        @bookings = Booking.all 
        render :index 
    end



    def destroy 
    end

    private 
    def booking_params 
        params.require(:booking).permit(:start_date, :end_date, :guests, :listing_id, :user_id)
    end

end