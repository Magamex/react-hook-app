import React, { useEffect, useReducer } from "react";
import { todoReducer } from "./todoReducer";

import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";

import "../../styles.css";
const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
  // return [{
  //     id: new Date().getTime(),
  //     desc: 'Hola mundo',
  //     done: false
  // }]
};

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init);

  

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleDelete = (todoId) => {
    const action = {
      type: "delete",
      payload: todoId,
    };
    dispatch(action);
  };

  const handleToggle = (todoId) => {
    dispatch({
      type: "toggle",
      payload: todoId,
    });
  };

  const handleAdd = (newTodo) => {
    dispatch({
      type: "add",
      payload: newTodo,
    });
  }

  return (
    <div>
      <h1>TodoApp ({todos.length})</h1>
      <TodoAdd handleAdd={handleAdd}/>
      <hr />

      <TodoList
        todos={todos}
        handleToggle={handleToggle}
        handleDelete={handleDelete}
      />
    </div>
  );
};
