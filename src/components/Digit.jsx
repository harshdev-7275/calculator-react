import React from 'react'

function Digit({value}) {
    console.log(value);
  return (
    <li className='border border-black rounded-lg bg-white'>{value}</li>
  )
}

export default Digit