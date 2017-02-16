import React from 'react';
import './Todo.css'

export default ({ todo, removeTodo, index }) => {

  return (
    <div className="todo">
      <h3>{todo.title} <span className="destroyAll" onClick={() => removeTodo(index)}>X</span></h3>
    </div>
  );
};