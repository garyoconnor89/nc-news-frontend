import React, { Component } from "react";
import {
  fetchArticleById,
  fetchCommentsByArticleId,
  deleteComment,
} from "../api";
import PostComment from "../Components/PostComment";
import Voter from "../Components/Voter";
import ErrorDisplayer from "../Components/ErrorDisplayer";

class Article extends Component {
  state = {
    article: {},
    isLoading: true,
    err: null,
  };

  componentDidMount = () => {
    const { article_id } = this.props;

    fetchArticleById(article_id).then((article) => {
      fetchCommentsByArticleId(article_id, article)
        .then((article) => {
          this.setState({ article, isLoading: false });
        })
        .catch((err) => {
          this.setState({ err, isLoading: false });
        });
    });
  };

  // componentDidUpdate = (prevProps, prevState) => {

  //   const { article_id } = this.props;

  //   if (this.state.article.comment_count !== prevState.article.comment_count) {
  //     fetchArticleById(article_id).then((article) => {
  //       fetchCommentsByArticleId(article_id, article).then((article) => {
  //         this.setState({ article, isLoading: false });
  //       });
  //     });
  //   }

  //   // if (this.state.article.comment_count > prevState.article.comment_count) {

  //   //   fetchArticleById(article_id).then((article) => {
  //   //     fetchCommentsByArticleId(article_id, article).then((article) => {
  //   //       this.setState({ article, isLoading: false });
  //   //     });
  //   //   });
  //   // }
  // };

  deleteCommentClick = (event) => {
    const { value } = event.target;
    deleteComment(value)
      .then(() => {
        const { article_id } = this.props;

        fetchArticleById(article_id).then((article) => {
          fetchCommentsByArticleId(article_id, article).then((article) => {
            this.setState({ article, isLoading: false });
          });
        });
      })
      .catch((err) => {
        this.setState({ err, isLoading: false });
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
      comments,
      article_id,
    } = this.state.article;

    const { err } = this.state;

    if (err) {
      const { response } = err;
      return <ErrorDisplayer status={response.status} msg={response.msg} />;
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
          <article className="single-article">
            <h3 className="single-article-title">{title}</h3>
            <h3 className="single-article-topic">{`Topic: ${topic}`}</h3>
            <h3 className="single-article-author">{`Posted by: ${author}`}</h3>
            <p className="single-article-body">{body}</p>
            <h3 className="single-article-comments">{`Comments: ${comment_count}`}</h3>
            <h3 className="single-article-posted">{created_at}</h3>
            <Voter section="articles" id={article_id} votes={votes} />
            {comments.map((comment) => {
              const { author, body, comment_id, created_at, votes } = comment;
              return (
                <section className="article-comment" key={comment_id}>
                  <h3 className="article-comment-author">{author}</h3>
                  <p className="article-comment-body">{body}</p>
                  <h3 className="article-comment-posted">{created_at}</h3>
                  <Voter section="comments" id={comment_id} votes={votes} />
                  {author === "jessjelly" ? (
                    <button
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
            <PostComment
              article_id={this.props.article_id}
              path={`/articles/${this.state.article.article_id}`}
            />
          </article>
        )}
      </main>
    );
  }
}

export default Article;
