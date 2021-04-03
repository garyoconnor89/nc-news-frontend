import React from "react";
import { Link } from "@reach/router";

function Nav(props) {
  return (
    <nav className="nav-container">
      <Link to="/">
        <h3 className="nav-link">
          <img
            src="https://cdn4.iconfinder.com/data/icons/pictype-free-vector-icons/16/home-512.png"
            alt="Home icon"
            className="nav-logo"
          />
          Home
        </h3>
      </Link>
      <Link to="/topics">
        <h3 className="nav-link">
          <img
            src="https://cdn3.iconfinder.com/data/icons/communication/512/topics-512.png"
            alt="Topics icon"
            className="nav-logo"
          />
          Topics
        </h3>
      </Link>
      <Link to="/articles">
        <h3 className="nav-link">
          <img
            src="http://cdn.onlinewebfonts.com/svg/img_464026.png"
            alt="Articles icon"
            className="nav-logo"
          />
          Articles
        </h3>
      </Link>
      <h1>NC-News</h1>
      <Link to="/login">
        <h3 className="nav-link">
          <img
            src="https://image.flaticon.com/icons/png/512/61/61457.png"
            alt="Articles icon"
            className="nav-logo"
          />
          Login
        </h3>
      </Link>
      <Link to="/signup">
        <h3 className="nav-link">
          <img
            src="https://static.thenounproject.com/png/6478-200.png"
            alt="Articles icon"
            className="nav-logo"
          />
          Sign Up
        </h3>
      </Link>
      <Link to="/account">
        <h3 className="nav-link">
          <img
            src="https://www.freeiconspng.com/thumbs/account-icon/account-icon-8.png"
            alt="Articles icon"
            className="nav-logo"
          />
          Account
        </h3>
      </Link>
    </nav>
  );
}

export default Nav;
