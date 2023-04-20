import { useState } from "react";

function Show() {
  let [show, setShow] = useState(true);

  const disapper = () => {
    setShow(!show);
  };
  return (
    <>
      {show ? (
        <button onClick={disapper}>사라져라</button>
      ) : (
        <button onClick={disapper}>보여라</button>
      )}
      {show ? <div>안녕하세요</div> : null}
    </>
  );
}

export default Show;
