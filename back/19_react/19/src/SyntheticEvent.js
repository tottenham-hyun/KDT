function SyntheticEvent() {
  const syntheticEvent = () => {
    console.log("hello world");
  };
  const printInputValue = (e) => {
    console.log(e.target.value);
  };
  return (
    <>
      <div>
        <button onClick={syntheticEvent}>합성이벤트 콘솔찍기</button>
        <input type="text" placeholder="아무거나 입력" onChange={printInputValue} />
      </div>
    </>
  );
}

export default SyntheticEvent;
