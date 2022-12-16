import React, { Component } from "react";
import PropTypes from "prop-types";
import { Statistics } from "./Statistics"
import { FeedBackOptions } from "./FeedbackOptions"
import { Title } from "./Title";
import { countTotalFeedback } from "utils";

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
    // const sum = countTotalFeedback(this.good, this.neutral, this.bad)

    return <section>
            <Title title="Please leave feedback" children={<FeedBackOptions incrementGood={this.incrementGood} incrementNeutral={this.incrementNeutral} incrementBad={this.incrementBad}/> } />

            <Title title="Statistics" children={<Statistics state={this.state}/> } />
            
          </section>
  }
}