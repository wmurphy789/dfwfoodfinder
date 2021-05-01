import React      from "react";
import ImageZoom  from 'react-medium-image-zoom';

class VendorShowPhotoOverview extends React.Component {
  render() {
    let {photoUrls, thumbnailUrls} = this.props.vendor;

    return (
      <div className="vendorshow__photos-container">
        <h3 className="vendorshow__photos-header">
          Tour this condominium
        </h3>

        {thumbnailUrls !== undefined && 
          <div className="vendorshow__photos-grid-outer">
            {thumbnailUrls.map((image, idx) => {
              return (
                <div className="vendorshow__photos-grid-item-wrapper" style={{ backgroundImage: `url(${thumbnailUrls[idx]})` }} key={idx}>
                  <ImageZoom 
                    image={{
                      src: photoUrls[idx],
                      alt: 'aerbnb vendor photo',
                      className: 'vendorshow__photo-single'
                    }}
                    zoomImage={{
                      src: thumbnailUrls[idx],
                      alt: 'aerbnb vendor photo',
                    }} 
                  />
                </div>
              );
            })}
          </div>
        }

        <div className="vendorshow__photos-extra-container">
          <div className="vendorshow__photos-extra-inner">
            <div className="vendorshow__photos-extra-logo"></div>
            <div className="vendorshow__photos-extra-content">
              <h4 className="vendorshow__photos-extra-header">
                Exceptional hosts with an eye for detail
              </h4>
              <p className="vendorshow__photos-extra-text">
                Every Airbnb Plus host is well-reviewed because they’re welcoming and take care of all the essentials that create memorable stays.
              </p>
            </div>
          </div>
        </div>  

      </div>
    );
  }
}

export default VendorShowPhotoOverview;
