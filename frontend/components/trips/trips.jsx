import React from 'react';
import Moment from "react-moment";
import moment from "moment";

import Header from '../navbar/header';
import VendorShowFooter from '../vendors/vendor_show/vendor_show_footer';
import PulseLoader from '../loaders/pulse_loader';
import VendorIndexItem from '../vendors/VendorIndexItem';

class Trips extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true
    };

    setTimeout(() => {
      this.setState({ loading: false });
    }, 1500);

    this.deleteBooking = this.deleteBooking.bind(this);
  }

  componentDidMount() {
    this.props.fetchAllBookings();
  }

  deleteBooking(e) {
    e.preventDefault();
    let vendorId = e.target.getAttribute('data-vendor-id');
    this.props.deleteBooking(vendorId)
      .then(() => this.props.fetchAllBookings());
  }

  render() {
    let { currentUser, bookings } = this.props;
    let tripsHeader;
    let trips;

    if (this.state.loading) {
      return (
        <div className="loader__container">
          <PulseLoader />
        </div>
      );
    }

    // Set conditional trip header
    if (bookings.length > 0) {
      tripsHeader = (
        <div className="trips__header-container">
          <h2 className="trips__header">Upcoming plans</h2>
          <p className="trips__header--text">
            You have upcoming trips. Manage and view your bookings here.
          </p>
        </div>
      );


      trips = bookings.map((booking, idx) => (
        <div className="trips__item" key={idx}>
          <div className="trips__item-content">
            <div className="trips__item-main">
              <h3 className="checkout__nights-header trips__item-header">
                <Moment format="LL">{booking.start_date}</Moment> -
                <Moment format="LL">{booking.end_date}</Moment>
              </h3>
              <h4 className="trips__item-subheader">
                {booking.vendor.location}
              </h4>
              <div className="trips__item-details">
                <div className="trips__item-details-recap">
                  <p className="checkout__sidebar-recap-text">
                    <span>
                      <Moment
                        duration={booking.start_date}
                        date={booking.end_date}
                      />
                    </span>
                    <span className="trips__item-bullet"> &#8226; </span>
                    <span>
                      {booking.vendor.vendor_type[0].toUpperCase()}
                      {booking.vendor.vendor_type.slice(1)}
                    </span>
                    <span className="trips__item-bullet"> &#8226; </span>
                    <span>
                      {booking.vendor.num_guests === 1
                        ? "1 guest"
                        : `${booking.vendor.num_guests} guests`}
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="trips__item-cta">
              <a 
                href="#" 
                className="trips__item-btn-cancel" 
                onClick={this.deleteBooking}
                data-vendor-id={booking.id}
                >
                  
                Cancel booking
              </a>
            </div>
          </div>

          <VendorIndexItem vendor={booking.vendor} />
        </div>
      ));
    } else {
      tripsHeader = (
        <div className="trips__header-container">
          <h2 className="trips__header">Upcoming plans</h2>
          <p className="trips__header--text">
            You have no upcoming trips. Start exploring ideas for your next
            trip.
          </p>
        </div>
      );
    }

    return (
      <div className="trips__outer-container">
        <Header type={"header__vendor"} currentUser={currentUser} />

        <div className="trips__inner-container">
          {tripsHeader}
          <div className="trips__bg-container" />
          {trips}
          <VendorShowFooter />
        </div>
      </div>
    );
  }
}

export default Trips;