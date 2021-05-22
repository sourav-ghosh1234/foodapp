import React from 'react';
import axios from 'axios';
import {base_url} from '../config/url';

function Cartpage(props) {

  const removeProduct=async(e)=>{
    e.preventDefault();
    const result =await axios.post(`${base_url}/cart/remove`,{name:props.name});
    console.log(result.data)
    props.setProduct(result.data)
  }
    return (

        <div>
            <div class="card mb-3" style={{height:"200px",width:"850px"}}>
  <div className="row g-0">
    
    <div className="col-md-8">
      <div className="card-body">
        <h1 className="card-title">{props.name}</h1>
        <h2 className="card-text">{props.description}</h2>
        <h2 className="card-text" ><b>Price:Rs {props.price}</b></h2>
        
        <button type="button" class="btn btn-danger" style={{fontSize:"15px"}} onClick={(e)=>{removeProduct(e)}}>Remove</button>
      </div>
    </div>
    <div className="col-md-4">
      <img src={props.image} style={{height:"100px",width:"200px",marginTop:"50px"}} alt="..."/>
    </div>
  </div>
</div>
        </div>
    )
}

export default Cartpage
