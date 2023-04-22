import { useState } from "react";

function Counter() {
  let [cnt, setCnt] = useState(0);
  const up = () => {
    setCnt((cnt += 1));
  };
  const alertMsg = (msg) => {
    alert(`${msg} ${cnt}`);
  };

  return (
    <>
      <div>{cnt}</div>;<button onClick={up}>up!</button>
      <button
        onClick={() => {
          alertMsg("안녕");
        }}
      >
        alert 띄우기
      </button>
    </>
  );
}

export default Counter;
