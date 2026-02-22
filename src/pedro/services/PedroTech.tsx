import { useState } from "react";
import { useCreatePostsMutation, useGetPostQuery } from "./jsonPlaceholderApi";

const PedroTech = () => {
  const [newPost, setNewPost] = useState({ title: "", body: "", id: 99999 });
  const { data: posts = [], isLoading, isError, refetch } = useGetPostQuery();
  const [createPost, { isLoading: isCreating, error: createError }] =
    useCreatePostsMutation();

  if (isLoading) return <h1>Loading...</h1>;

  if (isError) return <p>Error occured :(</p>;
  if (createError) return <p>there was creating error</p>;

  const handleCreatePost = async () => {
    await createPost(newPost);
    refetch();
  };

  return (
    <div>
      <div>
        <input
          onChange={(e) =>
            setNewPost((prev) => ({ ...prev, title: e.target.value }))
          }
          type="text"
          placeholder="Title..."
        />
        <input
          onChange={(e) =>
            setNewPost((prev) => ({ ...prev, body: e.target.value }))
          }
          type="text"
          placeholder="Body..."
        />
        <button onClick={handleCreatePost} disabled={isCreating}>
          Create Post
        </button>
      </div>
      {posts.map((post) => (
        <p key={post.id}>{post.title}</p>
      ))}
    </div>
  );
};

export default PedroTech;
