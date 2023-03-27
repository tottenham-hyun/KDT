let btn1 = document.querySelector(".btn-black");
let btn2 = document.querySelector(".btn-green");
let btn3 = document.querySelector(".btn-blue");
let btn4 = document.querySelector(".btn-red");

btn1.addEventListener("click", function () {
  alert("버튼 1을 클릭했네요");
});

btn1.addEventListener("mouseover", function () {
  this.style.backgroundColor = "aqua";
});

let container = document.getElementById("container");
console.log(container);

btn2.addEventListener("click", () => {
  let div = document.createElement("div");
  div.style.backgroundColor = "pink";
  div.innerHTML = "hi";
  container.append(div);
});

btn3.addEventListener("click", changeColor);

function changeColor() {
  let divs = document.querySelectorAll("#container div");
  for (let i of divs) {
    i.style.backgroundColor = "beige";
  }
  divs[divs.length - 1].style.backgroundColor = "yellow";
}

btn4.addEventListener("click", changeBtnColor);

function changeBtnColor() {
  this.style.backgroundColor = "yellow";
  this.style.color = "#000";
}

console.log(window);
window.addEventListener("scroll", function (e) {
  console.log(e);
  console.log(this.scrollY);

  let pos = document.querySelector(".pos");
  if (this.scrollY > 700) {
    pos.style.opacity = "1";
  }
});

const btn = document.querySelector("button");
const input = document.querySelector("input");
// console.log(btn, input);
btn.addEventListener("click", function (e) {
  console.log(e);
});

input.addEventListener("keydown", function (e) {
  //   console.log(e.code);
  //   console.log(e.key);

  if (e.code === "ArrowUp") {
    console.log("위쪽 방향키");
  } else if (e.code === "ArrowDown") {
    console.log("아래쪽 방향키");
  } else if (e.code === "ArrowLeft") {
    console.log("왼쪽 방향키");
  } else if (e.code === "ArrowRight") {
    console.log("오른쪽 방향키");
  } else {
    console.log("others");
  }
});

const todoForm = document.getElementById("todo-form");
const todos = document.querySelector(".todos");

todoForm.addEventListener("submit", () => {
  console.log("submit");
  e.preventDefault();
  // 실제로 폼이 제출되는 것을 막는 것
  // event 전달을 막는다

  const todoInput = document.querySelector('input[name="todo"]');
  console.log(todoInput);
  console.dir(todoInput);
  console.dir(todoInput.value);

  // input의 문자열 저장
  //   const todo = todoInput.value;

  //   const newTodo = document.createElement("li"); // li태그 생성
  //   newTodo.append(todo); // li태그 안에 내용 집어넣음
  //   todos.append(newTodo);
  const todo = todoInput.value.trim(); // 공백제거 메소드

  if (todo !== "") {
    const newTodo = document.createElement("li"); // li태그 생성
    newTodo.append(todo); // li태그 안에 내용 집어넣음
    todos.append(newTodo);
  }
  // 입력창 초기화
  todoInput.value = "";
});

const changeInput = document.querySelector("#change-input");
changeInput.addEventListener("change", function () {
  console.log("changed");
});

changeInput.addEventListener("input", function () {
  console.log("changed?");
  let div = document.querySelector(".intro");
  div.innerHTML = changeInput.value;
});
