import React from "react";
import styles from "./pbody.module.css";

const PanelBody = props => <div className={styles.menu}>{props.children}</div>;

export default PanelBody;
