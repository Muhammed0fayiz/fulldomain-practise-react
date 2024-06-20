import React, { createContext } from 'react'
import Childcontext from './Childcontext';
 const mycontext=createContext();
const Parentcontext = () => {
   const value='fayiz'
  return (
    <div>
      <mycontext.Provider value={value}>
<Childcontext/>
      </mycontext.Provider>
    </div>
  )
}

export default Parentcontext
