import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import {base_url} from '../config/url';
import Header from './Header';
import Productcard from './Productcard';


function Productpage() {
    const {name}=useParams();
    const [product,setProduct]=useState(null)
    var i=0;
    useEffect(async()=>{
        const result =await axios.get(`${base_url}/item/getall?name=${name}`);
        console.log(result.data)
        setProduct(result.data)
        // console.log(product.subItemsData.subItems)
        i=1;
    },[])
    return (
        <div>
            
            <Header/>
            {
                (product && product.subItemsData.name)?
                
                <h1 style={{marginLeft:"650px"}}>{product.subItemsData.name}</h1>
                
                :
                null
            }
            <br/>
            <br/>
            {
               product && product.subItemsData.subItems.map(p=>{
                    return (

                    <div style={{marginLeft:"370px"}}>
                    <Productcard name={p.name} image={p.image} price={p.price} description={p.description}/>
                    </div>

                    )
                })
            }
            
            
        </div>
    )
}

export default Productpage
