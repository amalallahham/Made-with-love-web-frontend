import React from "react";
import "../../Style/navbar.css";
import { Navbar, Nav, NavDropdown, Row, Col, Container } from "react-bootstrap";
import "../../Style/navbar.css";
import rose from "../../images/rose.png";
import logo11 from "../../images/logo11.png";
import back from "../../images/back.jpg";
import heart from "../../images/heart.jpg";

var NavbarSeller = () => {
  var signout = () => {
    localStorage.removeItem("token");
  };
  var id = JSON.parse(localStorage.getItem("token"))["id"];
  var url = `/seller/profile/${id}`;
  return (
    <div
      style={{
        width: "100%",
        height: "1000px",
        backgroundImage: `url(${back})`,
        // backgroundRepeat: "no-repeat",
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
              <img src={logo11} width="200" height="180" />
            </a>
          </div>

          <hr
            style={{
              border: "0",
              borderTop: "1px solid red",
            }}
          />
        </Row>
        <hr style={{ marginLeft: "170px", border: "0.5px solid white" }}></hr>
        <Row style={{ marginLeft: "90px" }}>
          <Col style={{ padding: "0px 20px 0px 150px" }}>
            <a
              href="/home"
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
              href={url + ""}
              style={{
                color: "#FCFBED",
                fontSize: "25px",
                fontFamily: "Yanone Kaffeesatz",
              }}
            >
              Profile
            </a>
          </Col>

          <Col style={{ padding: "0px 20px 0px 20px" }}>
            <a
              href="/orderList"
              style={{
                color: "#FCFBED",
                fontSize: "25px",
                fontFamily: "Yanone Kaffeesatz",
              }}
            >
              View Orders
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
          </Col>{" "}
          <NavDropdown
            id="collasible-nav-dropdown"
            style={{ padding: "15px", color: "#826105" }}
          >
            <NavDropdown.Item href="/settings" style={{ color: "#826105" }}>
              Setting
            </NavDropdown.Item>
            <NavDropdown.Item
              href="/"
              style={{ color: "#826105" }}
              onClick={signout}
            >
              Sign Out
            </NavDropdown.Item>
            <NavDropdown.Divider />
          </NavDropdown>
        </Row>
      </Container>
    </div>
  );
};
export default NavbarSeller;
