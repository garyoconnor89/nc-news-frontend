import React, { Component } from "react";
import { fetchArticleById, fetchCommentsByArticleId } from "../api";
import PostComment from "../Components/PostComment";

class Article extends Component {
  state = {
    article: {},
    isLoading: true,
  };

  componentDidMount = () => {
    const { article_id } = this.props;

    fetchArticleById(article_id).then((article) => {
      fetchCommentsByArticleId(article_id, article).then((article) => {
        this.setState({ article, isLoading: false });
      });
    });
  };

  componentDidUpdate = (prevProps, prevState) => {
    console.log(this.state.article.comment_count);
    console.log(prevState.article.comment_count);
    const { article_id } = this.props;

    if (this.state.article.comment_count !== prevState.article.comment_count) {
      fetchArticleById(article_id).then((article) => {
        fetchCommentsByArticleId(article_id, article).then((article) => {
          this.setState({ article, isLoading: false });
        });
      });
    }

    // if (this.state.article.comment_count > prevState.article.comment_count) {
    //   console.log("IN");
    //   fetchArticleById(article_id).then((article) => {
    //     fetchCommentsByArticleId(article_id, article).then((article) => {
    //       this.setState({ article, isLoading: false });
    //     });
    //   });
    // }
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
    } = this.state.article;
    return (
      <main>
        {this.state.isLoading ? (
          <h1>Is Loading</h1>
        ) : (
          <article>
            <h3>{title}</h3>
            <h3>{author}</h3>
            <h3>{topic}</h3>
            <p>{body}</p>
            <h3>{comment_count}</h3>
            <h3>{votes}</h3>
            <h3>{created_at}</h3>
            {comments.map((comment) => {
              const { author, body, comment_id, created_at, votes } = comment;
              return (
                <section key={comment_id}>
                  <h3>{author}</h3>
                  <p>{body}</p>
                  <h3>{votes}</h3>
                  <h3>{created_at}</h3>
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
