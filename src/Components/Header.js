import React from 'react'
import { Badge, Container, Dropdown, FormControl, Navbar,Nav, Button, Card } from 'react-bootstrap'
import { AiFillDelete } from 'react-icons/ai'
import {BiCart} from "react-icons/bi"
import {Link} from "react-router-dom"
import { CartState } from './Context'
function Header() {
   const {state:{Cart},dispatch }=CartState();
   console.log("Cartr iyems are",Cart);
  return (

  

 <Navbar bg="dark" variant='dark' style={{height:80,}} className="">
    <Container>
        <Navbar.Brand>
           <Link to="">shopping cart</Link>
        </Navbar.Brand>
        <Navbar.Text className='search'>
            <FormControl
            style={{width:500}}
            placeholder="search"
            className='m-auto'
            />
                 </Navbar.Text> 
                 <Nav>

                 
<Dropdown alignRight>
      <Dropdown.Toggle variant="success" >
      <BiCart color="white" fontSize="25px"/>
      <Badge>{Cart.length}</Badge>
      </Dropdown.Toggle>

   <Dropdown.Menu style={{minWidth:250}}>

{Cart.length>0 ? (
   <>
{Cart.map((items)=>


(
  
      <span className='cartitem' key={items.id}>
         <img src={items.image} alt={items.name} className="cartItemImg"/>
     <div className='cartItemDetail'>
      <span>{items.name}</span>
      <span>$ {items.price.split(".")[0]}</span>

     </div>
     <AiFillDelete
     fontSize="20px"
     style={{cursor:"pointer"}}
     onClick={()=>
   dispatch({
      type:"Remove_from_Cart",
      payload:items,
   })
   
   }
     
 

     />
      </span>

   ))
}</>
):(<span style={{padding:10}}>cart is empty</span>)}


    </Dropdown.Menu>
    </Dropdown>
    </Nav>
            
      
    </Container>
 </Navbar>


   )
}

export default Header