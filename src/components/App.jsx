import React, { Component } from "react";
// import PropTypes from "prop-types";

export class App extends Component {
    constructor() {
    super();

    this.state = {
        good: 0,
        neutral: 0,
        bad: 0,
    };
  }

  // static propTypes = {
  //   good: PropTypes.number.isRequired,
  //   neutral: PropTypes.number.isRequired,
  //   bad: PropTypes.number.isRequired,
  // };

  increment = (event) => {
    console.log("Increment button was clicked!", event); // працює
    // console.log("this.props: ", this.state); // працює
  }

  render() {
    return <section>
      <FeedBackAgregator />
      <Statistics feedback={this.state} />
    </section>;
  }
}

class FeedBackAgregator extends Component {
  render() {
    return <div>
            <h1>Please leave feedback</h1>
      
            <button type="button" aria-label="Good"
              onClick={() => this.increment}
            >
              Good</button>
            <button type="button" aria-label="Neutral">Neutral</button>
            <button type="button" aria-label="Bad">Bad</button>
          </div>
  }
}
class Statistics extends Component {
  render() {
    const { good, neutral, bad } = this.props.feedback

    return <div>
      <h2 hidden>Statistics</h2>
      <ul>
        <li>Good: <span>{good}</span></li>
        <li>Neutral: <span>{neutral}</span></li>
        <li>Bad: <span>{bad}</span></li>
      </ul>
    </div>
  } 
}