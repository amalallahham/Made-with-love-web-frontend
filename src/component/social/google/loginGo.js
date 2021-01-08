import React, { Component } from "react";
import $ from "jquery";

//Assets
import google from "./google.png";

import config from "../config";

class GoogleLogin extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    (function () {
      var e = document.createElement("script");
      e.type = "text/javascript";
      e.async = true;
      e.src = "https://apis.google.com/js/client:platform.js?onload=gPOnLoad";
      var t = document.getElementsByTagName("script")[0];
      t.parentNode.insertBefore(e, t);
    })();
  }

  // saveData() {

  // }

  //Triggering login for google
  googleLogin = () => {
    let response = null;
    window.gapi.auth.signIn({
      callback: function (authResponse) {
        this.googleSignInCallback(authResponse);
      }.bind(this),
      clientid: config.google, //Google client Id
      cookiepolicy: "single_host_origin",
      requestvisibleactions: "http://schema.org/AddAction",
      scope: "https://www.googleapis.com/auth/plus.login email",
    });
  };

  googleSignInCallback = (e) => {
    console.log(e);
    if (e["status"]["signed_in"]) {
      window.gapi.client.load(
        "plus",
        "v1",
        function () {
          if (e["access_token"]) {
            this.getUserGoogleProfile(e["access_token"]);
          } else if (e["error"]) {
            console.log("Import error", "Error occured while importing data");
          }
        }.bind(this)
      );
    } else {
      console.log("Oops... Error occured while importing data");
    }
  };

  getUserGoogleProfile = (accesstoken) => {
    var e = window.gapi.client.plus.people.get({
      userId: "me",
    });
    e.execute(
      function (e) {
        if (e.error) {
          console.log(e.message);
          console.log("Import error - Error occured while importing data");
          return;
        } else if (e.id) {
          //Profile data
          // alert("Successfull login from google : " + e.displayName);
          console.log(e, "khkkkkkkkk");
          var obj = {};
          obj.email = e.emails[0]["value"];
          obj.password = "";

          console.log(obj);
          $.ajax({
            url: "http://127.0.0.1:8000/login",
            method: "POST",
            data: JSON.stringify(obj),
            contentType: "application/json",
            success: function (data) {
              console.log("POST sent successfully!");
              localStorage.setItem("token", JSON.stringify(data));
              console.log(JSON.parse(localStorage.getItem("token")));
              var tokenObj = JSON.parse(localStorage.getItem("token"));
              if (tokenObj.type === "buyer") window.location = "/home";
            },
            error: function (err) {
              console.log(err);
              alert("email already exist");
            },
          });

          return;
        }
      }.bind(this)
    );
  };

  render() {
    return (
      <img
        src={google}
        title="google login"
        alt="google"
        width="60px"
        height="50px"
        style={{ margin: "20px 250px 0px 250px" }}
        onClick={() => this.googleLogin()}
      />
    );
  }
}

export default GoogleLogin;
