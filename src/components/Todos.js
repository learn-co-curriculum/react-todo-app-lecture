import React from 'react';
import Todo from './Todo';

export default (props) => {

  const todos = props.todos.map((todo, index) => <Todo key={index} index={index} todo={todo} removeTodo={props.removeTodo} />)
  
  return (
    <div>
      {todos}
    </div>
  );
};