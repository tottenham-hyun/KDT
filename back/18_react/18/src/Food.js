function Food(props) {
  return (
    <>
      <h1>{props.food}입니다</h1>
    </>
  );
}

Food.defaultProps = {
  food: "제육볶음",
};

export default Food;
