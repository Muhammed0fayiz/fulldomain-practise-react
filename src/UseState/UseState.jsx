import React, { useState } from 'react'
import UseStatePassingValue from './UseStatePassingValue'

const UseState = () => {
  const[value,setvalue]=useState()
  const addvalue=(val)=>{
    setvalue(val)
  }
  return (
 
    <div>
      <h1>{value}</h1>
      <UseStatePassingValue fun={addvalue}/>
    </div>
  )
}

export default UseState
