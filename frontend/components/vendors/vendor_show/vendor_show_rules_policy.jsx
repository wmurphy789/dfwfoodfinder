import React from 'react';

const VendorShowRulesPolicy = props => {
  return (
    <div className="vendorshow__rules-container">
      <div className="vendorshow__rules-item-wrapper">
        <div className="vendorshow__rules-title">
          <h3 className="vendorshow__rules-header">
            House Rules
          </h3>
        </div>
        <div className="vendorshow__rules-details">
          <p className="vendorshow__rules-detail-text">
            The host has set some house rules, which you'll be asked to agree to when you book.
          </p>
        </div>
      </div>
      <div className="vendorshow__rules-item-wrapper">
        <div className="vendorshow__rules-title">
          <h3 className="vendorshow__rules-header">
            Cancellation policy
          </h3>
        </div>
        <div className="vendorshow__rules-details">
          <p className="vendorshow__rules-detail-text">
            <span>Moderate · Free cancellation for 48 hours</span><br />
            After that, cancel before 2:00PM on the day before your booking date and get a full refund, minus the service fee.
          </p>
        </div>
      </div>
    </div>
  );
}

export default VendorShowRulesPolicy;