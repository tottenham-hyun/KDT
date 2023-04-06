const Visitor = require("../model/Visitor");

exports.main = (req, res) => {
  res.render("index");
};

exports.getVisitors = (req, res) => {
  Visitor.getVisitors((result) => {
    console.log("Cvisitor: ", result);
    res.render("visitor", { data: result });
  });
};

exports.postVisitor = (req, res) => {
  console.log(req.body);

  Visitor.postVisitor(req.body, (result) => {
    console.log(result);
    res.send({ id: result, name: req.body.name, comment: req.body.comment });
  });
};

exports.deleteVisitor = (req, res) => {
  console.log(req.body);

  Visitor.deleteVisitor(req.body.id, (result) => {
    console.log("Cvisitor.js: ", result);
    res.send("삭제성공");
  });
};
