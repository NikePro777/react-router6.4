import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const SinglePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);

  const goBack = () => navigate(-1);
  const goHome = () => navigate("/", { replace: true, state: {} });

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, [id]);
  return (
    <div>
      <button onClick={goBack}>Назад</button>
      {/* {bad approach} */}
      <button onClick={goHome}>Home</button>
      {post && (
        <>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
          <Link to={`/posts/${id}/edit`}>Edit this posts</Link>
        </>
      )}
    </div>
  );
};

export default SinglePage;
