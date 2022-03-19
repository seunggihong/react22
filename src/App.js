import React, { Component } from "react";
import Header from "./utiles/Header";
import Article from "./utiles/Article";
import Nav from "./utiles/Nav";
import "./App.css";

class App extends Component {
  render = () => {
    return (
      <div>
        <Header></Header>
        <Nav></Nav>
        <Article></Article>
      </div>
    );
  };
}

export default App;
