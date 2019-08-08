export default class MarkerManager {
    constructor(map, handleClick) {
        this.map = map;
        this.markers = {};
        this.handleClick = handleClick;
    }

    updateMarkers(payload = []) {
        if (payload.length === 0) return; 
        const listingsObject = payload.listings; 
        Object.values(payload.listings).filter( (listing) => !this.markers[listing.id]).forEach(newListing => {
            this.createMarker(newListing, this.handleClick)
        });

        Object.keys(this.markers).filter(listingId => !listingsObject[listingId]).forEach(listingId => this.removeMarker(this.markers[listingId]))
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

