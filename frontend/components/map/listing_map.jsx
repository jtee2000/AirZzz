import React from 'react'; 
import MarkerManager from '../../util/marker_manager'; 
import ListingIndexItem from '../listings/listing_index_item';

class ListingMap extends React.Component {
    constructor(props) {
        super(props)
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