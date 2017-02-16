import React, { Component } from 'react';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor() {
    super();

    this.state = {
      todos: [
        { title: 'Grocery Shopping' },
        { title: 'Learn React' },
        { title: 'Eat Dinner' }
      ],
    };

    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }  

  addTodo(todo) {
   this.setState({
     todos: this.state.todos.concat(todo)
   })
  }

  removeTodo(index) {
    this.setState({
      todos: [
        ...this.state.todos.slice(0, index),
        ...this.state.todos.slice(index + 1)
      ],
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Todo App</h2>
        </div>
        <AddTodo addTodo={this.addTodo} />
        <Todos todos={this.state.todos} removeTodo={this.removeTodo} />
      </div>
    );
  }
}

export default App;
