import React, { Component } from 'react';
import './LoginPage.css';
import CustomInput from '../../Components/CustomInput/CustomInput';
import Button from '../../Components/Button/Button';

export default class LoginPage extends Component {
  state = {
    email: '',
    password: '',
  };

  handleChange = (e) => {
    this.setState({ [e.currentTarget.id]: e.currentTarget.value });
  };

  render() {
    return (
      <div className="login-page">
        <form className="form">
          <CustomInput
            labelText="Email"
            id="email"
            formControlProps={{
              fullWidth: true,
            }}
            handleChange={this.handleChange}
            type="text"
          />
          <CustomInput
            labelText="Password"
            id="password"
            formControlProps={{
              fullWidth: true,
            }}
            handleChange={this.handleChange}
            type="password"
          />

          <Button type="button" color="twitter" className="form__custom-button">
            Log in
          </Button>
        </form>
      </div>
    );
  }
}
