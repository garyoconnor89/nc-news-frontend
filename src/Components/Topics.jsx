import React, { Component } from "react";
import { fetchTopics } from "../api";
import ErrorDisplayer from "../Components/ErrorDisplayer";

class Topics extends Component {
  state = {
    topics: [],
    isLoading: true,
    err: null,
  };

  componentDidMount() {
    fetchTopics()
      .then((topics) => {
        this.setState({ topics, isLoading: false });
      })
      .catch((err) => {
        this.setState({ err, isLoading: false });
      });
  }

  render() {
    const { topics, err } = this.state;

    if (err) {
      const { response } = err;
      return <ErrorDisplayer status={response.status} msg={response.msg} />;
    }

    return (
      <section>
        <br />
        <br />
        <br />
        <br />
        <main className="topics-container">
          <h1 className="topics-title">Topics</h1>

          {this.state.isLoading ? (
            <h1>Is Loading</h1>
          ) : (
            topics.map((topic) => {
              const { slug, description } = topic;
              return (
                <section key={slug} className="topic">
                  <h1 className="topic-slug">{slug}</h1>
                  <h3 className="topic-desc">{description}</h3>
                </section>
              );
            })
          )}
        </main>
      </section>
    );
  }
}

export default Topics;
