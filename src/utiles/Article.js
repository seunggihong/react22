export default function Article(props) {
  return (
    <div>
      <article>
        <h2>{props.title}</h2>
        {props.body}
      </article>
    </div>
  );
}
