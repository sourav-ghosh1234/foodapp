import React, { useState } from 'react'
import {cart} from '../Items'
function Card({name,desc,price,photo,id,addtoCart}) {
  // const [cart,setCart]=useState([])
  const add=(id)=>{
    console.log("clicked")
    cart=[...cart,id]
  }
    return (
        <>
        <div key={id} className="card"  style={{marginLeft:"100px",height:"100px",width:"509px"}}>
  <img className="card-img-top" style={{height:"300px",width:"300px"}}src={photo} alt="img photo"/>
  <div className="card-body">
    <h5 className="card-title">{name}</h5>
    <p className="card-text">{price}</p>
    <a href="#" className="btn btn-primary" onClick={()=>{addtoCart(id)}}>Add to cart</a>
  </div>
</div>
        </>
    )
}

export default Card
