export default function Nav({ articles, setArticle, setWriting }) {
  return (
    <nav>
      {!articles
        ? "No articles"
        : articles.map((a) => (
            <p
              key={a.id}
              onClick={() => {
                setArticle(a);
                setWriting(false);
              }}
            >
              {a.title}
            </p>
          ))}
      <button onClick={() => setWriting(true)}>New Article</button>
    </nav>
  );
}
