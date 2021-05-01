import React from "react";

class VendorShowHero extends React.Component {
  render() {
  let { vendor } = this.props;

  return (
      <div className="vendorshow__hero-container">
        <div className="vendorshow__hero-header--outer">
          <div className="vendorshow__hero-header--inner">
            <div className="vendorshow__hero-header-logo"></div>
            <div className="vendorshow__hero-header-text">
              {vendor.title}
            </div>
          </div>
        </div>
        {
          vendor.photoUrls && 
          <div className="vendorshow__hero-splash-outer" style={{backgroundImage: `url(${vendor.photoUrls[0]})`}}></div>
        }
      </div>
    );
  }
}

export default VendorShowHero;
