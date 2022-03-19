import { useState } from "react";
import Header from "./utiles/Header";
import Article from "./utiles/Article";
import Nav from "./utiles/Nav";
import "./App.css";
import Create from "./utiles/Create";

function App() {
  const [mode, setMode] = useState("Welcome");
  const [id, setId] = useState(null);
  const [nextId, setNextId] = useState(4);
  const [topics, setTopics] = useState([
    { id: 1, title: "html", body: "html is .." },
    { id: 2, title: "css", body: "css is .." },
    { id: 3, title: "js", body: "js is .." },
  ]);

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
  } else if (mode === "CREATE") {
    content = (
      <Create
        onCreate={(_title, _body) => {
          const newTopic = { id: nextId, title: _title, body: _body };
          const newTopics = [...topics];
          newTopics.push(newTopic);
          setTopics(newTopics);
          setId(nextId);
          setNextId(nextId + 1);
        }}
      ></Create>
    );
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
      <ul>
        <li>
          <a
            href="/Create"
            onClick={(event) => {
              event.preventDefault();
              setMode("CREATE");
            }}
          >
            Create
          </a>
        </li>
      </ul>
    </div>
  );
}

export default App;
