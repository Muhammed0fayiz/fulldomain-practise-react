import React, { useEffect, useRef } from 'react'

const Useref = () => {
    const myref=useRef()

     useEffect(()=>{
        myref.current.focus()
     },[])
  return (
    <div>
      <input type="text" name="" id="" />
      <input type="text" name="" id="" ref={myref}/>
    </div>
  )
}

export default Useref
