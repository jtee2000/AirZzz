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
![](app/assets/gif/ListingSearch.gif)
* User can click on a listing which brings them to a show page
* Users can search in a search bar for listings in their area
```
class ListingMap extends React.Component {
    constructor(props) {
        super(props)
        this.registerListeners = this.registerListeners.bind(this);
        this.makeMapWork = this.makeMapWork.bind(this);
    }
    componentDidMount() {
        const mapOptions = {
            center: { lat: 42.335814, lng: -71.168923 }, 
            zoom: 13
        };
        this.map = new google.maps.Map(this.mapNode, mapOptions);
        this.MarkerManager = new MarkerManager(this.map);
        this.registerListeners();
        this.MarkerManager.updateMarkers(this.props.listings);
        google.maps.event.addListener(this.map, 'bounds_changed', () => {
            var input = document.getElementById('airzzz-search');
            this.autocomplete = new google.maps.places.Autocomplete(input);
            this.autocomplete.setBounds(this.map.getBounds());
            this.makeMapWork();
        });
    }


    makeMapWork() {
        
        var markers = [];
        const map = this.map;
        google.maps.event.addListener(this.autocomplete, 'place_changed', () => {
            var place = this.autocomplete.getPlace();
            markers.push(new google.maps.Marker({
                map: map,
                title: place.name,
                position: place.geometry.location
            }));
            var bounds = new google.maps.LatLngBounds();
            if (place.geometry.viewport) {
                    // Only geocodes have viewport.
                    bounds.union(place.geometry.viewport);
                } else {
                    bounds.extend(place.geometry.location);
                }
            map.fitBounds(bounds);
        });
    }

    componentDidUpdate() {
        this.MarkerManager.updateMarkers(this.props.listings);
    }

    registerListeners() {
        google.maps.event.addListener(this.map, 'idle', () => {
            const { north, south, east, west } = this.map.getBounds().toJSON();
            const bounds = {
                northEast: { lat: north, lng: east },
                southWest: { lat: south, lng: west }
            };
            this.props.updateFilter('bounds', bounds);
        });
        google.maps.event.addListener(this.map, 'click', (event) => {
            const coords = getCoordsObj(event.latLng);
            this.handleClick(coords);
        });
    }
```

## Bookings 


