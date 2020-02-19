import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { handleAddTweet } from "../actions/tweets";

class NewTweet extends Component {
  state = {
    text: "",
    toHome: false
  };

  handleChange = e => {
    const text = e.target.value;

    this.setState(() => ({
      text
    }));
  };

  handleSubmit = e => {
    e.preventDefault();

    const { text } = this.state;
    const { dispatch, id } = this.props;

    dispatch(handleAddTweet(text, id));

    this.setState(() => ({
      text: "",
      toHome: id ? false : true
    }));
  };

  render() {
    const { text, toHome } = this.state;

    if (toHome === true) {
      return <Redirect to="/" />;
    }

    const tweetLeft = 280 - text.length;

    return (
      <div className="section">
        <h3 className="title is-4 has-text-centered">Compose new Tweet</h3>
        <form className="new-tweet" onSubmit={this.handleSubmit}>
          <textarea
            placeholder="What's happening?"
            value={text}
            onChange={this.handleChange}
            className="textarea"
            maxLength={280}
          />
          {tweetLeft <= 100 && <div className="tweet-length">{tweetLeft}</div>}
          <button
            className="button is-info is-twitter"
            type="submit"
            disabled={text === ""}
          >
            Tweet
          </button>
        </form>
      </div>
    );
  }
}

export default connect()(NewTweet);
