import React, { useEffect, useState } from 'react'
import Header from './Header';
import axios from 'axios';
import {base_url} from '../config/url';
import Cartpage from './Cartpage'

function Cart() {
    
   
  
  const [product,setProduct]=useState(null)
  var i=0;
  useEffect(async()=>{
      const result =await axios.get(`${base_url}/cart/getall`);
      console.log(result.data)
      setProduct(result.data)
      console.log(product)
      i=1;
  },[])
  return (
      <div>
          
          <Header/>
          {/* {
              (product && product.subItemsData.name)?
              
              <h1 style={{marginLeft:"650px"}}>{product.name}</h1>
              
              :
              null
          } */}
          <h1 style={{marginLeft:"650px"}}>You have ordered:</h1>
          <br/>
          <br/>
          {
             product && product.map(p=>{
                  return (

                  <div style={{marginLeft:"370px"}}>
                  <Cartpage name={p.name} image={p.image} price={p.price} description={p.description} setProduct={setProduct}/>
                  </div>

                  )
              })
          }
          <br/>
          <br/>
          <button type="button" class="btn btn-danger" style={{fontSize:"15px",marginLeft:"750px"}} >Place Order</button>
          
          
      </div>
  )
}

export default Cart
