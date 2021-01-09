import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Style/view.css";
import back from "../images/back.jpg";
import down from "../images/down.jpg";
import heart from "../images/heart.jpg";
import logo1 from "../images/logo1.png";
import contactUs from "../images/contactUs.jpg";
// const player = {
//     color : 'red',
//     fontFamily: 'Gochi Hand'

// }
function ContactUs() {
  return (
    <div>
      <div
        style={{
          width: "100%",
          height: "1050px",
          backgroundImage: `url(${contactUs})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
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
                marginLeft: "auto",
                marginRight: "auto",
                marginBottom: "20px",
                marginTop: "0",
                paddingTop: "10px",
              }}
            >
              <a href="/">
                <img src={logo1} width="200" height="180" />
              </a>
            </div>
          </Row>
          <hr style={{ marginLeft: "20px", border: "0.5px solid white" }}></hr>
          <Row>
            <Col style={{ padding: "0px 20px 0px 100px" }}>
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
                }}
              >
                <a href="/">
                  <img src={heart} width="200" height="180" />
                </a>
              </div>
            </Col>
          </Row>
          <Row>
            <Col
              style={{
                marginLeft: "340px",
                marginRight: "340px",
                marginBottom: "20px",
              }}
            >
              <div
                style={{
                  fontFamily: "Yanone Kaffeesatz",
                  float: "none",
                  fontSize: "80px",
                  color: "#FCFBED",
                  width: "auto",
                  height: "auto",
                }}
              >
                Contacts
              </div>
            </Col>
          </Row>
          <Row style={{ padding: "200px 10px 0px 80px" }}>
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
      <div style={{ padding: "150px 10px 0px 10px" }}>
        <Container>
          <Row>
            <Col
              style={{
                marginBottom: "20px",
              }}
            >
              <h2
                style={{
                  fontFamily: "Yanone Kaffeesatz",
                  float: "none",
                  marginRight: "400px",
                  marginLeft: "400px",
                  fontSize: "70px",
                }}
              >
                Contact Us
              </h2>
              <div>
                <hr
                  style={{
                    marginLeft: "-100px",
                    marginRight: "-100px",
                    border: "0.5px solid black",
                  }}
                ></hr>
              </div>
              <br />
              <div>
                <p
                  className="mb-0"
                  style={{
                    fontFamily: "Yanone Kaffeesatz",
                    fontSize: "30px",
                    marginRight: "200px",
                    marginLeft: "200px",
                  }}
                >
                  {" "}
                  We Always Support And Welcome Creative Open-Minded People Who
                  Would Like To Share Their Unique Creation. Feel Free To Say
                  Hello!
                </p>
              </div>
            </Col>
          </Row>
          <br />
          <Row>
            <Col style={{ marginRight: "400px", marginLeft: "400px" }}>
              <i
                class="fas fa-map-marker-alt fa-2x"
                style={{ fontSize: "25px" }}
              >
                {" "}
                Jordan,Amman
              </i>
              <br />
              <br />
              <br />
              <i class="fas fa-phone-alt fa-2x" style={{ fontSize: "25px" }}>
                {" "}
                +962796720978
              </i>
              <br />
              <br />
              <br />
              <i class="fas fa-envelope fa-2x" style={{ fontSize: "25px" }}>
                <a
                  href="mailto:lovemadewith817@gmail.com"
                  style={{ color: "black" }}
                >
                  {" "}
                  Made_With_Love
                </a>
              </i>
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
export default ContactUs;
