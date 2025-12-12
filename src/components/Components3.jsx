import React from 'react'
import { useContext } from 'react';
import { Context } from '../App';
const Components3 = () => {
  const {setCount} = useContext(Context);
  return (
    <div className='border p-4'>
      <h2>Components3</h2>
      <button onClick={() => setCount ((prev) => prev +1 )}>+</button>
      <button onClick={() => setCount ((prev) => prev -1 )}>-</button>
      </div>
  )
}

export default Components3
