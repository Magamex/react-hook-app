import React, { useLayoutEffect, useRef, useState } from 'react'
import { useCounter } from '../../Hooks/useCounter'
import { useFetch } from '../../Hooks/useFetch'

export const Layout = () => {

    const {counter, increment} = useCounter(1);

    const {data} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`)
    
    const {quote} = !!data && data[0];
    //!!data Si existe la data entonces extraer en la posicion 0
    // console.log(author, quote)

    const pTag = useRef()
    const [boxSize, setBoxSize] = useState({});

    useLayoutEffect(() => {
        setBoxSize(pTag.current.getBoundingClientRect())
    }, [quote])

  return (
    <div>
        <h1>LayoutEffect</h1>
        <h2>breakingbad Quotes</h2>
        <hr/>

        <div>
            <blockquote>
                <p ref={pTag}>{quote}</p>
            </blockquote>

            <pre>
                {JSON.stringify(boxSize,null,3)}
            </pre>

            <button className='button' onClick={()=>increment(1)}>
                Siguiente quote
            </button>
        </div>

    </div>
  )
}
