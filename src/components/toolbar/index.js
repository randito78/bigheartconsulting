import React, { Component } from "react";
import "./toolbar.css";
import logo from "../../assets/logo.svg";

class App extends Component {
  render() {
    return (
      <div className="toolbar">
        <img src={logo} className="logo" alt="logo" />
      </div>
    );
  }
}

export default App;
