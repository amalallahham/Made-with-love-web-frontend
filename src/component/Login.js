//import { connect } from 'react-redux';
import $ from "jquery";
import React from "react";
import { Control, Form } from "react-redux-form";
import Navbar from "./layout/Navbar";
// import GoogleLogin from "./social/google/google";
import GoogleLogin from "react-google-login";
import FacebookLogin from "react-facebook-login";

class Login extends React.Component {
  responseGoogle(response) {
    console.log(response, "google response");
    console.log(response.profileObj, "profiiile");
    var obj = {};
    obj.email = response.profileObj["email"];
    obj.password = "";
    obj.userName = response.profileObj["givenName"];
    obj.location = "";
    obj.phoneNumber = "";

    console.log(obj);
    $.ajax({
      url: "http://127.0.0.1:8000/login",
      method: "POST",
      data: JSON.stringify(obj),
      contentType: "application/json",

      success: function (response) {
        localStorage.setItem("token", JSON.stringify(response));
        console.log(JSON.parse(localStorage.getItem("token")));
        var tokenObj = JSON.parse(localStorage.getItem("token"));
        if (tokenObj.type === "buyer") window.location = "/home";
        //if the user if a seller
        if (tokenObj.type === "seller")
          window.location = `/seller/profile/${tokenObj["id"]}`;
      },
      error: function (err) {
        // window.location.replace('/login')
        console.log("erroddddr:");
        // alert(err.responseJSON.Error);
        // setTimeout(() => {
        //   alert("Email Or Password Incorrect");
        // }, 300);
        // window.location = "/login";
      },
    });
  }

  responseFacebook(response) {
    console.log(response);
    var obj = {};
    obj.email = response.email;
    obj.password = "";
    obj.userName = response.name;
    obj.location = "";
    obj.phoneNumber = "";

    console.log(obj);
    $.ajax({
      url: "http://127.0.0.1:8000/login",
      method: "POST",
      data: JSON.stringify(obj),
      contentType: "application/json",

      success: function (response) {
        localStorage.setItem("token", JSON.stringify(response));
        console.log(JSON.parse(localStorage.getItem("token")));
        var tokenObj = JSON.parse(localStorage.getItem("token"));
        if (tokenObj.type === "buyer") window.location = "/home";
        //if the user if a seller
        if (tokenObj.type === "seller")
          window.location = `/seller/profile/${tokenObj["id"]}`;
      },
      error: function (err) {
        // window.location.replace('/login')
        console.log("erroddddr:");
        // alert(err.responseJSON.Error);
        // setTimeout(() => {
        //   alert("Email Or Password Incorrect");
        // }, 300);
        // window.location = "/login";
      },
    });
  }

  ajax(login) {
    $.ajax({
      method: "POST",
      url: "http://127.0.0.1:8000/login", //fix it later
      data: JSON.stringify(login),
      contentType: "application/json",
      success: function (res) {
        localStorage.setItem("token", JSON.stringify(res));
        console.log(JSON.parse(localStorage.getItem("token")));
        var tokenObj = JSON.parse(localStorage.getItem("token"));
        if (tokenObj.type === "buyer") window.location = "/home";
        //if the user if a seller
        if (tokenObj.type === "seller")
          window.location = `/seller/profile/${tokenObj["id"]}`;
      },
      error: function (err) {
        // window.location.replace('/login')
        console.log("erroddddr:", err.responseJSON.Error);
        alert(err.responseJSON.Error);
        // setTimeout(() => {
        //   alert("Email Or Password Incorrect");
        // }, 300);
        window.location = "/login";
      },
    });
  }
  render() {
    return (
      <div>
        <Navbar />
        <div style={{ marginLeft: "700px" }}>
          <br></br>
          <br></br>
          <Form
            class="row g-3 needs-validation"
            model="login"
            type="submit"
            onSubmit={(login) => this.ajax(login)}
            novalidate
          >
            <div class="col-md-4">
              <label for="validationCustom01" class="form-label">
                Email address
              </label>
              <b></b>
              <br></br>
              <Control.text
                className="form-control"
                type="email"
                placeholder="Enter email"
                model="login.email"
                id="login.email"
                required
                style={{ padding: "2px 2px 2px 2px" }}
              />
              <div class="valid-feedback">Looks good!</div>
              <b></b>
              <br></br>
              <label for="validationCustom01" className="form-label">
                Password
              </label>
              <Control.text
                className="form-control"
                type="password"
                placeholder="Enter Password"
                model="login.password"
                id="login.password"
                required
                style={{ padding: "7px 2px 2px 2px" }}
              />
              <div class="valid-feedback">Looks good!</div>
              <b></b>
              <br></br>
              <div class="col-12">
                <button class="btn btn-primary" type="submit">
                  Log in
                </button>
              </div>
            </div>{" "}
            {/* <GoogleLogin /> */}
            <GoogleLogin
              clientId="618615503064-dlp8abcbs4u3l9gd0r3g41hrdigirah7.apps.googleusercontent.com"
              buttonText="Login"
              onSuccess={this.responseGoogle}
              onFailure={this.responseGoogle}
              cookiePolicy={"single_host_origin"}
              onClick={this.responseGoogle}
            />
            <FacebookLogin
              appId="3491517994290436"
              autoLoad={true}
              fields="name,email,picture"
              callback={this.responseFacebook}
              cssClass="my-facebook-button-class"
              icon={<i class="fab fa-facebook-square"></i>}
            />
          </Form>
        </div>{" "}
      </div>
    );
  }
}
export default Login;
