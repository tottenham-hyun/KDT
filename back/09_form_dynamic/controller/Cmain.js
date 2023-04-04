const Comment = require("../model/Comment");
let users = require("../model/User");

let info = users.users;
info = info.split("\n");

let infos = [];
for (let i = 0; i < info.length; i++) {
  infos.push(info[i].split("//"));
}
console.log(infos);
console.log(infos.length);
const id = Comment.getComment()[0];
const pw = Comment.getComment()[1];

exports.practice = (req, res) => {
  res.render("practice1");
};

exports.practice1 = (req, res) => {
  for (let i = 0; i < infos.length; i++) {
    if (infos[i][0] == req.body.id) {
      if (infos[i][1] == req.body.pw) {
        let msg = infos[i][2];
        return res.send({ data: msg, res: "success" });
      } else {
        return res.send({ res: "err" });
      }
    } else {
      return res.send({ res: "err" });
    }
  }
};
