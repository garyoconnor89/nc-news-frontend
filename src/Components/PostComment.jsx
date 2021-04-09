import React, { Component } from "react";
import { postComment } from "../api";
import ErrorDisplayer from "../Components/ErrorDisplayer";

class PostComment extends Component {
  state = {
    username: "jessjelly",
    body: "",
    err: null,
    isLoading: true,
  };

  handleChange = (event) => {
    const { value } = event.target;
    this.setState({ body: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { article_id } = this.props;
    const { username, body } = this.state;
    postComment(article_id, username, body)
      .then((comment) => {
        this.setState({ body: "" });
        this.props.addPostedComment(comment);
      })
      .catch((err) => {
        this.setState({ err, isLoading: false });
      });
  };

  render() {
    const { err } = this.state;

    if (err) {
      const { response } = err;
      return <ErrorDisplayer status={response.status} msg={response.msg} />;
    }
    return (
      <form className="post-comment-form" onSubmit={this.handleSubmit}>
        <label>
          Comment:
          <br />
          <input
            className="post-comment-input"
            value={this.state.body}
            onChange={this.handleChange}
            type="text"
            placeholder="Enter comment here. Be kind."
          ></input>
          <br />
          <input
            className="post-comment-submit"
            type="submit"
            value="Post Comment!"
          />
        </label>
      </form>
    );
  }
}

export default PostComment;
