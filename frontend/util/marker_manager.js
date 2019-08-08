import merge from 'lodash'
export default class MarkerManager {
    constructor(map, handleClick) {
        this.map = map;
        this.markers = {};
        this.handleClick = handleClick;
    }

    updateMarkers(listings = []) {
        if (listings.length === 0) return; 
        // const listings = merge({}, listings); 
        Object.values(listings).filter( (listing) => !this.markers[listing.id]).forEach(newListing => {
            this.createMarker(newListing, this.handleClick)
        });

        Object.keys(this.markers).filter(listingId => !listings[listingId]).forEach(listingId => this.removeMarker(this.markers[listingId]))
    }

    createMarker(listing) {
        const position = new google.maps.LatLng(listing.latitude, listing.longitude);
        const marker = new google.maps.Marker({
            position,
            map: this.map,
            listingId: listing.id
        });
        marker.addListener('click', () => this.handleClick(listing));
        this.markers[marker.listingId] = marker;
    }

    removeMarker(marker) {
        this.markers[marker.listingId].setMap(null);
        delete this.markers[marker.listingId];
    }

}

