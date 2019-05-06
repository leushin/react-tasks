import React from "react";
import styles from "./header.module.css";

const PanelHeader = props => (
  <div className={styles.headstyle}>{props.children}</div>
);

export default PanelHeader;
