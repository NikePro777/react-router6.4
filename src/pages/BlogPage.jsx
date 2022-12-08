import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import BlogFilter from "../components/BlogFilter";

const BlogPage = () => {
  const [posts, setPosts] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const postQuery = searchParams.get("post") || "";
  let latest = searchParams.has("latest");

  const startsFrom = latest ? 80 : 1;

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

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

export default BlogPage;
