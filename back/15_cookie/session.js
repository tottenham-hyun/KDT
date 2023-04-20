const express = require("express");
const session = require("express-session");
const dotenv = require("dotenv");
// dotenv : 환경변수를 파일에 저장해놓고 접근할 수 있게 돕는 모듈
const app = express();
const PORT = 8000;

const db_id = "banana";
const db_pw = 1234;

dotenv.config();
console.log("dotenv >> ", process.env.SECRET_KEY);
// process.env.XXX

app.set("view engine", "ejs");
app.use("/views", express.static(__dirname + "/views"));
app.use("/static", express.static(__dirname + "/static"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// session({ 세션모듈_옵션 })
// - secret: 세션을 발급할 때 사용되는 키 (임의로 변조하는 것을 방지)
// - resave: 세션에 수정사항이 생기지 않더라도 매 요청(request)마다 다시 저장할 건지
// - saveUninitialized: 세션에 저장할 내역에 없더라도 처음부터 세션 생성할지
// - secure: https 프로토콜에서만 세션을 주고 받을 건지
app.use(
  session({
    secret: process.env.SECRET_KEY, // 필수 옵션 (세션 암호화할 떄 쓰이는 키)
    resave: false,
    saveUninitialized: false, // 일반적으로 false 지정
  })
);

// app.get("/set", (req, res) => {
//   req.session.name = "홍길동";
//   res.send("세션 설정 완료");
// });

// app.get("/name", (req, res) => {
//   // 세션 읽기(사용)
//   // req.session.키
//   // req.sessionID : 현재 세션의 ID(서버가 클라이언트를 구별하기 위해 부여하는 고유 값)
//   // -> 브라우저 단위

//   res.send({
//     id: req.sessionID,
//     name: req.session.name,
//   });
// });

// app.get("/destroy", (req, res) => {
//   // req.session.destroy(세션 삭제시 호출할 콜백함수)
//   // -> 세션 완전히 삭제하고, 웹사이트 접속할 때마다 새로운 sessionID를 할당함
//   req.session.destroy((err) => {
//     if (err) {
//       throw err;
//     }

//     res.send("세션 삭제 완료!");
//   });
// });

app.get("/", (req, res) => {
  res.render("session");
});

app.get("/session_practice", (req, res) => {
  res.render("session_practice", { id: 0 });
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.post("/login", (req, res) => {
  console.log(req.body);
  const id = req.body.id;
  const pw = req.body.pw;

  if (db_id == id && db_pw == pw) {
    req.session.name = id;
    res.render("session_practice", { id: req.session.name });
  } else {
    res.send(`<script>alert('다시하세요')</script>`);
  }
});

app.get("/getSession", (req, res) => {
  res.send({ name: req.session.name });
});

app.get("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      throw err;
    }
    res.render("session_practice");
  });
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
