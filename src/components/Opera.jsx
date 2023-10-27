import React from 'react';

function Opera({ op, onClick }) {
  return (
    <li
      className='border border-black rounded-lg bg-white p-1'
      onClick={() => onClick(op)}
    >
      {op}
    </li>
  );
}

export default Opera;
