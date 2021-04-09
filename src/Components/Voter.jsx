import React, { Component } from "react";
import { updateVotes } from "../api";
import ErrorDisplayer from "../Components/ErrorDisplayer";

class Voter extends Component {
  state = {
    voteIncrements: 0,
    err: null,
    isLoading: true,
  };

  incrementVotes = (section, id, increment) => {
    this.setState((currState) => {
      return { voteIncrements: currState.voteIncrements + increment };
    });
    updateVotes(section, id, increment)
      .catch((err) => {
        this.setState((currState) => {
          return { voteIncrements: currState.voteIncrements - increment };
        });
      })
      .catch((err) => {
        this.setState({ err, isLoading: false });
      });
  };

  render() {
    const { err } = this.state;
    const { section, id, votes } = this.props;
    const { voteIncrements } = this.state;
    if (err) {
      const { response } = err;
      return <ErrorDisplayer status={response.status} msg={response.msg} />;
    }
    return (
      <section className="vote-display">
        <button
          className="negative-button"
          onClick={() => this.incrementVotes(section, id, -1)}
        >
          -
        </button>
        <h4>Votes: {votes + voteIncrements}</h4>
        <button
          className="positive-button"
          onClick={() => this.incrementVotes(section, id, 1)}
        >
          +
        </button>
      </section>
    );
  }
}

export default Voter;
