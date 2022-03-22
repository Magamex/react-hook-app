import React, { memo } from 'react'

export const ShowIncrement = memo(({increment}) => {

    console.log('Vuelve a generar')

  return (
    <button onClick={()=>{
        increment(5);
    }}>
        Incrementar
    </button>
  )
})
