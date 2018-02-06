// This module will define the header container

import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  startTimer,
  stopTimer,
  resetTimer,
} from '../actions';

export class Timer extends Component {
  /*
    Timer Page Container
  */

  constructor(props) {
    super(props);

    this.state = {};
    this.getElapsedTime = this.getElapsedTime.bind(this);
  }

  getElapsedTime(baseTime, startedAt, stoppedAt = new Date().getTime()) {
    if (!startedAt) {
      return 0;
    } else {
      return stoppedAt - startedAt + baseTime;
    }
  }

  componendDidMount() {
    this.interval(this.forceUpdate.bind(this), this.props.updateInterval || 33);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { baseTime, startedAt, stoppedAt } = this.props;
    const elapsed = this.getElapsedTime(baseTime, startedAt, stoppedAt);
    return (
      <div>
        <div>Time: {elapsed}</div>
        <div>
          <button onClick={() => this.props.startTimer(elapsed)}>Start</button>
          <button onClick={() => this.props.stopTimer()}>Stop</button>
          <button onClick={() => this.props.resetTimer()}>Reset</button>
        </div>
      </div>
    );
  }
}


function mapStateToProps(state) {
  const { baseTime, startedAt, stoppedAt } = state;
  return { baseTime, startedAt, stoppedAt };
}

export default connect(mapStateToProps, { startTimer, stopTimer, resetTimer })(Timer);
