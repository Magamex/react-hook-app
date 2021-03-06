import React, { useState } from 'react'
import { MultipleCustomHooks } from '../examples/MultipleCustomHooks';

export const RealExampleRef = () => {

    const [show, setShow] = useState(false);

  return (
    <div>
        <h1>RealExampleRef</h1>
        <hr/>

        { show && <MultipleCustomHooks/> }

        <button 
            className='button'
            onClick={() => setShow(!show)}> 
            Show/Hide 
        </button>
    </div>
  )
}
