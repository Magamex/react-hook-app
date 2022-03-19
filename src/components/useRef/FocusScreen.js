import React, { useRef } from 'react'

export const FocusScreen = () => {
  
    const inputRef = useRef()

  const handleClick = () => {
      inputRef.current.select()
      console.log(inputRef)
  }

    return (
    <div>
        <h1>FocusScreen</h1>
        <hr/>

        <input
            ref= { inputRef }
            className='input'
            placeholder='Su nombre'
        />
        <button className='button mt-2'
            onClick={handleClick}>
            Focus
        </button>
    </div>
  )
}
