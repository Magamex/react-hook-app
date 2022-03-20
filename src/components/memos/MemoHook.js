import React, { useMemo, useState } from 'react'
import {useCounter} from '../../Hooks/useCounter'
import { procesoPesado } from '../helpers/procesoPesado';

export const MemoHook = () => {

  const {counter, increment} = useCounter(5000);

  const [show, setShow] = useState(true);

  const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter])

  return (
    <div>
        <h1>Memo Hook</h1>
        <h3>Counter: {counter}</h3>
        <hr/>
        
        <p>{ memoProcesoPesado }</p>

        <button
              onClick={()=>increment()}>
            +1
        </button>

        <button
              onClick={()=>{
                setShow(!show)
              }}>
          Show/Hide {JSON.stringify(show)}
        </button>

    </div>
  )
}
