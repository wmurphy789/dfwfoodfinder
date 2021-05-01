import React from 'react'

class VendorShowReviewSingle extends React.Component {
  componentDidMount() {
    
  }
  
  render() {
    let { review } = this.props;
    return (
      <div className="vendorshow__review-single-container">
        <div className="vendorshow__review-single-profile">
          <div className="vendorshow__review-single-photo"></div>
          <div className="vendorshow__review-single-userinfo">
            <h4 className="vendorshow__review-single-name">
              {review.firstname}
            </h4>
            <p className="vendorshow__review-single-date">
              {/* a month ago (place date here) */}
            </p>
          </div>
        </div>
        <div className="vendorshow__review-single-review">
          <p className="vendorshow__review-single-text">
            {review.review}
          </p>
        </div>
      </div>
    )
  }
}

export default VendorShowReviewSingle;