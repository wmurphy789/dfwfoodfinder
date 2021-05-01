import React from "react";

class VendorShowDescription extends React.Component {
  render() {
    let { vendor, host } = this.props;

    if (!this.props.vendor || !this.props.host) {
      return null;
    }

    let quote = [
    `"Enjoy dinner and / or a glass of wine on our rooftop terrace
    overlooking the dome of City Hall."`,
    `"Rest easy in our thoughtfully decorated home with all amenities included."`,
    `"A great home base for exploring all SF has to offer."`,
    `"Take in iconic views from a city sanctuary nestled in a quiet neighorhood."`
    ];
    let randomQuote = quote[Math.floor(Math.random()*quote.length)];



    return (
      <div className="vendorshow__desc-container">
        <div className="vendorshow__desc-content-wrapper">
          <div className="vendorshow__desc-flair">
            <p className="vendorshow__desc-flairitem">
              {vendor.num_guests} guests
            </p>
            <p className="vendorshow__desc-flairitem">
              {vendor.vendor_type}
            </p>
            <p className="vendorshow__desc-flairitem">
              {vendor.num_guests === 1
                ? `1 guest`
                : `${vendor.num_guests} guests`}
            </p>
            <p className="vendorshow__desc-flairitem">
              {vendor.num_baths === 1
                ? `1 bath`
                : `${vendor.num_baths} baths`}
            </p>
          </div>
          <div className="vendorshow__desc-content">
            {vendor.description}
          </div>
        </div>
        <div className="vendorshow__desc-host">
          <div className="vendorshow__desc-host-img-wrapper">
            <div className="vendorshow__desc-host-img"></div>
          </div>
          <div className="vendorshow__desc-host-review-outer">
            <p className="vendorshow__desc-host-review-text">
              {randomQuote}
            </p>
            <p className="vendorshow__desc-host-review-author">
              Hosted by {host.firstname}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default VendorShowDescription;
