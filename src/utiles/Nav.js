export default function Nav(props) {
  const list = [];
  for (let index = 0; index < props.topics.length; index++) {
    let t = props.topics[index];
    list.push(
      <li key={t.id}>
        <a href={"/read" + t.id}>{t.title}</a>
      </li>
    );
  }
  return (
    <div>
      <nav>
        <ol>{list}</ol>
      </nav>
    </div>
  );
}
