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
    if (err) {
      const { response } = err;
      return <ErrorDisplayer status={response.status} msg={response.msg} />;
    }
    return (
      <div>
        <button
          onClick={() =>
            this.incrementVotes(this.props.section, this.props.id, -1)
          }
        >
          -
        </button>
        <h4>Votes: {this.props.votes + this.state.voteIncrements}</h4>
        <button
          onClick={() =>
            this.incrementVotes(this.props.section, this.props.id, 1)
          }
        >
          +
        </button>
      </div>
    );
  }
}

export default Voter;
