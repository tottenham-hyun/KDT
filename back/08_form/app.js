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
  res.render("result", { title: "get 요청 폼 결과 확인하기", id: req.query.id, pw: req.query.pw });
});

app.post("/postForm", function (req, res) {
  console.log(req.body.id2, req.body.pw2);
  res.render("result", { title: "post 요청 폼 결과 확인하기", id: req.body.id2, pw: req.body.pw2 });
});

app.listen(PORT, function () {
  console.log(PORT, "listen");
});
