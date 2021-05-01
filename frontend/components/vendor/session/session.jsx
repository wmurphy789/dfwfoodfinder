import React from 'react';
import { withRouter} from 'react-router-dom';

class Session extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.loginDemoUser = this.loginDemoUser.bind(this);
  }

  componentDidMount() {
    this.props.clearErrors();
  }
  
  handleSubmit(e) {
    e.preventDefault();
    // TODO redirect to admin portal
    this.props.processForm(this.state).then();
      // .catch();
  }

  handleInput(type) {
    return e => {
      this.setState({
        [type]: e.target.value
      });
    }
  }

  loginDemoUser(e) {
    e.preventDefault();

    // create default empty state
    this.setState({
      username: '',
      password: ''
    });

    let pw = 'password';
    let un = 'test@foodtruck.com';

    const loginCallback = () => {
     setTimeout(() => {
        if (un.length > 0) {
          this.setState({
            username: this.state.username.concat(un[0]),
            password: this.state.password
          });
          un = un.slice(1);
          loginCallback();
        } else {
          pwCallback();
        }
      }, 75);
    }

    const pwCallback = () => {
     setTimeout(() => {
        if (pw.length > 0) {
          this.setState({
            username: this.state.username,
            password: this.state.password.concat(pw[0])
          });
          pw = pw.slice(1);
          pwCallback()
        } else {
          setTimeout(() => {
            this.props.processDemoForm(this.state).then();
          }, 500);
        }
      }, 75);
    }
    // closemodal + clear session errors
    this.props.clearErrors();
    loginCallback();
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

    // Sign up/Log in message
    let existingAccountMessage;
    if (this.props.formType === 'Log in') {
      existingAccountMessage = "Don't have an account?";
    } else {
      existingAccountMessage = "Already have an account?";
    }

    return (
      <div className="modal__form-container">
        <h2 className="modal__header">{this.props.formType}</h2>
        <a 
          href="#" 
          onClick={this.loginDemoUser} 
          id="modal__btn-submit-id"
          className="modal__btn--submit modal__btn--submit-demo modal__btn">Log in with demo account</a>
        <div className="modal__divider-container">
          <p className="modal__divider-content">or</p>
        </div>

        <br/>
        {errors}
        <br/>
        <form 
          onSubmit={this.handleSubmit} 
          className="ui form modal__form">

          <input 
            type="text" 
            value={this.state.username} 
            placeholder="Username"
            onChange={this.handleInput('username')} 
            className="modal__input-text input__text modal__input-text--username"/>
          <br/>
          <input 
            type="password" 
            value={this.state.password}
            placeholder="Password"
            onChange={this.handleInput('password')} 
            className="modal__input-text input__text modal__input-text--password"/>
          <br /><br />
          <input 
            type="submit" 
            value={this.props.formType} 
            id="modal__btn-submit-id"
            className="ui button basic modal__btn--submit modal__btn" />
        </form>
        <div className="modal__other-form-container">
          <p className="modal__account-msg">
            {existingAccountMessage}
          </p>
          {this.props.otherForm}
        </div>
        <div className="modal__other-form-container">
          <div className="modal__divider-container">
            <p className="modal__divider-content">or</p>
          </div>
        </div>
        <p className="vendor_link">
          <a
            href="#"
            onClick={this.handleVendorClick} 
            className="modal__btn-other-form">
            Not a Vendor?
          </a>
        </p>
      </div>
    );
  }
}

export default withRouter(Session);