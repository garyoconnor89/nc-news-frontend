import React, { Component } from "react";
import { fetchTop5Articles } from "../api.js";
import { Link } from "@reach/router";
import Voter from "../Components/Voter";
import ErrorDisplayer from "../Components/ErrorDisplayer";

class Homepage extends Component {
  state = {
    articles: [],
    isLoading: true,
    err: null,
  };

  componentDidMount() {
    fetchTop5Articles()
      .then((articles) => {
        this.setState({ articles, isLoading: false });
      })
      .catch((err) => {
        this.setState({ err, isLoading: false });
      });
  }

  render() {
    const { articles, isLoading, err } = this.state;
    if (err) {
      const { response } = err;
      return <ErrorDisplayer status={response.status} msg={response.msg} />;
    }
    return (
      <main>
        <br />
        <br />
        <section className="homepage-section">
          <header className="homepage-header">
            <h1 className="homepage-title">NC-NEWS</h1>
            <h2 className="homepage-subtitle">Where News Happens</h2>{" "}
            <p className="homepage-desc">
              Welcome to NC-News. You're currently logged in as jessjelly to
              show you individual user functionality. One day, in the distant
              future, you may be able to signup as a user. We can but dream.
            </p>
          </header>
          {isLoading ? (
            <h1>Is Loading</h1>
          ) : (
            <article className="homepage-articles">
              {articles.map((article) => {
                const {
                  article_id,
                  title,
                  topic,
                  author,
                  comment_count,
                  created_at,
                  votes,
                } = article;
                return (
                  <article key={article_id} className="homepage-article">
                    <Link to={`/articles/${article_id}`}>
                      <h3 className="homepage-article-title">{title}</h3>
                    </Link>

                    <h4 className="homepage-article-topic">{`Topic: ${topic}`}</h4>
                    <Link to={`/users/${author}`}>
                      <h4 className="homepage-article-author">{`Author: ${author}`}</h4>
                    </Link>

                    <h4 className="homepage-article-comments">{`Comments: ${comment_count}`}</h4>
                    <h5 className="homepage-article-posted">{created_at}</h5>
                    <Voter section="articles" id={article_id} votes={votes} />
                  </article>
                );
              })}
            </article>
          )}
        </section>
      </main>
    );
  }
}

export default Homepage;
