import React from 'react'

const Submit = ({ onsubmit }) => {
    const handleClick = () => {
      // console.log('click me')
      onsubmit();
    };

  return (
    <div className=''>
       <button onClick={handleClick} className='submit'>Submit</button>
    </div>
  )
}

export default Submit
