const express = require("express");
const app = express();
const PORT = 8080;

const id = "test0";
const pw = "123";

app.set("view engine", "ejs"); //view engine 등록
app.use("/views", express.static(__dirname + "/views")); //views 파일 설정

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/ajax", (req, res) => {
  console.log(req.query);
  res.send(req.query);
});

app.post("/ajax", (req, res) => {
  res.send(req.body);
});

app.get("/axios", (req, res) => {
  res.send(req.query);
});

app.post("/axios", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

app.get("/practice1", (req, res) => {
  res.render("practice1");
});

app.get("/practice_axios", (req, res) => {
  console.log(req.query.hobby);
  res.send(req.query);
});

app.post("/practice_post", (req, res) => {
  if (id == req.body.id) {
    if (pw == req.body.pw) {
      res.send({ data: req.body, res: "success" });
    } else {
      res.send({ res: "err" });
    }
  } else {
    res.send({ res: "err" });
  }
});

app.listen(PORT, () => {
  console.log("listen", PORT);
});
