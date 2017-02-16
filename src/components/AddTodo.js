import React, { Component } from 'react';
import './AddTodo.css';

export default class AddTodo extends Component {

  constructor(props) {
    super(props);
  
    this.state = {
      title: '',
    };
  }

  handleOnSubmit(event) {
    event.preventDefault();
    this.props.addTodo(this.state);
    this.setState({
      title: '',
    });
  }

  handleOnChange(event) {
    this.setState({
      title: event.target.value,
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={(event) => this.handleOnSubmit(event)}> 
          <input 
            type="text" 
            className="addTodo"
            onChange={(event) => this.handleOnChange(event)}
            value={this.state.title}
            placeholder="Add Activity" />
          <input 
            type="submit" 
            value="Add Todo" 
            className="addTodoButton" />
        </form>
      </div>
    )
  }

}