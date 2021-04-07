import React, { Component } from "react";
import { fetchArticleById, fetchCommentsByArticleId } from "../api";

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

  render() {
    console.log(this.state);
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
              console.log(comment);
              return (
                <section key={"comment.comment_id"}>
                  <h1>{comment.author}</h1>
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
