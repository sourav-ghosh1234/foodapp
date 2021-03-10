import React from 'react'

function Header({cart,toggleHome}) {
    return (
            
     <nav class="navbar navbar-light " style={{backgroundColor:"#1565c0"}}>
      <div class="container-fluid">
         <span class="navbar-brand mb-0 h1" style={{fontSize:"40px"}}>Shopping Cart</span>

         <div className="mr-auto" style={{fontSize:"40px"}}>
         <i class="fa fa-shopping-cart"  style={{cursor:"pointer"}} onClick={()=>{toggleHome()}}>{cart.length}</i>
         
         </div>
         
  </div>
            
            
  
  
</nav>
        
    )
}

export default Header
