import { useRef } from "react";

const RefSample2 = () => {
  const id = useRef(1);
  const plusRef = () => {
    id.current += 1;
  };
  const minusRef = () => {
    id.current -= 1;
    console.log(id.current);
  };
  return (
    <>
      <h1>{id.current}</h1>
      <button onClick={plusRef}>plus ref</button>
      <button onClick={minusRef}>minus ref</button>
    </>
  );
};

export default RefSample2;
