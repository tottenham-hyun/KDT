const Comment = require("../model/Comment");
const user = require("../model/User");

exports.main = (req, res) => {
  res.render("index");
};

exports.comments = (req, res) => {
  //   console.log(comments); // 댓글 목록이 [ {}, {}, {}, {} ] 형태로 출력
  res.render("comments", { commentInfos: Comment.getComments() });
};

exports.comments_id = (req, res) => {
  console.log(req.params); // 라우트 매개변수에 대한 정보 담겨 있음
  console.log(req.params.id); // id 고유 값

  const commentId = req.params.id; // 댓글 id: url로 들어온 매개변수
  console.log(Comment.getComments()[commentId - 1]);

  // 존재하지 않는 댓글 id 접근시 404 페이지
  if (commentId < 1 || commentId > Comment.getComments().length) {
    return res.render("404");
  }

  // :id 변수에 숫자가 아닌 값이 온다면 404 페이지
  if (isNaN(commentId)) {
    return res.render("404");
  }

  res.render("comment", { commentInfo: Comment.getComments()[commentId - 1] });
};
