import { Link, useLoaderData, useNavigate } from "react-router-dom";

const SinglePage = () => {
  const { post, id } = useLoaderData();
  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  return (
    <div>
      <button onClick={goBack}>Назад</button>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <Link to={`/posts/${id}/edit`}>Edit this posts</Link>
    </div>
  );
};

export const postLoader = async ({ params }) => {
  const id = params.id;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const post = await res.json();
  return { post, id };
};
export default SinglePage;
