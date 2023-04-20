import React, { useState } from "react";
import { Component } from "react";
import PropTypes from "prop-types";

class ClassComponent2 extends Component {
  state = {
    num: 0,
  };
  render() {
    const { num } = this.state;
    return (
      <>
        <button
          onClick={() => {
            this.setState({ num: num + 2 });
          }}
        >
          +2
        </button>
        <button
          onClick={() => {
            this.setState({ num: num - 1 });
          }}
        >
          -1
        </button>
        <div>{num}</div>
      </>
    );
  }
}

export default ClassComponent2;
