import React,{memo} from 'react'

export const Small = memo(({value}) => {

    console.log('llamada');
    //Peticiones http?
  return (
    <div>{value}</div>
  )
})
