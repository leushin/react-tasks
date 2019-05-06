import React from "react";
import styles from "./panel.module.css";

class Panel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: false };
  }

  onClick = () => 
    this.setState({ show: !this.state.show });
  

  render() {
    return (
      <div className={styles.container} onClick={this.onClick}>
        {this.props.children[0]}
        {this.state.show ? this.props.children[1] : null}
      </div>
    );
  }
}

export default Panel;
