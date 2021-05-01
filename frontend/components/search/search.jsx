import React from 'react';
import VendorIndexContainer from '../vendors/vendor_index_container';
import VendorMap from '../vendors/vendor_map';
import Header from '../navbar/header';

class Search extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }
  

  render() {
    let {
      vendors,
      fetchVendors,
      fetchVendor,
      updateFilter,
      currentUser,
      mapSearchCoords
    } = this.props;

    return (
      <div className="search__container-main">
        <Header type={"header__vendor"} currentUser={currentUser} />
        <VendorIndexContainer />
        <VendorMap
          vendors={vendors}
          updateFilter={updateFilter}
          mapSearchCoords={mapSearchCoords}
        />
      </div>
    );
  }
}

export default Search;