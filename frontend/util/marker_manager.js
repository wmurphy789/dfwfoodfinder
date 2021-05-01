
class MarkerManager {
  constructor(map, handleMarkerClick) {
    this.map = map;
    this.markers = {};

    this.handleMarkerClick = handleMarkerClick;
  }

  updateMarkers(vendors) {
    let vendorObj = {};
    vendors.forEach(vendor => (vendorObj[vendor.id] = vendor));

    vendors
      .filter(vendor => !this.markers[vendor.id])
      .forEach(newVendor => this.createMarkerFromVendor(newVendor));

    Object.keys(this.markers)
      .filter(vendorId => !vendorObj[vendorId])
      .forEach(vendorId => this.removeMarker(this.markers[vendorId]));
  }

  createMarkerFromVendor(vendor) {
    let myPosition = {
      lat: vendor.lat,
      lng: vendor.long
    };

    const mapIcon = {
      path: "m22,-28.38281l-44,0l0,20l16,0l6,5l6,-5l16,0l0,-20z",
      labelOrigin: new google.maps.Point(0, -18),
      fillColor: "white",
      fillOpacity: 1,
      scale: 1.15,
      strokeColor: "#484848",
      strokeWeight: 0.3
    };

    if (!this.markers[vendor.id]) {
      let marker = new google.maps.Marker({
        position: myPosition,
        animation: google.maps.Animation.DROP,
        map: this.map,
        title: vendor.name,
        icon: mapIcon,
        label: {
          text: `$${vendor.price}`,
          fontSize: "13px",
          fontWeight: "bold",
          color: "#484848"
        }
      });

      this.markers[vendor.id] = marker;
      let markerIcon = this.markers[vendor.id];
      markerIcon.addListener("click", () =>
        this.handleMarkerClick(vendor)
      );
    }
  }

  removeMarker(marker) {
    if (this.markers[marker.id]) {
      this.markers[marker.id].setMap(null);
      delete this.markers[marker.id];
    }
  }
}

export default MarkerManager;
