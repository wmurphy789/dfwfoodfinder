import React from 'react';
import PulseLoaderAnimation from "../loaders/pulse_loader";
import { Link } from 'react-router-dom';
import VendorIndexItem from './VendorIndexItem';

class VendorIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };

    setTimeout(() => this.setState({ loading: false }), 4000);
  }

  componentDidMount() {
    // this.props.fetchVendors();
    setTimeout(() => {
      document.body.classList.remove("landing__page");
    }, 500); 

  }

  render() {
    let { vendors, updateSearchCoords } = this.props;
    let vendorHeader;

    // Vendor Header
    if (vendors.length > 0) {
      vendorHeader = (
        <div className="vendorindex__header-container">
          <h2 className="vendorindex__header">{vendors.length}+ Airbnb Plus stays</h2>
          <p className="vendorindex__header-sub">
            A selection of places to stay verified for quality and design
          </p>
        </div>
      )
    } else {
      vendorHeader = (
        <div className="vendorindex__header-container">
          <h2 className="vendorindex__header">No Airbnb Plus results</h2>
          <p className="vendorindex__header-sub">
            Try adjusting your search by moving or zooming out on the map.
          </p>
          <p className="vendorindex__header-sub">
            Or see all available vendors in{" "}
            <a
              onClick={() => updateSearchCoords(
                37.773972,
                -122.431297
              )}
            >
              San Francisco
            </a>
          </p>
        </div>
      );
    }

    // Loading Animation
    if (this.state.loading) {
      return (
        <div className="vendorindex__main loader__container">
          <PulseLoaderAnimation loading={this.state.loading} />
        </div>
      );
    }

    return (
      <div className="vendorindex__main">
        {vendorHeader}

        <div>
          {vendors.map((vendor, idx) => (
            <VendorIndexItem vendor={vendor} key={idx} />
          ))}
        </div>
      </div>
    );
  }
};

export default VendorIndex;