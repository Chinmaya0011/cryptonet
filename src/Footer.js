import React, { useState } from 'react'

const Footer = ({value}) => {
    

  return (
    <div>
<button onClick={()=>{value.setCount(value.count+1)}}>+</button>
<p>{value.count}</p>
<button onClick={()=>{value.setCount(value.count-1)}}>-</button>
    </div>
  )
}

export default Footer