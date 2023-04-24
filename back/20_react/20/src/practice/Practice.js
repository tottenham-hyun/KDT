import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Card";
import Row from "react-bootstrap/Card";
import Col from "react-bootstrap/Card";
import "./practice.css";
import data from "./data";

function Practice() {
  let [post, setPost] = useState([]);
  useEffect(() => {
    setTimeout(() => setPost([...post, ...data]), 2000);
  }, []);
  return (
    <>
    <Container>
      <div className="header">Post List</div>
      <Row>
        <Col>
       
        {post.length == 0
          ? <Loading></Loading>
          : post.map((a, i) => {
              return (
                <>
                 <div className="card_container">
                    <Cards d={post} i={i}></Cards>
                 </div>
                </>
              )
            })}
        
        </Col>
      </Row>
    </Container>
    </>
  );
}

function Cards({ d, i }) {
  return (
    <Card>
      <Card.Body>
        <Card.Title>No. {d[i].id}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{d[i].title}</Card.Subtitle>
        <Card.Text>{d[i].body}</Card.Text>
      </Card.Body>
    </Card>
  )
}

function Loading(){
    return(
        <>
            <div id="load">
                <h1>Loading...</h1>
            </div>
        </>
    )
}
export default Practice;
