class Api::SessionsController < ApplicationController 

    def create 
        @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
        if @user 
            @user.reset_session_token 
            session[:session_token] = @user.session_token 
            render "api/users/show"
        else  
            render json: ["Invalid username/password"], status: 401
        end
    end 

    def destroy 
        @user = current_user
        if @user 
            logout
            render "api/users/show"
        else  
            render json: ["Not signed in"], status: 404
        end 
    end 

end 