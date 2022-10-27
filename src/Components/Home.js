import React from 'react'
import { CartState } from './Context'
import Filter from './Filter';
import SingleProduct from './SingleProduct';
function Home() {
  const {state:{products},}=CartState();

  console.log("this is your",products);
  return (
    <div className='home'>
      <Filter/>

      <div className='productContainer'>
        {products.map((item)=>{
           return <SingleProduct items={item} key={item.id}/>
         

        })}

      </div>


    </div>
  )
}

export default Home