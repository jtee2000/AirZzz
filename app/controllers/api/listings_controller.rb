class Api::ListingsController < ApplicationController 
    def index 
        @listings = Listing.all 
        if @listings 
            render :index
        else  
            render json: @listings.errors.full_messages
        end
    end 

    def search 
        @listings = Listing.in_bounds(params[:bounds]) 
        if @listings 
            render :index
        else  
            render json: ['Not a valid request'], status: 404
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