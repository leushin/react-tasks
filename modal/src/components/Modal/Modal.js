import React from "react";
import ReactDOM from "react-dom";
import styles from "./modal.module.css";

const modalRoot = document.getElementById("modal");

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.element = document.createElement("div");
    this.element.setAttribute("class", styles.modal);
  }

  componentDidMount = () => modalRoot.appendChild(this.element);

  componentWillUnmount = () => modalRoot.removeChild(this.element);

  render() {
    return ReactDOM.createPortal(this.props.children, this.element);
  }
}

export default Modal;
