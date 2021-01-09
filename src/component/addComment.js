import React, { Component } from 'react';
import $ from 'jquery';
import NavbarBuyer from "./layout/NavbarBuyer.js";
import { Card, Col} from 'react-bootstrap';
export default class AddComment extends React.Component {
    constructor(props){
        super(props);
        this.state={
            addComment:""
        }
        this.onChangeHandle = this.onChangeHandle.bind(this);
        this.submitHandle = this.submitHandle.bind(this);
    }
    componentDidMount(){
        // var id = JSON.parse(localStorage.getItem('token'))['id']
        var that = this;
        $.ajax({
            type: 'GET',
            url:'http://127.0.0.1:8000/addComment/',
            success: function(data) {
             console.log('success');
    
            },
            error: function(err) {
              console.log('error:' ,err)
            }
        })
        
    }
    onChangeHandle(event){
        this.setState({ [event.target.name] : event.target.value })
      }

      submitHandle (addComment){
        var comment = { firstName: this.state.addComment}
        console.log(comment)
            $.ajax({
              url: '/users',
              method: "POST",
              data: JSON.stringify(comment),
              contentType: "application/json",
              success: (user) => {
                // if hashing succeded the save the users data
                console.log('successeded');

    
             },
              error: (err) => { console.log(err) }
            })
    
      }
render () {
    return(
          <div>
              <NavbarBuyer/>
       
          
            <Col>
            <Card style={{ width: "800px", marginTop: "50px", marginLeft:'90px', padding:'0px 20px 0px 20px' }}>
              <br/>
                    <Card.Img
                      variant="top"
                    //   src={}
                      width = '1500px' height = '500px'
                    />
                    <Card.Body>
                      {/* <Card.Title style={{fontWeight:'normal'}}><label style={{color:'red', fontWeight:'bold'}}>Product Name :</label> </Card.Title>
                      <Card.Text style={{fontWeight:'normal'}}><label style={{color:'red', fontWeight:'bold'}}>Description :</label> </Card.Text>
                      <Card.Text style={{fontWeight:'normal'}}><label style={{color:'red', fontWeight:'bold'}}>Product Price :</label> </Card.Text> */}
                         <input type="comment" className="form-control" id="exampleInputComment" name='addComment'  onChange={this.onChangeHandle} aria-describedby="emailHelp" placeholder="Add Comment" style ={{width:'200px'}}></input>
                         <button type="button" className="btn btn-danger" style ={{margin :'-50px 100px 0px 250px'}} onClick={this.submitHandle}>Danger</button>
                   </Card.Body>
                 </Card>
                 </Col> 
          </div>
    )
}





}
