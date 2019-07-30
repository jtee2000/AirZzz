class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  def current_user 
    user = User.find_by(session_token: session[:session_token])
  end

  def logged_in? 
    !!current_user 
  end

  def ensure_logged_in 
    redirect_to api_user unless logged_in?
  end

  def logout 
    current_user.reset_session_token 
    session[:session_token] = nil 
  end


end
