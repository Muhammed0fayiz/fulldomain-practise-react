import React, { useContext } from 'react'
import { mycontext } from './Parentcontext'

const Childcontext = () => {

    const value=useContext(mycontext)
  return (
    <div>
        <p>{value.value.map((item)=>
            item
        )}</p>
      
    </div>
  )
}

export default Childcontext
