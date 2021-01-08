import $ from 'jquery';
import React, { useState ,useEffect} from "react";
import { Control, Form } from 'react-redux-form';
import app from './fireConfig';
import NavbarSeller from "./layout/NavbarSeller.js";

var storage = app.storage();
function EditProfile (props)  {
  console.log("caaaat",props)
  const category = props.location.info.category
  const product =  props.location.info.product
  const desc = props.location.info.desc
  console.log(desc)
  const price = props.location.info.price
  console.log(category)
  const [url, setUrl] = useState("");
   const [image, setImage] = useState("");
  var obj1;
 
    const ajax=(edit)=>{
      obj1= Object.assign({} ,edit)
    console.log(url)
    obj1['url'] = url
    obj1.id=props.location.info.id
    obj1['category'] = category
    console.log(obj1)
     $.ajax({
       method: 'POST',
       url:'http://127.0.0.1:8000/seller/editProfile/'+`${obj1.id}`,
       data : JSON.stringify(obj1),
       contentType: "application/json",
       success:function(){
         console.log(obj1)
       },
       error: function(err){
         console.log(obj1)
       }
     })
     window.location('seller/profile/')
   }
const handleUpload=(e)=>{ 
    const uploadTask = storage.ref(`imagee/${image.name}`).put(image);
      uploadTask.on(
        "state_changed",
        snapshot => {
         
        },
        error => {
          console.log(error);
        },
        () => {
          storage
            .ref("imagee")
            .child(image.name)
            .getDownloadURL()
            .then(url => {
              setUrl(url);
             console.log(url)
            });
        }
      );}
    
const uploadImage=(e)=>{
   if (e.target.files[0]) {
        setImage(e.target.files[0])
   }}
 const tr2=()=>{
  if(image !== ""){
return <div>
<img src={url}/>
<input type="button" value="Add to favorites" onClick={handleUpload}></input>
</div>
  }
}
const food=() => {
  if (category === 100){
    return(
    <div>
      <Form
      model="edit"
     onSubmit={(edit) => ajax(edit)}
    >
    <div className="col-md-3">
    <label  className="form-label">Category:</label><br></br>
    <Control.select model="edit.type" className="form-select"  required>
      <option selected disabled value="" >Choose The Type</option>
      <option  value ="Salty">Salty</option>
      <option  value ="Sweet">Sweet</option>     
       </Control.select>
​
  </div><br></br>
​
    <div className="col-md-4">
      <label htmlFor="edit.product" className="form-label" >Name Of The Product:</label>
      <Control.text model="edit.product" defaultValue={product} id="edit.product" className="form-control" required/>
      </div>
​
      <div className="col-md-3">
       <label htmlFor="edit.description" className="form-label">Description:</label>
      <Control.text model="edit.description"  defaultValue={desc} id="edit.description" className="form-control" required />
      </div>
​
      <div className="col-md-3">
      <label htmlFor="edit.price" className="form-label">Price:</label>
      <Control.text model="edit.price" defaultValue={price} id="edit.price" className="form-control" required/>
      </div>
​
​
​
      <div className="mb-3">   
     <label htmlFor="edit.image" className="form-label">Add Picture:</label>
    <input type="file" model="edit.image" className="form-control" aria-label="file example" onChange={uploadImage}  required/>
    {tr2()}
 </div>
  
      <div className="col-12">
    <button className="btn btn-primary" type="submit"   >Submit</button>
  </div>
    </Form></div>
    )
  }
}
const clothes=()=>{
  // console.log(obj1,'obbbbjjj1')
if (category === 200) 
  
 return(
    <div>
 
      <Form model="edit"
      onSubmit={(edit) => ajax(edit)}
    >
  <div className="col-md-3">
    <label  className="form-label">Gender:</label><br></br>
    <Control.select model="edit.gender" className="form-select"  required>
      <option selected disabled value="" >Choose the gender</option>
      <option  value ="Male">Male</option>
      <option  value ="Female">Female</option>
       </Control.select>
  </div><br></br>
   <div className="col-md-3">
    <label  className="form-label">Size:</label><br></br>
    <Control.select model="edit.size" className="form-select"  required>
      <option selected disabled value="" >Choose the size</option>
      <option  value ="S">S</option>
      <option  value ="M">M</option>
      <option  value ="L">L</option>
       </Control.select>
  </div><br></br>
    <div className="col-md-4">
      <label htmlFor="edit.product"  className="form-label" >Name Of Product:</label>
      <Control.text model="edit.product"  id="edit.product" className="form-control" required/>
      </div>
        <div className="col-md-3">
       <label htmlFor="edit.description" className="form-label">Description:</label>
      <Control.text model="edit.description" id="edit.description" className="form-control" required />
      </div> 
       <div className="col-md-3">
      <label htmlFor="edit.price" className="form-label">Price:</label>
      <Control.text model="edit.price" id="edit.price" className="form-control" required/>
      </div>
        <div className="mb-3">
     <label htmlFor="edit.image" className="form-label">Add Picture:</label>
    <input type ="file" className="form-control" aria-label="file example" onChange={uploadImage}  required/> 
    {tr2()}
 </div> 
     <div className="col-12">
    <button className="btn btn-primary" type="submit">Submit</button>
  </div> 
    </Form></div>
    )}
    const babyproducts=() => {
        if (category === 400){
         return(
        <div>
                <Form
                model="edit"
                onSubmit={(edit) => ajax(edit)}
              >
           <div className="col-md-3">
          <label  className="form-label">Gender:</label><br></br>
          <Control.select model="edit.gender" className="form-select"  required>
            <option selected disabled value="" >Choose the gender</option>
            <option  value ="Male">Boy</option>
            <option  value ="Female">Girl</option>
             </Control.select>
        </div><br></br>
        <div className="col-md-4">
      <label htmlFor="edit.product"  className="form-label" >Name Of Product:</label>
      <Control.text model="edit.product" id="edit.product" className="form-control" required/>
      </div>
      <div className="col-md-3">
       <label htmlFor="edit.description" className="form-label">Description:</label>
      <Control.text model="edit.description" id="edit.description" className="form-control" required />
      </div>
      <div className="col-md-3">
      <label htmlFor="edit.price" className="form-label">Price:</label>
      <Control.text model="edit.price" id="edit.price" className="form-control" required/>
      </div>
      <div className="mb-3">
     <label htmlFor="edit.image" className="form-label">Add Picture:</label>
    <input type="file"  model="edit.image"className="form-control" aria-label="file example" onChange={uploadImage}  required/>
    {tr2()}
 </div>
      <div className="col-12">
    <button className="btn btn-primary" type="submit"  >Submit</button>
  </div>
    </Form></div>
             )
           }
         }
  const accessories=() => {
    if (category === 300){
     return(
       <div>
       <Form
        model="edit"
      onSubmit={(edit) => ajax(edit)}
             >
          <div className="col-md-3">
         <label  className="form-label">Material:</label><br></br>
         <Control.select model="edit.material" className="form-select"  required>
           <option selected disabled value="" >Choose the material</option>
           <option  value ="Silver">Silver</option>
           <option  value ="Gold">Gold</option>
            </Control.select>
       </div><br></br>
       <div className="col-md-4">
     <label htmlFor="edit.product"  className="form-label" >Name Of Product:</label>
     <Control.text model="edit.product" id="edit.product" className="form-control" required/>
     </div>
     <div className="col-md-3">
      <label htmlFor="edit.description" className="form-label">Description:</label>
     <Control.text model="edit.description" id="edit.description" className="form-control" required />
     </div>
     <div className="col-md-3">
     <label htmlFor="edit.price" className="form-label">Price:</label>
     <Control.text model="edit.price" id="edit.price" className="form-control" required/>
     </div>
     <div className="mb-3">
    <label htmlFor="edit.image" className="form-label">Add Picture:</label>
   <input type="file" model="edit.image" className="form-control" aria-label="file example" onChange={uploadImage}  required/>
   {tr2()}
 </div>
     <div className="col-12">
   <button className="btn btn-primary" type="submit"  >Submit</button>
 </div>
   </Form></div>
            )
          }
        }
  return (
    
    <div>
     <div>{food()}</div>
     <div>{clothes()}</div>
     <div>{babyproducts()}</div>  
      <div>{accessories()}</div>
  </div> 
  )
  }
  export default  EditProfile






