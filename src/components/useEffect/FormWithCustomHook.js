import React, { useEffect } from 'react'
import { useForm } from '../../Hooks/useForm';

export const FormWithCustomHook = () => {
  
    const [formValues, handleInputChange] = useForm({
        name: '',
        email: '',
        password: ''
    });

    const { name, email, password } = formValues;

    useEffect(() => {
        console.log('email cambio')
    }, [email]);

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(formValues);
    }

    return (
        <form onSubmit={ handleSubmit }>
            <h1>FormWithCustomHook</h1>
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
            <div>
                <input
                    type="password"
                    name="password"
                    placeholder='Tu contraseña'
                    value={ password }
                    onChange= { handleInputChange }
                />
            </div>

            <button type='submit' className='button'>
                Guardar
            </button>

        </form>
  )
}

