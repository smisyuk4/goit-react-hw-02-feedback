import React, { Component } from "react";
import PropTypes from "prop-types";
export class App extends Component {
  static defaultProps = {
    good: 0,
    neutral: 0,
    bad: 0,
  }

  static propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  };

  state = {
      good: this.props.good,
      neutral: this.props.neutral,
      bad: this.props.bad,
  }; 

  incrementGood = () => {
    console.log(this.state)
    this.setState(prevState => {
      console.log(prevState)
      return { good: prevState.good + 1 }
    })
  }

  incrementNeutral = () => {
    this.setState(prevState => {
      return {neutral: prevState.neutral + 1}
    })
  }

  incrementBad = () => {
    this.setState(prevState => {
      return {bad: prevState.bad + 1}
    })
  }

  render() {
    return <section>
            <FeedBackAgregator incrementGood={this.incrementGood} incrementNeutral={this.incrementNeutral} incrementBad={this.incrementBad} />
            <Statistics state={this.state} />
          </section>
  }
}

const FeedBackAgregator = ({incrementGood, incrementNeutral, incrementBad}) => {
    return <div>
            <h1>Please leave feedback</h1>
      
            <button type="button" aria-label="Good" onClick={incrementGood}>Good</button>
            <button type="button" aria-label="Neutral" onClick={incrementNeutral}>Neutral</button>
            <button type="button" aria-label="Bad" onClick={incrementBad}>Bad</button>
          </div>
}

const Statistics = ({ state }) => {
  const {good, neutral, bad} = state
    return <div>
      <h2 hidden>Statistics</h2>
      <ul>
        <li>Good: <span>{good}</span></li>
        <li>Neutral: <span>{neutral}</span></li>
        <li>Bad: <span>{bad}</span></li>
      </ul>
    </div>
}