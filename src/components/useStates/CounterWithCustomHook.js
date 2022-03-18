import React from 'react'
import { useCounter } from '../../Hooks/useCounter'

export const CounterWithCustomHook = () => {

  const {state:counter, increment, decrement, reset} = useCounter();

  return (
    <>
        <h1>Counter with Hook: {counter}</h1>
        <hr/>

        <button onClick={()=>increment(2)} className='button'>+1</button>
        <button onClick={()=>decrement(2)} className='button'>-1</button>
        <button onClick={()=>reset()} className='button'>Reset</button>
    </>
  )
}
