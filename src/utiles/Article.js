export default function Article(props) {
  return (
    <div>
      <article>
        <h2>{props.title}</h2>
        Hello, {props.body}
      </article>
    </div>
  );
}
