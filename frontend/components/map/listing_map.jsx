import React from 'react'; 
import MarkerManager from '../../util/marker_manager'; 
class ListingMap extends React.Component {
    constructor(props) {
        super(props)
    }


    componentDidMount() {
        const mapOptions = {
            center: { lat: 37.7758, lng: -122.435 }, // this is SF
            zoom: 13
        };
        // wrap this.mapNode in a Google Map
        this.map = new google.maps.Map(this.mapNode, mapOptions);
        // this.map = new google.maps.Map(mapDOMNode, mapOptions);
        this.MarkerManager = new MarkerManager(this.map);
        this.MarkerManager.updateMarkers();
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