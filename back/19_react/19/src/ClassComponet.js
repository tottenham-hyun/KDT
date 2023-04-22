import React from "react";

class ClassComponent extends React.Component {
  constructor() {
    super();

    this.state = {
      name: "Codingon",
    };

    // this.printConsole = this.printConsole.bind(this);
  }

  //   printConsole() {
  //     console.log("버튼 클릭 ", this.stae);
  //   }
  printConsole = () => {
    console.log("버튼 클릭", this.state);
  };

  render() {
    return (
      <div>
        클래스형 컴포넌트에서 이벤트 사용해보기
        <button onClick={this.printConsole}>Print Console</button>
      </div>
    );
  }
}

export default ClassComponent;
