import React, { useState , useEffect } from "react";
import  ReactStars  from "react-rating-stars-component";
import { FaStar } from "react-icons/fa";
import $ from "jquery";
import { Zoom } from "react-toastify";

const Rate = (props) => {
  const [data, setData] = useState("");
  const [data1, setData1] = useState("");
  const [rating, setRating] = useState(0);
  const [tr10, setTr10] = useState(0);
  const [tr20, setTr20] = useState(false);

var x ;
// var z = false ;
    console.log(props.ttt,"gdfgdfgfdgfgfgfgfgfg") 





    useEffect(()=>{
       $.ajax({
        method:'GET',
        url: 'http://127.0.0.1:8000/seller/rate/'+props.ttt,
        contentType: "application/json",
        headers:{'Authorization':JSON.parse(localStorage.getItem('token'))['token']},

        success:function(res){
          setTr10(1)
          setData(res)
          console.log(data)
          setData1('yess')
          if (data.ratee <= 20){
            setRating(1)
          }
          if (data.ratee <= 40 && data.ratee> 20){
            setRating(2)
          }
          if (data.ratee <= 60 && data.ratee> 40){
            setRating(3)
          }if (data.ratee <= 80 && data.ratee> 60){
            setRating(4)
          }if (data.ratee <= 100 && data.ratee> 80){
            setRating(5)
          }

          x =rating
      },
        error: function(err){
          setData1('noooo')
          console.log(data1)
        }
      })}
, [data1])






const ratingChange=(rating) => {
        
        const obj ={rate:rating, pkSeller:props.ttt}
        console.log(obj)
        setTr20(false)
        $.ajax({
            method: 'POST',
             url:'http://127.0.0.1:8000/buyer/ratingg/',//fix it later
              data : JSON.stringify(obj),
             contentType: "application/json",
             headers:{'Authorization':JSON.parse(localStorage.getItem('token'))['token']},

            success:function(res){
              console.log(res)
              if (res.rate <= 20){
                setRating(1)
              }
              if (res.rate <= 40 && res.rate> 20){
                setRating(2)
              }
              if (res.rate <= 60 && res.rate> 40){
                setRating(3)
              }if (res.rate <= 80 && res.rate> 60){
                setRating(4)
              }if ( res.rate> 80){
                setRating(5)
              }
              x =  rating
              
            },
          error: function(err){
             console.log(obj)
            }
      })
      
    }








const order =()=>{
  if (data.true ){
    console.log(rating)
   
    return  <div>   
    
    {[...Array(5)].map((star, i) => {
      const valueRating =i+1;
      
      return  <label>
          <input
            style={{ display: "none" }}
            type="radio"
            value={x}
        
          />
          <FaStar 
            color={
               valueRating <= ( rating)
                ? "#F9CD56"
                : "#848481"
            } />
        </label>
    
    })}
  
  <button onClick={()=>{
    setTr20(true)
}}>tttttt</button>

{ tr20 ?<div>
        <ReactStars
     size ={50}
   onChange={ratingChange}/> 
</div> :null }
</div>

  }
}

const tr2=()=>{
  console.log(data.false)
  if (data.false ===  false){
  
     return <div>   
    
     {[...Array(5)].map((star, i) => {
      const valueRating =i+1;
      
      return  <label>
          <input
            style={{ display: "none" }}
            type="radio"
            value={x}
        
          />
          <FaStar 
            color={
               valueRating <= ( rating)
                ? "#F9CD56"
                : "#848481"
            } />
        </label>})}</div>}}

 const tr1=()=>{
  if (JSON.parse(localStorage.getItem('token'))['type'] === 'seller' ){
 
    
  return  <div>   
    
  {[...Array(5)].map((star, i) => {
    const valueRating =i+1;
    
    return  <label>
        <input
          style={{ display: "none" }}
          type="radio"
          value={x}
      
        />
        <FaStar 
          color={
             valueRating <= ( rating)
              ? "#F9CD56"
              : "#848481"
          } />
      </label>})}</div>}}
    

    return (
      <div>
        <div>{tr1()}</div>
        <div>{tr2()}</div>
       <div>{order()}</div>
       </div>
  );
};
export default Rate;




