import React from "react";
import styles from "./list.module.css";

const listToDrop = ["Apple", "Orange", "Pomegranate"];

const BodyComponent = ({ open }) => {
  return open ? (
    <div className={styles.list}>
      {listToDrop.map((item, index) => (
        <div className={styles.item} key={index}>
          {item}
        </div>
      ))}
    </div>
  ) : null;
};

export default BodyComponent;
