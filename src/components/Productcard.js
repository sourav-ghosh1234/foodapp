import React from 'react';
import {base_url} from '../config/url';
import axios from 'axios';

function Productcard(props) {
  const addCart=async(e)=>{
    e.preventDefault();
    const result =await axios.post(`${base_url}/cart/addtocart`,{name:props.name,description:props.description,price:props.price,image:props.image});
    console.log(result.data)

  }
    return (

        <div>
            <div class="card mb-3" style={{height:"200px",width:"850px"}}>
  <div className="row g-0">
    
    <div className="col-md-8">
      <div className="card-body">
        <h1 className="card-title">{props.name}</h1>
        <h2 className="card-text">{props.description}</h2>
        <h2 className="card-text"><b>Price:Rs {props.price}</b></h2>
        <button type="button" class="btn btn-danger" style={{fontSize:"15px"}} onClick={(e)=>{addCart(e)}}>Order Now</button>
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

export default Productcard
