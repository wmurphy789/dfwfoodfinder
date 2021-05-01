import React from 'react';
import VendorShowReviewSingle from '../vendors/vendor_show/vendor_show_review_single';

class ReviewsModal extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.closeModal();
  }
  
  render() {
    let { reviews } = this.props;

    return (
      <div className="vendorshow__reviewmodal-container">
        <a 
          href="#"
          className="vendorshow__reviewmodal-btn-close modal__btn-close" 
          onClick={this.handleClick}>
            <i className="fas fa-times"></i>
          </a>
        <h3 className="vendorshow__reviewmodal-header">
          {reviews.length} Reviews
        </h3>
        {reviews.map((review, idx) => <VendorShowReviewSingle review={review} key={idx} className="vendorshow__review-single-modal" /> )}
      </div>
    );
  }
}

export default ReviewsModal;