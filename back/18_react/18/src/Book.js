import "./Book.css";
import apple from "./apple.png";

function Book({ title, author, price, type }) {
  return (
    <>
      <div className="container">
        <img src={apple}></img>
        <h2>{title}</h2>
        <h3>저자: {author}</h3>
        <h3>판매가: {price}원</h3>
        <h3>구분: {type}</h3>
      </div>
    </>
  );
}

export default Book;
