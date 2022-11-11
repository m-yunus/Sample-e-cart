import { Button } from 'bootstrap';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { Col, Form, ListGroup, Row } from 'react-bootstrap';
import { CartState } from './Context';
import Rating from './Rating';

function Cart() {
  const {state:{Cart},dispatch }=CartState();
  const [total,setTotal]=useState()

  useEffect(()=>{
setTotal(Cart.reduce((acc,curre)=>acc+Number(curre.price), 0))
  },[Cart])

  return (
    <div className='home'>
      <div className='productContainer'>
      <ListGroup>
        {
          Cart.map((items)=>{
            console.log(items.name);
        return (
         <>
        
         <ListGroup.Item>
 <Row>
  <Col md={2} className="col-img">
          <img src={items.image} alt="" />
  
  </Col>
          <Col md={2}>
          <span>{items.name}</span>
          </Col>
          <Col md={2}>
          ${items.price}
          </Col>
          <Col md={2}>
            <Rating Rating={items.ratings}/>
          </Col>

          <Col md={2}>
          <Form.Control
                    as="select"
                    value={items.qty}
                  
                    
                  >
                    {[...Array(items.inStock).keys()].map((x) => (
                      <option key={x + 1}>{x + 1}</option>
                    ))}
                  
          

            </Form.Control>
          </Col>
          
         </Row>
         </ListGroup.Item>
         </>)
          })


        }

      </ListGroup>
       </div>
        <div className='filters summary'>
        <span className='title'>
        SUBTOTAL ({Cart.length}) items 
        </span>
        <span style={{fontWeight:700,fontSize:20}}>Total :${total} </span>
        <button type='button' disabled={Cart.length == 0}>proceed to checkout</button>
        </div>

    </div>
  )
}

export default Cart