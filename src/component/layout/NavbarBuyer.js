import React from "react";
import { Navbar, Nav, NavDropdown, Row, Col, Container } from "react-bootstrap";
import "../../Style/navbar.css";
import { Link } from "react-router-dom";
import heart from "../../images/heart.jpg";
import logo from "../../images/logo.png";
import back3 from "../../images/back3.jpg";
var NavbarBuyer = () => {
  var signout = () => {
    localStorage.removeItem("token");
  };
  return (
    <div
      style={{
        backgroundImage: `url(${back3})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "500px",
      }}
    >
      <Container className="justify-content-md-center">
        <Row>
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
              <img src={logo} width="200" height="180" />
            </a>
          </div>
          <Col md="auto"></Col>
          <hr
            style={{
              border: "0",
              borderTop: "1px solid rgba(0, 0, 0, 0.1)",
            }}
          />
        </Row>
        <hr
          style={{ marginLeft: "100px", border: "0.5px solid  #FCFBED" }}
        ></hr>
        <Row>
          <Col style={{ color: "#FCFBED" }}>
            <NavDropdown
              title="Category"
              id="collasible-nav-dropdown"
              color="#FCFBED"
              style={{
                margin: "0px 0px 0px 80px",
                fontSize: "20px",
                color: "#FCFBED",
                padding: "0px 0px 0px 100px ",
                fontFamily: "Yanone Kaffeesatz",
                fontSize: "25px",
              }}
            >
              {/* <NavDropdown.Item href="/notification">View Notifications</NavDropdown.Item> */}
              <NavDropdown.Item
                href="/buyer/food"
                style={{ fontFamily: "Yanone Kaffeesatz" }}
              >
                Food
              </NavDropdown.Item>
              <NavDropdown.Item
                href="/buyer/clothes"
                style={{ fontFamily: "Yanone Kaffeesatz" }}
              >
                Clothes
              </NavDropdown.Item>
              <NavDropdown.Item
                href="/buyer/babyproducts"
                style={{ fontFamily: "Yanone Kaffeesatz" }}
              >
                Baby Products
              </NavDropdown.Item>
              <NavDropdown.Item href="/buyer/accessories">
                Accessories
              </NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
          </Col>
          <Col style={{ padding: "0px 20px 0px 100px" }}>
            <a
              href="/"
              style={{
                color: "#FCFBED",
                fontSize: "25px",
                fontFamily: "Yanone Kaffeesatz",
                padding: "0px 180px ",
              }}
            >
              Home
            </a>
          </Col>
          <Col style={{ padding: "0px 20px 0px 20px" }}></Col>
          <Col>
            <NavDropdown
              color="#FCFBED"
              id="collasible-nav-dropdown"
              style={{ margin: "0px 80px 0px 0px" }}
              // title=<i class="fas fa-bars fa-2x"></i>
            >
              {/* <NavDropdown.Item href="/notification">View Notifications</NavDropdown.Item> */}
              <NavDropdown.Item href="/settings">Setting</NavDropdown.Item>
              <NavDropdown.Item href="/" onClick={signout}>
                Sign Out
              </NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
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
      </Container>
    </div>
    // <div className="App">
    //   <Navbar
    //     collapseOnSelect
    //     expand="lg"
    //     bg="#800000"
    //     variant="dark"
    //     style={{ width: "100%" }}
    //   >
    //     <Navbar.Brand href="/">Made With Love</Navbar.Brand>
    //     <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    //       <Navbar.Brand href="/home">Made With Love</Navbar.Brand>
    //       <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    //       <Navbar.Collapse id="responsive-navbar-nav">
    //         <Nav className="mr-auto">
    //           <NavDropdown title="category" id="collasible-nav-dropdown">
    //             <NavDropdown.Item href="/buyer/food">Food</NavDropdown.Item>
    //             <NavDropdown.Item href="/buyer/clothes">
    //               Clothes
    //             </NavDropdown.Item>
    //             <NavDropdown.Item href="/buyer/accessories">
    //               Accessories
    //             </NavDropdown.Item>
    //             <NavDropdown.Item href="/buyer/babyproducts">
    //               Baby Accessories
    //             </NavDropdown.Item>
    //             <NavDropdown.Divider />
    //           </NavDropdown>
    //         </Nav>
    //         <Nav>
    //           <NavDropdown
    //             id="collasible-nav-dropdown"
    //             style={{ margin: "0px 80px 0px 0px" }}
    //           >
    //             {/* <NavDropdown.Item href="/notification">View Notifications</NavDropdown.Item> */}
    //             <NavDropdown.Item href="/settings">Setting</NavDropdown.Item>
    //             <NavDropdown.Item href="/" onClick={signout}>
    //               Sign Out
    //             </NavDropdown.Item>
    //             <NavDropdown.Divider />
    //           </NavDropdown>
    //         </Nav>
    //       </Navbar.Collapse>
    //     </Navbar>
    //   </Navbar>
    // </div>
  );
};
export default NavbarBuyer;
