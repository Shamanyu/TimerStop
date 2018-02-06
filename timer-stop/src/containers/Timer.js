// This module will define the header container

import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Timer extends Component {
  /*
    Timer Page Container
  */

  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {

    return (
      <div>
        Bro
      </div>
    );

  }
}

function mapStateToProps(state) {
  return {
  };
}

export default connect(mapStateToProps, null)(Timer);
