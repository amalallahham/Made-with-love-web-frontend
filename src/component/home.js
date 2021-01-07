import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import rose from "../images/rose.png";
import NavbarSeller from "./layout/NavbarSeller";
import NavbarBuyer from "./layout/NavbarBuyer";
import down from "../images/down.jpg";
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
  const dispatch = useDispatch();
  var tokenObj = JSON.parse(localStorage.getItem("token"));
  console.log(tokenObj["type"]);
  if (tokenObj.type === "buyer") var nav = <NavbarBuyer />;
  if (tokenObj.type === "seller") var nav = <NavbarSeller />;
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
                        src="https://i1.wp.com/digital-photography-school.com/wp-content/uploads/2014/05/02_Tip01_45_vs_90_Tacos.jpg?w=600&h=1260&ssl=1"
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
                        src="https://static2.bigstockphoto.com/0/8/3/large1500/380596804.jpg"
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
                        src="https://thumbs.dreamstime.com/b/cinnamon-rolls-sinabon-made-home-lying-grey-table-homemade-cakes-brown-wooden-sweet-141014176.jpg"
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
                        src="https://i1.wp.com/digital-photography-school.com/wp-content/uploads/2014/05/02_Tip01_45_vs_90_Tacos.jpg?w=600&h=1260&ssl=1"
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
                    <Carousel.Item interval={1000} className="col-sm-6">
                      <img
                        style={{
                          border: "solid  white 3px",
                          borderRadius: "10px",
                        }}
                        className="d-block w-100"
                        src="https://www.next.co.uk/nxtcms/resource/blob/804278/b27903a48e38e6e0c04a077af12851f2/next-girls--bridesmaid-dresses-data.jpg"
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
                        src="https://www.landsend.com/article/best-work-from-home-clothes-men/images/feat-m.jpg"
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
                        src="https://media.istockphoto.com/photos/women-clothes-hanging-on-hangers-clothing-rails-fashion-design-picture-id916092484?k=6&m=916092484&s=612x612&w=0&h=tUKYM82W1Vecsjeat6rl6kTnq7iCFq0JYhI2uR3VxMU="
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
                        src="https://st3.depositphotos.com/3737897/15110/i/1600/depositphotos_151106036-stock-photo-clothing-and-accessories-for-women.jpg"
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
                        src="https://previews.123rf.com/images/belchonock/belchonock1802/belchonock180292570/96250582-stylish-women-accessories-on-wooden-background.jpg"
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
                        src="https://gedaramade.com/wp-content/uploads/2020/11/GiftNfab-natural-stone-hand-made-bracelets-on-GedaraMade-372x400.jpg"
                        width="500px"
                        height="300px"
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
                    <Carousel.Item interval={1000}>
                      <img
                        style={{
                          border: "solid  white 3px",
                          borderRadius: "10px",
                        }}
                        className="d-block w-100"
                        src="https://www.stylishboard.com/wp-content/uploads/2013/05/fi3.jpg"
                        width="500px"
                        height="400px"
                        alt="First slide"
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
                        src="https://hipdysplasia.org/wp-content/uploads/2020/05/learn-about-cause.jpg"
                        width="500px"
                        height="400px"
                        alt="Third slide"
                      />
                      <Carousel.Caption>
                        <h3>Category Baby productsl</h3>
                      </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        style={{
                          border: "solid  white 3px",
                          borderRadius: "10px",
                        }}
                        className="d-block w-100"
                        src="https://ae01.alicdn.com/kf/H30992dcc27d7495c8498858f9b357886E/2019-Baby-Kids-Winter-Warm-Clothes-Newborn-Baby-Boy-Girl-Children-s-Solid-Hooded-Sweater-3D.jpg"
                        width="500px"
                        height="00px"
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
      <Container>
        <div>
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
        </div>
      </Container>
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

// <div>
//         <Container>
//           <Row>
//             <Col>
//               <div className="col-sm-12">
//                 <div
//                   className="card"
//                   style={{
//                     border: "solid  white 2px",
//                     width: "400px",

//                     cursor: "pointer",
//                     marginTop: "-350px",
//                     boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.6)",
//                   }}
//                 >
//                   <Link to="/buyer/food">
//                     <Carousel
//                       onClick={() => {
//                         console.log("clickeeed");
//                         dispatch(getcategoryfood());
//                       }}
//                     >
//                       <Carousel.Item interval={500}>
//                         <img
//                           className="d-block w-100"
//                           src="https://i1.wp.com/digital-photography-school.com/wp-content/uploads/2014/05/02_Tip01_45_vs_90_Tacos.jpg?w=600&h=1260&ssl=1"
//                           alt="Third slide"
//                         />
//                         <Carousel.Caption>
//                           <h3>Category Food</h3>
//                         </Carousel.Caption>
//                       </Carousel.Item>
//                       <Carousel.Item interval={500}>
//                         <img
//                           className="d-block w-100"
//                           src="https://static2.bigstockphoto.com/0/8/3/large1500/380596804.jpg"
//                           alt="Third slide"
//                         />
//                         <Carousel.Caption>
//                           <h3>Category Food</h3>
//                         </Carousel.Caption>
//                       </Carousel.Item>
//                       <Carousel.Item>
//                         <img
//                           className="d-block w-100"
//                           src="https://thumbs.dreamstime.com/b/cinnamon-rolls-sinabon-made-home-lying-grey-table-homemade-cakes-brown-wooden-sweet-141014176.jpg"
//                           width="400px"
//                           height="500px"
//                           alt="Third slide"
//                         />
//                         <Carousel.Caption>
//                           <h3>Category Food</h3>
//                         </Carousel.Caption>
//                       </Carousel.Item>
//                     </Carousel>
//                   </Link>
//                 </div>
//               </div>
//             </Col>

//             <Col style={{ padding: "0px 300px 0px 0px" }}>
//               <div className="col-sm-12">
//                 <div
//                   className="card"
//                   style={{
//                     border: "solid  white 2px",
//                     width: "400px",

//                     cursor: "pointer",
//                     marginTop: "-350px",
//                     boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.6)",
//                   }}
//                 >
//                   <Link to="/buyer/clothes">
//                     <Carousel
//                       onClick={() => {
//                         console.log("clickeeed");
//                         dispatch(getcategoryclothes());
//                       }}
//                     >
//                       <Carousel.Item interval={1000} className="col-sm-6">
//                         <img
//                           className="d-block w-100"
//                           src="https://www.next.co.uk/nxtcms/resource/blob/804278/b27903a48e38e6e0c04a077af12851f2/next-girls--bridesmaid-dresses-data.jpg"
//                           width="400px"
//                           height="500px"
//                           alt="First slide"
//                         />
//                         <Carousel.Caption>
//                           <h3>Category Clothes</h3>
//                         </Carousel.Caption>
//                       </Carousel.Item>
//                       <Carousel.Item interval={500}>
//                         <img
//                           style={{ borderRadius: "25px" }}
//                           className="d-block w-100"
//                           src="https://www.landsend.com/article/best-work-from-home-clothes-men/images/feat-m.jpg"
//                           width="400px"
//                           height="500px"
//                           alt="Third slide"
//                         />
//                         <Carousel.Caption>
//                           <h3>Category Clothes</h3>
//                         </Carousel.Caption>
//                       </Carousel.Item>
//                       <Carousel.Item>
//                         <img
//                           className="d-block w-100"
//                           src="https://media.istockphoto.com/photos/women-clothes-hanging-on-hangers-clothing-rails-fashion-design-picture-id916092484?k=6&m=916092484&s=612x612&w=0&h=tUKYM82W1Vecsjeat6rl6kTnq7iCFq0JYhI2uR3VxMU="
//                           width="400px"
//                           height="500px"
//                           alt="Third slide"
//                         />
//                         <Carousel.Caption>
//                           <h3>Category Clothes</h3>
//                         </Carousel.Caption>
//                       </Carousel.Item>
//                     </Carousel>
//                   </Link>
//                 </div>
//                 <br />
//                 <br />
//               </div>
//             </Col>
//             {/* <div className="col-sm-6"  >

//             <div className="card"  style={{border: "solid  white 2px",width:'500px', padding:'0px 100px 0px 100px',  cursor: 'pointer',  marginTop:"-350px",  boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.6)' }}  > */}
//           </Row>
//           <Container>
//             <Row>
//               <Col>
//                 <div className="col-sm-6" className="container-fluid">
//                   <div
//                     className="card"
//                     style={{
//                       border: "solid  white 2px",
//                       width: "400px",
//                       padding: "0px 40px 0px 40px",
//                       cursor: "pointer",
//                       marginTop: "100px",
//                       boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.6)",
//                     }}
//                   >
//                     <Link to="/buyer/accessories">
//                       <Carousel
//                         onClick={() => {
//                           console.log("clickeeed");
//                           dispatch(getcategoryacc());
//                         }}
//                       >
//                         <Carousel.Item interval={1000}>
//                           <img
//                             className="d-block w-100"
//                             src="https://st3.depositphotos.com/3737897/15110/i/1600/depositphotos_151106036-stock-photo-clothing-and-accessories-for-women.jpg"
//                             width="400px"
//                             height="500px"
//                             alt="First slide"
//                           />
//                           <Carousel.Caption>
//                             <h3> Category Accessories</h3>
//                           </Carousel.Caption>
//                         </Carousel.Item>
//                         <Carousel.Item interval={500}>
//                           <img
//                             className="d-block w-100"
//                             src="https://previews.123rf.com/images/belchonock/belchonock1802/belchonock180292570/96250582-stylish-women-accessories-on-wooden-background.jpg"
//                             width="400px"
//                             height="500px"
//                             alt="Third slide"
//                           />
//                           <Carousel.Caption>
//                             <h3>Category Accessories</h3>
//                           </Carousel.Caption>
//                         </Carousel.Item>
//                         <Carousel.Item>
//                           <img
//                             className="d-block w-100"
//                             src="https://gedaramade.com/wp-content/uploads/2020/11/GiftNfab-natural-stone-hand-made-bracelets-on-GedaraMade-372x400.jpg"
//                             width="400px"
//                             height="500px"
//                             alt="Third slide"
//                           />
//                           <Carousel.Caption>
//                             <h3>Category Accessories</h3>
//                           </Carousel.Caption>
//                         </Carousel.Item>
//                       </Carousel>
//                     </Link>
//                   </div>
//                   <br />
//                   <br />
//                 </div>
//               </Col>
//               <Col>
//                 <div className="col-sm-6">
//                   <div
//                     className="card"
//                     style={{
//                       border: "solid  white 2px",
//                       width: "400px",
//                       padding: "0px 40px 0px 40px",
//                       cursor: "pointer",
//                       marginTop: "100px",
//                       boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.6)",
//                     }}
//                   >
//                     <Link to="/buyer/babyproducts">
//                       <Carousel
//                         onClick={() => {
//                           console.log("clickeeed");
//                           dispatch(getcategorybaby());
//                         }}
//                       >
//                         <Carousel.Item interval={1000}>
//                           <img
//                             className="d-block w-100"
//                             src="https://www.stylishboard.com/wp-content/uploads/2013/05/fi3.jpg"
//                             width="400px"
//                             height="500px"
//                             alt="First slide"
//                           />
//                           <Carousel.Caption>
//                             <h3>Category Baby products</h3>
//                           </Carousel.Caption>
//                         </Carousel.Item>
//                         <Carousel.Item interval={500}>
//                           <img
//                             className="d-block w-100"
//                             src="https://hipdysplasia.org/wp-content/uploads/2020/05/learn-about-cause.jpg"
//                             width="400px"
//                             height="500px"
//                             alt="Third slide"
//                           />
//                           <Carousel.Caption>
//                             <h3>Category Baby productsl</h3>
//                           </Carousel.Caption>
//                         </Carousel.Item>
//                         <Carousel.Item>
//                           <img
//                             className="d-block w-100"
//                             src="https://ae01.alicdn.com/kf/H30992dcc27d7495c8498858f9b357886E/2019-Baby-Kids-Winter-Warm-Clothes-Newborn-Baby-Boy-Girl-Children-s-Solid-Hooded-Sweater-3D.jpg"
//                             width="400pxs"
//                             height="500px"
//                             alt="Third slide"
//                           />
//                           <Carousel.Caption>
//                             <h3>Category Baby products</h3>
//                           </Carousel.Caption>
//                         </Carousel.Item>
//                       </Carousel>
//                     </Link>
//                   </div>
//                   <br />
//                   <br />
//                 </div>
//               </Col>
//             </Row>
//           </Container>
//         </Container>
//         {/* </div><br/><br/>

//         </div>  */}

//         {/* /////////////////////////////////////////////////////////////////////////////////////////////////// */}

//         {/* //////////////////////////////////////////////////////////////////////////////       */}
//       </div>
