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
    // ref on input
    this.textInput = React.createRef()
  }
  // listener on input area
  focusInput = () => {
    this.textInput.current.focus();
  }

  onSubmit = e => {
    e.preventDefault();
    if (this.textInput.current.value)
    this.props.addTodo(this.textInput.current.value);
    this.textInput.current.value=""; // clear input area
  };

  render() {
    console.log('rerender')
    return (
      <form className="form" onSubmit={this.onSubmit}>
        <input
          type="text"
          ref={this.textInput}
          className="input-todo"
          placeholder="add a new todo..."
        />
        <button type="submit" className="btn-add" onClick={this.focusInput}>
          Add
        </button>
      </form>
    );
  }
}

export default TodoApp;
