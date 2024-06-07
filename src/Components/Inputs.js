import { useState } from "react";
import DisplayResult from "./DisplayResult";
import Replace from "./Replace";
import Submit from "./Submit";

const Inputs = () => {
  const [digitInput, setDigitInput] = useState('');
  const [replaceInput, setReplaceInput] = useState('')
  const [charInput, setCharInput] = useState('');
  const [result, setResult] = useState('');


  const handleDigitChange = (e) => setDigitInput(e.target.value);
  const handleReplaceChange = (e) => setReplaceInput(e.target.value);
  const handleCharChange = (e) => setCharInput(e.target.value);
  
  const handleSubmit = () => {
    // console.log('Submitting Form...');
    const updatedResult = digitInput.replace(new RegExp(replaceInput, 'g'), charInput);
    setResult(updatedResult);

    setCharInput('');
    setDigitInput('');
    setReplaceInput('');
  }
  return (
    <div className="main-container">
      <div className="main">
      <DisplayResult result={result}/>

        <input 
        className="inp-1"
        type="text" 
        placeholder="Enter 11-Digit" 
        value={digitInput} 
        onChange={handleDigitChange} 
        />

        <input 
        className="inp" 
        type="text" 
        placeholder="Numbers to Replace" 
        value={replaceInput} 
        onChange={handleReplaceChange}
        />

        <input 
        className="inp-2" 
        type="text" 
        placeholder="Character to Replace" 
        value={charInput} 
        onChange={handleCharChange} 
        />
        
        <Replace />
        <Submit onsubmit={handleSubmit} />
      </div>
    </div>
  );
};

export default Inputs;
