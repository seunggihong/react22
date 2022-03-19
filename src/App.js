import React, { Component } from "react";
import Header from "./utiles/Header";
import Article from "./utiles/Article";
import Nav from "./utiles/Nav";
import "./App.css";

function App() {
  const topics = [
    { id: 1, title: "html", body: "html is .." },
    { id: 2, title: "css", body: "css is .." },
    { id: 3, title: "js", body: "js is .." },
  ];
  return (
    <div>
      <Header
        title="WEB"
        onChangeMode={() => {
          alert("Header");
        }}
      ></Header>
      <Nav
        topics={topics}
        onChangeMode={(title) => {
          alert(title);
        }}
      ></Nav>
      <Article title="Welcome" body=""></Article>
    </div>
  );
}

export default App;
