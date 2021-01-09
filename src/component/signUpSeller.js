import React from 'react';
import { connect } from 'react-redux';
import { Control, Form } from "react-redux-form";
import { useState } from "react";
import $ from "jquery";
import app from './fireConfig';

import NavbarSeller from './layout/NavbarSeller'
// import { BrowserRouter as Router, Link } from 'react-router-dom';
import {storage} from './fireConfig';
var mapStateToProps = (state) => {
  return {
    email: state.reducer.email,
    password: state.reducer.password,
    storeName: state.reducer.storeName,
    category: state.reducer.category,
    description: state.reducer.description,
    location: state.reducer.location,
    delieveryTime: state.reducer.deliveryOrder,
    url: state.reducer.image
  }
}



// import { BrowserRouter as Router, Link } from 'react-router-dom';

var action = { type: 'INPUT_CANGE', text: '' }
var mapDispatchToProps = (dispatch) => {
  return {
    inputChanged: (event) => {
      action = { type: 'INPUT_CANGE', text: event.target.value, name: event.target.name }
      dispatch(action);
    }
  }
}
 function SignUpSeller(props) {

  const [url, setUrl] = useState("");
  const [image, setImage] = useState("");


  var clickButton = (signUpSeller) => {
    // console.log( props.email)
    
    $.ajax({
      url: "http://127.0.0.1:8000/seller/signup",
      method: "POST",
      data: JSON.stringify(signUpSeller),
      contentType: "application/json",
      success: function (data) {
        //redirect to login page
      console.log("POST sent successfully!");
      window.location =`/login`
     // <Route  path ='/login' exact  component ={Login}></Route>
    },
    error: function (err) {
     alert('email already exsit')
    window.location = `/seller/signup`      
      }
})  
 }

 var handleUpload =(e)=>{
  if (e.target.files[0]) {
    setImage(e.target.files[0])
}  console.log(image)}
  //console.log(event.target.files[0])
  // event.preventDefault();
  var tr1=()=>{
  var uploadTask = storage.ref(`images/${image.name}`).put(image);
  console.log(image.name)
  uploadTask.on(
    "state_changed",
     snapshot => {},
     error =>{
       console.log(error);
     },
     ()=>{
       storage
       .ref("images")
       .child(image.name)
       .getDownloadURL()
       .then(url =>{
          setUrl(url)
       })
     }
  )
}
var takingTheUrl = ()=>{
if(image !== ""){
  return <div>
    <img src={url} width='250px' height='250px'></img>
    <button type="button" onClick={tr1}>Upload</button>
  </div>
}
}
  return (
    <div>
      <NavbarSeller />
      <div style={{ maxWidth: "500px", margin: 'auto',  padding: '50px 10px 10px 10px'  }}>
        <div className="card w-100">
          {/* <div className="card-body"> */}
          <div className="container">
          <Form
            class="row g-3 needs-validation"
            model="login"
            type="submit"
            onSubmit={(signUpSeller) => clickButton(signUpSeller)}
            novalidate
           
          >
            <div class="col-md-4">
<label for="validationCustom01" class="form-label">Email address</label>
<Control.text autocomplete="off" name="email"  className="form-control" type="email" placeholder="Enter email" model="signUpSeller.email"  id="signUpSeller.email" required  style={{ padding: "2px 2px 2px 2px" }} onChange={props.inputChanged} />
              
<label for="validationCustom01" class="form-label">password</label>
<Control.text autocomplete="off" name="password"  className="form-control" type="password" placeholder="Enter password"  model="signUpSeller.password"  id="signUpSeller.password" required  style={{ padding: "2px 2px 2px 2px" }} onChange={props.inputChanged} />       

<label for="validationCustom01" class="form-label">Store Name</label>
<Control.text autocomplete="off" name="storeName"  className="form-control" type="text" placeholder="Enter Store Name"  model="signUpSeller.storeName"  id="signUpSeller.storeName" required  style={{ padding: "2px 2px 2px 2px" }} onChange={props.inputChanged} />                     

<label for="validationCustom01" class="form-label">Description</label>
<Control.text autocomplete="off" name="description"  className="form-control" type="text" placeholder="Enter Description"  model="signUpSeller.description"  id="signUpSeller.description" required  style={{ padding: "2px 2px 2px 2px" }} onChange={props.inputChanged} />                     

<label for="validationCustom01" class="form-label">Location</label>
<Control.text autocomplete="off" name="location"  className="form-control" type="text" placeholder="Enter Location"  model="signUpSeller.location"  id="signUpSeller.location" required  style={{ padding: "2px 2px 2px 2px" }} onChange={props.inputChanged} />                     
                
<label for="validationCustom01" class="form-label">Choose Category</label>
<select  autocomplete="off" name="category"  className="form-control" type="text"   model="signUpSeller.category"  id="signUpSeller.category" required  style={{ padding: "2px 2px 2px 2px" }} onChange={props.inputChanged} >
<option></option>
<option value="food">Food</option>
<option value="clothes">clothes</option>
<option value="babyproduct">Baby Products</option>
<option value="accessories">Accessories</option>
</select>                                    
               
<label for="validationCustom01" class="form-label">Deliver Order WithIn</label>
<select  autocomplete="off" name="deliveryOrder"  className="form-control" type="text"   model="signUpSeller.deliveryOrder"  id="signUpSeller.deliveryOrder" required  style={{ padding: "2px 2px 2px 2px" }} onChange={props.inputChanged} >
<option></option>
<option value="12 Hours">12 Hours</option>
<option value="24 Hours">24 Hours</option>
<option value="Same Day">Same Day</option>
</select>                              
               
<div class="custom-file">
<label for="validationCustom01" class="form-label">Your Photo</label>
<input  name="image"  className="form-control" type ="file"   model="signUpSeller.image"  id="signUpSeller.image" required  style={{ padding: "2px 2px 2px 2px" }} onChange = {handleUpload} />                                     
{takingTheUrl()}
</div>        
  </div>
              
              <div class="col-12">
              <button type="submit" className="btn btn-danger" style={{ margin: '0px 180px', width: 100 }}>Sign Up</button>
              </div>
            </Form> 
          </div>
        </div>
      </div>
    </div>
  )
}
export default connect( mapDispatchToProps)(SignUpSeller);




















//             <form class="row g-3" onSubmit={clickButton}  class="row g-3 needs-validation"
//             model="signup"
//             type="submit"
//             novalidate>
//   <div class="col-md-4">
//     <label for="validationDefault01" class="form-label">First name</label>
//     <input type="email" class="form-control" id="validationDefault01" name="email" required onChange={props.inputChanged}/>
//   </div>
//   <div class="col-md-4">
//     <label for="validationDefault02" class="form-label">Last name</label>
//     <input type="text" class="form-control" id="validationDefault02"  required/>
//   </div>
//   <div class="col-md-4">
//     <label for="validationDefaultUsername" class="form-label">Username</label>
//     <div class="input-group">
//       <span class="input-group-text" id="inputGroupPrepend2">@</span>
//       <input type="text" class="form-control" id="validationDefaultUsername"  aria-describedby="inputGroupPrepend2" required onChange={props.inputChanged}/>
//     </div>
//   </div>
//   <div class="col-md-6">
//     <label for="validationDefault03" class="form-label">City</label>
//     <input type="text" class="form-control" id="validationDefault03" required onChange={props.inputChanged}/>
//   </div>
//   <div class="col-md-3">
//     <label for="validationDefault04" class="form-label">State</label>
//     <select class="form-select" id="validationDefault04" required>
//       <option selected disabled value="">Choose...</option>
//       <option>...</option>
//     </select>
//   </div>
//   <div class="col-md-3">
//     <label for="validationDefault05" class="form-label">Zip</label>
//     <input type="text" class="form-control" id="validationDefault05" required/>
//   </div>
//   <div class="col-12">
//     <div class="form-check">
//       <input class="form-check-input" type="checkbox" value="" id="invalidCheck2" required onChange={props.inputChanged}/>
//       <label class="form-check-label" for="invalidCheck2">
//         Agree to terms and conditions
//       </label>
//     </div>
//   </div>
//   <div class="col-12">
//     <button class="btn btn-primary"   type="submit">Submit form</button>
//   </div>
// </form>
