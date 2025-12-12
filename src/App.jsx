import React, { createContext } from 'react'
import Components1 from './components/Components1';
import { useState } from 'react';


 export const Context= createContext()
const App = () => {
 
  const [count, setCount] =useState(0);
  return (
    <Context.Provider value={{ count, setCount}}>
      <div className='border p-4 m-4'>
      <h2> App {count }</h2>
      <Components1 />
    </div>
    </Context.Provider>
  )
}

export default App
