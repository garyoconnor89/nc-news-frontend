import React, { Component } from "react";
import { postComment } from "../api";

class PostComment extends Component {
  state = {
    username: "jessjelly",
    body: "",
  };

  handleChange = (event) => {
    const { value } = event.target;
    this.setState({ body: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { article_id } = this.props;
    const { username, body } = this.state;
    postComment(article_id, username, body).then((res) => {
      this.setState({ username: "jessjelly", body: "" });
    });
  };

  render() {
    console.log(this.state.body);
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Comment:
          <input
            onChange={this.handleChange}
            type="text"
            placeholder="Enter comment here. Be kind."
          ></input>
          <input className="button" type="submit" value="Post Comment!" />
        </label>
      </form>
    );
  }
}

export default PostComment;
