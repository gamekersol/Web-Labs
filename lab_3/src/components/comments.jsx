import { useState, useEffect } from "react";

function Comments() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/7/comments")
      .then((res) => res.json())
      .then((data) => setComments(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <section className="comments-section">
      <h2 className="comments-title">Comments ({comments.length})</h2>
      <ul className="comments-list">
        {comments.map((c) => (
          <li key={c.id} className="comments-item">
            <div className="comments-head">
              <b className="comments-name">{c.name}</b>
              <span className="comments-email">{c.email}</span>
            </div>
            <p className="comments-body">{c.body}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Comments;