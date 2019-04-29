import React from "react";
import "./style.css";

class TodoHeader extends React.Component {
  render() {
    return <h1>TODO list ({this.props.size ? this.props.size : "empty"})</h1>;
  }
}

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    // initial data
    this.state = { todoItems: [] };
  }

  addTodo = todoItem => {
    this.setState({
      todoItems: [
        ...this.state.todoItems,
        {
          index: this.state.todoItems.length + 1,
          value: todoItem
        }
      ]
    });
  };

  removeTodo = itemIndex => {
    this.state.todoItems.splice(itemIndex, 1);
    this.setState({ todoItems: this.state.todoItems });
  };

  render() {
    return (
      <div className="main">
        <TodoHeader size={this.state.todoItems.length} />
        <TodoList items={this.state.todoItems} removeTodo={this.removeTodo} />
        <TodoForm addTodo={this.addTodo} />
      </div>
    );
  }
}

class TodoList extends React.Component {
  render() {
    let items = this.props.items.map((item, index) => {
      return (
        <TodoListItem
          key={index}
          item={item}
          index={index}
          removeTodo={this.props.removeTodo}
        />
      );
    });
    return <ul className="list"> {items} </ul>;
  }
}

class TodoListItem extends React.Component {
  onClickClose = () => {
    let { index: i } = this.props;
    this.props.removeTodo(i);
  };

  render() {
    return (
      <li className="list-item">
        {this.props.item.value}
        <button className="btn-close" onClick={this.onClickClose}>
          Clear
        </button>
      </li>
    );
  }
}
// input form
class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ""
    };
  }
  // listener on input area
  changeInputTodo = e =>
    this.setState({
      inputValue: e.target.value
    });

  onSubmit = e => {
    e.preventDefault();
    if (this.state.inputValue) this.props.addTodo(this.state.inputValue);
    this.setState({
      inputValue: "" // clear input
    });
  };

  render() {
    return (
      <form className="form" onSubmit={this.onSubmit}>
        <input
          type="text"
          className="input-todo"
          value={this.state.inputValue}
          onChange={this.changeInputTodo}
          placeholder="add a new todo..."
        />
        <button type="submit" className="btn-add">
          Add
        </button>
      </form>
    );
  }
}

export default TodoApp;
