import React, { useEffect, useState } from 'react'

const Useeffect = () => {


    const [name,setname]=useState('fayiz')
    const [place,setplace]=useState('venjaramoode')
    const namechange=()=>{
        name==='fayiz'?setname('hari'):setname('fayiz')
    }
    const placechange=()=>{
        place==='venjaramoode'?setplace('palakadu'):setplace('venjaramoode')
    }
    useEffect(()=>{
        console.log('hello')
    },[name])
  return (
    <div>
      <h1>{name}</h1>
      <button onClick={namechange}>name</button>
      <h1>{place}</h1>
      <button onClick={placechange}>place</button>

      
    </div>
  )
}

export default Useeffect
