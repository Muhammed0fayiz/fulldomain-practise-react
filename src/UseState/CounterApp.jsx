import React, { useState } from 'react'

const CounterApp = () => {
    const [value,setvalue] =useState(10)
    const inc=()=>{
        setvalue((value)=>value+1)
    }
    const dec=()=>{
        setvalue(value-1)
    }
  return (
    <div>
      <button onClick={inc}>inc</button>
      <h1>{value}</h1>
      <button onClick={dec}>dec</button>
    </div>
  )
}

export default CounterApp
