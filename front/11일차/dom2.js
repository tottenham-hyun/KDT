let div1 = document.getElementById("div1");

div1.innerHTML = "여기는 <b>첫번째</b> 태그입니다. &hearts;";
console.log(div1.innerHTML);

div1.innerText = "        여기는 <b>첫번째</b> 태그입니다.         &hearts;"; // 문자열로 인식함
console.log(div1.innerText);
div1.textContent = "    여기는 <b>첫번째</b> 태그입니다. &hearts;  ";
console.log(div1.textContent);

// innerText vs textContent => 태그가 그대로 보임
// - textContent : 공백문자 그대로 반환, IE9 이전에서는 사용x
// - innerText : 공백문자 제거

div1.innerHTML = "<ul><li>1</li><li>2</li></ul>";

/* 속성 변경 */
let naver = document.getElementById("naver");
console.log(naver);

naver.setAttribute("href", "https://www.google.com");
console.log(document.getElementById("cat").getAttribute("src"));

// 직접접근
console.log(document.getElementById("cat").id);
naver.href = "#";

/* css 지정 */
let h1 = document.querySelector("h1");
let list = document.querySelectorAll("ul > li");

console.log(h1);
console.log(list);
// 1. style 속성 적용
list[0].style.backgroundColor = "blue";
for (let li of list) {
  li.style.backgroundColor = "yellow";
  li.style.color = "#ddd";
  li.style.fontSize = "1.5rem";
}

// 2. classList 작성
console.log(h1.classList);
h1.classList.add("add-h1");
// classList add : 추가
// classList remove : 제거
// classList contains : 있는지 없는지 확인 (있으면 true, 없으면 false)
// classList toggle : 해당 클래스가 있으면 제거, 없으면 추가

// 3. 노드찾기
let friends = document.querySelector("#friends");
let tigger = document.querySelector("#tigger");
console.log(friends);
console.log(tigger);

console.log("--자식 노드 접근--");
console.log(friends.children);
