import React from "react";
import { connect } from "react-redux";

// import store from './Store';
// import ReactDOM from "react-dom";
import $ from "jquery";
import { Control, Form } from "react-redux-form";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import GoogleLogin from "./social/social/google/google";
import Facebook from "./social/social/facebook/facebook";
import app from './fireConfig';
import NavBar from "./layout/Navbar";
// import Social from "./social";
import LoginGo from "./social/google/loginGo";
var storage = app.storage();
//call the state I need from the store
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
    <div
    >
      <NavBar />
      <div style={{ maxWidth: "500px", margin: 'auto',  padding: '50px 10px 10px 10px'  }}>
        <div className="card w-100">
          {/* <div className="card-body"> */}
          <div className="container">
          <Form
            class="row g-3 needs-validation"
            model="login"
            type="submit"
            onSubmit={(signUpBuyer) => clickButton(signUpBuyer)}
            novalidate
           
          >
            <div class="col-md-4">
            <label for="validationCustom01" class="form-label">Email address</label>
<Control.text autocomplete="off" name="email"  className="form-control" type="email" placeholder="Enter email" model="signUpBuyer.email"  id="signUpBuyer.email" required  style={{ padding: "2px 2px 2px 2px" }} onChange={props.inputChanged} />

<label for="validationCustom01" class="form-label">password</label>
<Control.text autocomplete="off" name="password"  className="form-control" type="password" placeholder="Enter password"  model="signUpBuyer.password"  id="signUpBuyer.password" required  style={{ padding: "2px 2px 2px 2px" }} onChange={props.inputChanged} />       

<label for="validationCustom01" class="form-label">userName</label>
<Control.text autocomplete="off" name="userName"  className="form-control" type="userName" placeholder="Enter userName"  model="signUpBuyer.userName"  id="signUpBuyer.userName" required  style={{ padding: "2px 2px 2px 2px" }} onChange={props.inputChanged} />       

<label for="validationCustom01" class="form-label">Phone Number</label>
<Control.text autocomplete="off" name="phoneNumber"  className="form-control" type="userName" placeholder="Enter phone Number"  model="signUpBuyer.phoneNumber"  id="signUpBuyer.phoneNumber" required  style={{ padding: "2px 2px 2px 2px" }} onChange={props.inputChanged} />       

<div class="col-12">
              <button type="submit" className="btn btn-danger" style={{ margin: '0px 180px', width: 100 }}>Sign Up</button>
              </div>

              <Link to="/login">
                  <a style={{ margin: "0px 90px 0px 90px" }}>
                    Already have an acount ? Login
                  </a>
                </Link>
                <GoogleLogin />
                <Facebook />
             
           
          </div>
          </Form>
        </div>
      </div>
    </div>
    </div>
  );
}
export default connect(mapStateToProps, mapDispatchToProps)(SignUpBuyer);