const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs"); //view engine 등록
app.use("/views", express.static(__dirname + "/views")); //views 파일 설정

// 라우팅(routing) : 경로 설정
// 브라우저에서 어떤 url로 접속했을 때 어떤 페이지를 보여줄 것인가??

// localhost:PORT/ 접속했을 때, index.ejs를 보여주겠다
app.get("/", function (req, res) {
  res.render("index"); //views/index.ejs 파일을 찾아서 응답
});

app.listen(PORT, function () {
  console.log(PORT, "listen");
});
