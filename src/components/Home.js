import React, { useEffect, useState } from 'react'
import Card from './Card'
import Header from './Header'
import {cart} from '../Items'
import Cart from './Cart';
import axios from 'axios';
import {base_url} from '../config/url'

function Home() {
  const [ page,setPage]=useState("products")
  const [item,setItem]=useState([])
    // const [array1,setArray1]=useState([{
    //     id:1,
    //     productName:"Cotton T Shirt",
    //     price:200,
    //     description:"lorem ispum",
    //     photo:"https://images-na.ssl-images-amazon.com/images/I/61iiqjsC5GL._AC_UX522_.jpg"
    // },
    // {   id:2,
    //     productName:"Half T Shirt",
    //     price:250,
    //     description:"lorem ispum",
    //     photo:"https://s2.thcdn.com/productimg/1600/1600/11731715-1594570638970884.jpg"
    // },
    // {    
    //      id:3,
    //     productName:"Half Round Neck T Shirt",
    //     price:400,
    //     description:"lorem ispum",
    //     photo:'https://m.media-amazon.com/images/I/81tvJbBywiL._AC_UL1500_.jpg'
    // },
    // ])
    // const [cart,setCart]=useState([])
    // const addtoCart=(id)=>{
    //   console.log(id)
    //   var item,check=false;
    //   for(var j=0;j<cart.length;j++){
    //     if(cart[j].id===id){
    //       check=true;
    //       break;
    //     }
    //   }
    //   if(check===true){
    //     for(var j=0;j<cart.length;j++){
    //       if(cart[j].id===id){
    //         cart[j].quantity+=1;
    //         break;

    //       }
    //     }
    //     setCart( [...cart])
    //     console.log("In cart",cart)

    //   }else{
    //     for (var i=0;i<array1.length;i++){
    //       if(array1[i].id===id){
    //          item=array1[i];
    //         break;
      
    //       }
    //     }
    //     item.quantity=1;
  
       
    //     setCart( old=>{
    //       return [...old,item]
    //     })
    //     console.log(cart)

    //   }
    //   localStorage.setItem("cart",cart)
      
    // }
    useEffect(async()=>{
      console.log(base_url)
      const response=await axios.get(`${base_url}/item/getall`);
      console.log(response.data)
      setItem(response.data)
      
    },[])
    const toggleHome=()=>{
      setPage("cart")
    }
    const toggleCart=()=>{
      setPage("products")
    }


    // const removeProduct=(id)=>{
     
    //   setCart(cart.filter(p=>p.id!=id))

    // }
      return (
        <div className="App">
          {
            (page==="products")?
            <>
             <Header cart={cart} toggleHome={toggleHome}/>
         
         <div style={{height:"100px",margin:"auto"}}>
           {
             item.map((p,i)=>{
             return (
               <div style={{marginLeft:"570px"}}>
             <Card id={p.id} name={p.name}  photo={p.image}  />
             <br/>
             <br/>
             </div>
             )
             })
           }
         
         </div>
            </>
            :
            null
          }
          {
            (page==="cart")?
            <>
             <Header cart={cart}/>
             <button className="btn btn-primary" style={{fontSize:"20px"}} onClick={()=>{toggleCart()}}>back</button>
             {/* <div style={{height:"100px",width:"90%",display:'flex',justifyContent:'space-between'}}>
             {
             cart.map((p,i)=>{
             return <Cart id={p.id} name={p.productName} removeProduct={removeProduct} photo={p.photo} price={p.price} quantity={p.quantity} addtoCart={addtoCart}/>
             })
           }
           </div> */}

            </>
            :
            null
          }
        
        </div>
      );
}

export default Home
