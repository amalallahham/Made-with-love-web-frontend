import React from 'react'
import { Link, NavLink } from 'react-router-dom';
export default function ItemList(props) {

  console.log(props,'iteeeem props')
    
   
      
        return (
          <div className="row" style={{margin:"0 auto"}}>
          {props.items.map((item,i) =>{
             var url = `/seller/visit/${item['fields'].id}`
             console.log(url)
         return  (
      
          <div className="col-sm-6" key= {item['pk']} >
      
        <div className="card"  style={{border: "solid  black 2px",width:'600px',cursor: 'pointer',  boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.6)' }}  >
        <Link to={{pathname:"/buyer/item", info: {item:item, cat:props.cat}}}>
                 
                 <img src ={item['fields'].image} alt="car" style={{width:'100%', height:"500px", margin:" 0 auto"}}/> </Link>
          <div className="card-body">
          <h2  className="card-title">product: {item['fields'].productname}</h2>
          <h3 className="card-text">Price: {item['fields'].price} $</h3>
            <h5 className="card-text">Description: {item['fields'].description} </h5>

           <NavLink  to = {'/seller/visit/'+ item['fields'].id}><p className="card-text">Store: {item['fields'].store}</p></NavLink>
            {/* <button onClick={()=>{clicked(item['pk'])}}> 
                Order
                </button> */}
                <button>
                  <Link to={{pathname:"/order", info: {id:item['pk'], name:item['fields'].productname, url:item['fields'].image, store:item['fields'].store, price: item['fields'].price, storeId:item['fields'].id }}}>
                  Order
                  </Link>
                  </button> 
        </div>
        </div><br/><br/>
        </div> )
         } )}
        
      </div>
      
      )
      }
      // export default ItemList