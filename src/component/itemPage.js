import React, { Component } from 'react';
import {Link } from 'react-router-dom'
import $ from 'jquery';
import NavbarBuyer from "./layout/NavbarBuyer.js";
import { Card, Col} from 'react-bootstrap';
import axios from 'axios';
import app from './fireConfig'
export default class ItemPage extends React.Component {
    constructor(props){
        super(props);
        this.database = app.database().ref('comments')

        this.state={
            addComment:"", 
            data :[]
        }
    }

    componentDidMount(){
        let that = this 
        $.ajax({
            url: `http://127.0.0.1:8000/getcomments/${this.props.location.info.item['pk']}`,
            method: "GET", 
            contentType: "application/json",
            success: (data) => {
           that.setState({data: data})
           console.log(data)
              
           },
            error: (err) => { console.log(err) }
          })
    }
    onChangeHandle(event){

        this.setState({addComment:event.target.value})
       
    }



    submitHandle(event){
        console.log(this)
        var that = this 
        var comment = { text: this.state.addComment}
        //if the user is a buyer 
        if(JSON.parse(localStorage.getItem('token'))['type']  === 'buyer'){
         comment.user_id = JSON.parse(localStorage.getItem('token'))['id_store']
         comment.types = 'buyer'
        }
        // if the user is a seller 
        if(JSON.parse(localStorage.getItem('token'))['type']  === 'seller'){
        comment.user_id = JSON.parse(localStorage.getItem('token'))['id']
        comment.types = 'seller'
        }
        comment.item_id = this.props.location.info.item['pk']

        console.log(comment)
            $.ajax({
              url: 'http://127.0.0.1:8000/comment',
              method: "POST", 
              data: JSON.stringify(comment),
              contentType: "application/json",
              success: (user) => {
                
                // console.log( user.username, "username");
                // var data =  that.state.data
                // data.push({fields:{comment:comment.text, idbuyer:user.username,render:true} })
                // that.setState({
                //     data : data
                // })
                $.ajax({
                    url: `http://127.0.0.1:8000/getcomments/${this.props.location.info.item['pk']}`,
                    method: "GET", 
                    contentType: "application/json",
                    success: (data) => {
                   that.setState({data: data})
                   console.log(data)
                         //Notification 
          // var urlRef = that.database;
          // urlRef.once("value", function(snapshot) {
          //   var exist = false ; 
          //   snapshot.forEach(function(childSnapshot) {
          //     childSnapshot.forEach(function(child) {
          //       // if thebuyer id exist in firebase  increment number of orders
          //       if(Number(child.key) === JSON.stringify(localStorage.getItem("token"))["id"]){
          //         exist = true ; 
          //         console.log(typeof  child.val() , child.val())
          //         var x =Number(child.val()) +1
          //         console.log(x)
          //         that.database.child(childSnapshot.key).set({[child.key]: x})  }
          // });
           
          // })
          // // if the store id does nto exist in firebase create it and set it to 1 (first order)
          //  if ( !exist ){
          //   urlRef.push({[that.props.location.info.storeId] : 1 })
          //  }
          // })      
                   },
                    error: (err) => { console.log(err) }
                  })


                
             },
              error: (err) => { console.log(err) }
            })
      }

deleteComment(comment,i){
    var that = this
console.log(comment)
console.log("clicked")
axios.delete(' http://127.0.0.1:8000/deleteComment/'+comment)
          .then(response => { console.log(response.data) 
            $.ajax({
                url: `http://127.0.0.1:8000/getcomments/${this.props.location.info.item['pk']}`,
                method: "GET", 
                contentType: "application/json",
                success: (data) => {
               that.setState({data: data})
               console.log(data)
                  
               },
                error: (err) => { console.log(err) }
              })
            })
    
          
}
     

render () {
    //for the input comment 
    console.log(this.props.location.info.item['fields']['storeId'], 'idddddd')
   if(JSON.parse(localStorage.getItem('token'))['type']  === 'buyer' || JSON.parse(localStorage.getItem('token'))['id'] ===  this.props.location.info.item['fields']['storeId'] ){
       console.log(this.props.location.info.item['pk'])
       var com = <div><input type="comment" class="form-control"  id="exampleInputComment" name='addComment'  onChange={this.onChangeHandle.bind(this)} aria-describedby="emailHelp" placeholder="Add Comment"  style ={{width:'200px'}}></input>
       <button type="button" class="btn btn-danger" style ={{margin :'-50px 100px 0px 250px'}} onClick={this.submitHandle.bind(this)}>Comment</button></div>
   }
// for the order button 
if(JSON.parse(localStorage.getItem('token'))['type']  === 'buyer' ){
    console.log(this.props.location.info.item['pk'])
    var order = <Link to={{pathname:"/order", info: {id: this.props.location.info.item['pk'], name:this.props.location.info.item['fields'].productname, url: this.props.location.info.item['fields'].image, store: this.props.location.info.item['fields'].store, price: this.props.location.info.item['fields'].price }}}>
    <button>Order </button> 
          </Link>
}




    console.log(this.props.location.info.cat)
    if (this.props.location.info.cat=== 'food')
    var x = <Card.Text style={{fontWeight:'normal'}}><label style={{color:'red', fontWeight:'bold'}}>Category : </label> {this.props.location.info.item['fields'].types} </Card.Text>
   
    if(this.props.location.info.cat === 'clothes')
        var x = <div><Card.Text style={{fontWeight:'normal'}}><label style={{color:'red', fontWeight:'bold'}}>Size: </label> {this.props.location.info.item['fields'].size} </Card.Text>
        <Card.Text style={{fontWeight:'normal'}}><label style={{color:'red', fontWeight:'bold'}}>Gender : </label> {this.props.location.info.item['fields'].gender} </Card.Text></div>
     if(this.props.location.info.cat === 'babyproducts')
     var x = <Card.Text style={{fontWeight:'normal'}}><label style={{color:'red', fontWeight:'bold'}}>Gender : </label> {this.props.location.info.item['fields'].gender} </Card.Text>
     if(this.props.location.info.cat === 'accessories')
     var x = <Card.Text style={{fontWeight:'normal'}}><label style={{color:'red', fontWeight:'bold'}}>Material : </label> {this.props.location.info.item['fields'].material} </Card.Text>
   //if(JSON.parse(localStorage.getItem('token'))['type']  === 'seller' && JSON.parse(localStorage.getItem('token'))['id'] ===  this.props.location.info.item['fields']['store'])
//    var delele = 
     return(
          <div>
              <NavbarBuyer/>
            <Col>
            <Card style={{ width: "800px", marginTop: "50px", marginLeft:'90px', padding:'0px 20px 0px 20px' }}>
              <br/>
              <div className= "d-flex">
              <div className= "p-2">
                    <Card.Img
                      variant="top"
                      src={this.props.location.info.item['fields'].image}
                      width = '500px' height = '300px'
                    /></div>
                   
                    <Card.Body> <div className= "p-2">
                        <br/>
                      <Card.Title style={{fontWeight:'normal'}}><label style={{color:'red', fontWeight:'bold'}}>Product Name : </label> {this.props.location.info.item['fields'].productname}</Card.Title>
                      <Card.Text style={{fontWeight:'normal'}}><label style={{color:'red', fontWeight:'bold'}}>Store :</label> {this.props.location.info.item['fields'].store}</Card.Text>
                     <Card.Text style={{fontWeight:'normal'}}><label style={{color:'red', fontWeight:'bold'}}>Description :</label> {this.props.location.info.item['fields'].description}</Card.Text>
                     {x} <Card.Text style={{fontWeight:'normal'}}><label style={{color:'red', fontWeight:'bold'}}>Product Price : </label> {this.props.location.info.item['fields'].price}</Card.Text>
                     
                     {order}
                   </div>  </Card.Body>
                   
                         
                 </div><br/>
                 <div style={{borderTop:"solid Lightgray 1px"}}><br/>
                 {com}
                        { this.state.data[0]? this.state.data.map((comment,i)=>{
                            // delete icon for the one who wrote comment and for the seller of the item 

                                 if (JSON.parse(localStorage.getItem('token'))["id"] === comment['fields'].idbuyer||JSON.parse(localStorage.getItem('token'))["id_store"] === comment['fields'].idbuyer || JSON.parse(localStorage.getItem('token'))["id"] === comment['fields'].idstore){
                                    // var index=i;
                                    var remove = <i class="fas fa-trash-alt"  onClick={this.deleteComment.bind(this, comment.pk,i)} ></i>}
                                 
                            return  <div key = {i}><div style={{border:"solid Lightgray 1px", borderRadius:"4px", padding:"20px"}}>
                                 <h3> {comment['fields']['buyer']}</h3>
                                 <h5> {comment['fields']['comment']} {remove}</h5>
                             </div><br/></div>
                         }): null}
                   
                         </div>
                 </Card>
                 </Col> 
          </div>
    )
}
}