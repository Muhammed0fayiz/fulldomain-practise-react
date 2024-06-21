import React, { useMemo, useState } from 'react'

const Usememo = () => {

    const [count1,setCount1]=useState(0)
    const [count2,setCount2]=useState(10)

const inc1=()=>{
 
    setCount1(count1+1)
}
const inc2=()=>{
    setCount2(count2+1)
}

const even=useMemo(()=>{
    let i=0;
    while (i<100000000)
        i++
    return count1%2===0
},[count1
])



  return (
    <div>
      <h1>{count1}:cou1</h1>
      <button onClick={inc1}>one</button>
      <button onClick={inc2}>two</button>
  {even?<h1>even</h1>:<h1>odd</h1>}
      <h1>{count2}:cou2</h1>
    </div>
  )
}

export default Usememo
