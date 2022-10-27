import React from 'react'
import { AiFillStar, AiOutlineStar } from "react-icons/ai"

function Rating({Rating,style,onClick}) {
  return (
 
    <>
    {[...Array(5)].map((_,index)=>(
<span key={index} onClick={()=>onClick(index)}>
    {Rating>index ? (<AiFillStar style={style} fontSize="15px"/>):(<AiOutlineStar style={style} fontSize="15px"/>)  }
</span>
))}
    
    </>
  )
}

export default Rating