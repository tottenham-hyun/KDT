const models = require("../models");

exports.signup = (req, res) => {
  res.render("signup");
};

exports.post_signup = async (req, res) => {
  const result = await models.User.create({
    userid: req.body.userid,
    pw: req.body.pw,
    name: req.body.name,
  });
  console.log("create >> ", result);
  res.send(true);
};

exports.signin = (req, res) => {
  res.render("signin");
};

exports.post_signin = async (req, res) => {
  // console.log(req.body);
  // User.post_signin(req.body, (result) => {
  //   console.log("Controller post_sign: ", result); // [ RowDataPacket { id: 'sean', name: 'sean', pw: '1234' } ]
  //   if (result.length > 0) {
  //     res.send(true);
  //   } else {
  //     res.send(false);
  //   }
  // });

  const result = await models.User.findOne({
    where: { userid: req.body.userid, pw: req.body.pw },
  });
  if (result) {
    res.render("profile", { data: result });
  } else {
    res.redirect("/user/signin");
  }
};

exports.post_profile = async (req, res) => {
  console.log("post_profiles: ", req.body);
  // console.log(req.body);
  // User.post_profile(req.body.userid, (result) => {
  //   // 여기는 늘 성공할 때이므로 else 절이 아예 필요 없을듯
  //   // POST /user/profile 로그인이 성공되어야만 수행하는 요청

  //   if (result.length > 0) {
  //     // 로그인 성공; views/profile.ejs 렌더링
  //     res.render("profile", { data: result[0] });
  //   } else {
  //     // 로그인 실패; /user/signin 현재 주소 다시 접속
  //     res.redirect("/user/signin");
  //   }
  // });
  const result = await models.User.findOne({
    where: { userid: req.body.userid },
  });
  console.log("profile: ", result);
  if (result) {
    res.render("profile", { data: result });
  } else {
    res.redirect("/user/signin");
  }
};

exports.edit_profile = async (req, res) => {
  // console.log(req.body);
  // User.edit_profile(req.body, () => {
  //   res.send("회원정보 수정 성공!");
  // });
  const result = await models.User.update(
    {
      pw: req.body.pw,
      name: req.body.name,
    },
    {
      where: { userid: req.body.userid },
    }
  );
  res.send("정보수정");
};

exports.delete_profile = async (req, res) => {
  console.log(req.body);
  // console.log(req.body);
  // User.delete_profile(req.body.id, () => {
  //   // res.redirect(주소): 리다이렉트할 주소와 함께 응답 보내기!!
  //   // res.redirect('/user/signin');
  //   // res.redirect('/user');
  //   res.send(true);
  // });

  const result = await models.User.destroy({
    where: { id: req.body.id },
  }).then(() => {
    res.send(true);
  });
};
