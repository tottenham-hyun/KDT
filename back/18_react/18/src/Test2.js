import apple from "./apple.png";
function Test2() {
  let style = { color: "orange", fontSize: "40px", marginTop: "20px" };
  return (
    <>
      <div style={style}>
        <h2>안녕하세요</h2>
        <img src={apple}></img>
      </div>
    </>
  );
}

export default Test2;
