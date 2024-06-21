import React from 'react'

const A2 = ({val,fun}) => {
  console.log('a2')
  return (
    <div>
      <h1>{val}</h1>
      <button onClick={fun}>ondc</button>
    </div>
  )
}

export default React.memo(A2)
