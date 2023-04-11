const express = require("express");
const app = express();
const PORT = 8000;

// 요청의 키를 해석해서 req.cookies 객체로 만듬
// ex) name=hello 라는 쿠키를 보내면 req.cookie 확인시 {name:'hello'}
const cookieParser = require("cookie-parser"); // 모듈 불러오기

app.set("view engine", "ejs");
app.use("/views", express.static(__dirname + "/views"));
app.use("/static", express.static(__dirname + "/static"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// cookieParser(secretKey, optionObj) : secretKey: 비밀키, optionObj: 쿠키에서 사용할 옵션값

app.use(cookieParser());

// res.cookie(key, value, option)
// 쿠키 설정시 사용

// res.clearCookie()
// 쿠키 제거시 사용

const cookieConfig = {
  httpOnly: true, // 웹서버를 통해서만 쿠키 접근가능
  maxAge: 24 * 60 * 60 * 1000, // 쿠키수명 : 유호시간 1분 (1초=1000)
  // ex) expires : 만료날짜 설정
  // ex) secure : https 에서만 쿠키 접근
  // ex) signed : 쿠키 암호화
};

app.get("/", (req, res) => {
  res.render("index");
});

// 1. 쿠키설정
app.post("/setCookie", (req, res) => {
  console.log(req);
  // 쿠키설정
  res.cookie("Modal", "hide", cookieConfig);

  // 클라이언트한테 응답 보냄
  res.send(req.cookies);
});

// 2. 쿠키 확인
app.post("/getCookie", (req, res) => {
  // req.cookies
  // ;  cookie-parser 모듈이 만든 요청의 쿠키를 읽어옹ㅁ
  res.send(req.cookies);
});

// 3. 쿠키 삭제
app.get("/clearCookie", (req, res) => {
  // 쿠키 설정
  // clearCookie 할 때, res.cookie() 설정했던 key와 value option 일치해야 함
  // (단, option에서 expires랑 maxAge 옵션은 일치하지 않아도 상관x)
  res.clearCookie("my first cookie", "cookie value test", cookieConfig);

  // 클라이언트 응답
  res.send("쿠키 삭제 완료");
});

app.listen(PORT, () => {
  console.log("listen, ", PORT);
});
