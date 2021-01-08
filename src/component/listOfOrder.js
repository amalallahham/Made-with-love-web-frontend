import React, { Component} from "react"; 
import $ from "jquery";
import { Card, Row , Col} from 'react-bootstrap';
import NavbarSeller from './layout/NavbarSeller'
import{ app }from  './fireConfig'
export default class listOfOrder extends Component {
  constructor(props){
    super(props)
    this.state={data:[]}
    this.database = app.database().ref('notification')
  }
  componentDidMount(){
    var id = JSON.parse(localStorage.getItem('token'))['id']
    var that = this;
     // get store id 
     var urlRef = that.database;
     urlRef.once("value", function(snapshot) {
        
       snapshot.forEach(function(childSnapshot) {
         childSnapshot.forEach(function(child) {
     
           if(Number(child.key) ===  id){
       
             that.database.child(childSnapshot.key).set({[child.key]: 0})  }
     });
      
     })
     
     }) 


    $.ajax({
        type: 'GET',
        url:'http://127.0.0.1:8000/seller/order/list/'+id,
        // headers: {"Authorization": localStorage.getItem('token')},
       

        success: function(data) {
         console.log("data fom get request",data);
         var store = data[0]["store"]
      
         that.setState({
             data:data
         },()=>{console.log(that.state.data,"staaaaaaaaaaate")})
         
        },
        error: function(err) {
          console.log('error:' ,err)
        }
    })
    
}

async handleToken(token, addresses){
  console.log({token,addresses}, 'handle toooookeeen')

}
  render() {
    if(this.state.data.length>0)
console.log(this.state.data.length,"dataa")
var c = <Row>
{this.state.data.map((item )=>{
  return (<div>
     <Col>
  <Card style={{ width: "800px", marginTop: "50px", marginLeft:'90px' }}>
          <Card.Body>
            <Card.Title style={{fontWeight:'normal',}}><label style={{backgroundColor:'maroon',color:"white", fontWeight:'bold', textAlign:'center'}}> {item['fields']['item']}</label> </Card.Title>
            <Card.Text> <label style={{color:'red', fontWeight:'bold'}}>Quantity : </label> {item['fields']['quantity']}</Card.Text>
            <Card.Text> <label style={{color:'red', fontWeight:'bold'}}>Order Date : </label> {item['fields']['order_date']}</Card.Text>
            <Card.Text ><label style={{color:'red', fontWeight:'bold'}}>Location : </label><a href={item['fields']['location']}> {item['fields']['location']}</a></Card.Text>
            <Card.Text><label style={{color:'red', fontWeight:'bold'}}>Buyer : </label> {item['fields']['buyer']}</Card.Text>
            <Card.Text><label style={{color:'red', fontWeight:'bold'}}>Phone Number : </label> {item['fields']['phonenumber']}</Card.Text>
            <Card.Text><label style={{color:'red', fontWeight:'bold'}}>Total Price : </label> {item['fields']['price']}</Card.Text>
            <Card.Text><label style={{color:'red', fontWeight:'bold'}}>Payement Status: </label> {item['fields']['is_payed']}</Card.Text>
            </Card.Body>
                 </Card>
                 </Col> <br/></div>
         )})
        }
        </Row>
    return (
      <div>
      < NavbarSeller />
      <div style={{maxWidth:"1000px", margin:"0 auto", backgroundColor:"lavenderblush"}} >
  <h1 style={{backgroundColor:'maroon',color:"white", fontWeight:'bold', textAlign:'center'}}>List Of Orders</h1>
 <div style={{maxWidth:"1000px", margin:"0 auto", backgroundColor:"lavenderblush"}} >
 {c}
 <br/><br/><br/>
        </div>
      </div></div>
    )
  }
}
