import { useState } from "react";

function FunctionComponent2() {
  let [num, setNum] = useState(0);
  // let [enter, setEnter] = useState();
  const Increase = () => {
    setNum((num += 1));
    console.log(num);
  };
  const Decrease = () => {
    setNum((num -= 2));
    console.log(num);
  };
  // const Enter = () => {
  //   setEnter("입장하였습니다");
  // };
  // const Exit = () => {
  //   setEnter("퇴장하였습니다");
  // };
  return (
    <>
      <button onClick={Increase}>Increase</button>
      <button onClick={Decrease}>Decrease</button>
      <div>{num}</div>

      {/* <button onClick={Enter}>Enter</button>
      <button onClick={Exit}>Exit</button>
      <div>{enter}</div> */}
    </>
  );
}
export default FunctionComponent2;
