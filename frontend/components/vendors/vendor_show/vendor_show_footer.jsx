import React from "react";

class VendorShowFooter extends React.Component {
  render() {
    return (
      <div className="vendorshow__footer-container">
        <div className="vendorshow__footer-content">
          <div className="vendorshow__footer-logo"></div>
          <p className="vendorshow__footer-text">
            &copy; 2019 Aerbnb, Inc. Built with <span>&hearts;</span> by <a className="vendorshow__footer-link" target="_blank" href="https://www.linkedin.com/in/kenneth-choi-42502a35/">Kenny Choi</a>
          </p>
        </div>
      </div>
    );
  }
}

export default VendorShowFooter;
