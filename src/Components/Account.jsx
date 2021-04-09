import React, { Component } from "react";
import { fetchArticlesByAuthor } from "../api";
import { Link } from "@reach/router";

class Account extends Component {
  state = {
    user: {
      username: "jessjelly",
      avatar_url:
        "https://vignette.wikia.nocookie.net/mrmen/images/4/4f/MR_JELLY_4A.jpg/revision/latest?cb=20180104121141",
      name: "Jess Jelly",
    },
    articles: [],
    isLoading: true,
  };

  componentDidMount = () => {
    const { username } = this.state.user;
    fetchArticlesByAuthor(username).then((articles) => {
      this.setState({ articles, isLoading: false });
    });
  };

  render() {
    const { username, avatar_url, name } = this.state.user;

    const { articles, isLoading } = this.state;
    return (
      <main className="account">
        <br />
        <br />
        <br />
        <br />
        <h1 className="user-title">Account</h1>
        <section className="user-container">
          <h3 className="user-name">{name}</h3>
          <img
            className="user-avatar"
            src={avatar_url}
            alt={`${username}'s avatar`}
          />
          <h3 className="user-username">{username}</h3>
        </section>
        {isLoading ? (
          <h1>Is Loading</h1>
        ) : (
          <section className="user-articles">
            <h2>{`${username}'s Articles`}</h2>
            {articles.map((article) => {
              return (
                <Link
                  key={article.article_id}
                  to={`/articles/${article.article_id}`}
                >
                  <h5 className="user-article-title">{article.title}</h5>
                </Link>
              );
            })}
          </section>
        )}
      </main>
    );
  }
}

export default Account;
