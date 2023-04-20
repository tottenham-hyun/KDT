import React from "react";
import ClassComponent from "./ClassComponent";
import FunctionComponent from "./FunctionComponent";
import "./App.css";
import Test from "./Test";
import Test2 from "./Test2";
import Food from "./Food";
import Book from "./Book";
import ClassComponent2 from "./ClassComponent2";
import FunctionComponent2 from "./FunctionComponent2";
import Handler_ex from "./ex/Handler_ex";
import Show from "./Show";

function App() {
  let name = "초코",
    animal = "푸들";
  let a = 2,
    b = 1;
  let title = "React 실습1";
  return (
    <>
      {/* <h1>1번</h1>
      <div>
        이거은 div입니다
        <h3>이것은 div안에 있는 h3태그입니다</h3>
      </div>
      <h1>2번</h1>
      <h2>
        제 반려 동물의 이름은 <u>{name}입니다</u>
        <br></br>
        <u>{name}</u>는 <u>{animal}입니다</u>
      </h2>
      <h1>3번</h1>
      {3 + 5 == 8 ? <p>정답입니다</p> : <p>오답입니다!</p>}
      <h1>4번</h1>
      {a > b ? <p>a가 b보다 큽니다</p> : <p>a가 b보다 작습니다</p>}

      <h1>5번</h1>
      <div className="test">
        <h1>{title}</h1>
      </div>
      <div className="Input_container">
        <label>아이디: </label> <input className="Input"></input>
        <br></br>
        <label>비밀번호: </label> <input className="Input"></input>
      </div>
      <br></br>
      <h1>6번</h1>
      <div className="rainbow">
        <div className="red"></div>
        <div className="orange"></div>
        <div className="yellow"></div>
        <div className="green"></div>
        <div className="blue"></div>
        <div className="navy"></div>
        <div className="purple"></div>
      </div>
   
      <Test />
      <Test2 /> */}
      {/* 
      <Food food="제육볶음" />
      <Food />
      <br></br>
      <br></br>
      <br></br>
      <Book author={"홍길동"} price={1000} type={"자기계발서"} />
      <ClassComponent text={"안녕"} valid={valid}></ClassComponent> */}
      {/* <h1>State 실습</h1>
      <ClassComponent2></ClassComponent2>
      <br></br>
      <FunctionComponent2></FunctionComponent2>

      <h1>이벤트 핸들러 실습</h1>
      <Handler_ex></Handler_ex> */}
      <Show></Show>
    </>
  );
}

function valid() {
  console.log("콘솔 띄우기 성공!");
}

export default App;
