import { useState } from "react";
import Header from "./utiles/Header";
import Article from "./utiles/Article";
import Nav from "./utiles/Nav";
import "./App.css";

function App() {
  const [mode, setMode] = useState("Welcome");
  const [id, setId] = useState(null);

  const topics = [
    { id: 1, title: "html", body: "html is .." },
    { id: 2, title: "css", body: "css is .." },
    { id: 3, title: "js", body: "js is .." },
  ];

  let content = null;

  if (mode === "Welcome") {
    content = <Article title="Welcome" body="Hello. WEB"></Article>;
  } else if (mode === "READ") {
    let title,
      body = null;
    for (let index = 0; index < topics.length; index++) {
      if (topics[index].id === id) {
        title = topics[index].title;
        body = topics[index].body;
      }
    }
    content = <Article title={title} body={body}></Article>;
  }

  return (
    <div>
      <Header
        title="WEB"
        onChangeMode={() => {
          setMode("Welcome");
        }}
      ></Header>
      <Nav
        topics={topics}
        onChangeMode={(_id) => {
          setMode("READ");
          setId(_id);
        }}
      ></Nav>
      {content}
    </div>
  );
}

export default App;
