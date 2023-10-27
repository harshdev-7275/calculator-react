import React, { useState } from 'react';
import Opera from './components/Opera';
import Digit from './components/Digit';

function App() {
  const num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const operator = ["+", "-", "*", "/", "%", "="];

  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleDigitClick = (digit) => {
    setInput(input + digit);
  }

  const handleOperatorClick = (operator) => {
    if (operator === '=') {
      try {
        setResult(eval(input));
      } catch (error) {
        setResult('Error');
      }
    } else {
      setInput(input + operator);
    }
  }

  const handleClear = () => {
    setInput('');
    setResult('');
  }

  return (
    <div className='w-screen h-screen bg-black overflow-hidden flex items-center justify-center'>
      <div className='m-auto bg-gray-500 max-w-xl max-h-max p-3 flex items-center justify-center flex-col gap-2'>
        <div className='w-[512px] h-[90px] bg-white border rounded-md px-3 py-1'>
          <div className='text-right text-3xl'>{input}</div>
          <div className='text-right text-4xl'>{result}</div>
        </div>
        <div className='flex justify-between w-full'>
          <div>
            <ul className='grid grid-cols-3 text-6xl gap-8'>
              {num.map((val) => <Digit key={val} value={val} onClick={handleDigitClick} />)}
              <Digit value="C" onClick={handleClear} />
            </ul>
          </div>
          <div>
            <ul className='grid grid-cols-1 text-6xl gap-8'>
              {operator.map((op) => <Opera key={op} op={op} onClick={() => handleOperatorClick(op)} />)}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
