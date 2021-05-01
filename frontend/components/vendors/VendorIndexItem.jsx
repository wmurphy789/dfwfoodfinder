import React from 'react';
import Carousel from 'nuka-carousel';
import { withRouter } from 'react-router-dom';

class VendorIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleVendorClick = this.handleVendorClick.bind(this);
  }

  handleVendorClick() {
    this.props.history.push(`/vendors/${this.props.vendor.id}`);
  }

  render() {
    let {
      vendor_type,
      title,
      num_guests,
      num_beds,
      num_baths,
      parking,
      wifi,
      kitchen,
      washer,
      price,
      photoUrls,
      average_rating,
      num_reviews,
      thumbnailUrls
    } = this.props.vendor;

    return (
      <div className="vendorindexitem__main">
        { thumbnailUrls && 
          <div className="vendorindexitem__carousel-wrapper">          
            <Carousel width={"300px"} heightMode={"first"} wrapAround={true}>
              {thumbnailUrls.map((photo, idx) => {
                if (idx < 4) {
                  return (
                    <img
                      src={photo}
                      key={idx}
                      style={{ minHeight: 200 }}
                      className="vendorindexitem__carousel-item"
                    />
                  );
                }
              })}
            </Carousel>
          </div>
        }

        <div
          className="vendorindexitem__content-wrapper"
          onClick={this.handleVendorClick}
        >
          <div className="vendorindexitem__content-top">
            <div className="vendorindexitem__content-flair">
              <p className="vendorindexitem__content-flair-verified">
                <span>Plus</span> Verified
              </p>
              <span className="vendorindexitem__content-flair-separator">
                &nbsp; &#8226; &nbsp;
              </span>
              <p className="vendorindexitem__content-flair-type">
                {vendor_type}
              </p>
            </div>
            <h2 className="vendorindexitem__content-title">{title}</h2>

            <div className="vendorindexitem__content-stats">
              <p className="vendorindexitem__content-stats-inner">
                {num_guests} guests &nbsp;<span>&#8226;</span>&nbsp;{" "}
                {vendor_type}&nbsp; <span>&#8226;</span>&nbsp;{" "}
                {num_beds == 1 ? "1 bed" : `${num_beds} beds`} &nbsp;
                <span>&#8226;</span>&nbsp;{" "}
                {num_baths == 1 ? "1 bath" : `${num_baths} bath`}
              </p>
            </div>
            <div className="vendorindexitem__content-amenities">
              <p className="vendorindexitem__content-amenities-inner">
                {parking ? "free parking" : ""} &nbsp;<span>&#8226;</span>{" "}
                &nbsp;{wifi ? "wifi" : ""} &nbsp;<span>&#8226;</span>&nbsp;{" "}
                {kitchen ? "kitchen" : ""} &nbsp;<span>&#8226;</span>&nbsp;{" "}
                {washer ? "washer" : ""}
              </p>
            </div>
          </div>

          <div className="vendorindexitem__content-bottom">
            <div className="vendorindexitem__content-reviews">
              <p className="vendorindexitem__content-reviews-total">
                <i className="fas fa-star" />
                {average_rating}
                <span>({num_reviews})</span>
              </p>
            </div>
            <div className="vendorindexitem__content-pricing">
              <p className="vendorindexitem__content-pricing-price">
                ${price}/night
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(VendorIndexItem);