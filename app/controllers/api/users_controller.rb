class Api::UsersController < ApplicationController 
    def create 
        @user = User.new(user_params)
        if @user.save 
            @user.reset_session_token 
            session[:session_token] = @user.session_token 
            render :show 
        else  
            render json: @user.errors.full_messages, status: 422
        end
    end 

    private 
    def user_params 
        params.require(:user).permit(:email, :fname, :lname, :password)
    end

end