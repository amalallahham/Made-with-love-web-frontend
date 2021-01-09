import React from 'react'
import img from  '../images/4042.gif'
import { Link} from "react-router-dom";
import NavbarBuyer from "./layout/NavbarBuyer.js";
import NavbarSeller from "./layout/NavbarSeller.js";
import Navbar from "./layout/Navbar.js";
var style={
    position: 'absolute',
    top: '50%',
    left:' 50%',
    transform: 'translate(-50%, -50%)',
    // -msTransform: 'translate(-50%, -50%)',
    backgroundColor: '#556',
    color: 'white',
    fontSize: '16px',
    padding: '12px 24px',
    border: 'none',
    cursor: 'pointer',
    borderRadius: '5px',
    textAlign: 'center',
}
var style2={
    position: 'absolute',
    top: '15%',
    left:' 50%',
    transform: 'translate(-50%, -50%)',
    // -msTransform: 'translate(-50%, -50%)',
    backgroundColor: '#556',
    color: 'white',
    fontSize: '16px',
    padding: '30px 200px',
    border: 'none',
    cursor: 'pointer',
    borderRadius: '5px',
    textAlign: 'center',
}
export default function Notfound() {
    var tokenObj = JSON.parse(localStorage.getItem('token'))
//   console.log(tokenObj['type'])
  if(!tokenObj){
  var url = '/'
  var nav = <Navbar/>
}
  if(tokenObj){
  if(tokenObj.type ==='buyer'){
  var url = '/home'
  var nav = <NavbarBuyer/>}
  if(tokenObj.type === 'seller'){
  var url = '/home'
  var nav = <NavbarSeller/>}}

    return (
        <div>
            {nav}
            <h1 style = {style2}>404 Page Not Found</h1>
            <img src={img} width ="100%" height ="900px"/>
            <button className="btn" style = {style}><Link to={url} style={{ color:'white'}}>Go Back Home</Link> </button>
            {/* {setTimeout(() => {
                if(tokenObj)
                window.location='/home'
                else 
                window.location='/'
            }, 3000)} */}
        </div>
    )
}
