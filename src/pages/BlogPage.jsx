import { Link, useLoaderData, useSearchParams } from "react-router-dom";
import BlogFilter from "../components/BlogFilter";

const BlogPage = () => {
  const posts = useLoaderData();
  const [searchParams, setSearchParams] = useSearchParams();

  const postQuery = searchParams.get("post") || "";
  let latest = searchParams.has("latest");

  const startsFrom = latest ? 80 : 1;

  return (
    <div>
      <h1>BlogPage</h1>
      <h2>Our News</h2>
      <BlogFilter
        postQuery={postQuery}
        latest={latest}
        setSearchParams={setSearchParams}
      />
      <Link to="/posts/new">Add new post</Link>
      {posts
        .filter(
          (post) => post.title.includes(postQuery) && post.id >= startsFrom
        )
        .map((post) => (
          <Link key={post.id} to={`/posts/${post.id}`}>
            <li>{post.title}</li>
          </Link>
        ))}
    </div>
  );
};

export const blogLoader = async ({ request, params }) => {
  console.log(request, params);
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
};
export default BlogPage;
