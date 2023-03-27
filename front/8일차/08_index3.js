for (let i = 0; i < 10; i++) {
  console.log("안녕", i);
}

console.log("============");

for (let i = 0; i < 10; i += 2) {
  console.log(`안녕 ${i}`);
}

for (let i = 0; i < 10; i += 3) {
  console.log(`안녕 ${i}`);
}

// 1~5 출력
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
for (let i = 1; i < 6; i++) {
  console.log(i);
}

for (let i = 0; i < 5; i++) {
  console.log(i + 1);
}

// 5~1까지 출력
for (let i = 5; i > 0; i--) {
  console.log(i);
}

// 1부터 n까지의 합 for
let sum = 0;
let n = 11;
for (let i = 1; i <= n; i++) {
  sum += i;
}
console.log(sum);

// 배열과 for문
let fruits = ["사과", "배", "포도", "망고"];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

//배열 내의 숫자 합 구하기
let numsArr = [90, 50, 30, 20, 11];
let numsSum = 0;
for (let i = 0; i < numsArr.length; i++) {
  numsSum += numsArr[i];
}
console.log(numsSum);

// 1~20 짝수 합
let sums = 0;
for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    sums += i;
  }
}
console.log(sums);
