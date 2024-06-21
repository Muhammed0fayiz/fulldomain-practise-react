import React, { useCallback, useState } from 'react'
import A2 from './A2'

const A1 = () => {
    console.log('a1')
    const [count1,setCount1]=useState(0)
    const [count2,setCount2]=useState(0)

    const inc1=useCallback(()=>{
        setCount1(count1+1)
    },[count1])
    const inc2=useCallback(()=>{
        setCount2(count2+1)
    },[count2])
  return (
    <div>
      <h1>{count1}</h1>
      <button onClick={inc1}>cou1</button>
      <A2 val={count2} fun={inc2}/>


    </div>
  )
}

export default React.memo(A1)
