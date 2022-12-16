import React, { Component } from "react";
import PropTypes from "prop-types";
import { Statistics } from "../Statistics"
import { FeedBackOptions } from "../FeedbackOptions"
import { Title } from "../Title";
import { countTotalFeedback } from "utils";
import { Notification } from "../Notification";
import { FeedbackSection } from "./App.styled"

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
    this.setState(prevState => {
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
    const sum = countTotalFeedback(this.state.good, this.state.neutral, this.state.bad)

    return <FeedbackSection>
              <Title title="Please leave feedback" children={<FeedBackOptions incrementGood={this.incrementGood} incrementNeutral={this.incrementNeutral} incrementBad={this.incrementBad}/> } />
              {
                sum > 0
                  ?
                  <Title title="Statistics" children={<Statistics state={this.state} />} />
                  :
                  <Title title="Statistics" children={<Notification message="There is no feedback"/>} />
              }           
          </FeedbackSection>
  }
}