import React  from 'react'
import {useState, useEffect } from 'react'

const Counter = () => {
    const [number, setNumber] = useState(0);

  const increment =() =>{
    if(number < 16){
    setNumber(number + 1)
    }
  }

  const decrement = () =>{
    if(number>0){
      setNumber(number - 1)
    }
  }

   const reset = () =>{
      setNumber(0)
    
  }

  return (
    <div className='container'>
      <div className='col-2 my-2'>
        <input type='text' className='form-control' placeholder={number} value={number} />
      </div>
      <button className='btn btn-warning btn-md' onClick={decrement}>Decrement</button>
      <button className='btn btn-primary btn-md mx-2' onClick={increment}>Increment</button>
      <button className='btn btn-danger btn-md'onClick={reset}>Reset</button>
    </div>
  )
}

export default Counter