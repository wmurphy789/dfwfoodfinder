import React from 'react';
import SearchBarLandingContainer from '../search/search_bar_landing_container';

const Landing = props => {
  return (
    <div className="header__container-outer">
      <div className="header__search-wrapper">
        <h1 className="header__search-header">
          FoodFinder
        </h1>
        <div className="header__search-form-wrapper">
          <SearchBarLandingContainer />
        </div>
      </div>
      <div className="header__desc-container">
        <p className="header__desc-content">
          Find the best food near you!
        </p>
      </div>
    </div>
  );
}


export default Landing;

