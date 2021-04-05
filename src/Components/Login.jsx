import React, { Component } from "react";

class Login extends Component {
  render() {
    return (
      <main>
        <br />
        <br />
        <br />
        <br />

        <h1>Login</h1>
        <form>
          <label htmlFor="login-username">Username: </label>
          <input type="text" id="login-username" name="login-username" />
          <br />
          <label htmlFor="login-password">Password: </label>
          <input type="password" id="login-password" name="login-password" />
          <br />
          <button type="submit">Login!</button>
        </form>
      </main>
    );
  }
}

export default Login;
