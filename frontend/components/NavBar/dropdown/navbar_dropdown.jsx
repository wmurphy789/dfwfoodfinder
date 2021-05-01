import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class NavbarDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
    this.handleTripClick = this.handleTripClick.bind(this);
  }

  handleLogout() {
    this.props.logOut();
    this.props.closeModal();
  }

  handleTripClick(e) {
    e.preventDefault();
    this.props.history.push(`/trips/${this.props.currentUserId}`);
    this.props.closeModal();
  }

  render() {
    return (
      <div className="navbar__dropdown-container">
        <ul className="navbar__dropdown-list">
          <li className="navbar__dropdown-listitem">
            <a
              href="#"
              className="navbar__dropdown-link"
              onClick={this.handleTripClick}
            >
              Trips
            </a>
          </li>
          <li className="navbar__dropdown-listitem">
            <a
              className="navbar__dropdown-link"
              onClick={this.handleLogout}
            >
              Log Out
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default withRouter(NavbarDropdown);