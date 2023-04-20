import React from "react";
import { Component } from "react";
import PropTypes from "prop-types";

class ClassComponent extends Component {
  // 클래스형 컴포넌트 render() 함수 필수
  render() {
    // // const name = "홍길동";
    // const { name, age } = this.props;
    const { text, valid } = this.props;
    return (
      <div>
        {text ? <div>{text}</div> : <div>"이건 기본 text props 입니다"</div>}
        <button onClick={valid}>콘솔메시지</button>
        {/* <h1>Hello World, Class Component</h1>
        <h5>{name}</h5>
        <h5>{age}</h5> */}
      </div>
    );
  }
}

// ClassComponent.defaultProps = {
//   name: "강현우",
//   age: "26",
// };

ClassComponent.propTypes = {
  text: PropTypes.string.isRequired,
};

export default ClassComponent;
