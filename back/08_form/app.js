const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs"); //view engine 등록
app.use("/views", express.static(__dirname + "/views")); //views 파일 설정

// body-parser
app.use(express.urlencoded({ extended: true })); // post 요청으로 들어오는 모든 형식의 데이터를 파싱
app.use(express.json()); // json 형태로 데이터를 주고 받음

// 라우팅(routing) : 경로 설정
// 브라우저에서 어떤 url로 접속했을 때 어떤 페이지를 보여줄 것인가??

// localhost:PORT/ 접속했을 때, index.ejs를 보여주겠다

app.get("/", function (req, res) {
  const myTitle = "폼 실습을 합시다~~~";
  const myName = "강현우";
  res.render("index", { title: myTitle, name: myName }); //views/index.ejs 파일을 찾아서 응답
});

app.get("/getForm", function (req, res) {
  console.log(req.query);
  res.render("result", {
    title: "실습1 폼 전송 완료!",
    name: req.query.name,
    gender: req.query.gender,
    year: req.query.year,
    month: req.query.month,
    day: req.query.day,
    hobby: req.query.hobby,
    check: 1,
  });
});

app.post("/postForm", function (req, res) {
  console.log(req.body);
  res.render("result", {
    title: "실습2 폼 전송 완료!",
    name: req.body.name,
    gender: req.body.gender,
    year: req.body.year,
    month: req.body.month,
    day: req.body.day,
    hobby: req.body.hobby,
    color: req.body.color,
    number: req.body.number,
    check: 2,
  });
});

app.get("/get_practice", function (req, res) {
  res.render("get_practice");
});

app.get("/post_practice", function (req, res) {
  res.render("post_practice");
});

app.listen(PORT, function () {
  console.log(PORT, "listen");
});
