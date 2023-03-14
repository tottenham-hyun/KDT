/* 조건문 */
// 1. if 문
if (5 > 3) {
  console.log("true");
}

let number = Number(prompt("숫자를 입력해 주세요")); //넘어온 값은 number가 아닌 String 형이다
// number = Number(number)

console.log(typeof number);

if (number > 10) {
  console.log("bigger than 10");
} else {
  console.log("eqaul or less than 10");
}

if (number > 10) {
  console.log("이 수는 10보다 큽니다");
} else if (number === 10) {
  console.log("입력한 수는 10이군요");
} else {
  console.log("입력한 수가 10보다 작아요");
}

if (number > 100 || number < 0) {
  console.log("잘 못 입력함");
} else {
  if (score >= 90) {
    console.log("A");
  } else if (80 <= score && score < 90) {
    console.log("B");
  } else if (70 <= score && score < 80) {
    console.log("C");
  } else if (60 <= score && score < 70) {
    console.log("D");
  } else {
    console.log("F");
  }
}
