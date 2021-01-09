import React from "react";
import { Navbar, Nav, NavDropdown, Row, Col, Container } from "react-bootstrap";
import "../../Style/navbar.css";
import heart from "../../images/heart.jpg";
import logo11 from "../../images/logo11.png";
import back from "../../images/back.jpg";
var NavbarBuyer = () => {
  var signout = () => {
    localStorage.removeItem("token");
  };
  return (
    <div
      style={{
        backgroundImage: `url(${back})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "800px",
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
          <Col md="auto">
            <hr style={{ color: "white", height: "50px" }} />
          </Col>
          <hr
            style={{
              border: "0",
              borderTop: "1px solid rgba(0, 0, 0, 0.1)",
            }}
          />
        </Row>
        <hr style={{ marginLeft: "170px", border: "0.5px solid white" }}></hr>
        <Row style={{ marginLeft: "90px" }}>
          <Col style={{ padding: "0px 20px 0px 150px" }}>
            <a
              href="/buyer/food"
              style={{
                color: "#FCFBED",
                fontSize: "25px",
                fontFamily: "Yanone Kaffeesatz",
              }}
            >
              Food
            </a>
          </Col>
          <Col style={{ padding: "0px 20px 0px 20px" }}>
            <a
              href="/buyer/clothes"
              style={{
                color: "#FCFBED",
                fontSize: "25px",
                fontFamily: "Yanone Kaffeesatz",
              }}
            >
              Clothes
            </a>
          </Col>
          <Col style={{ padding: "0px 20px 0px 20px" }}>
            <a
              href="/buyer/accessories"
              style={{
                color: "#FCFBED",
                fontSize: "25px",
                fontFamily: "Yanone Kaffeesatz",
              }}
            >
              Accessories
            </a>
          </Col>
          <Col style={{ padding: "0px 20px 0px 20px" }}>
            <a
              href="/buyer/babyproducts"
              style={{
                color: "#FCFBED",
                fontSize: "25px",
                fontFamily: "Yanone Kaffeesatz",
              }}
            >
              Baby Stuff
            </a>
          </Col>

          <Col>
            <NavDropdown
              id="collasible-nav-dropdown"
              style={{ margin: "0px 80px 0px 0px" }}
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
              {/* <a href="/">
                <img src={heart} width="200" height="180" />
              </a> */}
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
