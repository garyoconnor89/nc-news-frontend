import React, { Component } from "react";
import { fetchArticles } from "../api";
import { Link } from "@reach/router";
import Voter from "../Components/Voter";
import ErrorDisplayer from "./ErrorDisplayer";

class Articles extends Component {
  state = {
    articles: [],
    isLoading: true,
    topic: "",
    sort_by: "created_at",
    order: "desc",
    err: null,
  };

  componentDidMount = () => {
    const { topic, sort_by, order } = this.state;
    fetchArticles(topic, sort_by, order)
      .then((articles) => {
        this.setState({ articles, isLoading: false });
      })
      .catch((err) => {
        this.setState({
          err,
        });
      });
  };

  componentDidUpdate = (prevProps, prevState) => {
    const { topic, sort_by, order } = this.state;

    const changeInState =
      topic !== prevState.topic ||
      sort_by !== prevState.sort_by ||
      order !== prevState.order;

    if (changeInState) {
      const { topic, sort_by, order } = this.state;
      fetchArticles(topic, sort_by, order)
        .then((articles) => {
          this.setState({ articles, isLoading: false });
        })
        .catch((err) => {
          this.setState({
            err,
          });
        });
    }
  };

  handleChange = (event) => {
    const { name } = event.target;
    const { value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { articles, isLoading, err } = this.state;

    if (err) {
      const { response } = err;
      return <ErrorDisplayer status={response.status} msg={response.msg} />;
    }
    return (
      <section>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <main className="homepage-articles">
          <h1 className="articles-title">Articles</h1>
          <label htmlFor="topic">Filter by topic: </label>
          <select onChange={this.handleChange} name="topic" id="topic">
            <option>All</option>
            <option value="coding">Coding</option>
            <option value="cooking">Cooking</option>
            <option value="football">Football</option>
          </select>
          <br />
          <label htmlFor="sort_by">Sort by category: </label>
          <select onChange={this.handleChange} name="sort_by" id="sort_by">
            <option value="created_at">Date Created</option>
            <option value="comment_count">Comment Count</option>
            <option value="votes">Votes</option>
          </select>
          <br />
          <label htmlFor="order">Order by: </label>
          <select onChange={this.handleChange} name="order" id="order">
            <option value="desc">Descending</option>
            <option value="asc">Ascending</option>
          </select>
          {isLoading ? (
            <h1>Is Loading</h1>
          ) : (
            articles.map((article) => {
              return (
                <article key={article.article_id} className="homepage-article">
                  <Link to={`/articles/${article.article_id}`}>
                    <h3 className="homepage-article-title">{article.title}</h3>
                  </Link>
                  <h4 className="homepage-article-topic">{article.topic}</h4>
                  <h4 className="homepage-article-author">{article.author}</h4>

                  <h5 className="homepage-article-comments">
                    {article.comment_count}
                  </h5>
                  <h5 className="homepage-article-posted">
                    {article.created_at}
                  </h5>
                  <Voter
                    section="articles"
                    id={article.article_id}
                    votes={article.votes}
                  />
                </article>
              );
            })
          )}
        </main>
      </section>
    );
  }
}

export default Articles;
