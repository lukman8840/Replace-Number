import React, { useState } from 'react'

// const options = ['Beginning', 'Middle', 'End'];
  const Replace = () => {
    const [selectedValue, setSelectedValue] = useState('')
     
    const handleChange =(event) => {
      setSelectedValue(event.target.value)
     };

    return (
      <div>
      <select className="inp-2" value={selectedValue} onChange={handleChange}>
            <option value="" disabled selected>Replace At</option>
            <option value="option1">Beginning</option>
            <option value="option1">Middle</option>
            <option value="option1">End</option>
            {/* {options.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))} */}
          </select>
          </div>
    )
  }
  
  export default Replace
