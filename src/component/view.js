import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Style/view.css";
import back from "../images/back.jpg";
import down from "../images/down.jpg";
import heart from "../images/heart.jpg";
import logo1 from "../images/logo1.png";
// const player = {
//     color : 'red',
//     fontFamily: 'Gochi Hand'
// }
function View() {
  return (
    <div>
      <div
        style={{
          width: "100%",
          height: "1030px",
          backgroundImage: `url(${back})`,
          backgroundRepeat: "no-repeat",
        }}
      >
        <Container>
          <Row className="justify-content-md-center">
            {/* <Col xs lg="3">
      1 of 3
    </Col> */}
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
            {/* <Col md="auto">
              <hr style={{ color: "white", height: "50px" }} />
            </Col> */}
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
          <Row style={{ padding: "40px" }}>
            <Col>
              <div
                style={{
                  float: "none",
                  marginLeft: "360px",
                  marginRight: "100px",
                  marginTop: "100px",
                }}
              >
                <a href="/">
                  <img src={heart} width="200" height="180" />
                </a>
              </div>
            </Col>
          </Row>
          <Row style={{ padding: "30px 60px 0px 150px" }}>
            <Col>
              <Link to="/seller/signup" style={{ textDecoration: "none" }}>
                <p
                  className="mb-0"
                  style={{
                    color: "#FCFBED",
                    fontSize: "30px",
                    fontFamily: "Yanone Kaffeesatz",
                    animationDuration: "1.5s",
                    animationTimingFunction: "ease-out",
                    animationDelay: "0",
                    animationDirection: "alternate",
                    animationIterationCount: "infinite",
                    animationFillMode: "none",
                    animationPlayState: "running",
                  }}
                >
                  Get Started With Your Business
                </p>
              </Link>
            </Col>
            <Col>
              <Link to="/buyer/signup" style={{ textDecoration: "none" }}>
                <p
                  className="mb-0"
                  style={{
                    color: "#FCFBED",
                    fontSize: "30px",
                    fontFamily: "Yanone Kaffeesatz",
                  }}
                >
                  {" "}
                  Find The Best Homemade Products
                </p>
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
      <br />
      <div style={{ padding: "150px 0px 0px 0px" }}>
        <Container>
          <Row>
            <Col style={{ padding: "0px 300px 0px 0px" }}>
              <Card style={{ width: "22rem" }}>
                <Card.Img
                  variant="top"
                  src="https://i0.wp.com/www.althemist.com/zass/wp-content/uploads/2017/03/baby_cat.jpg?resize=350%2C350&ssl=1"
                />
                <Card.Body>
                  <Card.Title>
                    His Little Hands Stole My Heart, His Little Feet Ran Away
                    With it.
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col style={{ padding: "0px 300px 0px 0px" }}>
              <Card style={{ width: "22rem" }}>
                <Card.Img
                  variant="top"
                  src="https://i0.wp.com/www.althemist.com/zass/wp-content/uploads/2017/03/jewelry_cat.jpg?resize=350%2C350&ssl=1"
                />
                <Card.Body>
                  <Card.Title>
                    Life Isn't Perfect, But Your Accessories Can Be.
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col style={{ padding: "0px 300px 0px 0px" }}>
              <Card style={{ width: "22rem" }}>
                <Card.Img
                  variant="top"
                  src="https://i.pinimg.com/originals/dc/b5/d1/dcb5d1d21a3531e0e7577ed0a949229e.jpg"
                />
                <Card.Body>
                  <Card.Title>
                    Cooking Is At One Child's Play And Adult Joy. And Cooking
                    Done With Care Is An Act Of Love.
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      {/* <div style={{ marginLeft: "360px",
    marginRight: "100px",
    marginBottom: "20px",
    marginTop: "100px",
    paddingTop: "10px"}}>
    <p style={{fontFamily: 'Yanone Kaffeesatz',  fontSize:'50px'}}>When Life Gives You Hand Make Handmade</p>
</div> */}
      <div
        style={{
          width: "100%",
          marginTop: "150px",
          height: "600px",
          backgroundImage: `url(${down})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <Container>
          <Row>
            <Col style={{ padding: "130px" }}>
              <h3 style={{ color: "#FCFBED" }}>Have a Question?</h3>
              <br />
              <i
                className="far fa-clock fa-2x"
                style={{ fontSize: "20px", color: "#FCFBED" }}
              >
                {" "}
                Saturday - Thursday: 09:00AM - 18:30PM
              </i>
              <br />
              <br />
              <i
                class="fas fa-map-marker-alt fa-2x"
                style={{ fontSize: "20px", color: "#FCFBED" }}
              >
                {" "}
                Jordan,Amman
              </i>
              <br />
              <br />
              <i
                class="fas fa-phone-alt fa-2x"
                style={{ fontSize: "20px", color: "#FCFBED" }}
              >
                {" "}
                +962796720978
              </i>
              <br />
              <br />
              <i
                class="fas fa-envelope fa-2x"
                style={{ fontSize: "20px", color: "#FCFBED" }}
              >
                <a
                  href="mailto:lovemadewith817@gmail.com"
                  style={{ color: "#FCFBED" }}
                >
                  {" "}
                  Made_With_Love
                </a>
              </i>
            </Col>
            <Col style={{ padding: "130px" }}>
              <h3 style={{ color: "#FCFBED" }}>Informations</h3>
              <br />
              <Link to="/about">
                <i
                  class="far fa-sticky-note fa-2x"
                  style={{ fontSize: "20px", color: "#FCFBED" }}
                >
                  {" "}
                  About Us
                </i>
              </Link>
              <br />
              <br />
              <Link to="/contactUs">
                <i
                  class="far fa-sticky-note fa-2x"
                  style={{ fontSize: "20px", color: "#FCFBED" }}
                >
                  {" "}
                  Contact Us
                </i>
              </Link>
              <br />
              <br />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
export default View;
