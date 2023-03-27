function helloWorld1() {
  console.log("helloWorld1");
}
helloWorld1();

// // function helloWorld2() {
// //   return "helloWorld2";
// // }

// // helloWorld2();

// // function add(num1, num2) {
// //   console.log("wow");
// //   return num1 + num2;
// // }

// // function add2(num1, num2) {
// //   console.log(num1 + num2);
// // }

// // let result = add(5, 5);
// // let reuslt2 = add2(5, 5);

// // //함수 표현식
// let helloWorld3 = function () {
//   console.log("helloWorld3");
// };

// console.log("helloWorld3");

// // 3. 화살표 함수
// let helloWorld4 = () => {
//   console.log("helloWorld4");
// };

// // 매개변수있는 version
// function sayHello1(text) {
//   return text;
// }

// function sayHello2(text, name) {
//   return `${text} ${name}`;
// }

// const sayHello3 = function (text) {
//   return text;
// };

// const sayHello4 = (text) => {
//   return text;
// };

// const sayHello5 = function (text) {
//   return text;
// };

// const sayHello6 = (text) => {
//   return text;
// };

const multifly = (num1, num2) => {
  return num1 * num2;
};

console.log(multifly(3, 7));

const sqaure = (num1) => {
  return num1 ** 2;
};

console.log(sqaure(5));
