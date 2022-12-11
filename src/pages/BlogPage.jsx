import { Suspense } from "react";
import {
  Await,
  json,
  Link,
  useLoaderData,
  useSearchParams,
} from "react-router-dom";
import BlogFilter from "../components/BlogFilter";

const BlogPage = () => {
  const { posts } = useLoaderData();
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

      <Suspense fallback={<h2>Да гружусь я ...</h2>}>
        <Await resolve={posts}>
          {(resolvedPosts) => (
            <>
              {resolvedPosts
                .filter(
                  (post) =>
                    post.title.includes(postQuery) && post.id >= startsFrom
                )
                .map((post) => (
                  <Link key={post.id} to={`/posts/${post.id}`}>
                    <li>{post.title}</li>
                  </Link>
                ))}{" "}
            </>
          )}
        </Await>
      </Suspense>
    </div>
  );
};
async function getPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  // if (!res.ok) {
  //   throw new Response("сообщение какое-либо", {
  //     status: res.status,
  //     statusText: "not Found",
  //   });
  // }
  return res.json();
}
export const blogLoader = async ({ request, params }) => {
  console.log(request, params);
  {
    /*Просто чтобы знать что они есть)*/
  }
  const posts = await getPosts();
  console.log(posts);
  if (!posts.length) {
    throw json({ message: "not Found", reason: "Wrong url" }, { status: 404 });
  }
  return {
    posts,
  };
};
export default BlogPage;
