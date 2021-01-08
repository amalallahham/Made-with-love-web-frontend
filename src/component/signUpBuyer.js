import React from "react";
import { connect } from "react-redux";
import loogo from "../images/loogo.png";
import { Card, NavDropdown, Row, Col, Container } from "react-bootstrap";
import down from "../images/down.jpg";
import $ from "jquery";
import { Control, Form } from "react-redux-form";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import buyer2 from "../images/buyer2.jpg";


var mapStateToProps = (state) => {
  console.log(state, "staaaaat");
  return {
    email: state.reducerBuyer.email,
    password: state.reducerBuyer.password,
    userName: state.reducerBuyer.userName,
    location: state.reducerBuyer.location,
    phoneNumber: state.reducerBuyer.phoneNumber,
  };
};

var action = { type: "INPUT_BUYER", text: "" };
var mapDispatchToProps = (dispatch) => {
  return {
    inputChanged: (event) => {
      action = {
        type: "INPUT_BUYER",
        text: event.target.value,
        name: event.target.name,
      };
      dispatch(action);
    },
  };
};

//make sign up buyer component
function SignUpBuyer(props) {
  //console.log(props)
  //make ajax to send values of inputs
  var clickButton = (signUpBuyer) => {
    console.log(props);
    var obj = {};
    obj.email = props.email;
    obj.password = props.password;
    obj.userName = props.userName;
    obj.location = props.location;
    obj.phoneNumber = props.phoneNumber;

    console.log(obj);
    $.ajax({
      url: "http://127.0.0.1:8000/buyer/signup",
      method: "POST",
      data: JSON.stringify(obj),
      contentType: "application/json",

      success: function (data) {
        console.log("POST sent successfully!");
        window.location = `/login`;

        // window.location = "/login";
      },
      error: function (err) {
        console.log(err);
        alert(err.responseJSON.error);
        window.location = "/buyer/signup";
      },
    });
  };

  return (
    <div>
      <div
        className="creative-tim-logo"
        style={{
          backgroundPosition: "center",
          backgroundImage: `url(${buyer2})`,
          backgroundSize: "cover",
          height: "650px",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",

          position: "relative",
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
                <img src={loogo} width="200" height="180" />
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
            <Col style={{ padding: "0px 550px 0px 550px" }}>
              <a
                href="/"
                style={{
                  color: "#FCFBED",
                  fontSize: "30px",
                  fontFamily: "Yanone Kaffeesatz",
                }}
              >
                Home
              </a>
            </Col>
            <Col style={{ padding: "0px 20px 0px 20px" }}></Col>
          </Row>
          {/* <Row style={{ padding: "40px" }}>
            <Col>
              <div
                style={{
                  float: "none",
                  marginLeft: "360px",
                  marginRight: "100px",
                  marginTop: "60px",
                }}
              >
                <a href="/">
                  <img src={heart} width="180" height="150" />
                </a>
              </div>
            </Col>
          </Row> */}
          <Row>
            <Col
              style={{
                marginLeft: "110px",
                marginRight: "110px",
                marginTop: "100px",
              }}
            >
              <div
                style={{
                  fontFamily: "Yanone Kaffeesatz",
                  float: "none",
                  fontSize: "55px",
                  color: "#FCFBED",
                }}
              >
                Your Best Source Of Handmade Goods!!
                <br /> Discover Beautifull Products Made With Love!!
              </div>
            </Col>
          </Row>
        </Container>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        <Row>
          <Col>
            <h2
              style={{
                fontFamily: "Yanone Kaffeesatz",
                float: "none",
                margin: "-60px 900px 0px 900px",
                fontSize: "70px",
              }}
            >
              Sign Up
            </h2>
          </Col>
        </Row>
      </div>
      <Card
        style={{
          width: "800px",
          margin: "200px auto",
          height: "700px",
          padding: "25px 0px 10px 25px",
        }}
      >
        <div>
          {/* <div className="card-body"> */}
          <div className="container">
            <Form
              class="row g-3 needs-validation"
              model="login"
              type="submit"
              onSubmit={(signUpSeller) => clickButton(signUpSeller)}
              novalidate
            >
              <div class="col-md-4">
                <label
                  for="validationCustom01"
                  class="form-label"
                  style={{
                    fontFamily: "Yanone Kaffeesatz",
                    fontSize: "28px",
                  }}
                >
                  Email address
                </label>
                <Control.text
                  style={{
                    width: "600px",

                    height: "60px",
                  }}
                  autocomplete="off"
                  name="email"
                  className="form-control"
                  type="email"
                  placeholder="Enter email"
                  model="signUpBuyer.email"
                  id="signUpBuyer.email"
                  required
                  onChange={props.inputChanged}
                />

                <label
                  for="validationCustom01"
                  class="form-label"
                  style={{
                    fontFamily: "Yanone Kaffeesatz",
                    fontSize: "28px",
                  }}
                >
                  password
                </label>
                <Control.text
                  style={{
                    width: "600px",

                    height: "60px",
                  }}
                  autocomplete="off"
                  name="password"
                  className="form-control"
                  type="password"
                  placeholder="Enter password"
                  model="signUpBuyer.password"
                  id="signUpBuyer.password"
                  required
                  onChange={props.inputChanged}
                />

                <label
                  for="validationCustom01"
                  class="form-label"
                  style={{
                    fontFamily: "Yanone Kaffeesatz",
                    fontSize: "28px",
                  }}
                >
                  userName
                </label>
                <Control.text
                  style={{
                    width: "600px",

                    height: "60px",
                  }}
                  autocomplete="off"
                  name="userName"
                  className="form-control"
                  type="userName"
                  placeholder="Enter userName"
                  model="signUpBuyer.userName"
                  id="signUpBuyer.userName"
                  required
                  onChange={props.inputChanged}
                />

                <label
                  for="validationCustom01"
                  class="form-label"
                  style={{
                    fontFamily: "Yanone Kaffeesatz",
                    fontSize: "28px",
                  }}
                >
                  Phone Number
                </label>
                <Control.text
                  style={{
                    width: "600px",

                    height: "60px",
                  }}
                  autocomplete="off"
                  name="phoneNumber"
                  className="form-control"
                  type="userName"
                  placeholder="Enter phone Number"
                  model="signUpBuyer.phoneNumber"
                  id="signUpBuyer.phoneNumber"
                  required
                  onChange={props.inputChanged}
                />

                <div class="col-12">
                  <button
                    type="submit"
                    style={{
                      borderRadius: "10px",
                      border: "2px solid white",
                      fontSize: "25px",
                      padding: "14px 28px",
                      fontFamily: "Yanone Kaffeesatz",
                      marginTop: "50px",
                    }}
                  >
                    Sign Up
                  </button>
                </div>

                {/* <Link to="/login">
                  <a style={{ margin: "10px -100px 0px 100px" }}>
                    Already have an acount ? Login
                  </a>
                </Link> */}
                {/* <GoogleLogin />
                <Facebook /> */}
              </div>
            </Form>
          </div>
        </div>
      </Card>
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
              <h3 style={{ color: "#fcfbed" }}>Have a Question?</h3>
              <br />

              <i
                className="far fa-clock fa-2x"
                style={{ fontSize: "20px", color: "#fcfbed" }}
              >
                {" "}
                Saturday - Thursday: 09:00AM - 18:30PM
              </i>
              <br />
              <br />
              <i
                class="fas fa-map-marker-alt fa-2x"
                style={{ fontSize: "20px", color: "#fcfbed" }}
              >
                {" "}
                Jordan,Amman
              </i>
              <br />
              <br />
              <i
                class="fas fa-phone-alt fa-2x"
                style={{ fontSize: "20px", color: "#fcfbed" }}
              >
                {" "}
                +962796720978
              </i>
              <br />
              <br />
              <i
                class="fas fa-envelope fa-2x"
                style={{ fontSize: "20px", color: "#fcfbed" }}
              >
                <a
                  href="mailto:lovemadewith817@gmail.com"
                  style={{ color: "#fcfbed" }}
                >
                  {" "}
                  Made_With_Love
                </a>
              </i>
            </Col>
            <Col style={{ padding: "130px" }}>
              <h3 style={{ color: "#fcfbed" }}>Informations</h3>
              <br />
              <Link to="/about">
                <i
                  class="far fa-sticky-note fa-2x"
                  style={{ fontSize: "20px", color: "#fcfbed" }}
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
                  style={{ fontSize: "20px", color: "#fcfbed" }}
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
export default connect(mapStateToProps, mapDispatchToProps)(SignUpBuyer);
