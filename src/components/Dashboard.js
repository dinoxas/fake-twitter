import React, { Component } from "react";
import { connect } from "react-redux";
import { FaTwitter } from "react-icons/fa";
import Tweet from "./Tweet";

class Dashboard extends Component {
  render() {
    return (
      <ul className="tweets">
        {this.props.tweetIds.map(id => (
          <li key={id}>
            <Tweet id={id} />
          </li>
        ))}
      </ul>
    );
  }
}

function mapStateToProps({ tweets }) {
  return {
    tweetIds: Object.keys(tweets).sort(
      (a, b) => tweets[b].timestamp - tweets[a].timestamp
    )
  };
}

export default connect(mapStateToProps)(Dashboard);
