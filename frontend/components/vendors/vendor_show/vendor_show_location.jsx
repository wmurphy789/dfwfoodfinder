import React from "react";
import MarkerManager from '../../../util/marker_manager';


class VendorShowLocation extends React.Component {
  constructor(props) {
    super(props);
    this.renderMap = this.renderMap.bind(this);
  }

  componentDidMount() {
    this.renderMap();
  }
  
  renderMap() {
    let { lat, long } = this.props.vendor;

    const mapOptions = {
      center: {
        lat: lat,
        lng: long
      },
      zoom: 15,
      gestureHandling: 'none',
      zoomControl: false
    };
    this.map = new google.maps.Map(this.mapNode, mapOptions);

    this.marker = new google.maps.Circle({
      center: {
        lat: lat,
        lng: long
      },
      radius: 150,
      strokeColor: "#71cec9",
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: "#90ece4",
      fillOpacity: 0.5,
      map: this.map
    });

    // const map = this.refs.map;
    // this.MarkerManager = new MarkerManager(this.map);

    // this.registerListeners();
    // this.MarkerManager.updateMarkers([this.props.vendor]);
  }
  
  render() {
    let { vendor } = this.props;

    return (
      <div className="vendorshow__location-container">
        <div className="vendorshow__location-content-wrapper">
          <div className="vendorshow__location-header-wrapper">
            <h3 className="vendorshow__location-header">Location</h3>
            <p className="vendorshow__location-location-subheader">                {vendor.location}
            </p>
            <p className="location_description-location-description">
              {vendor.location_description}
            </p>
          </div>
        </div>
        <div className="vendorshow__location-map-outer">
          <div className="show-map-container" id="map-container" ref={map => this.mapNode = map}></div>


          <p className="vendorshow__location-map-text">
            Exact location provided after booking
          </p>
        </div>
      </div>
    );
  }
}

export default VendorShowLocation;
