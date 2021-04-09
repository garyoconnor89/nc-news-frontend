import React, { Component } from "react";
import { fetchArticlesByAuthor, fetchUser } from "../api";
import { Link } from "@reach/router";

class User extends Component {
  state = {
    user: {},
    articles: [],
    isLoading: true,
  };

  componentDidMount = () => {
    const { username } = this.props;
    Promise.all([fetchUser(username), fetchArticlesByAuthor(username)]).then(
      ([user, articles]) => {
        this.setState({ user, articles, isLoading: false });
      }
    );
  };

  render() {
    console.log(this.state.user);
    const { user, articles, isLoading } = this.state;
    const { name, avatar_url, username } = this.state.user;
    console.log(this.state.user, "NAME");
    return (
      <main>
        <br />
        <br />
        <br />
        <br />
        <br />
        {isLoading ? (
          <h1>Is Loading</h1>
        ) : (
          <section>
            <h1 className="user-title">User</h1>
            <section className="user-container">
              <h3 className="user-name">{name}</h3>
              <img
                className="user-avatar"
                src={avatar_url}
                alt={`${username}'s avatar`}
              />
              <h3 className="user-username">{username}</h3>
            </section>
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
          </section>
        )}
      </main>
    );
  }
}

export default User;
