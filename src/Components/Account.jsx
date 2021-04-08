import React, { Component } from "react";

class Account extends Component {
  state = {
    user: {
      username: "jessjelly",
      avatar_url:
        "https://vignette.wikia.nocookie.net/mrmen/images/4/4f/MR_JELLY_4A.jpg/revision/latest?cb=20180104121141",
      name: "Jess Jelly",
    },
  };

  render() {
    const { username, avatar_url, name } = this.state.user;
    return (
      <main className="account">
        <br />
        <br />
        <br />
        <br />
        <h1 className="account-title">Account</h1>
        <section className="account-container">
          <h3 className="account-name">{name}</h3>
          <img
            className="account-avatar"
            src={avatar_url}
            alt={`${username}'s avatar`}
          />
          <h3 className="account-username">{username}</h3>
        </section>
      </main>
    );
  }
}

export default Account;
