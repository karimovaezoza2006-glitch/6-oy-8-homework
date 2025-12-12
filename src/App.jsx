import React from 'react'
import Components1 from './components/Components1';
import { useState } from 'react';

const App = () => {
  const [count, setCount] =useState(0);
  return (
    <div className='border p-4 m-4'>
      <h2> App {count }</h2>
      <Components1 />
    </div>
  )
}

export default App
