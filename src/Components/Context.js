import React, { createContext, useContext, useReducer } from 'react'
import faker from "faker"
import { CartReducer } from './Reducer';

const Cart_components=createContext()
function Context({children}) {


console.log("what is",children);
const products=[...Array(30)].map(()=>({
id: faker.datatype.uuid(),
name:faker.commerce.productName(),
price:faker.commerce.price(),
image:faker.random.image(),
inStock:faker.random.arrayElement([0,3,5,6,7]),
fastDelivery:faker.datatype.boolean(),
ratings:faker.random.arrayElement([1,2,3,4,5]),

}));
console.log("fdtt",products);


let [state,dispatch]=useReducer(CartReducer,{
  products:products,
  Cart:[]
})
  return (
    <Cart_components.Provider value={{state,dispatch}}>
{children}
    </Cart_components.Provider>
    
  )
}

export default Context

export const CartState=()=>{
  return useContext(Cart_components)
}