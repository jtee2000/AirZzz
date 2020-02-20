# AirZzz

AirZzz is a full-stack single-page web application modeled after the notorious Airbnb. It uses Ruby on Rails as the webframework to handle all API requests, React/Redux to manage frontend state changes, and a PostgreSQL database on the backend. To manage all of the displayed photos, the application links Amazon Web Services. 


**[Visit the Live Application](https://air-zzz.herokuapp.com/#/)**

# Technologies 
* React/Redux
* Ruby on Rails
* PostgreSQL
* Javascript
* CSS
* HTML
* AWS
* Google Maps API
* Webpack 
* jQuery 

# Key Features 

## User Authenticaton
* Users can create an account
* Users can log in
![](app/assets/gif/Hnet-image.gif)
* Users cannot make rentals without being logged in
```
class User < ApplicationRecord 
    validates :email, :fname, :lname, :password_digest, :session_token, presence: true 
    validates :password, length: {minimum: 8}, allow_nil: true 
    validates :email, uniqueness: true
    attr_reader :password 
    after_initialize :ensure_session_token 

    def self.find_by_credentials(email, password) 
        user = User.find_by(email: email)
        return nil unless user && user.valid_password?(password)
        user
    end

    def password=(password) 
        @password = password 
        self.password_digest = BCrypt::Password.create(password)
    end

    def valid_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end 

    def self.generate_session_token 
        SecureRandom.urlsafe_base64
    end

    def reset_session_token 
        self.session_token = User.generate_session_token 
        save! 
        self.session_token
    end

    def ensure_session_token
        self.session_token ||= User.generate_session_token
    end

end
```

## Listings Search + Google Maps API
* Users can view featured listings shown on the map using Google Maps API
![](app/assets/gif/ListSearch.gif)
* User can click on a listing which brings them to a show page
* Users can search in a search bar for listings in their area
* A list of nearby listings appears on a map

