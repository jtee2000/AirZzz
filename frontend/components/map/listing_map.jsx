import React from 'react'; 
import MarkerManager from '../../util/marker_manager'; 

class ListingMap extends React.Component {
    constructor(props) {
        super(props)
    }


    componentDidMount() {
        debugger
        const mapOptions = {
            center: { lat: 42.335814, lng: -71.168923 }, 
            zoom: 13
        };
        // wrap this.mapNode in a Google Map
        this.map = new google.maps.Map(this.mapNode, mapOptions);
        // this.map = new google.maps.Map(mapDOMNode, mapOptions);
        this.MarkerManager = new MarkerManager(this.map);
        this.props.fetchListings().then( (payload) => this.MarkerManager.updateMarkers(payload)); 
    }

    componentDidUpdate() {
        this.MarkerManager.updateMarkers();
    }


    render() {
        return(
            <div id="map-container" ref={ map => this.mapNode = map } className="listing-map-google">

            </div>
        )
    }
}

export default ListingMap;