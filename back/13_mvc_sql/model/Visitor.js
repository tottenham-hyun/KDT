const mysql = require("mysql");

const conn = mysql.createConnection({
  host: "localhost",
  user: "user",
  password: "1234",
  database: "kdt",
});

exports.getVisitors = (cb) => {
  conn.query(`select * from visitor`, (err, rows) => {
    if (err) {
      throw err;
    }
    console.log("visitors.js: ", rows);
    cb(rows);
  });
};

exports.postVisitor = (data, cb) => {
  console.log(data); // controller에서 넘겨주고 있는 데이터 (req.body)
  conn.query(
    `insert into visitor(name,comment) values('${data.name}','${data.comment}');`,
    (err, rows) => {
      if (err) {
        throw err;
      }
      console.log("visitors.js: ", rows.insertId);
      cb(rows.insertId);
    }
  );
};
