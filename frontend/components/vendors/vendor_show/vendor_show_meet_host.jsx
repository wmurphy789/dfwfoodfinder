import React from "react";

class VendorShowMeetHost extends React.Component {
  render() {
    let { host } = this.props;

    if (!this.props.host || !this.props.vendor) {
      return null;
    }

    let hostId = this.props.vendor.hostId;

    return (
      <div className="vendorshow__meethost-container">
        <h3 className="vendorshow__meethost-header">Meet your host</h3>
        <div className="vendorshow__meethost-main">
          <div className="vendorshow__meethost-bio-wrapper">
            <div className="vendorshow__meethost-photo-wrapper">
              <div className="vendorshow__meethost-photo"></div>
              <div className="vendorshow__meethost-flair">
                <h4 className="vendorshow__meethost-flair-text">
                  {host.firstname}
                </h4>
              </div>
            </div>
            <div className="vendorshow__meethost-bio-inner">
              <h4 className="vendorshow__meethost-bold">
                Hi, I'm {host.firstname}!
              </h4>
              <p className="vendorshow__meethost-text">
                {host.bio}
              </p>
              <h4 className="vendorshow__meethost-bold">
                Interaction with guests
              </h4>
              <p className="vendorshow__meethost-text">
                Your host won’t be on the property but they’ll be available for anything you need during your stay.
              </p>
            </div>
          </div>
          <div className="vendorshow__meethost-stats-wrapper">
            <p className="vendorshow__meethost-stat">Languages: English</p>
            <p className="vendorshow__meethost-stat">Response rate: 100%</p>
            <p className="vendorshow__meethost-stat">Response time: within an hour</p>
          </div>
        </div>
      </div>
    );
  }
}

export default VendorShowMeetHost;
