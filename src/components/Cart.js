import React, { useState } from 'react'
import Header from './Header'

function Cart({id,name,photo,price,quantity,removeProduct}) {
    
   
    return (
        <div>
             <div key={id} className="card"  style={{marginLeft:"100px",height:"200px",width:"300px"}}>
  <img className="card-img-top" style={{height:"70px",width:"300px"}}src={photo} alt="img photo"/>
  <div className="card-body">
    <h5 className="card-title">{name}</h5>
    <p className="card-text">{price}</p>
    <p className="card-text">Quantity:{quantity}</p>
    <a href="#" className="btn btn-primary" onClick={()=>{removeProduct(id)}}>Remove</a>
  </div>
  <br/>
</div>
            
            
            
        </div>
    )
}

export default Cart
