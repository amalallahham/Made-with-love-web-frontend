import $ from "jquery";
import React, { useState, useEffect } from "react";
import { Control, Form } from "react-redux-form";
import app from "./fireConfig";
import NavbarSeller from "./layout/NavbarSeller.js";
import { Card, NavDropdown, Row, Col, Container } from "react-bootstrap";
import down from "../images/down.jpg";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
var storage = app.storage();
function EditProfile(props) {
  console.log("caaaat", props);
  const category = props.location.info.category;
  const product = props.location.info.product;
  const desc = props.location.info.desc;
  console.log(desc);
  const price = props.location.info.price;
  console.log(category);
  const [url, setUrl] = useState("");
  const [image, setImage] = useState("");
  var obj1;

  const ajax = (edit) => {
    obj1 = Object.assign({}, edit);
    console.log(url);
    obj1["url"] = url;
    obj1.id = props.location.info.id;
    obj1["category"] = category;
    console.log(obj1);
    $.ajax({
      method: "POST",
      url: "http://127.0.0.1:8000/seller/editProfile/" + `${obj1.id}`,
      data: JSON.stringify(obj1),
      contentType: "application/json",
      success: function () {
        console.log(obj1);
      },
      error: function (err) {
        console.log(obj1);
      },
    });
    window.location("seller/profile/");
  };
  const handleUpload = (e) => {
    const uploadTask = storage.ref(`imagee/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {},
      (error) => {
        console.log(error);
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
    if (image !== "") {
      return (
        <div>
          <img src={url} width="200" height="180" />
          <input
            type="button"
            value="Add to favorites"
            onClick={handleUpload}
          ></input>
        </div>
      );
    }
  };
  const food = () => {
    if (category === 100) {
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
              <Form model="edit" onSubmit={(edit) => ajax(edit)}>
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
                    model="edit.type"
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
                  ​
                </div>
                <br></br>​
                <div className="col-md-4">
                  <label
                    htmlFor="edit.product"
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
                    model="edit.product"
                    defaultValue={product}
                    id="edit.product"
                    className="form-control"
                    required
                  />
                </div>
                ​
                <div className="col-md-3">
                  <label
                    htmlFor="edit.description"
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
                    model="edit.description"
                    defaultValue={desc}
                    id="edit.description"
                    className="form-control"
                    required
                  />
                </div>
                ​
                <div className="col-md-3">
                  <label
                    htmlFor="edit.price"
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
                    model="edit.price"
                    defaultValue={price}
                    id="edit.price"
                    className="form-control"
                    required
                  />
                </div>
                ​ ​ ​
                <div className="mb-3">
                  <label
                    htmlFor="edit.image"
                    className="form-label"
                    style={{
                      fontFamily: "Yanone Kaffeesatz",
                      fontSize: "21px",
                    }}
                  >
                    Add Picture:
                  </label>
                  <input
                    type="file"
                    model="edit.image"
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
                    className="btn btn-success"
                    style={{
                      borderRadius: "10px",
                      border: "2px solid white",
                      fontSize: "20px",
                      padding: "10px 25px",
                      fontFamily: "Yanone Kaffeesatz",
                      marginTop: "50px",
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
  const clothes = () => {
    // console.log(obj1,'obbbbjjj1')
    if (category === 200)
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
            <div>
              {/* <div className="card-body"> */}
              <div className="container">
                <Form model="edit" onSubmit={(edit) => ajax(edit)}>
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
                      model="edit.gender"
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
                      model="edit.size"
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
                      htmlFor="edit.product"
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
                      model="edit.product"
                      id="edit.product"
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="col-md-3">
                    <label
                      htmlFor="edit.description"
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
                      model="edit.description"
                      id="edit.description"
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="col-md-3">
                    <label
                      htmlFor="edit.price"
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
                      model="edit.price"
                      id="edit.price"
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="edit.image"
                      className="form-label"
                      style={{
                        fontFamily: "Yanone Kaffeesatz",
                        fontSize: "21px",
                      }}
                    >
                      Add Picture:
                    </label>
                    <input
                      type="file"
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
                      className="btn btn-success"
                      style={{
                        borderRadius: "10px",
                        border: "2px solid white",
                        fontSize: "20px",
                        padding: "10px 25px",
                        fontFamily: "Yanone Kaffeesatz",
                        marginTop: "15px",
                        marginLeft: "160px",
                        marginRight: "160px",
                      }}
                    >
                      Submit
                    </button>
                  </div>
                </Form>
              </div>
            </div>
          </Card>
        </div>
      );
  };
  const babyproducts = () => {
    if (category === 400) {
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
              <Form model="edit" onSubmit={(edit) => ajax(edit)}>
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
                    model="edit.gender"
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
                    htmlFor="edit.product"
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
                    model="edit.product"
                    id="edit.product"
                    className="form-control"
                    required
                  />
                </div>
                <div className="col-md-3">
                  <label
                    htmlFor="edit.description"
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
                    model="edit.description"
                    id="edit.description"
                    className="form-control"
                    required
                  />
                </div>
                <div className="col-md-3">
                  <label
                    htmlFor="edit.price"
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
                    model="edit.price"
                    id="edit.price"
                    className="form-control"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="edit.image"
                    className="form-label"
                    style={{
                      fontFamily: "Yanone Kaffeesatz",
                      fontSize: "21px",
                    }}
                  >
                    Add Picture:
                  </label>
                  <input
                    style={{
                      width: "350px",

                      height: "50px",
                    }}
                    type="file"
                    model="edit.image"
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
                    className="btn btn-success"
                    style={{
                      borderRadius: "10px",
                      border: "2px solid white",
                      fontSize: "20px",
                      padding: "10px 25px",
                      fontFamily: "Yanone Kaffeesatz",
                      marginTop: "50px",
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
  const accessories = () => {
    if (category === 300) {
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
              <Form model="edit" onSubmit={(edit) => ajax(edit)}>
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
                    model="edit.material"
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
                    htmlFor="edit.product"
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
                    model="edit.product"
                    id="edit.product"
                    className="form-control"
                    required
                  />
                </div>
                <div className="col-md-3">
                  <label
                    htmlFor="edit.description"
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
                    model="edit.description"
                    id="edit.description"
                    className="form-control"
                    required
                  />
                </div>
                <div className="col-md-3">
                  <label
                    htmlFor="edit.price"
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
                    model="edit.price"
                    id="edit.price"
                    className="form-control"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="edit.image"
                    className="form-label"
                    style={{
                      fontFamily: "Yanone Kaffeesatz",
                      fontSize: "21px",
                    }}
                  >
                    Add Picture:
                  </label>
                  <input
                    style={{
                      width: "350px",

                      height: "50px",
                    }}
                    type="file"
                    model="edit.image"
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
                    className="btn btn-success"
                    style={{
                      borderRadius: "10px",
                      border: "2px solid white",
                      fontSize: "20px",
                      padding: "10px 25px",
                      fontFamily: "Yanone Kaffeesatz",
                      marginTop: "50px",
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
export default EditProfile;
