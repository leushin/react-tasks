import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Panel from "./components/Panel/Panel";
import PanelHeader from './components/PanelHeader/PanelHeader';
import PanelBody from "./components/PanelBody/PanelBody";

ReactDOM.render(
  <Panel>
    <PanelHeader>
      <div>Hello</div>
    </PanelHeader>
    <PanelBody>
      <div>World</div>
    </PanelBody>
  </Panel>,
  document.getElementById("root")
);
