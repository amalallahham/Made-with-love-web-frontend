import React from 'react';
import { Link } from 'react-router-dom'
import { Container , Row , Col } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import "../Style/view.css";
import down from "../images/down.jpg"


// const player = {
//     color : 'red',
//     fontFamily: 'Gochi Hand'
    

// }
 function Footer(){
     return (
         <footer style={{  width: "100%", marginTop:'50px',
         height: "1000px", backgroundImage: `url(${down})`}}>

        <Container>
                    
  <Row className="justify-content-md-center">
    {/* <Col xs lg="3">
      1 of 3
    </Col> */}
    <div style={{float: "none",
    marginLeft: "360px",
    marginRight: "100px",
    marginBottom: "20px",
    marginTop: "0",
    paddingTop: "10px"}}>
       
    </div>
    
    <Col md="auto"><hr style={{color:'white', height:'50px'}}/></Col>
  
  </Row>
  <Row>
    <Col style={{padding:'0px 20px 0px 100px', }}>
    <a href="/" style={{color:'#fcfbed', fontSize:'25px', fontFamily: 'Yanone Kaffeesatz'}}>Home</a>
    </Col>

    <Col style={{padding:'0px 20px 0px 20px'}}>
    <a href="/about" style={{color:'#fcfbed', fontSize:'25px', fontFamily: 'Yanone Kaffeesatz'}}>About Us</a>
    </Col>

    <Col style={{padding:'0px 20px 0px 20px'}}>
    <a href="/login" style={{color:'#fcfbed', fontSize:'25px', fontFamily: 'Yanone Kaffeesatz'}}>Login</a>
    </Col>

    
    
  </Row>
<Row style={{padding:'400px 10px 0px 80px'}}>
    <Col>
    <Link  to="/seller/signup" style={{textDecoration: 'none'}}>
      <p className="mb-0"style={{color:'#fcfbed', fontSize:'30px', fontFamily: 'Yanone Kaffeesatz' ,
  animationDuration: "1.5s", 
  animationTimingFunction: "ease-out",
  animationDelay: "0",
  animationDirection: "alternate",
  animationIterationCount: "infinite",
  animationFillMode: "none",
  animationPlayState: "running"}}>Get Started With Your Business</p></Link>
    </Col>
    <Col>
    <Link to="/buyer/signup" style={{textDecoration: 'none'}}>
            <p  className="mb-0" style={{color:'#fcfbed', fontSize:'30px', fontFamily: 'Yanone Kaffeesatz'}}> Find The Best Homemade Products</p>
       </Link>
    </Col>
</Row>
</Container>
</footer>




    )
}

export default Footer;