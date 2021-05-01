import React from "react";
import VendorShowReviewSingle from './vendor_show_review_single';

class VendorShowReviews extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.openModal('reviews');
  }
  
  render() {
    let { reviews, vendor } = this.props;

    // Check for review preview count
    let vendorPreview;
    if (reviews.length >= 6) {
      vendorPreview =  (
        <div className="vendorshow__reviews-reviews">
          <div className="vendorshow__reviews-row">
            <VendorShowReviewSingle review={reviews[0]} />
            <VendorShowReviewSingle review={reviews[1]} />
          </div>
          <div className="vendorshow__reviews-row">
            <VendorShowReviewSingle review={reviews[2]} />
            <VendorShowReviewSingle review={reviews[3]} />
          </div>
          <div className="vendorshow__reviews-row">
            <VendorShowReviewSingle review={reviews[4]} />
            <VendorShowReviewSingle review={reviews[5]} />
          </div>
        </div>
      );
    } else if (reviews.length >= 4) {
      vendorPreview =  (
        <div className="vendorshow__reviews-reviews">
          <div className="vendorshow__reviews-row">
            <VendorShowReviewSingle review={reviews[0]} />
            <VendorShowReviewSingle review={reviews[1]} />
          </div>
          <div className="vendorshow__reviews-row">
            <VendorShowReviewSingle review={reviews[2]} />
            <VendorShowReviewSingle review={reviews[3]} />
          </div>
        </div>
      );
    } else if (reviews.length >= 2) {
      vendorPreview =  (
        <div className="vendorshow__reviews-reviews">
          <div className="vendorshow__reviews-row">
            <VendorShowReviewSingle review={reviews[0]} />
            <VendorShowReviewSingle review={reviews[1]} />
          </div>
        </div>
      );
    } else {
      vendorPreview =  (
        <div className="vendorshow__reviews-reviews">
          <div className="vendorshow__reviews-row">
            <p className="vendorshow__reviews-empty">
              There are currently no reviews for this vendor ...
            </p>
          </div>
        </div>
      );
    }

    return (
      <div className="vendorshow__reviews-container">
        <h3 className="vendorshow__reviews-header">
          Reviews
        </h3>
        {vendorPreview}

        <a href="#" className="vendorshow__reviews-btn" onClick={this.handleClick}>Read all {vendor.num_reviews} reviews</a>

      </div>
    ); 
  }
}

export default VendorShowReviews;
