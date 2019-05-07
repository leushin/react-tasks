import React from "react";
import Modal from "../Modal/Modal";
import styles from "./app.module.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  onClose = () => this.setState({ open: false });

  onOpen = () => this.setState({ open: true });

  render() {
    return this.state.open ? (
      <Modal>
        <div className={styles.content}>
          <span>This is a modal window </span>
          <button onClick={this.onClose}>Click me!</button>
        </div>
      </Modal>
    ) : (
      <button onClick={this.onOpen}>Click to show modal</button>
    );
  }
}

export default App;
