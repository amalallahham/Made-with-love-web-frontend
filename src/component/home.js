import React from "react";
import $ from "jquery";
import { Container, Row, Col, Card, Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import rose from "../images/rose.png";
import NavbarSeller from "./layout/NavbarSeller";
import NavbarBuyer from "./layout/NavbarBuyer";
import down from "../images/down.jpg";
import app from "./fireConfig";
import { useState, useEffect } from "react";
var action = { type: "food_category" };
var actionclothes = { type: "clothes_category" };
var actionbaby = { type: "babyshower_category" };
var actionacc = { type: "accesories_category" };

const getcategoryfood = () => {
  var tokenObj = JSON.parse(localStorage.getItem("token"));
  console.log(tokenObj);
  // if the user is a buyer redirect to home
  if (tokenObj.type === "buyer") window.location.replace("/buyer/food");
  //if the user if a seller
  if (tokenObj.type === "seller") window.location.replace(`/seller/food`);
  return action;
};

const getcategoryclothes = () => {
  var tokenObj = JSON.parse(localStorage.getItem("token"));
  console.log(tokenObj);
  // if the user is a buyer redirect to home
  if (tokenObj.type === "buyer") window.location.replace("/buyer/clothes");
  //if the user if a seller
  if (tokenObj.type === "seller") window.location.replace(`/seller/clothes`);
  return actionclothes;
};
const getcategorybaby = () => {
  var tokenObj = JSON.parse(localStorage.getItem("token"));
  console.log(tokenObj);
  // if the user is a buyer redirect to home
  if (tokenObj.type === "buyer") window.location.replace("/buyer/babyproducts");
  //if the user if a seller
  if (tokenObj.type === "seller")
    window.location.replace(`/seller/babyproducts`);
  return actionbaby;
};
const getcategoryacc = () => {
  var tokenObj = JSON.parse(localStorage.getItem("token"));
  console.log(tokenObj);
  // if the user is a buyer redirect to home
  if (tokenObj.type === "buyer") window.location.replace("/buyer/accessories");
  //if the user if a seller
  if (tokenObj.type === "seller")
    window.location.replace(`/seller/accessories`);
  return actionacc;
};
// var mapDispatchToProps = (dispatch) =>{
//     return {

//     //     onclickCat : (cat) => {
//     //         action = {type : 'change_category', text:cat}
//     //         dispatch(action);

//     //      }
//     // }
//     const
// }

export default function Home(props) {
  // const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const [populer, setData1] = useState([]);

  useEffect(() => {
    var max = 0;
    var maxId;

    var database = app.database().ref("notification");
    var superStore;
    database.once("value", function (snapshot) {
      snapshot.forEach(function (childSnapshot) {
        childSnapshot.forEach(function (child) {
          // if the store id exist in firebase  increment number of orders

          var x = Number(child.val());
          if (x >= max) {
            max = x;
            maxId = child.key;
          }
        });
      });
      superStore = maxId;
      console.log(maxId, "maaxxx");
      $.ajax({
        method: "GET",
        url: "http://127.0.0.1:8000/seller/profile/" + maxId,
        contentType: "application/json",
        headers: {
          Authorization: JSON.parse(localStorage.getItem("token"))["token"],
        },

        success: function (res) {
          console.log(res);
          setData(res);
        },
        error: function (err) {
          //  setData1('noooo')
          //  console.log(data1)
        },
      });
    });

    $.ajax({
      method: "GET",
      url: "http://127.0.0.1:8000/populer",
      contentType: "application/json",
      headers: {
        Authorization: JSON.parse(localStorage.getItem("token"))["token"],
      },

      success: function (res) {
        console.log(res);
        //filter descendingly
        var data = JSON.parse(res).sort(function (a, b) {
          return b.fields.review - a.fields.review;
        });

        data = data.slice(0, 4);
        setData1(data);
      },
      error: function (err) {
        //  setData1('noooo')
        //  console.log(data1)
      },
    });
  }, [data]);

  console.log(populer);
  var tokenObj = JSON.parse(localStorage.getItem("token"));
  console.log(tokenObj["type"]);
  if (tokenObj.type === "buyer") var nav = <NavbarBuyer />;
  if (tokenObj.type === "seller") var nav = <NavbarSeller />;
  //   var database = app.database().ref('notification')
  //   var superStore ;
  //   database.once("value", function(snapshot) {
  //     var max=0;
  //     var maxId
  //     snapshot.forEach(function(childSnapshot) {
  //       childSnapshot.forEach(function(child) {
  //         // if the store id exist in firebase  increment number of orders

  //           var x =Number(child.val())
  //           if(x>= max ){
  //             max=x;
  //             maxID = child.key
  //           }
  //   });

  //   })
  //  superStore = maxId;

  //   })

  return (
    <div
      style={{
        width: "100%",
        height: "1000px",
        backgroundImage: `url(${rose})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      {nav}

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Container>
        <Row>
          <Col>
            <div className="col-sm-12">
              <div
                className="card"
                style={{
                  border: "solid  white 3px",
                  borderRadius: "10px",
                  width: "500px",
                  height: "400px",
                  cursor: "pointer",
                  marginTop: "-350px",
                  boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.6)",
                  marginLeft: "-400px",
                  transition: "width 2s",
                }}
              >
                <Link to="/buyer/food">
                  <Carousel
                    onClick={() => {
                      console.log("clickeeed");
                      dispatch(getcategoryfood());
                    }}
                  >
                    <Carousel.Item interval={500}>
                      <img
                        style={{
                          border: "solid  white 3px",
                          borderRadius: "10px",
                        }}
                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1506224477000-07aa8a76be20?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                        alt="Third slide"
                        width="500px"
                        height="400px"
                      />
                      <Carousel.Caption>
                        <h3>Category Food</h3>
                      </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={500}>
                      <img
                        style={{
                          border: "solid  white 3px",
                          borderRadius: "10px",
                        }}
                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1448131063153-f1e240f98a72?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1448&q=80"
                        alt="Third slide"
                        width="500px"
                        height="400px"
                      />
                      <Carousel.Caption>
                        <h3>Category Food</h3>
                      </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        style={{
                          border: "solid  white 3px",
                          borderRadius: "10px",
                        }}
                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1559622214-f8a9850965bb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1402&q=80"
                        width="500px"
                        height="400px"
                        alt="Third slide"
                      />
                      <Carousel.Caption>
                        <h3>Category Food</h3>
                      </Carousel.Caption>
                    </Carousel.Item>
                  </Carousel>
                </Link>
              </div>
            </div>
          </Col>
          <Col>
            <div className="col-sm-12">
              <div
                className="card"
                style={{
                  border: "solid  white 3px",
                  borderRadius: "10px",
                  width: "800px",
                  height: "900px",
                  cursor: "pointer",
                  marginTop: "-350px",
                  boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.6)",

                  marginLeft: "-250px",
                }}
              >
                <Link to="/buyer/food">
                  <Carousel
                    onClick={() => {
                      console.log("clickeeed");
                      dispatch(getcategoryfood());
                    }}
                  >
                    <Carousel.Item interval={500}>
                      <img
                        style={{
                          border: "solid  white 3px",
                          borderRadius: "10px",
                        }}
                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1506224477000-07aa8a76be20?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                        alt="Third slide"
                        width="800px"
                        height="900px"
                      />
                      <Carousel.Caption>
                        <h3>Category Food</h3>
                      </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={500}>
                      <img
                        style={{
                          border: "solid  white 3px",
                          borderRadius: "10px",
                        }}
                        className="d-block w-100"
                        src="https://static2.bigstockphoto.com/0/8/3/large1500/380596804.jpg"
                        alt="Third slide"
                        width="800px"
                        height="900px"
                      />
                      <Carousel.Caption>
                        <h3>Category Food</h3>
                      </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        style={{
                          border: "solid  white 3px",
                          borderRadius: "10px",
                        }}
                        className="d-block w-100"
                        src="https://thumbs.dreamstime.com/b/cinnamon-rolls-sinabon-made-home-lying-grey-table-homemade-cakes-brown-wooden-sweet-141014176.jpg"
                        width="800"
                        height="900px"
                        alt="Third slide"
                      />
                      <Carousel.Caption>
                        <h3>Category Food</h3>
                      </Carousel.Caption>
                    </Carousel.Item>
                  </Carousel>
                </Link>
              </div>
            </div>
          </Col>
          <Col>
            <div className="col-sm-12">
              <div
                className="card"
                style={{
                  border: "solid  white 3px",
                  borderRadius: "10px",
                  width: "500px",
                  height: "400px",
                  cursor: "pointer",
                  marginTop: "-350px",
                  boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.6)",
                  marginLeft: "200px",
                }}
              >
                <Link to="/buyer/clothes">
                  <Carousel
                    onClick={() => {
                      console.log("clickeeed");
                      dispatch(getcategoryclothes());
                    }}
                  >
                    <Carousel.Item interval={1000}>
                      <img
                        style={{
                          border: "solid  white 3px",
                          borderRadius: "10px",
                        }}
                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1534337711732-1c9ae62389e2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80"
                        width="500px"
                        height="400px"
                        alt="First slide"
                      />
                      <Carousel.Caption>
                        <h3>Category Clothes</h3>
                      </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={500}>
                      <img
                        style={{
                          border: "solid  white 3px",
                          borderRadius: "10px",
                        }}
                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1603321582010-d342bd5a2e07?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80"
                        width="500px"
                        height="400px"
                        alt="Third slide"
                      />
                      <Carousel.Caption>
                        <h3>Category Clothes</h3>
                      </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        style={{
                          border: "solid  white 3px",
                          borderRadius: "10px",
                        }}
                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1560060141-7b9018741ced?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=499&q=80"
                        width="500px"
                        height="400px"
                        alt="Third slide"
                      />
                      <Carousel.Caption>
                        <h3>Category Clothes</h3>
                      </Carousel.Caption>
                    </Carousel.Item>
                  </Carousel>
                </Link>
              </div>
              <br />
              <br />
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="col-sm-6" className="container-fluid">
              <div
                className="card"
                style={{
                  border: "solid  white 3px",
                  borderRadius: "10px",
                  width: "500px",
                  height: "400px",
                  marginLeft: "-400px",
                  cursor: "pointer",
                  marginTop: "-400px",
                  boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.6)",
                }}
              >
                <Link to="/buyer/accessories">
                  <Carousel
                    onClick={() => {
                      console.log("clickeeed");
                      dispatch(getcategoryacc());
                    }}
                  >
                    <Carousel.Item interval={1000}>
                      <img
                        style={{
                          border: "solid  white 3px",
                          borderRadius: "10px",
                        }}
                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1521120098171-0400b4ec1319?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8YWNjZXNzb3JpZXN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                        width="500px"
                        height="400px"
                        alt="First slide"
                      />
                      <Carousel.Caption>
                        <h3> Category Accessories</h3>
                      </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={500}>
                      <img
                        style={{
                          border: "solid  white 3px",
                          borderRadius: "10px",
                        }}
                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1519431458145-1ca3d5ccd68e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8YWNjZXNzb3JpZXN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                        width="500px"
                        height="400px"
                        alt="Third slide"
                      />
                      <Carousel.Caption>
                        <h3>Category Accessories</h3>
                      </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        style={{
                          border: "solid  white 3px",
                          borderRadius: "10px",
                        }}
                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1551026965-10a65509886d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=716&q=80"
                        width="500px"
                        height="400px"
                        alt="Third slide"
                      />
                      <Carousel.Caption>
                        <h3>Category Accessories</h3>
                      </Carousel.Caption>
                    </Carousel.Item>
                  </Carousel>
                </Link>
              </div>
              <br />
              <br />
            </div>
          </Col>
          <Col>
            <div className="col-sm-6">
              <div
                className="card"
                style={{
                  border: "solid  white 3px",
                  borderRadius: "10px",
                  width: "500px",
                  height: "400px",
                  cursor: "pointer",
                  marginTop: "-400px",
                  boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.6)",
                  marginLeft: "400px",
                  paddingBottom: "100px",
                }}
              >
                <Link to="/buyer/babyproducts">
                  <Carousel
                    onClick={() => {
                      console.log("clickeeed");
                      dispatch(getcategorybaby());
                    }}
                  >
                    <Carousel.Item interval={500}>
                      <img
                        style={{
                          border: "solid  white 3px",
                          borderRadius: "10px",
                        }}
                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1565058528605-670489ab6f6c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTd8fGJhYnklMjAlMjB3b29sfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
                        width="500px"
                        height="400px"
                        alt="Third slide"
                      />
                      <Carousel.Caption>
                        <h3>Category Baby products</h3>
                      </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={500}>
                      <img
                        style={{
                          border: "solid  white 3px",
                          borderRadius: "10px",
                        }}
                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1560506840-ec148e82a604?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mjd8fGJhYnklMjBjbG90aGVzfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
                        width="500px"
                        height="400px"
                        alt="Third slide"
                      />
                      <Carousel.Caption>
                        <h3>Category Baby productsl</h3>
                      </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item interval={500}>
                      <img
                        style={{
                          border: "solid  white 3px",
                          borderRadius: "10px",
                        }}
                        className="d-block w-100"
                        src="https://i1.wp.com/dadfixeseverything.com/wp-content/uploads/2019/01/wash_baby_clothes.jpg?resize=600%2C400&ssl=1"
                        width="500px"
                        height="400px"
                        alt="Third slide"
                      />
                      <Carousel.Caption>
                        <h3>Category Baby products</h3>
                      </Carousel.Caption>
                    </Carousel.Item>
                  </Carousel>
                </Link>
              </div>
              <br />
              <br />
            </div>
          </Col>
        </Row>
      </Container>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div>
        <Container>
          <Row>
            <Col style={{ padding: "0px 200px 0px 0px" }}>
              <Card style={{ width: "25rem" }}>
                <Card.Img
                  variant="top"
                  src="https://i0.wp.com/www.althemist.com/zass/wp-content/uploads/2017/03/baby_cat.jpg?resize=350%2C350&ssl=1"
                />
                <Card.Body>
                  <Card.Title>
                    His Little Hands Stole My Heart, His Little Feet Ran Away
                    With it.
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col style={{ padding: "0px 150px 0px 50px" }}>
              <Card style={{ width: "25rem" }}>
                <Card.Img
                  variant="top"
                  src="https://i0.wp.com/www.althemist.com/zass/wp-content/uploads/2017/03/baby_cat.jpg?resize=350%2C350&ssl=1"
                />
                <Card.Body>
                  <Card.Title>
                    His Little Hands Stole My Heart, His Little Feet Ran Away
                    With it.
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col style={{ padding: "0px 100px 0px 100px" }}>
              <Card style={{ width: "25rem" }}>
                <Card.Img
                  variant="top"
                  src="https://i0.wp.com/www.althemist.com/zass/wp-content/uploads/2017/03/baby_cat.jpg?resize=350%2C350&ssl=1"
                />
                <Card.Body>
                  <Card.Title>
                    His Little Hands Stole My Heart, His Little Feet Ran Away
                    With it.
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
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
