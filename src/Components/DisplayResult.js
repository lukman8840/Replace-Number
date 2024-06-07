import React from 'react'

const DisplayResult = ( {result}) => {
  return (
    <div>
      <label>The Result = </label>
      <button className='display'>{result}</button>
    </div>
  )
}

export default DisplayResult
