import PropTypes from 'prop-types';
import React, { Component } from 'react';

export class Statistics extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
  };

  handleButtonGood = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };
  handleButtonNeutral = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };
  handleButtonBad = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  };
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };
  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };

  render() {
    const total = this.countTotalFeedback();
    const procent = this.countPositiveFeedbackPercentage();
    return (
      <>
        <h1>Please leave feedback</h1>
        <button onClick={this.handleButtonGood}>Good</button>
        <button onClick={this.handleButtonNeutral}>Neutral</button>
        <button onClick={this.handleButtonBad}>Bad</button>
        <h2>Statistics</h2>
        <div>
          {total === 0 && 'There is no feedback'}
          {total !== 0 && (
            <>
              <span>good: {this.state.good}</span>
              <span>neutral: {this.state.neutral}</span>
              <span>bad : {this.state.bad}</span>
              <span>total: {total}</span>
              <span>Positiv feedback: {procent}%</span>
            </>
          )}
        </div>
      </>
    );
  }
}
