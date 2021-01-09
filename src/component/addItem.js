import $ from "jquery";
import React, { useState } from "react";
import { Control, Form } from "react-redux-form";
import NavbarSeller from "./layout/NavbarSeller";
import { storage } from "./fireConfig.js";
import down from "../images/down.jpg";
import { Card, Row, Col, Container } from "react-bootstrap";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
function ItemForm(props) {
  console.log("caaaat", props.location.info);
  const [url, setUrl] = useState("");
  const [image, setImage] = useState("");
  var obj1 = { category: props.location.info.id, url: "", user: {} };
  const ajax = (user) => {
    var tokenObj = JSON.parse(localStorage.getItem("token"));
    obj1 = Object.assign({}, user);
    console.log(url);
    obj1["url"] = url;
    obj1.category = props.location.info.id;
    obj1.user = tokenObj["id"];
    console.log(obj1);
    $.ajax({
      method: "POST",
      url: "http://127.0.0.1:8000/seller/addItem", //fix it later
      data: JSON.stringify(obj1),
      contentType: "application/json",
      success: function () {
        console.log(obj1, "success");
        window.location = `/seller/profile/${
          JSON.parse(localStorage.getItem("token"))["id"]
        }`;
        //  console.log(`${JSON.parse(localStorage.getItem('token')['id'])}`)
        // window.location = `/seller/profile/:id`
      },
      error: function (err) {
        console.log(err);
      },
    });
  };

  const handleUpload = (e) => {
    console.log(this);
    const uploadTask = storage.ref(`imagee/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {},
      (error) => {
        console.log(error, "lll");
      },
      () => {
        storage
          .ref("imagee")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            setUrl(url);
            console.log(url);
          });
      }
    );
  };
  const uploadImage = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };
  const tr2 = () => {
    console.log(url);
    if (image !== "") {
      return (
        <div>
          <img src={url} width="200" height="180" />
          <input type="button" value="Upload" onClick={handleUpload} />
        </div>
      );
    }
  };
  const food = () => {
    if (obj1.category === "food") {
      return (
        <div>
          <Card
            style={{
              width: "550px",
              margin: "200px auto",
              height: "750px",
              padding: "25px 0px 10px 25px",
              marginTop: "30px",
            }}
          >
            {/* <div className="card-body"> */}
            <div className="container">
              <Form model="user" onSubmit={(user) => ajax(user)}>
                <div className="col-md-3">
                  <label
                    className="form-label"
                    style={{
                      fontFamily: "Yanone Kaffeesatz",
                      fontSize: "21px",
                    }}
                  >
                    Category:
                  </label>
                  <br></br>
                  <Control.select
                    style={{
                      width: "350px",

                      height: "50px",
                    }}
                    model="user.type"
                    className="form-select"
                    required
                  >
                    <option
                      selected
                      disabled
                      value=""
                      style={{
                        fontFamily: "Yanone Kaffeesatz",
                        fontSize: "21px",
                      }}
                    >
                      Choose The Type
                    </option>
                    <option value="Salty">Salty</option>
                    <option value="Sweet">Sweet</option>
                  </Control.select>
                </div>
                <br></br>
                <div className="col-md-4">
                  <label
                    htmlFor="user.product"
                    className="form-label"
                    style={{
                      fontFamily: "Yanone Kaffeesatz",
                      fontSize: "21px",
                    }}
                  >
                    Name Of The Product:
                  </label>
                  <Control.text
                    style={{
                      width: "350px",

                      height: "50px",
                    }}
                    model="user.product"
                    id="user.product"
                    className="form-control"
                    required
                  />
                </div>
                <div className="col-md-3">
                  <label
                    htmlFor="user.description"
                    className="form-label"
                    style={{
                      fontFamily: "Yanone Kaffeesatz",
                      fontSize: "21px",
                    }}
                  >
                    Description:
                  </label>
                  <Control.text
                    style={{
                      width: "350px",

                      height: "50px",
                    }}
                    model="user.description"
                    id="user.description"
                    className="form-control"
                    required
                  />
                </div>
                <div className="col-md-3">
                  <label
                    htmlFor="user.price"
                    className="form-label"
                    style={{
                      fontFamily: "Yanone Kaffeesatz",
                      fontSize: "21px",
                    }}
                  >
                    Price:
                  </label>
                  <Control.text
                    style={{
                      width: "350px",

                      height: "50px",
                    }}
                    model="user.price"
                    id="user.price"
                    className="form-control"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="user.image"
                    className="form-label"
                    style={{
                      fontFamily: "Yanone Kaffeesatz",
                      fontSize: "21px",
                    }}
                  >
                    Add Picture:
                  </label>
                  <Control.file
                    style={{
                      width: "350px",

                      height: "50px",
                    }}
                    model="user.image"
                    className="form-control"
                    aria-label="file example"
                    onChange={uploadImage}
                    required
                  />
                  {tr2()}
                </div>
                <div className="col-12">
                  <button
                    style={{
                      borderRadius: "10px",
                      border: "2px solid white",
                      fontSize: "20px",
                      padding: "10px 25px",
                      fontFamily: "Yanone Kaffeesatz",
                      marginTop: "50px",
                      backgroundColor: "#edb55c",
                    }}
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </Form>
            </div>
          </Card>
        </div>
      );
    }
  };
  const clothes = () => {
    if (obj1.category === "clothes") {
      return (
        <div>
          <Card
            style={{
              width: "550px",
              margin: "200px auto",
              height: "750px",
              padding: "25px 0px 10px 25px",
              marginTop: "30px",
            }}
          >
            {/* <div className="card-body"> */}
            <div className="container">
              <Form model="user" onSubmit={(user) => ajax(user)}>
                <div className="col-md-3">
                  <label
                    className="form-label"
                    style={{
                      fontFamily: "Yanone Kaffeesatz",
                      fontSize: "21px",
                    }}
                  >
                    Gender:
                  </label>
                  <br></br>
                  <Control.select
                    style={{
                      width: "350px",

                      height: "50px",
                    }}
                    model="user.gender"
                    className="form-select"
                    required
                  >
                    <option
                      selected
                      disabled
                      value=""
                      style={{
                        fontFamily: "Yanone Kaffeesatz",
                        fontSize: "21px",
                      }}
                    >
                      Choose the gender
                    </option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </Control.select>
                </div>
                <br></br>
                <div className="col-md-3">
                  <label
                    className="form-label"
                    style={{
                      fontFamily: "Yanone Kaffeesatz",
                      fontSize: "21px",
                    }}
                  >
                    Size:
                  </label>
                  <br></br>
                  <Control.select
                    style={{
                      width: "350px",

                      height: "50px",
                    }}
                    model="user.size"
                    className="form-select"
                    required
                  >
                    <option
                      selected
                      disabled
                      value=""
                      style={{
                        fontFamily: "Yanone Kaffeesatz",
                        fontSize: "21px",
                      }}
                    >
                      Choose the size
                    </option>
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                  </Control.select>
                </div>
                <br></br>
                <div className="col-md-4">
                  <label
                    htmlFor="user.product"
                    className="form-label"
                    style={{
                      fontFamily: "Yanone Kaffeesatz",
                      fontSize: "21px",
                    }}
                  >
                    Name Of Product:
                  </label>
                  <Control.text
                    style={{
                      width: "350px",

                      height: "50px",
                    }}
                    autocomplete="off"
                    model="user.product"
                    id="user.product"
                    className="form-control"
                    required
                  />
                </div>
                <div className="col-md-3">
                  <label
                    htmlFor="user.description"
                    className="form-label"
                    style={{
                      fontFamily: "Yanone Kaffeesatz",
                      fontSize: "21px",
                    }}
                  >
                    Description:
                  </label>
                  <Control.text
                    style={{
                      width: "350px",

                      height: "50px",
                    }}
                    autocomplete="off"
                    model="user.description"
                    id="user.description"
                    className="form-control"
                    required
                  />
                </div>
                <div className="col-md-3">
                  <label
                    htmlFor="user.price"
                    className="form-label"
                    style={{
                      fontFamily: "Yanone Kaffeesatz",
                      fontSize: "21px",
                    }}
                  >
                    Price:
                  </label>
                  <Control.text
                    style={{
                      width: "350px",

                      height: "50px",
                    }}
                    autocomplete="off"
                    model="user.price"
                    id="user.price"
                    className="form-control"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="user.image"
                    className="form-label"
                    style={{
                      fontFamily: "Yanone Kaffeesatz",
                      fontSize: "21px",
                    }}
                  >
                    Add Picture:
                  </label>
                  <Control.file
                    style={{
                      width: "350px",

                      height: "50px",
                    }}
                    model="user.image"
                    className="form-control"
                    aria-label="file example"
                    onChange={uploadImage}
                    required
                  />
                  {tr2()}
                </div>
                <div className="col-12">
                  <button
                    style={{
                      borderRadius: "10px",
                      border: "2px solid white",
                      fontSize: "20px",
                      padding: "10px 25px",
                      fontFamily: "Yanone Kaffeesatz",
                      marginTop: "50px",
                      backgroundColor: "#edb55c",
                    }}
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </Form>
            </div>
          </Card>
        </div>
      );
    }
  };
  const babyproducts = () => {
    if (obj1.category === "babyproducts") {
      return (
        <div>
          <Card
            style={{
              width: "550px",
              margin: "200px auto",
              height: "750px",
              padding: "25px 0px 10px 25px",
              marginTop: "30px",
            }}
          >
            {/* <div className="card-body"> */}
            <div className="container">
              <Form model="user" onSubmit={(user) => ajax(user)}>
                <div className="col-md-3">
                  <label
                    className="form-label"
                    style={{
                      fontFamily: "Yanone Kaffeesatz",
                      fontSize: "21px",
                    }}
                  >
                    Gender:
                  </label>
                  <br></br>
                  <Control.select
                    style={{
                      width: "350px",

                      height: "50px",
                    }}
                    model="user.gender"
                    className="form-select"
                    required
                  >
                    <option
                      selected
                      disabled
                      value=""
                      style={{
                        fontFamily: "Yanone Kaffeesatz",
                        fontSize: "21px",
                      }}
                    >
                      Choose the gender
                    </option>
                    <option value="Male">Boy</option>
                    <option value="Female">Girl</option>
                  </Control.select>
                </div>
                <br></br>
                <div className="col-md-4">
                  <label
                    htmlFor="user.product"
                    className="form-label"
                    style={{
                      fontFamily: "Yanone Kaffeesatz",
                      fontSize: "21px",
                    }}
                  >
                    Name Of Product:
                  </label>
                  <Control.text
                    style={{
                      width: "350px",

                      height: "50px",
                    }}
                    model="user.product"
                    id="user.product"
                    className="form-control"
                    required
                  />
                </div>
                <div className="col-md-3">
                  <label
                    htmlFor="user.description"
                    className="form-label"
                    style={{
                      fontFamily: "Yanone Kaffeesatz",
                      fontSize: "21px",
                    }}
                  >
                    Description:
                  </label>
                  <Control.text
                    style={{
                      width: "350px",

                      height: "50px",
                    }}
                    model="user.description"
                    id="user.description"
                    className="form-control"
                    required
                  />
                </div>
                <div className="col-md-3">
                  <label
                    htmlFor="user.price"
                    className="form-label"
                    style={{
                      fontFamily: "Yanone Kaffeesatz",
                      fontSize: "21px",
                    }}
                  >
                    Price:
                  </label>
                  <Control.text
                    style={{
                      width: "350px",

                      height: "50px",
                    }}
                    model="user.price"
                    id="user.price"
                    className="form-control"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="user.image"
                    className="form-label"
                    style={{
                      fontFamily: "Yanone Kaffeesatz",
                      fontSize: "21px",
                    }}
                  >
                    Add Picture:
                  </label>
                  <Control.file
                    style={{
                      width: "350px",

                      height: "50px",
                    }}
                    model="user.image"
                    className="form-control"
                    aria-label="file example"
                    onChange={uploadImage}
                    required
                  />
                  {tr2()}
                </div>
                <div className="col-12">
                  <button
                    style={{
                      borderRadius: "10px",
                      border: "2px solid white",
                      fontSize: "20px",
                      padding: "10px 25px",
                      fontFamily: "Yanone Kaffeesatz",
                      marginTop: "50px",
                      backgroundColor: "#edb55c",
                    }}
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </Form>
            </div>
          </Card>
        </div>
      );
    }
  };
  const accessories = () => {
    if (obj1.category === "accessories") {
      return (
        <div>
          <Card
            style={{
              width: "550px",
              margin: "200px auto",
              height: "750px",
              padding: "25px 0px 10px 25px",
              marginTop: "30px",
            }}
          >
            {/* <div className="card-body"> */}
            <div className="container">
              <Form model="user" onSubmit={(user) => ajax(user)}>
                <div className="col-md-3">
                  <label
                    className="form-label"
                    style={{
                      fontFamily: "Yanone Kaffeesatz",
                      fontSize: "21px",
                    }}
                  >
                    Material:
                  </label>
                  <br></br>
                  <Control.select
                    style={{
                      width: "350px",

                      height: "50px",
                    }}
                    model="user.material"
                    className="form-select"
                    required
                  >
                    <option
                      selected
                      disabled
                      value=""
                      style={{
                        fontFamily: "Yanone Kaffeesatz",
                        fontSize: "21px",
                      }}
                    >
                      Choose the material
                    </option>
                    <option value="Silver">Silver</option>
                    <option value="Gold">Gold</option>
                  </Control.select>
                </div>
                <br></br>
                <div className="col-md-4">
                  <label
                    htmlFor="user.product"
                    className="form-label"
                    style={{
                      fontFamily: "Yanone Kaffeesatz",
                      fontSize: "21px",
                    }}
                  >
                    Name Of Product:
                  </label>
                  <Control.text
                    style={{
                      width: "350px",

                      height: "50px",
                    }}
                    model="user.product"
                    id="user.product"
                    className="form-control"
                    required
                  />
                </div>
                <div className="col-md-3">
                  <label
                    htmlFor="user.description"
                    className="form-label"
                    style={{
                      fontFamily: "Yanone Kaffeesatz",
                      fontSize: "21px",
                    }}
                  >
                    Description:
                  </label>
                  <Control.text
                    style={{
                      width: "350px",

                      height: "50px",
                    }}
                    model="user.description"
                    id="user.description"
                    className="form-control"
                    required
                  />
                </div>
                <div className="col-md-3">
                  <label
                    htmlFor="user.price"
                    className="form-label"
                    style={{
                      fontFamily: "Yanone Kaffeesatz",
                      fontSize: "21px",
                    }}
                  >
                    Price:
                  </label>
                  <Control.text
                    style={{
                      width: "350px",

                      height: "50px",
                    }}
                    model="user.price"
                    id="user.price"
                    className="form-control"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="user.image"
                    className="form-label"
                    style={{
                      fontFamily: "Yanone Kaffeesatz",
                      fontSize: "21px",
                    }}
                  >
                    Add Picture:
                  </label>
                  <Control.file
                    style={{
                      width: "350px",

                      height: "50px",
                    }}
                    model="user.image"
                    className="form-control"
                    aria-label="file example"
                    onChange={uploadImage}
                    required
                  />
                  {tr2()}
                </div>
                <div className="col-12">
                  <button
                    type="submit"
                    style={{
                      borderRadius: "10px",
                      border: "2px solid white",
                      fontSize: "20px",
                      padding: "10px 25px",
                      fontFamily: "Yanone Kaffeesatz",
                      marginTop: "50px",
                      backgroundColor: "#edb55c",
                    }}
                  >
                    Submit
                  </button>
                </div>
              </Form>
            </div>
          </Card>
        </div>
      );
    }
  };
  return (
    <div>
      <NavbarSeller />
      <div>{food()}</div>
      <div>{clothes()}</div>
      <div>{babyproducts()}</div>
      <div>{accessories()}</div>
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
export default ItemForm;
