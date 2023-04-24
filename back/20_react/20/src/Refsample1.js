import { useRef } from "react";
const RefSample = () => {
  const inputRef = useRef();
  const handleFocus = () => {
    // 3. useRef() 만든 객체의 current 값으로 접근
    inputRef.current.focus();
  };
  const handleDisabled = () => {
    inputRef.current.disabled = true;
  };
  return (
    <>
      <p>함수형 컴포넌트에서 버튼 클릭 input focusing</p>
      {/* 직접 접근해야하는 DOM요소에 ref prop 설정 */}
      <input type="text" ref={inputRef}></input>
      <button onClick={handleFocus}>focus</button>
      <button onClick={handleDisabled}>Disabled</button>
    </>
  );
};

export default RefSample;
