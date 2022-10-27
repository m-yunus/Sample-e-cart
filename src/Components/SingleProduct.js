import React from 'react'
import { Button, Card } from 'react-bootstrap'
import Rating from './Rating';
import { CartState } from './Context';

function SingleProduct({items}) {

const{state:{ Cart},dispatch,}=CartState();

  console.log("ok ok ok ",items);
  return (
    <div className='products'>
      <Card>
        <Card.Img variant="top" src={items.image} alt={items.name}/>
      <Card.Body>
    <Card.Title>
      {items.name}

    </Card.Title>
    <Card.Subtitle
    style={{paddingBottom:10}}
    >
      <span>${items.price.split(".")[0]}</span>
{items.fastDelivery ? 
(<div>fast Delivery</div>)
:(<div>7 Days Delivery</div>)}
<Rating Rating={items.ratings}/>
    </Card.Subtitle>
    {Cart.some((p)=>p.id===items.id)?
    (<Button 
      variant='danger' 
      onClick={()=>dispatch({
        type:"Remove_from_Cart",
        payload:items,
      })}
      >remove From cart</Button>):
    (<Button 
    disabled={items.inStock}

    onClick={()=>dispatch({
      type:"ADD_To_Cart",
      payload:items,
    })}
    >{!items.inStock ? "add to cart " : "Out of stock"}</Button>)}


      </Card.Body>
      
      </Card>
    </div>
  )
}

export default SingleProduct