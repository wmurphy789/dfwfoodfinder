import React from 'react';
import { withRouter } from 'react-router-dom';
import PulseLoaderAnim from '../../loaders/pulse_loader';
import Modal from '../../modal/modal';
import Header from '../../navbar/header';
import VendorShowInfoOverlayContainer from './vendor_show_info_overlay_container';
import VendorShowHero from './vendor_show_hero';
import VendorShowDescription from './vendor_show_description';
import VendorShowPhotoOverview from './vendor_show_photo_overview';
import VendorShowAmenities from './vendor_show_amenities';
import VendorShowLocation from './vendor_show_location';
import VendorShowReviewsContainer from './vendor_show_reviews_container';
import VendorShowMeetHost from './vendor_show_meet_host';
import VendorShowRulesPolicy from './vendor_show_rules_policy';
import VendorShowFooter from './vendor_show_footer';


class VendorShow extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: true
    }

    setTimeout(() => {
      this.setState({
        loading: false
      })
    }, 1500);
  }
  
  componentDidMount() {
    window.scrollTo(0, 0);
    let vendorId = this.props.match.params.vendorId;
    this.props.fetchVendor(vendorId)
      .then(action => this.props.fetchHost(action.vendor.host_id));
    this.props.fetchReviews(vendorId);
  }
  

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.match.params.vendorId !== this.props.match.params.vendorId) {
          let vendorId = this.props.match.params.vendorId;
    this.props.fetchVendor(vendorId)
      .then(action => this.props.fetchHost(action.vendor.host_id));
    this.props.fetchReviews(vendorId);
    }
  }
  
  
  render() {
    if (this.state.loading || !this.props.vendor || !this.props.reviews || !this.props.users) {
      return (
        <div className="loader__container">
          <PulseLoaderAnim />
        </div>
      );
    }

    let {
      id,
      title,
      description,
      num_guests,
      num_rooms,
      num_beds,
      num_baths,
      vendor_type,
      price,
      self_check_in,
      parking,
      kitchen,
      washer,
      dryer,
      dishwasher,
      wifi,
      tv,
      bathroom_essentials,
      bedroom_comforts,
      coffee_maker,
      hair_dryer,
      location,
      location_description,
      lat,
      long,
      host_id,
      average_rating,
      num_reviews,
      photoUrls,
    } = this.props.vendor;
    let { vendor, currentUser, users, reviews } = this.props;
    let host = users[vendor.host_id];

    return (
      <div className="vendorshow__container-main">
        <Modal />
        <Header type={"header__vendor header__vendor-show"} currentUser={currentUser} />        

        <VendorShowInfoOverlayContainer vendor={vendor}/>
        <VendorShowHero vendor={vendor}/>

        <div className="vendorshow__content-wrapper">
          <VendorShowDescription vendor={vendor} host={host}/>
          <VendorShowPhotoOverview vendor={vendor}/>
          <VendorShowAmenities vendor={vendor}/>
          <VendorShowLocation vendor={vendor}/>
          <VendorShowReviewsContainer vendor={vendor} reviews={reviews}/>
          <VendorShowMeetHost vendor={vendor} host={host}/>
          <VendorShowRulesPolicy />
          <VendorShowFooter />
        </div>
      </div>
    );
  }
}

export default withRouter(VendorShow);
