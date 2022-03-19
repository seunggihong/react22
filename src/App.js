import { useState } from "react";
import Header from "./utiles/Header";
import Article from "./utiles/Article";
import Nav from "./utiles/Nav";
import "./App.css";
import Create from "./utiles/Create";
import Update from "./utiles/Update";

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
  let contextControl = null;

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
    contextControl = (
      <li>
        <a
          href={"/update/" + id}
          onClick={(event) => {
            event.preventDefault();
            setMode("UPDATE");
          }}
        >
          Update
        </a>
      </li>
    );
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
  } else if (mode === "UPDATE") {
    let title,
      body = null;
    for (let index = 0; index < topics.length; index++) {
      if (topics[index].id === id) {
        title = topics[index].title;
        body = topics[index].body;
      }
    }
    content = (
      <Update
        title={title}
        body={body}
        onUpdate={(title, body) => {
          const updateTopic = { id: id, title: title, body: body };
          const newTopics = [...topics];
          for (let index = 0; index < newTopics.length; index++) {
            if (newTopics[index].id === id) {
              newTopics[index] = updateTopic;
              break;
            }
          }
          setTopics(newTopics);
          setMode("READ");
        }}
      ></Update>
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
        {contextControl}
      </ul>
    </div>
  );
}

export default App;
