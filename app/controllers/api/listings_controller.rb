class Api::ListingsController < ApplicationController 
    def index 
        debugger
        @listings = Listing.all  
   
        if @listings 
            render :index
        else  
            render json: @listings.errors.full_messages
        end
    end 


    def show 
        @listing = Listing.find_by(id: params[:id])
        if @listing  
            render :show 
        else  
            render json: @listing.errors.full_messages 
        end 
    end 


end