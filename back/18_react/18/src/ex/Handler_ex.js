import React from "react";
import { Component } from "react";

class Handler_ex extends Component {
  state = {
    title: "Hello World!",
  };
  render() {
    const { title } = this.state;
    return (
      <>
        <div>{title}</div>
        <button
          onClick={() => {
            this.setState({ title: "Goodbye World!" });
          }}
        >
          클릭
        </button>
      </>
    );
  }
}

export default Handler_ex;
