import React from 'react'; 
import MarkerManager from '../../util/marker_manager'; 
import ListingIndexItem from '../listings/listing_index_item';

class ListingMap extends React.Component {
    constructor(props) {
        super(props)
        this.registerListeners = this.registerListeners.bind(this);
    }


    componentDidMount() {
        const mapOptions = {
            center: { lat: 42.335814, lng: -71.168923 }, 
            zoom: 13
        };
        // wrap this.mapNode in a Google Map
        this.map = new google.maps.Map(this.mapNode, mapOptions);
        // this.map = new google.maps.Map(mapDOMNode, mapOptions);
        this.MarkerManager = new MarkerManager(this.map);
        // this.props.fetchListings().then( (payload) => this.MarkerManager.updateMarkers(payload)); 
        this.registerListeners();
        this.MarkerManager.updateMarkers(this.props.benches);

        // Integrate Google Places Search Feature 
        var input = document.getElementById('airzzz-search');
        debugger
        var searchBox = new google.maps.places.SearchBox(input);
        debugger
        this.map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
        debugger
        const map = this.map
        this.map.addListener('bounds_changed', () => {
            debugger
            searchBox.setBounds(map.getBounds());
        });
        debugger
        var markers = [];
        // Listen for the event fired when the user selects a prediction and retrieve
        // more details for that place.
        searchBox.addListener('places_changed', function () {
            var places = searchBox.getPlaces();

            if (places.length == 0) {
                return;
            }

            // Clear out the old markers.
            markers.forEach(function (marker) {
                marker.setMap(null);
            });
            markers = [];

            // For each place, get the icon, name and location.
            var bounds = new google.maps.LatLngBounds();
            places.forEach(function (place) {
                if (!place.geometry) {
                    console.log("Returned place contains no geometry");
                    return;
                }
                var icon = {
                    url: place.icon,
                    size: new google.maps.Size(71, 71),
                    origin: new google.maps.Point(0, 0),
                    anchor: new google.maps.Point(17, 34),
                    scaledSize: new google.maps.Size(25, 25)
                };

                // Create a marker for each place.
                markers.push(new google.maps.Marker({
                    map: this.map,
                    icon: icon,
                    title: place.name,
                    position: place.geometry.location
                }));

                if (place.geometry.viewport) {
                    // Only geocodes have viewport.
                    bounds.union(place.geometry.viewport);
                } else {
                    bounds.extend(place.geometry.location);
                }
            });
            map.fitBounds(bounds);
        });
    
    }

    componentDidUpdate() {
        this.MarkerManager.updateMarkers(this.props.listings);
    }

    // componentDidUpdate() {
    //     if (this.props.singleBench) {
    //         const targetListingKey = Object.keys(this.props.listings)[0];
    //         const targetListing = Object.values(this.props.listings)[targetListingKey];
    //         this.MarkerManager.updateMarkers([targetListing]); //grabs only that one bench
    //     } else {
    //         this.MarkerManager.updateMarkers(this.props.listings);
    //     }
    // }

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


    render() {
        const listings = Object.values(this.props.listings).map((listing) => {
            return <ListingIndexItem listing={listing} key={listing.id} />
        });
        debugger
        return(
            <div className="listing-map-search-container">
                    <ul className="map-all-listings">
                        {listings}
                    </ul>

                <div id="map-container" ref={ map => this.mapNode = map } className="listing-map-google">
                </div>
            </div>
        )
    }
}

export default ListingMap;