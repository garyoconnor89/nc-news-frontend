import React, { Component } from "react";
import { fetchTopics } from "../api";

class Topics extends Component {
  state = {
    topics: [],
    isLoading: true,
  };

  componentDidMount() {
    fetchTopics().then((topics) => {
      this.setState({ topics, isLoading: false });
    });
  }

  render() {
    const { topics } = this.state;
    console.log(topics);

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
              return (
                <section className="topic">
                  <h1 className="topic-slug">{topic.slug}</h1>
                  <h3 className="topic-desc">{topic.description}</h3>
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
