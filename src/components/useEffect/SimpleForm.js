import React, { useEffect, useState } from 'react'
import { Message } from './Message';

export const SimpleForm = () => {
  
    const [formState, setFormState] = useState({
        name: '',
        email: ''
    });

    const { name, email } = formState;

    useEffect(()=>{
        // console.log('useEffect')
    }, []) //<- si le agregas los corchetes se dispara una vez

    useEffect(()=>{
        // console.log('formState cambio')
    }, [formState])

    useEffect(()=>{
        // console.log('email cambio')
    }, [email])

    const handleInputChange = ({target})=>{
        setFormState({
            ...formState,
            [target.name]: target.value
        })
    }

    return (
        <>
            <h1>useEffect</h1>
            <hr/>
            <div>
                <input
                    type="text"
                    name="name"
                    placeholder='Tu nombre'
                    autoComplete='off'
                    value={ name }
                    onChange= { handleInputChange }
                />
            </div>
            <div>
                <input
                    type="email"
                    name="email"
                    placeholder='Tu correo'
                    autoComplete='off'
                    value={ email }
                    onChange= { handleInputChange }
                />
            </div>
            {/* { name && <Message /> } */}
            { name === '123' && <Message /> }
        </>
  )
}
