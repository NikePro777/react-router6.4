import {
  useActionData,
  useLoaderData /*useParams*/,
  useNavigation,
} from "react-router-dom";
import UpdatePost from "../components/UpdatePost";

const EditPost = () => {
  // const { id } = useParams();
  const { post, id } = useLoaderData();
  const navigation = useNavigation();
  const data = useActionData();

  return (
    <div>
      {data?.message && <div style={{ color: "blue" }}>{data.message} </div>}
      <h1>Edit Page {id}</h1>
      <UpdatePost {...post} submitting={navigation.state === "submitting"} />
    </div>
  );
};

const updatePost = async (post) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${post.get("id")}`,
    {
      method: "PUT",
      body: post,
    }
  );
  return res.json();
};

export const updatePostAction = async ({ request }) => {
  const formData = await request.formData();
  const updatedPost = await updatePost(formData);
  return { message: `Post ${updatedPost.id} was successfully updated` };
};

export default EditPost;
