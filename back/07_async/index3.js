// async / await
// 비동기 처리 패턴 중 가장 최신 문법
// promise 기반 코드를 더 가독성 있게 하기 위해 등장

// 구조
// - 함수 앞에 async 키워드 붙이기
// - 비동기 처리 method 앞에 await 키워드 붙이기 (해당 작업을 기다려줌)
// async와 await는 세트!! 같이 쓰자!!

// async function 함수명() {
//   await 비동기처리_메소드명();
// }

// 1초 뒤에 과일 배열을 출력하는 코드
function fetchFruits() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      const fruits = ["🍉", "🍓", "🍒"]; //과일 배열
      resolve(fruits);
      //   reject(new Error("알 수 없는 에러 발생!! 아이템을 가져올 수 없음"));
    }, 1000);
  });
}

// fetchFruits().then(function (result) {
//   console.log(result);
// });

// #2. async await 이용해서 쓰기
// try catch
// async function printItems() {
//   try {
//     const fruits = await fetchFruits();
//     console.log(fruits);
//   } catch (error) {
//     console.log(error);
//   }
// }
// // - try 블록 코드가 실행
// // - try 블록에서 에러가 없다면, catch 건너 뜀
// // - try 블록에서 에러가 있다면, try 블록 실행이 중단 -> catch 블록 코드 실행

// printItems();

// ################################
function goMart() {
  console.log("마트에 가서 어떤 음료 살지 고민!");
}

function pickDrink() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("고민 끝~!");
      product = "제로 콜라";
      price = 4000;
      resolve();
    }, 3000);
  });
}

function pay() {
  console.log(`상품명: ${product}, 가격: ${price}`);
}

async function exec() {
  goMart();
  await pickDrink();
  pay();
}

let price;
let product;

exec();
