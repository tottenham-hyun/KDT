// Promise
// : 비동기 함수 동기처리하기 위해 만든 객체
// : 성공, 실패 분리해서 반환

// => 성공이든 실패든 무언가의 '최종결과'
// resolved : 성공
// rejected : 실패
// promise를 콜백함수 전달할 필요 없음. 그냥 호출하면 됨

// 1. 프로미스 생성하는 코드
// Promise() gkatndml return 값이 Promise 객체
// - resolve() : 성공한 경우, 프로미스 사용시 then 메서드와 연결
// - rejected() : 실패한 경우, 프로미스 사용시 catch 메서드와 연결

// function promise1(flag) {
//   return new Promise(function (resolve, reject) {
//     if (flag) {
//       resolve("promise 상태는 fulfilled!! then으로 연결됩니다");
//     } else {
//       resolve("promise 상태는 rejected!! catch로 연결됩니다");
//     }
//   });
// }

// // 2. Promise 사용(소비)하는 코드
// promise1(true)
//   .then(function (result) {
//     console.log(result);
//   })
//   .catch(function (err) {
//     console.log(err);
//   });

// promise1(false)
//   .then(function (result) {
//     console.log(result);
//   })
//   .catch(function (err) {
//     console.log(err);
//   });

// ########################
// index.js에서 '콜백함수'를 이용해 동기처리 한 것을
// promise 이용해서 동기처리

// function goMart() {
//   console.log("마트에 가서 어떤 음료 살지 고민!");
// }

// function pickDrink() {
//   return new Promise(function (resolve, reject) {
//     // *callback: 매개변수가 될 콜백함수
//     setTimeout(function () {
//       console.log("고민 끝~!");
//       product = "제로 콜라";
//       price = 4000; // 2000 -> 상품명, 가격 출력 그대로 / 4000 -> 금액부족
//       if (price <= 2000) {
//         resolve();
//       } else {
//         reject();
//       }
//     }, 3000);
//   });
// }

// function pay() {
//   console.log(`상품명: ${product}, 가격: ${price}`);
// }

// function noPay() {
//   console.log("잔액부족");
// }

// let product; // undefined
// let price; // undefined
// goMart();
// pickDrink().then(pay).catch(noPay);

// #################
// Promise 체이닝 사용x

function add(n1, n2, cb) {
  setTimeout(function () {
    let result = n1 + n2;
    cb(result);
  }, 1000);
}

function mul(n, cb) {
  setTimeout(function () {
    let result = n * 2;
    cb(result);
  }, 700);
}

function sub(n, cb) {
  setTimeout(function () {
    let result = n - 1;
    cb(result);
  }, 500);
}

// Promise 체이닝 사용o
// ex. 함수를 이용해 (4+3)*2-1=13 연산을 해보자!
// 1. add(4,3)
// 2. mul(add(4,3),2)
// 3. sub(mul(add(4,3),2),1)
// add -> mul -> sub 순으로 연산 필요

// step1. 콜백함수로 해결하기
// function add(n1, n2, callback) {
//     setTimeout(function () {
//       let result = n1 + n2;
//       callback(result);
//     }, 1000);
//   }

//   function mul(n, callback) {
//     setTimeout(function () {
//       let result = n * 2;
//       callback(result);
//     }, 700);
//   }

//   function sub(n, callback) {
//     setTimeout(function () {
//       let result = n - 1;
//       callback(result);
//     }, 500);
//   }

//   // (4 + 3) * 2 - 1
//   // add -> mul -> sub
//   add(4, 3, function (x) {
//     console.log('1: ', x); // x = 4 + 3
//     mul(x, function (y) {
//       console.log('2: ', y); // y = x * 2
//       sub(y, function (z) {
//         console.log('3: ', z); // z = y - 1
//       });
//     });
//   });

// step2) promise 체이닝 이용
// 장점1:
// function add(n1, n2) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       let result = n1 + n2;
//       resolve(result);
//     }, 1000);
//   });
// }

// function mul(n) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       let result = n * 2;
//       resolve(result);
//     }, 700);
//   });
// }

// function sub(n) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       let result = n - 1;
//       reject(new Error("의도적으로 에러를 일으켜봄"));
//       //   resolve(result);
//     }, 500);
//   });
// }

// add(4, 3)
//   .then(function (result) {
//     console.log("1:", result);
//     return mul(result);
//   })
//   .then(function (result) {
//     console.log("2:", result);
//     return sub(result);
//   })
//   .then(function (result) {
//     console.log("3:", result);
//   })
//   .catch(function (error) {
//     console.log("실패");
//     console.log(error);
//   });

function call(name) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log(name);
      resolve(name);
    }, 1000);
  });
}

function back() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("back");
      resolve("back");
    }, 1000);
  });
}

function hell() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve("callback hell");
    }, 1000);
  });
}

call("kim")
  .then(function (result) {
    console.log(result + "반가워");
    return back();
  })
  .then(function (result) {
    console.log(result + "를 실행했구나");
    return hell();
  })
  .then(function (result) {
    console.log("여기는" + result);
  });

// function chgRed() {
//   return new Promise(function (resolve, rejected) {
//     setTimeout(function () {
//       resolve("red");
//     }, 1000);
//   });
// }

// function chgOrange() {
//   return new Promise(function (resolve, rejected) {
//     setTimeout(function () {
//       resolve("orange");
//     }, 1000);
//   });
// }

// function chgYellow() {
//   return new Promise(function (resolve, rejected) {
//     setTimeout(function () {
//       resolve("yellow");
//     }, 1000);
//   });
// }

// function chgGreen() {
//   return new Promise(function (resolve, rejected) {
//     setTimeout(function () {
//       resolve("green");
//     }, 1000);
//   });
// }

// function chgBlue() {
//   return new Promise(function (resolve, rejected) {
//     setTimeout(function () {
//       resolve("blue");
//     }, 1000);
//   });
// }

// chgRed()
//   .then(function (result) {
//     document.querySelector("body").style.backgroundColor = result;
//     return chgOrange();
//   })
//   .then(function (result) {
//     document.querySelector("body").style.backgroundColor = result;
//     return chgYellow();
//   })
//   .then(function (result) {
//     document.querySelector("body").style.backgroundColor = result;
//     return chgGreen();
//   })
//   .then(function (result) {
//     document.querySelector("body").style.backgroundColor = result;
//     return chgBlue();
//   })
//   .then(function (result) {
//     document.querySelector("body").style.backgroundColor = result;
//   });
