import React from "react";
import styles from "./header.module.css";

const HeaderComponent = ({ open, onClick }) => (
  <div className={styles.headstyle} onClick={onClick}>
    Click me: {open ? "opened" : "closed"}
  </div>
);

export default HeaderComponent;
