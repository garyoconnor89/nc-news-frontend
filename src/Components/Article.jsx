import React, { Component } from "react";
import {
  fetchArticleById,
  fetchCommentsByArticleId,
  deleteComment,
} from "../api";
import PostComment from "../Components/PostComment";
import Voter from "../Components/Voter";
import ErrorDisplayer from "../Components/ErrorDisplayer";
import { Link } from "@reach/router";

class Article extends Component {
  state = {
    article: {},
    comments: [],
    isLoading: true,
    err: null,
  };

  componentDidMount = () => {
    const { article_id } = this.props;
    Promise.all([
      fetchArticleById(article_id),
      fetchCommentsByArticleId(article_id),
    ])
      .then(([article, comments]) => {
        this.setState({ article, comments, isLoading: false });
      })
      .catch((err) => {
        this.setState({ err, isLoading: false });
      });
  };

  deleteCommentClick = (event) => {
    const { value } = event.target;
    const { article_id } = this.props;
    deleteComment(value)
      .then(() => {
        fetchCommentsByArticleId(article_id).then((comments) => {
          this.setState({ comments, isLoading: false });
        });
      })
      .catch((err) => {
        this.setState({ err, isLoading: false });
      });
  };

  addPostedComment = (newComment) => {
    this.setState((currState) => {
      return {
        comments: [newComment, ...currState.comments],
      };
    });
  };

  render() {
    const {
      title,
      author,
      topic,
      body,
      comment_count,
      created_at,
      votes,
      article_id,
    } = this.state.article;

    const { comments } = this.state;
    const { err } = this.state;

    if (err) {
      const { response } = err;
      return (
        <ErrorDisplayer status={response.status} msg={response.data.msg} />
      );
    }
    return (
      <main>
        <br />
        <br />
        <br />
        <br />
        <br />

        {this.state.isLoading ? (
          <h1>Is Loading</h1>
        ) : (
          <article>
            <section className="single-article">
              <h3 className="single-article-title">{title}</h3>
              <h3 className="single-article-topic">{`Topic: ${topic}`}</h3>
              <Link to={`/users/${author}`}>
                <h4 className="homepage-article-author">{`Author: ${author}`}</h4>
              </Link>
              <p className="single-article-body">{body}</p>
              <h3 className="single-article-comments">{`Comments: ${comment_count}`}</h3>
              <h3 className="single-article-posted">{created_at}</h3>
              <Voter section="articles" id={article_id} votes={votes} />
            </section>
            <PostComment
              addPostedComment={this.addPostedComment}
              article_id={this.props.article_id}
              path={`/articles/${this.state.article.article_id}`}
            />
            {comments.map((comment) => {
              const { author, body, comment_id, created_at, votes } = comment;
              return (
                <section className="article-comment" key={comment_id}>
                  <Link to={`/users/${author}`}>
                    <h4 className="homepage-article-author">{`Author: ${author}`}</h4>
                  </Link>
                  <p className="article-comment-body">{body}</p>
                  <h3 className="article-comment-posted">{created_at}</h3>
                  <Voter section="comments" id={comment_id} votes={votes} />
                  {author === "jessjelly" ? (
                    <button
                      className="comment-delete"
                      onClick={this.deleteCommentClick}
                      value={comment_id}
                    >
                      Delete Comment
                    </button>
                  ) : (
                    <div></div>
                  )}
                </section>
              );
            })}
          </article>
        )}
      </main>
    );
  }
}

export default Article;
