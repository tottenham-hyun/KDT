// // 실습2. Promise -> async/await 기본코드
// // call, back, hell 함수: 실습 23의 함수와 동일
// function call(name) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       console.log(name);
//       resolve(name); // 작업 성공시 then(name)
//     }, 1000);
//   });
// }

// function back() {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       console.log("back");
//       resolve("back"); // 작업 성공시 then('back')
//     }, 1000);
//   });
// }

// function hell() {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       resolve("callback hell");
//     }, 1000);
//   });
// }

// async function exec() {
//   let hi = await call("kim");
//   console.log(hi + "반가워");

//   let txt = await back();
//   console.log(txt + "을 실행했구나");

//   let here = await hell();
//   console.log("여기는" + here);
// }

// exec();

// 배경색깔 바꾸기
let bodyColor = document.querySelector("body");
function chgRed() {
  return new Promise(function (resolve, rejected) {
    setTimeout(function () {
      resolve("red");
    }, 1000);
  });
}

function chgOrange() {
  return new Promise(function (resolve, rejected) {
    setTimeout(function () {
      resolve("orange");
    }, 1000);
  });
}

function chgYellow() {
  return new Promise(function (resolve, rejected) {
    setTimeout(function () {
      resolve("yellow");
    }, 1000);
  });
}

function chgGreen() {
  return new Promise(function (resolve, rejected) {
    setTimeout(function () {
      resolve("green");
    }, 1000);
  });
}

function chgBlue() {
  return new Promise(function (resolve, rejected) {
    setTimeout(function () {
      resolve("blue");
    }, 1000);
  });
}

async function exec() {
  let color = await chgRed();
  bodyColor.style.backgroundColor = color;

  color = await chgOrange();
  bodyColor.style.backgroundColor = color;

  color = await chgYellow();
  bodyColor.style.backgroundColor = color;

  color = await chgGreen();
  bodyColor.style.backgroundColor = color;

  color = await chgBlue();
  bodyColor.style.backgroundColor = color;
}

exec();
