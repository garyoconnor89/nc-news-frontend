import React, { Component } from "react";

class Login extends Component {
  render() {
    return (
      <main>
        <br />
        <br />
        <br />
        <br />
        <br />

        <h1>Login</h1>
        <form className="login-form">
          <label htmlFor="login-username">Username: </label>
          <br />
          <input
            className="login-form-input"
            type="text"
            id="login-username"
            name="login-username"
          />
          <br />
          <label htmlFor="login-password">Password: </label>
          <br />
          <input
            className="login-form-input"
            type="password"
            id="login-password"
            name="login-password"
          />
          <br />
          <button className="login-form-submit" type="submit">
            Login!
          </button>
        </form>
      </main>
    );
  }
}

export default Login;
