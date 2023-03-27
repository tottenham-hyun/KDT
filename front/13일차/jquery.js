// function submitjs() {
//   document.querySelector("#div").innerHTML = "반갑습니다";
//   document.getElementById("div1").setAttribute("style", "border:2px solid blue");
// }

// function submitjquery() {
//   $("#div1").html("잘지내세요");
//   $("#div1").css("border", "3px dotted red");
// }

function getValue() {
  let value = $("input").val();
  //   let value = document.querySelector("input").value();
  alert(value);
}

function setValue() {
  $("input").val("설정!!");
}

/* css() */
function changeCssJS() {
  let span = document.querySelector("span");
  span.style = "font-size: 20px; color:red;";
}

function changeCssJquery() {
  $("span").css("font-size", "40px");
  $("span").css("color", "blue");
}

/* attr() */
function changeAttrJS() {
  let a = document.querySelector("a");
  a.setAttribute("href", "https://www.naver.com");
}

function changeAttrJquery() {
  $("a").attr("href", "https://www.daum.net");
}

/* text() */
function chagneTextJS() {
  let p = document.querySelector("p");
  p.innerText = "JS로 바꿨음";
}

function chagneTextJquery() {
  $(".p-text").text("<b>jquery<b>로 바꿨습니다");
}

/* html() : 태그 적용이 되는 놈 */

function changeHtmlJS() {
  let p = document.querySelector(".p-html");
  p.innerHTML = "<b>jquery<b>로 바꿨습니다";
}

function changeHtmlJquery() {
  $(".p-html").html("<b>jquery<b>로 바꿨습니다");
}

/* 요소 추가 */
/* append() */

function appendJS() {
  let li = document.createElement("li");
  li.innerText = "append()로 추가된 js";
  let ul = document.querySelector("ul");
  ul.append(li);
}

function appendJquery() {
  $(".colors").append("<li>append()로 추가된 jquery</li>");
}

function prependJS() {
  let li = document.querySelector("li");
  li.innerText = "prepend로 추가된 js";
  let ul = document.querySelector("ul");
  ul.prepend(li);
}
function prependJquery() {
  $(".colors").prepend("<li>jquery로 추가된 prepend</li>");
}

function afterJS() {
  let greeen = document.querySelector(".green");
  let li = document.createElement("li");
  li.innerText = "after() 형제요소로 추가된 js";

  greeen.after(li);
}

function afterJquery() {
  $(".green").after("<li>after() 형제요소로 추가된 jquery</li>");
}

function beforeJS() {
  let greeen = document.querySelector(".green");
  let li = document.createElement("li");
  li.innerText = "before() 형제요소로 추가된 js";

  greeen.before(li);
}

function beforeJquery() {
  $(".green").before("<li>before() 형제요소로 추가된 jquery</li>");
}

/* 요소 삭제 */
/* remove() */

function removeJS() {
  let li = document.querySelector("#li2");
  li.remove();
}

function removeJquery() {
  $("#li2").remove();
}

/* empty() */
function emptyJS() {
  let nums = document.querySelector("ul.nums");
  nums.innerHTML = "";
}

function emptyJquery() {
  $("ul.nums").empty();
}

/* 요소 탐색 */
function findParent() {
  //parents(): 조상요소 전부 반환 (js는 없는 메소드)
  console.log($("child2").parents());
}

function findNext() {
  console.log($("child2").next());
}

function findPrev() {
  console.log($("child2").prev());
}

function findChildren() {
  console.log($("child2").children());
  console.log(document.querySelector(".parent").children);
}

function addClass() {
  $("#hi").addClass("fs-50");
}

function removeClass() {
  $("#hi").addClass();
}

function hasClass() {
  console.log($("hi").hasClass("fs-50"));
}

function toggleClass() {
  $("#hi").toggleClass("bg-pink");
}

$(".input-key").keydown(function (e) {
  console.log(e.code);
  if (e.code === "ArrowUp") {
    console.log("up");
  } else if (e.code === "ArrowRight") {
    console.log("right");
  } else if (e.code === "ArrowLeft") {
    console.log("left");
  } else if (e.code === "ArrowDown") {
    console.log("down");
  } else {
    console.log("");
  }
});

/* todo list */
$("#todo-form").on("submit", function (e) {
  e.preventDefault();

  const todo = $('input[name="todo"]').val();
  console.log(todo);
  $("ul.todos").append(`<li>${todo}</li>`);
  $('input[name="todo"]').val("");
});
