import React from 'react'
import { useCounter } from '../../Hooks/useCounter'
import { useFetch } from '../../Hooks/useFetch'

export const MultipleCustomHooks = () => {

    const {counter, increment} = useCounter(1);

    const {loading, data} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`)
    
    const {author, quote} = !!data && data[0];
    //!!data Si existe la data entonces extraer en la posicion 0
    // console.log(author, quote)

  return (
    <div>
        <h1>Multiple Custom Hooks</h1>
        <h2>breakingbad Quotes</h2>
        <hr/>

        { 
            loading 
            ? (
                <div className='loading'>
                    Loading...
                </div>
            )
            :(
                <div>
                    <blockquote>
                        <br/>
                        <p>{quote}</p>
                        <br/>
                        <footer>{author}</footer>
                    </blockquote>
                    <button className='button' onClick={()=>increment(1)}>
                        Siguiente quote
                    </button>
                </div>
            )
        }

    </div>
  )
}
