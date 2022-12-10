import { Suspense } from "react";
import {
  Await,
  defer,
  Link,
  useAsyncValue,
  useLoaderData,
  useNavigate,
} from "react-router-dom";

const Post = () => {
  const post = useAsyncValue();
  return (
    <>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </>
  );
};

const Comments = () => {
  const comments = useAsyncValue();
  return (
    <div>
      <h2>Comments</h2>
      {comments.map((comment) => (
        <>
          <h3>{comment.email}</h3>
          <h4>{comment.name}</h4>
          <p>{comment.body}</p>
        </>
      ))}
    </div>
  );
};

const SinglePage = () => {
  const { post, id, comments } = useLoaderData();
  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  return (
    <div>
      <button onClick={goBack}>Назад</button>
      <Suspense fallback={<h2>Post is loading...</h2>}>
        <Await resolve={post}>
          <Post />
        </Await>
      </Suspense>
      <Suspense fallback={<h2>Comments is loading...</h2>}>
        <Await resolve={comments}>
          <Comments />
        </Await>
      </Suspense>
      <Link to={`/posts/${id}/edit`}>Edit this posts</Link>
    </div>
  );
};
async function getPostId(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  return res.json();
}

async function getCommentsByPost(id) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}/comments`
  );
  return res.json();
}

export const postLoader = async ({ params }) => {
  const id = params.id;

  return defer({
    post: await getPostId(id),
    id,
    comments: getCommentsByPost(id),
  });
  {
    /* post: await getPostId(id) - чтобы сначала грузились посты, а потом уже комментарии (внутри загрузим)*/
  }
};
export default SinglePage;
