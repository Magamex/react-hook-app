import React from 'react'
import { useForm } from '../../Hooks/useForm';

export const TodoAdd = ({ handleAdd }) => {
    const [{ description }, handleInputChange, reset] = useForm({
        description: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        if (description.trim().length <= 1) {
          return;
        }

        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false,
        };
      
        handleAdd(newTodo);
        reset();
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="description"
          placeholder="tarea"
          autoComplete="off"
          value={description}
          onChange={handleInputChange}
        />
        <button type="submit">Agregar</button>
      </form>
    </div>
  )
}
