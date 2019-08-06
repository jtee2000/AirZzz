class Api::BookingsController < ApplicationController 

    def create 
        # debugger
        @booking = Booking.new(booking_params)
        if @booking.ensure_nonoverlapping_requests && @booking.save
            render :index
        else  
            render json: ['Booking request invalid'], status: 400
        end
    end 

    def index 
    end



    def destroy 
    end

    private 
    def booking_params 
        params.require(:booking).permit(:start_date, :end_date, :guests, :listing_id, :user_id)
    end

end