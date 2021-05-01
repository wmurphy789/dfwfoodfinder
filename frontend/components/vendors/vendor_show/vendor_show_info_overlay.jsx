import React from "react";
import RenderStars from '../../stars/render_stars';

class VendorShowInfoOverlay extends React.Component {
  constructor(props) {
    super(props);
    this.handleModalClick = this.handleModalClick.bind(this);
  }

  handleModalClick() {
    this.props.openModal('booking');
  }

  render() {
    let { vendor } = this.props;

    return (
      <div className="vendorshow__overlay-container">
        <div className="vendorshow__overlay-vendor">
          <div className="vendorshow__overlay-logo-outer">
            <div className="vendorshow__overlay-logo" />
          </div>
          <div className="vendorshow__overlay-vendor-outer">
            <h3 className="vendorshow__overlay-vendortitle">
              {vendor.title}
            </h3>
            <div className="vendorshow__overlay-vendorstars">
              {RenderStars(vendor.average_rating)}
              <div className="vendorshow__overlay-numratings">{vendor.num_reviews}</div>
            </div>
          </div>
        </div>
        <div className="vendorshow__overlay-availability-outer">
          <div className="vendorshow__overlay-pricing">
            ${vendor.price} <span>/ night</span>
          </div>
          <div className="vendorshow__overlay-availability-btn-outer">
            <button className="vendorshow__overlay-availability-btn" onClick={this.handleModalClick}>
              Check availability
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default VendorShowInfoOverlay;
