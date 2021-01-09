import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Style/view.css";
import back from "../images/back.jpg";
// import down from "../images/down.jpg";
// import heart from "../images/heart.jpg";
import logo1 from "../images/logo1.png";
import story from "../images/story.jpg";
const About = () => {
  return (
    <div>
      <div
        style={{
          width: "100%",
          height: "700px",
          backgroundImage: `url(${back})`,
          backgroundRepeat: "no-repeat",
        }}
      >
        <Container>
          <Row className="justify-content-md-center">
            <div
              style={{
                float: "none",
                marginLeft: "450px",
                marginRight: "100px",
                marginBottom: "20px",
                marginTop: "0",
                paddingTop: "10px",
              }}
            >
              <a href="/">
                <img src={logo1} width="200" height="180" />
              </a>
            </div>

            <hr
              style={{
                border: "0",
                borderTop: "1px solid rgb(0, 0, 0, 0)",
              }}
            />
          </Row>
          <hr style={{ marginLeft: "170px", border: "0.5px solid white" }}></hr>
          <Row style={{ marginLeft: "50px" }}>
            <Col style={{ padding: "0px 20px 0px 150px" }}>
              <a
                href="/"
                style={{
                  color: "#FCFBED",
                  fontSize: "25px",
                  fontFamily: "Yanone Kaffeesatz",
                }}
              >
                Home
              </a>
            </Col>
            <Col style={{ padding: "0px 20px 0px 20px" }}>
              <a
                href="/about"
                style={{
                  color: "#FCFBED",
                  fontSize: "25px",
                  fontFamily: "Yanone Kaffeesatz",
                }}
              >
                About Us
              </a>
            </Col>
            <Col style={{ padding: "0px 20px 0px 20px" }}>
              <a
                href="/login"
                style={{
                  color: "#FCFBED",
                  fontSize: "25px",
                  fontFamily: "Yanone Kaffeesatz",
                }}
              >
                Login
              </a>
            </Col>
          </Row>
        </Container>
      </div>
      <br></br> <br></br>
      <div>
        <Container>
          <Row style={{ marginTop: "150px", marginLeft: "-250px" }}>
            <Col className="col-6">
              <img src={story}></img>
            </Col>
            <Col className="col-6">
              <h1 style={{ marginLeft: "400px", marginTop: "200px" }}>
                Our Story
              </h1>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};
export default About;
