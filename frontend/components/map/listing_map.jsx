import React from 'react'; 
import MarkerManager from '../../util/marker_manager'; 
import ListingIndexMapItem from '../listings/listing_index_map_item';
import { withRouter } from 'react-router-dom'

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


    render() {
        const listings = Object.values(this.props.listings).map((listing) => {
            return <ListingIndexMapItem listing={listing} key={listing.id} />
        });
        return(
            <>
            <span className="map-listings-count-header">{Object.values(this.props.listings).length}+ places to stay</span>
            <div className="listing-map-search-container">
                    <ul className="map-all-listings">
                        {listings}
                    </ul>

                <div id="map-container" ref={ map => this.mapNode = map } className="listing-map-google">
                </div>
            </div>
            </>
        )
    }
}

export default ListingMap;