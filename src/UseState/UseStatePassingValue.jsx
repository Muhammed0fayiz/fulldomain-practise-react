import React from 'react'

const UseStatePassingValue = ({fun}) => {
  const addvalue=(e)=>{
    fun(e.target.value)
  }
  return (
    <div>

      <input type="text" onChange={addvalue}/>
      
    </div>
  )
}

export default UseStatePassingValue
