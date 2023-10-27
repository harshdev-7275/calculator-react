import React from 'react';

function Digit({ value, onClick }) {
  return (
    <li
      className='border border-black rounded-lg bg-white p-3'
      onClick={() => onClick(value)}
    >
      {value}
    </li>
  );
}

export default Digit;
