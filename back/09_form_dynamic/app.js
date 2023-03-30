const express = require("express");
const app = express();
const PORT = 8080;

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
app.listen(PORT, () => {
  console.log("listen", PORT);
});
