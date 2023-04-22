import { useState } from "react";

function Board() {
  let [chk, setChk] = useState();
  let [sent, setSent] = useState([]);
  let [num, setNum] = useState(0);
  let [sent2, setSent2] = useState();
  let [writer, setWriter] = useState();
  let [title, setTitle] = useState();
  let [copys, setCopys] = useState();
  let [opt, setOpt] = useState("작성자");
  return (
    <>
      <div style={{ marginBottom: "10px" }}>
        <label>작성자: </label>
        <input
          type="text"
          placeholder="작성자"
          onChange={(e) => {
            setWriter(e.target.value);
          }}
        ></input>

        <label style={{ marginLeft: "5px" }}>제목: </label>
        <input
          type="text"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        ></input>

        <button
          style={{ marginLeft: "5px" }}
          onClick={() => {
            setNum((num += 1));
            setSent([...sent, { number: num, titles: title, writers: writer }]);
          }}
        >
          작성
        </button>
      </div>

      <div style={{ marginBottom: "10px" }}>
        <select
          style={{ marginRight: "10px" }}
          onChange={(e) => {
            setOpt(e.target.value);
          }}
        >
          <option value="작성자">작성자</option>
          <option value="제목">제목</option>
        </select>
        <input
          type="text"
          placeholder="검색어"
          style={{ marginRight: "10px" }}
          onChange={(e) => {
            setSent2(e.target.value);
          }}
        ></input>
        <button
          onClick={() => {
            console.log(opt);
            if (opt == "작성자") {
              let copy = sent.filter((a, i) => {
                return sent2 == sent[i].writers;
              });
              console.log(copy);
              setCopys(copy);
              console.log("copys: ", copys);
            } else {
              let copy = sent.filter((a, i) => {
                return sent2 == sent[i].titles;
              });
              console.log(copy);
              setCopys(copy);
              console.log("copys: ", copys);
            }
            setChk(0);
          }}
        >
          검색
        </button>
        <button
          onClick={() => {
            setChk(1);
          }}
        >
          전체
        </button>
      </div>

      <div>
        <table style={{ border: "1px solid black", width: "500px", height: "5px" }}>
          <tr>
            <td>번호</td>
            <td>제목</td>
            <td>작성자</td>
          </tr>
          {chk == 0
            ? copys.map((a, i) => {
                return (
                  <>
                    <tr>
                      <td>{copys[i].number}</td>
                      <td>{copys[i].titles}</td>
                      <td>{copys[i].writers}</td>
                    </tr>
                  </>
                );
              })
            : sent.map((a, i) => {
                return (
                  <>
                    <tr>
                      <td>{sent[i].number}</td>
                      <td>{sent[i].titles}</td>
                      <td>{sent[i].writers}</td>
                    </tr>
                  </>
                );
              })}
        </table>
      </div>
    </>
  );
}

export default Board;
