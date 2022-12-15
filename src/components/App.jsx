import React, { Component } from "react";
import PropTypes from "prop-types";
export class App extends Component {
  static defaultProps = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positivePercentage: 0,
  }

  static propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
  };

  state = {
      good: this.props.good,
      neutral: this.props.neutral,
      bad: this.props.bad,
      total: this.props.total,
      positivePercentage: this.props.positivePercentage,
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

  countTotalFeedback = () => {
    this.setState(prevState => {
      const sum = prevState.good + prevState.neutral + prevState.bad
      return {total: sum}
    })
  }

  countPositiveFeedbackPercentage = () => {
    this.setState(prevState => {
      const percentage = prevState.good * 100 / prevState.total
      return {positivePercentage: percentage}
    })
  }

  render() {
    return <section>
            <FeedBackAgregator countTotalFeedback={this.countTotalFeedback} incrementGood={this.incrementGood} incrementNeutral={this.incrementNeutral} incrementBad={this.incrementBad} />
            <Statistics state={this.state} countPositiveFeedbackPercentage={this.countPositiveFeedbackPercentage } />
          </section>
  }
}

const FeedBackAgregator = ({incrementGood, incrementNeutral, incrementBad, countTotalFeedback}) => {
    return <div onClick={countTotalFeedback}>
            <h1>Please leave feedback</h1>
      
            <button type="button" aria-label="Good" onClick={incrementGood}>Good</button>
            <button type="button" aria-label="Neutral" onClick={incrementNeutral}>Neutral</button>
            <button type="button" aria-label="Bad" onClick={incrementBad}>Bad</button>
          </div>
}

const Statistics = ({ state }) => {
  const {good, neutral, bad, total, positivePercentage} = state
    return <div>
      <h2 hidden>Statistics</h2>
      <ul>
        <li>Good: <span>{good}</span></li>
        <li>Neutral: <span>{neutral}</span></li>
        <li>Bad: <span>{bad}</span></li>
        <li>Total feedbacks: <span>{total}</span></li>
        <li>Positive percentage: <span>{positivePercentage}</span></li>
      </ul>
    </div>
}