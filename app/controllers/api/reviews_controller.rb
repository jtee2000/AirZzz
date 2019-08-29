class Api::Reviews_Controller < ApplicationController 

    def create 
        @review = Review.new(review_params)
        @review.user_id = current_user.id 
        if @review.save 

        else  
            render json: ["Review invalid"], status: 422
        end 

    end 



    private 

    def review_params
        params.require(:review).permit(:listing_id, :body)
    end


end