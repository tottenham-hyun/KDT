import React from "react";

class RefSample3 extends React.Component {
  handleFocus = () => {
    console.log(this);
    console.log(this.myInput.value);

    this.myInput.focus();
  };
  render() {
    return (
      <>
        <input
          type="text"
          ref={(ref) => {
            this.myInput = ref;
          }}
        ></input>
        <button onClick={this.handleFocus}>focus</button>
      </>
    );
  }
}

export default RefSample3;
