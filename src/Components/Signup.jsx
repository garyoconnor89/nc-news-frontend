import React, { Component } from "react";

class Signup extends Component {
  render() {
    return (
      <main>
        <br />
        <br />
        <br />
        <br />
        <h1>Sign Up</h1>
        <form>
          <label htmlFor="signup-first-name">First name: </label>
          <input type="text" id="signup-first-name" name="signup-first-name" />
          <br />
          <label htmlFor="signup-last-name">Last name: </label>
          <input type="text" id="signup-last-name" name="signup-last-name" />
          <br />
          <label htmlFor="signup-username">Username: </label>
          <input type="text" id="signup-username" name="signup-username" />
          <br />
          <label htmlFor="signup-email">Email: </label>
          <input type="email" id="signup-email" name="signup-email" />
          <label htmlFor="signup-password">Password: </label>
          <br />
          <input type="password" id="signup-password" name="signup-password" />
          <br />
          <label htmlFor="signup-retype-password">Retype Password: </label>
          <input
            type="retype-password"
            id="signup-retype-password"
            name="signup-retype-password"
          />
          <button>Sign Up!</button>
        </form>
      </main>
    );
  }
}

export default Signup;
