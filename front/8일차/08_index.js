// let age = prompt();

// if (age >= 20) {
//   console.log("성인");
// } else if (17 <= age && age < 20) {
//   console.log("고등학생");
// } else if (14 <= age && age < 17) {
//   console.log("중학생");
// } else if (8 <= age && age < 14) {
//   console.log("초등학생");
// } else {
//   console.log("유아");
// }
let num = 5;
num % 2 === 1 ? console.log("홀") : console.log("짝");
let now = new Date().getHours();
now > 12 ? console.log("오후") : console.log("오전");

// let num = prompt();
// for (let i = 0; i <= num; i++) {
//   if (i % 13 == 0 && i % 2 == 1) {
//     console.log(i);
//   }
// }

// //db
// let userId = "user01";
// let userPw = "1234qwer";
// function loginUser() {
//   let inputId = prompt("아이디를 입력해주세요.");
//   let inputPw = prompt("비밀번호를 입력해주세요.");
//   if (userId === inputId) {
//     if (userPw === inputPw) {
//       alert("로그인 성공");
//     } else {
//       alert("비밀번호가 틀렸습니다!!");
//     }
//   } else if (inputId === "") {
//     alert("아이디를 입력하지 않았습니다.");
//   } else {
//     alert("아이디가 틀렸습니다.");
//   }
// }

// // 2. switch
// // let a = 4;
// // switch (a) {
// //   case 3:
// //     console.log("a가 3");
// //     break;
// //   case 4:
// //     console.log("a가 4");
// //     break;
// //   case 5:
// //     console.log("a가 5");
// //     break;
// //   default:
// //     console.log("a가 뭔지 몰?루");
// // }

// let score = prompt();
// switch (parseInt(score / 10)) {
//   case 10:
//     console.log("A");
//     break;
//   case 9:
//     console.log("A");
//     break;
//   case 8:
//     console.log("B");
//     break;
//   case 7:
//     console.log("C");
//     break;
//   case 6:
//     console.log("D");
//     break;
//   default:
//     console.log("F");
// }
