
// import React , {Component} from 'react';
// import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
// import '../../Style/navbar.css'
// import app  from '../fireConfig'
// import { render } from '@testing-library/react';
// if(localStorage.getItem('token') && JSON.parse(localStorage.getItem('token'))["type"] === 'seller' ){
//    var id = JSON.parse(localStorage.getItem('token'))['id']
//   var url = `/seller/profile/${id}`}

  
// //  import firebase from 'firebase'

 
// class NavbarSeller extends Component {
//   constructor(props){
//     super(props)
//   this.state={
//     not:0
//   }
//   }

//   componentDidMount(){
//     var that = this
   
//     if(localStorage.getItem('token') && JSON.parse(localStorage.getItem('token'))["type"] === 'seller' ){
//     var store = JSON.parse(localStorage.getItem('token'))['id']
//          var child = localStorage.getItem('not2')
//     console.log(store,child, "heeeeeelp")

//     app.database().ref('notification').child(child+'').on('value', snap =>{
// console.log(child )
//       console.log("iiiin")
//       if(snap.val()){
//       console.log(snap.val()[JSON.parse(localStorage.getItem('token'))['id']], "vaaaaal")
//       that.setState({
//           not:snap.val()[JSON.parse(localStorage.getItem('token'))['id']]
//       })}

//   }) 
//   }
// }
//    signout=()=>{
//     localStorage.removeItem('token')
//     localStorage.removeItem('not2')
//   }
 
//   render(){
//      if (this.state.not){
//       var  notification =  <Navbar.Brand  >{this.state.not}<i class="fas fa-bell"></i></Navbar.Brand>
//      }
//   return (
// <div className="App">
// <Navbar collapseOnSelect expand="lg" bg="#800000" variant="dark">
//   <Navbar.Brand href="/home" >Made With Love</Navbar.Brand>
//   <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//   <Navbar.Collapse id="responsive-navbar-nav">
//   <Navbar.Brand href="/home" >HOME</Navbar.Brand>
//   <Nav className="mr-auto">
//       <NavDropdown title="category" id="collasible-nav-dropdown">
//         <NavDropdown.Item href="/buyer/food">Food</NavDropdown.Item>
//         <NavDropdown.Item href="/buyer/clothes">Clothes</NavDropdown.Item>
//         <NavDropdown.Item href="/buyer/accessories">Accessories</NavDropdown.Item>
//         <NavDropdown.Divider />
//         <NavDropdown.Item href="/buyer/babyproducts">Baby  Accessories</NavDropdown.Item>
//       </NavDropdown>
//     </Nav>
//    {notification}
//     <Nav>
//     <NavDropdown  id="collasible-nav-dropdown" style ={{padding :'15px'}}>
//         <NavDropdown.Item href="/orderList"> Views Orders</NavDropdown.Item>
//         <NavDropdown.Item href="/settings">Setting</NavDropdown.Item>
//         <NavDropdown.Item href="/" onClick={this.signout}>Sign Out</NavDropdown.Item>
//         <NavDropdown.Divider />
//       </NavDropdown>
//     </Nav>
//   </Navbar.Collapse>
// </Navbar>
//         </div>
//         )}
// }
// export default NavbarSeller









import  {Component} from 'react';
import React from "react";
import "../../Style/navbar.css";
import app  from '../fireConfig'
import { Navbar, Nav, NavDropdown, Row, Col, Container } from "react-bootstrap";
import "../../Style/navbar.css";
import rose from "../../images/rose.png";
import logo from "../../images/logo.png";
import back from "../../images/back.jpg";
if(localStorage.getItem('token') && JSON.parse(localStorage.getItem('token'))["type"] === 'seller' ){
  var id = JSON.parse(localStorage.getItem('token'))['id']
 var url = `/seller/profile/${id}`}
 
class NavbarSeller extends Component {
  constructor(props){
    super(props)
  this.state={
    not:0
  }
  }

  componentDidMount(){
    var that = this
   
    if(localStorage.getItem('token') && JSON.parse(localStorage.getItem('token'))["type"] === 'seller' ){
    var store = JSON.parse(localStorage.getItem('token'))['id']
         var child = localStorage.getItem('not2')
    console.log(store,child, "heeeeeelp")

    app.database().ref('notification').child(child+'').on('value', snap =>{
console.log(child )
      console.log("iiiin")
      if(snap.val()){
      console.log(snap.val()[JSON.parse(localStorage.getItem('token'))['id']], "vaaaaal")
      that.setState({
          not:snap.val()[JSON.parse(localStorage.getItem('token'))['id']]
      })}

  }) 
  }
}
   signout=()=>{
    localStorage.removeItem('token')
    localStorage.removeItem('not2')
  }
render(){
  if (this.state.not){
    var  notification =  <Navbar.Brand  >{this.state.not}<i class="fas fa-bell" style={{color:"hotPink"}}></i></Navbar.Brand>
   }
  return (
    <div
      style={{
        width: "100%",
        height: "1030px",
        backgroundImage: `url(${rose})`,
        // backgroundRepeat: "no-repeat",
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
              <img src={logo} width="200" height="180" />
            </a>
          </div>

          <hr
            style={{
              border: "0",
              borderTop: "1px solid red",
            }}
          />
        </Row>
        <hr style={{ marginLeft: "170px", border: "0.5px solid white" }}></hr>
        <Row style={{ marginLeft: "90px" }}>
          <Col style={{ padding: "0px 20px 0px 150px" }}>
            <a
              href="/home"
              style={{
                color: "#826105",
                fontSize: "25px",
                fontFamily: "Yanone Kaffeesatz",
              }}
            >
              Home
            </a>
          </Col>
          <Col style={{ padding: "0px 20px 0px 20px" }}>
            <a
              href={url + ""}
              style={{
                color: "#826105",
                fontSize: "25px",
                fontFamily: "Yanone Kaffeesatz",
              }}
            >
              Profile
            </a>
          </Col>

          <Col style={{ padding: "0px 20px 0px 20px" }}>
            <a
              href={url + ""}
              style={{
                color: "#826105",
                fontSize: "25px",
                fontFamily: "Yanone Kaffeesatz",
              }}
            >
              {notification}
            </a>
          </Col>
          <Col style={{ padding: "0px 20px 0px 20px" }}>
            <a
              href="/orderList"
              style={{
                color: "#826105",
                fontSize: "25px",
                fontFamily: "Yanone Kaffeesatz",
              }}
            >
              View Orders
            </a>
          </Col>

          {/* <Col style={{ padding: "0px 20px 0px 20px" }}>
            <a
              href="/settings"
              style={{
                color: "#FCFBED",
                fontSize: "25px",
                fontFamily: "Yanone Kaffeesatz",
              }}
            >
              Settings
            </a>
          </Col>

          <Col style={{ padding: "0px 20px 0px 20px" }}>
            <a
              href="/"
              onClick={signout}
              style={{
                color: "#FCFBED",
                fontSize: "25px",
                fontFamily: "Yanone Kaffeesatz",
              }}
            >
              Sign Out
            </a>
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
          </Col> */}

          <NavDropdown
            id="collasible-nav-dropdown"
            style={{ padding: "15px", color: "#826105" }}
          >
            <NavDropdown.Item href="/settings" style={{ color: "#826105" }}>
              Setting
            </NavDropdown.Item>
            <NavDropdown.Item
              href="/"
              style={{ color: "#826105" }}
              onClick={this.signout}
            >
              Sign Out
            </NavDropdown.Item>
            <NavDropdown.Divider />
          </NavDropdown>
        </Row>
      </Container>
    </div>

    // <div className="App">
    //   <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" bac="red">
    //     <Navbar.Brand href="/home">Made With Love</Navbar.Brand>
    //     <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    //     <Navbar.Collapse id="responsive-navbar-nav">
    //       <Nav.Link href="/home" style={{ padding: "22px 880px 0px 0px" }}>
    //         HOME
    //       </Nav.Link>
    //       <Nav.Link
    //         href={url + ""}
    //         style={{ fontSize: "20px", padding: "15px " }}
    //       >
    //         Profile
    //         {/* <i style={{fontSize:"35px" , color:'white', padding:'0px 0px 0px 30px'}} className="fas fa-user-circle"></i> */}
    //       </Nav.Link>
    //       <NavDropdown id="collasible-nav-dropdown" style={{ padding: "15px" }}>
    //         <NavDropdown.Item href="/orderList"> Views Orders</NavDropdown.Item>
    //         <NavDropdown.Item href="/settings">Setting</NavDropdown.Item>
    //         <NavDropdown.Item href="/" onClick={signout}>
    //           Sign Out
    //         </NavDropdown.Item>
    //         <NavDropdown.Divider />
    //       </NavDropdown>
    //     </Navbar.Collapse>
    //   </Navbar>
    // </div>
  );
};
}
export default NavbarSeller;

