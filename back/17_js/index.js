const lists = ["apple", "grape"];
console.log(lists[0]);
[item1, item2, item3 = "peach"] = lists;
console.log("item1: ", item1);
console.log("item2: ", item2);
console.log("item3: ", item3);

let x = 1,
  y = 2;
[x, y] = [y, x];
console.log(x, y);

const obj = {
  key1: "one",
  key2: "two",
};

const { key1: newKey, key2, key3 = "three" } = obj;
// console.log("key1: ", key1);
console.log("key2: ", key2);
console.log("key3: ", key3);
console.log("newKey: ", newKey);

const { a, b } = { a: 10, b: 10 };
// const [c, d] = [1, 2];
console.log(a, b);
// console.log(c, d);

// spread 연산자
const arr = [1, 2, 3, 4, 5];
console.log(...arr);
// 함수 호출에 점(...)을 사용

// rest 파라미터: 남은 인수들을 묶어서 배열로 변환
// 함수 매개변수에 점(...)을 사용하는 경우 rest 매개변수
const data = { c: 30, d: 40, e: 50, f: 60 };
const { c, d, ...rest } = data;
console.log("rest: ", rest);

// 배열분해 할당
const newArr = ["one", "two", "three"];
const [one, two, three] = newArr;
console.log(one, two, three);

//swap
let newA = 10,
  newB = 20;

console.log(newA, newB);
[newA, newB] = [newB, newA];
console.log(newA, newB);

const newObj = {
  one: "one",
  two: "two",
  three: "three",
};

console.log(newObj.one);
console.log(newObj.two);
console.log(newObj.three);

const { one: newOne, two: newTwo, three: newThree } = newObj;
console.log(newOne);
console.log(newTwo);
console.log(newThree);

// spread 연산자
// -> 객체의 값을 펼치는 연산자
const t1 = [1, 2, 3];
const t2 = [4, 5, 6];
const t3 = [...t1, ...t2];
console.log(t3);

const cookies = {
  base: "cookie",
  madeIn: "korea",
};

const chocochipCookie = {
  ...cookies,
  toping: "chocochip",
};
console.log(chocochipCookie);

const noTopingCookies = ["촉촉한쿠키", "안촉촉한쿠키"];
const topingCookies = ["바나나쿠키", "블루베리쿠키", "딸기쿠키"];
const allCookies = [...noTopingCookies, "초코칩쿠키", ...topingCookies];
console.log(allCookies);
