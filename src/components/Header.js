import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import {base_url} from '../config/url';
import { cart } from '../Items';

function Header({cartvalue}) {
    const [value,setValue]=useState(null)
    useEffect(async()=>{
        const result =await axios.get(`${base_url}/cart/getcount`);
        setValue(result.data.count)
        console.log(result.data)
    },[])
    return (
            
     <nav class="navbar navbar-light " style={{backgroundColor:"#ff4d4d"}}>
      <div class="container-fluid">
         <span class="navbar-brand mb-0 h1 m-auto" style={{fontSize:"40px",marginLeft:"100px"}}>Food Ordering Portal</span>
               
         
         <div className="mr-auto" style={{fontSize:"40px"}}>
         <Link to={`/`}>
         <i class="fa fa-home"  style={{cursor:"pointer"}} ></i>
         </Link>
             <Link to={`/cart`}>
             
         {
             (!cartvalue)?
             <i class="fa fa-shopping-cart"  style={{cursor:"pointer"}} ><b>{value}</b></i>
             :
             <h1>{cartvalue}</h1>
         }
         </Link>
         
         </div>
         
  </div>
            
            
  
  
</nav>
        
    )
}

export default Header
