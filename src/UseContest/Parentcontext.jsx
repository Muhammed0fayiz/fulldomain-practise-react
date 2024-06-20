import React, { createContext } from 'react'
import Childcontext from './Childcontext';
 export const mycontext=createContext();
const Parentcontext = () => {
   const value=[1,2,3,4,5]
   const age=26
  return (
    <div>
      <mycontext.Provider value={{value,age}}>
<Childcontext/>
      </mycontext.Provider>
    </div>
  )
}

export default Parentcontext
