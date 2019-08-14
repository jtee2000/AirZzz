class Api::BookingsController < ApplicationController 

    def create
        @booking = Booking.new(booking_params)
        @booking.user_id = current_user.id 
        if @booking.ensure_nonoverlapping_requests && @booking.save
            render :show
        else  
            render json: ['Booking request invalid'], status: 400
        end
    end 

    def index 
        @bookings = Booking.all 
        render :index 
    end



    def destroy 
    end

    private 
    def booking_params 
        params.require(:booking).permit(:start_date, :end_date, :guests, :listing_id)
    end

end