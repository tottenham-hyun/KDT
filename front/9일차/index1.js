/* 문자열 관련 함수 + 속성(Length) */
/*
    - toUpperCase(), toLowerCase()
    - trim()
    - indexOf()
    - slice()
    - replace(), replaceAll()
    - repeat()
*/

let str1 = "Strawberry Moon";
let str2 = "    Strawberry Moon    ";
// 문자열 인덱싱
console.log(str1[0]);
console.log(str1[0] + str1[12]);

//Sonny
console.log(str1[0] + str1[12] + str1[14] + str1[14] + str1[9]);
console.log(str1.length);
console.log(str2.length);

let msg = "Happy Birthday!";
console.log(msg.toUpperCase());
console.log(msg.toLowerCase());
console.log(str2.trim());
console.log(str2.trim().length);

let msg2 = "  hello world!!   ";
console.log(msg2.trim().toUpperCase());

//매개변수 있는 함수
let fruit = "applemango";
console.log(fruit.indexOf("a")); // 문자가 시작하는 인덱스 반환
console.log(fruit.indexOf("apple")); // 문자가 시작하는 인덱스 반환
console.log(fruit.indexOf("x")); // 문자가 시작하는 인덱스 반환(없으면 -1)

console.log(fruit.charAt(3)); // 해당하는 자리의 문자 반환

console.log(fruit.slice(5)); // start ~ end 까지
console.log(fruit.slice(3, 6));
console.log(fruit.slice(-3));

let msg3 = "Wow! It is so amazing!!";
console.log(msg3.replace("Wow", "Hey"));
console.log(msg3.replaceAll("o", "a"));
console.log(msg3.replace("o", "a"));

let date = "23.03.10";
console.log(date.split("."));
console.log("hi".repeat(5));

// =========== 배열
// push, pop, unshift, shift => 원본 배열 변화
// indexOf, join, reverse

arr1 = [1, 2, 3, 4, 5];
arr1.push(6);
arr1.push(10);
console.log(arr1.pop());
console.log(arr1);

// let arr2
// arr2.unshift("cat");
// console.log(arr2.shift());
// console.log(arr2);

// //배열.includes(요소) 요소가 있는지, 없는지
// // true false 반환
// console.log(arr2.includes("quakka"));

// console.log(arr2.indexOf("quakka"));

// reverse
console.log(arr1.reverse());

//배열에서 For

let arr3 = [1, 3, 5, 4, 6];
let alphabets = ["a", "b", "c", "d", "e"];

for (let i = 0; i < arr3.length; i++) {
  console.log(arr3[i]);
  //console.log(alphabets[i]);
}

for (let number of arr3) {
  console.log(number);
}

arr3.forEach(function (data, index, arr) {
  console.log(data, index, arr);
});

arr3.forEach((data, index) => {
  console.log(data, index);
});

arr3.forEach(function (data) {
  console.log(data);
});

// filter
console.log("---");
arr3.filter(function (num) {
  return num > 3;
});
console.log(arr3);

// arr2.filter(function (el) {
//   return el.length >= 6;
// });

// map, find
// map: 배열 내의 모든 원소에 대해 연산한 결과를 모아 새로운 배열 반환
// [1,2,3]

let arr4 = [1, 2, 3].map(function (el) {
  return el * 3;
});

console.log(arr4);

arr4 = [1, 2, 3, 4, 5];
arr4 = arr4.map((i) => {
  return i * 10;
});
console.log(arr4);

// arr4.map((num)=>num*10)

//find : 특정 조건을 만족하는 첫번째 요소를 반환

let arr = [];
let sum1 = 0;
let sum2 = 0;
let sum3 = 0;

for (let i = 1; i <= 100; i++) {
  arr.push(i);
  sum1 += i;
}
console.log(sum1);

for (let i of arr) {
  sum2 += i;
}
console.log(sum2);

arr.forEach((i) => {
  sum3 += i;
});
console.log(sum3);

let fruits1 = [
  "사과",
  "딸기",
  "파인애플",
  "수박",
  "참외",
  "오렌지",
  "자두",
  "망고",
];
let fruits2 = ["수박", "사과", "참외", "오렌지", "파인애플", "망고"];
let same = [];
let diff = [];

for (let i = 0; i < fruits1.length; i++) {
  if (fruits2.includes(fruits1[i])) {
    same.push(fruits1[i]);
  } else {
    diff.push(fruits1[i]);
  }
}
console.log(same);
console.log(diff);

/* filter 사용 */
let same2 = fruits1.filter((fruit) => {
  return fruits2.includes(fruit);
});

let diff2 = fruits1.filter((fruit) => {
  return !fruits2.includes(fruit);
});

console.log(same2);
console.log(diff2);

/*
    - Math
    - Date : 시간, 날짜에 대한 정보를 얻기 위해 사용
*/

let now = new Date();
console.log(now);
console.log(now.getFullYear());
console.log(now.getMonth() + 1);
console.log(now.getDate());
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getSeconds());
console.log(now.getMilliseconds());
console.log(now.getDay()); // 0이 일요일, 6이 토요일

// Date 객체를 이용해 오늘의 요일을 얻고, 평일인지 주말인지 출력
if (now.getDay === 0 || now.getDay === 6) {
  console.log("주말");
} else {
  console.log("평일");
}

// Math 객체
// 속성

console.log(Math.PI);
console.log(Math.E);
console.log(Math.SQRT2); //루트2

// 메소드
console.log(Math.min(45, 0, -2));
console.log(Math.max(45, 0, -2));
console.log(Math.random()); // 0~1사이 0<= x <1
console.log(Math.round()); // 반올림
console.log(Math.floor(5.5)); //내림
console.log(Math.ceil()); // 올림

console.log(Math.random() * 10);
console.log(Math.floor(Math.random() * 100) + 1);
