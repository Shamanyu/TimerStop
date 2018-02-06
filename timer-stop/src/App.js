import React, { Component } from 'react';

import {
  TimerContainer,
} from './containers';

class App extends Component {
  render() {
    return (
      <div>
          <TimerContainer updateInterval={33} />
          <TimerContainer updateInterval={1000} />
      </div>
    );
  }
}

export default App;
