import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import DropDown from "./components/DropDown/DropDown";
import HeaderComponent from "./components/HeaderComponent/HeaderComponent";
import BodyComponent from "./components/BodyComponent/BodyComponent";

ReactDOM.render(
  <DropDown
    renderHeader={(status, clicker) => <HeaderComponent open={status} onClick={clicker} />}
    renderBody={show => <BodyComponent open={show} />}
  />,
  document.getElementById("root")
);
