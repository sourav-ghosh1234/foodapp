import React, { useState } from 'react'
import {cart} from '../Items'
import {Link} from 'react-router-dom'
function Card({name,photo}) {
  // const [cart,setCart]=useState([])
  const add=(id)=>{
    console.log("clicked")
    cart=[...cart,id]
  }
    return (
        <>
        <Link to={`/productpage/${name}`}>
       <div className="card" style={{width: "18rem"}}>
  <img src={photo} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h2 className="card-text" style={{textDecoration:"none"}}>{name}</h2>
  </div>
</div>
</Link>
        </>
    )
}

export default Card
