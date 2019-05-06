import React from "react";
import styles from './dropdown.module.css';

class DropDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  onClick = () => {
    this.setState({ open: !this.state.open });
  };

  render() {
      return (
        <div className={styles.dropdown}>
          {this.props.renderHeader(this.state.open, this.onClick)}
          {this.props.renderBody(this.state.open)}
        </div>
      );
  }
}

export default DropDown;
