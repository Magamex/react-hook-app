import React from "react";

export const TodoListItem = ({ todo, i, handleToggle, handleDelete }) => {
  return (
    <li>
      <p
        className={todo.done && "tachado"}
        onClick={() => handleToggle(todo.id)}
      >
        {i + 1}. {todo.desc}
      </p>
      <button onClick={() => handleDelete(todo.id)}>Borrar</button>
    </li>
  );
};
