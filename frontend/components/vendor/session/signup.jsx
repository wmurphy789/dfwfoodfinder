import React from 'react';
import { withRouter} from 'react-router-dom';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      confirm_password: '',
      description: '',
      title: '',
      vendor_type: 'food_truck',
      photo: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleVendorClick = this.handleVendorClick.bind(this);
  }

  componentDidMount() {
    this.props.clearErrors();
  }
  
  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state).then();
      // .catch();
  }

  handleInput(type) {
    return e => {
      this.setState({
        [type]: (type == "photo" ? e.target.files[0] : e.target.value)
      });
    }
  }

  handleVendorClick(e) {
    e.preventDefault();
    this.props.history.push(`/vendor/session`);
  }

  render() {

    // Errors
    let errors;
    if (this.props.errors) {
      errors = (
        <div className="modal__errors-container">
          {this.props.errors.map((error, idx) => {
              return (
                <p 
                  key={idx}
                  className="modal__errors-single">
                  {error}
                </p>
              )
            })
          }
        </div>
      );
    }

    return (
      <div className="modal__form-container">
        <h2 className="modal__header">Signup</h2>

        <br/>
        {errors}
        <br/>
        <form 
          onSubmit={this.handleSubmit} 
          className="ui form modal__form">

          <input 
            type="text" 
            value={this.state.email} 
            placeholder="Email"
            onChange={this.handleInput('email')} 
            className="modal__input-text input__text modal__input-text--username"/>
          <br/>
          <input 
            type="password" 
            value={this.state.password}
            placeholder="Password"
            onChange={this.handleInput('password')} 
            className="modal__input-text input__text modal__input-text--password"/>
          <br/>
          <input 
            type="password" 
            value={this.state.confirm_password}
            placeholder="Confirm Password"
            onChange={this.handleInput('confirm_password')} 
            className="modal__input-text input__text modal__input-text--password"/>
          <br/>
          <input 
            type="text" 
            value={this.state.title} 
            placeholder="Company Name"
            onChange={this.handleInput('title')} 
            className="modal__input-text input__text modal__input-text--username"/>
          <br/>
          <input 
            type="text" 
            value={this.state.description} 
            placeholder="Description"
            onChange={this.handleInput('description')} 
            className="modal__input-text input__text modal__input-text--username"/>
          <br/>
          <p>Select your Vendor Type:</p>
          <input type="radio" name="vendor_type" onChange={this.handleInput('vendor_type')}  value="food_truck" checked={true}/>
          <label htmlFor="foodtruck">Foodtruck</label><br/>
          <input type="radio" name="vendor_type" onChange={this.handleInput('vendor_type')}  value="homemade"/>
          <label htmlFor="homemade">Homemade Meals</label>
          <br/>
          <input 
            type="file" 
            placeholder="Company Logo"
            onChange={this.handleInput('photo')} 
            className="modal__input-text input__text modal__input-text--username"/>
          <br/>
          <br /><br />
          <input 
            type="submit" 
            value="Signup" 
            id="modal__btn-submit-id"
            className="ui button basic modal__btn--submit modal__btn" />
        </form>
        <div className="modal__other-form-container">
          <p className="modal__account-msg">
            Already have an account?
          </p>
          <a
            href="#"
            onClick={this.handleVendorClick} 
            className="modal__btn-other-form">
            Login
          </a>
        </div>
      </div>
    );
  }
}

export default withRouter(Signup);