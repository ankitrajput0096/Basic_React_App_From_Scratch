import React, { Component } from "react";
import "../css/main.css";
import logo from '../assets/saitama.jpg';

class MyComponent extends Component {
  render() {
    return (
    <div>
      <div className={"intro"}>Hello World</div>
      <img src={logo} alt="Logo" />
      <div>Awesome!!!</div>
    </div>
    );
  }
}
export default MyComponent;