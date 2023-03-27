var name = "홍길동";
console.log(name);

// 재선언
var name = "이몽룡";
console.log("No error");

/* let
    1. 재선언 불가, 재할당 가능
    2. 선언과 동시에 초기화하지 않아도 됨
*/

let a = 1;
a = 2;
console.log(a);

let aa;
aa = 123;
console.log(aa);

/* const
    1. 재선언 불가, 재할당 불가
    2. 선언과 동시에 초기화해야함
*/

const b = 3;
console.log(b);

let q1 = 2;
console.log(q1);
