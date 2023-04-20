function Color() {
  let [title, setTitle] = "검정색 글씨";

  const Red = () => {
    setTitle("빨간색 글씨");
  };
  const Blue = () => {
    setTitle("파란색 글씨");
  };
  return (
    <>
      <div>{title}</div>
      <button onClick="Red" style={{ color: "red" }}>
        빨간색
      </button>
      <button onClick="Blue" style={{ color: "blue" }}>
        파란색
      </button>
    </>
  );
}

export default Color;
