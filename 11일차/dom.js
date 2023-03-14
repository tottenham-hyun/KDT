console.log("a");
/* 요소 선택 
    - quaerySelector
    - querySelectorAll

    - getElementById
    - getElementsByClassName

*/

console.log(document);
console.log(document.head);
console.log(document.body);
console.log(document.title);
console.log(document.URL);

// 1. getElementById
console.log(document.getElementById("green"));
console.log(document.getElementById("red"));

// 2. getElementsByClassName (배열 형태로 가져옴)
console.log(document.getElementsByClassName("pink"));
console.log(document.getElementsByClassName("others"));
console.log(document.getElementsByClassName("others")[0]);

// 3. getElementsByTagName (배열 형태로 가져옴)
console.log(document.getElementsByTagName("div"));

// 4. getElementsByName (배열 형태로 가져옴)
console.log(document.getElementsByName("id"));

// 5. querySelector (pink 4개중에 처음꺼만 가져옴)
console.log(document.querySelector(".pink"));
console.log(document.querySelector(".others"));
console.log(document.querySelector("#green"));
console.log(document.querySelector("div"));

console.log(document.querySelector("[name='id']"));

// 6. querySelectorAll
console.log(document.querySelectorAll(".pink"));
console.log(document.querySelectorAll("input"));

let len = document.querySelectorAll(".pink").length;
for (let i = 0; i < len; i++) {
  console.log("1:", document.querySelectorAll(".pink")[i]);
}

for (let i of document.querySelectorAll(".pink")) {
  console.log("2:", i);
}
