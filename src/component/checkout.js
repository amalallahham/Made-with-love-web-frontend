
import { render } from '@testing-library/react'
import { Button } from 'bootstrap'
import React from 'react'
import { Table } from 'react-bootstrap'
import StripeCheckout from "react-stripe-checkout";




const Checkout = (props) => {

  var handleToken = (token, addresses)=>{
    console.log({token,addresses}, 'handle toooookeeen')
  
  }
    console.log(props.store.getState().orderFormReducer, 'stooooore')
    console.log(props,'prooooops')
    return(
      <div>
     <Table striped bordered hover style={{marginTop:'10%', width:'50%'}}>
{/*   
    <tr>
      {/* <td style ={{fontWeight:'bold'}}>Product Name:<span style={{marginLeft:"200px"}}>Cake</span> </td> */}
      {/* <th>Quantity</th>
      <th>1</th> */}
      {/* <th>Address</th>
      <th>Price</th>
      <th>Amount</th> */}
    {/* </tr> */}
  {/* } */}
  <tbody>
    <tr >
      <th style ={{fontWeight:'bold',marginRight:'-200px'}}>Quantity</th>
      <th style={{marginLeft:"-200px"}}>1</th>
      
    </tr>

    <tr>
        <th style ={{fontWeight:'bold'}}>Phone Number</th>
        <th style={{marginLeft:"200px"}}>0797828117</th> 
    </tr>

    <tr>
        <th style ={{fontWeight:'bold'}}>Address</th>
        <th style={{marginLeft:"250px"}}>Amman</th>
    </tr>
    <tr>
        <th style ={{fontWeight:'bold'}}>Price</th>
        <th style={{marginLeft:"270px"}}>20</th>
    </tr>
    <tr>
        <th style ={{fontWeight:'bold'}}>Amount</th>
        <th style={{marginLeft:"250px"}}>20</th>
    </tr>
    
  
  </tbody>
</Table>
       <StripeCheckout
            stripeKey = 'pk_test_51I2FktCNmtNvriYQGjLYu0G8wYecRexcoEiC52AMMZwsISRlg1irJgpBFMKJ2qwvFSOB48zEuxLlnRaC6lfGbMCs006oNLTZZq'
            token = {handleToken}
            // amount = {item['fields']['price']}
            // name={item['fields']['item']}
            billingAddress
            shippingAddress
            />
   </div> 
   )  
  }
  
  export default Checkout
  
  
// // Make sure to call `loadStripe` outside of a component’s render to avoid
// // recreating the `Stripe` object on every render.
// const stripePromise = loadStripe('pk_test_JJ1eMdKN0Hp4UFJ6kWXWO4ix00jtXzq5XG');

// const App = () => {
//   return (
//     <Elements stripe={stripePromise}>
//       <MyCheckoutForm />
//     </Elements>
//   );
// };