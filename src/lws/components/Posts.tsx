import { useEffect } from "react";

import { fetchPosts } from "../features/posts/postSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks/hooks";

const Posts = () => {
  const { posts, isError, isLoading, error } = useAppSelector(
    (state) => state.posts,
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  let content;

  if (isLoading) {
    content = <h1>Loading posts...</h1>;
  }

  if (!isLoading && isError) {
    content = <h1>{error}</h1>;
  }

  if (!isLoading && !isError && posts.length === 0) {
    content = <h1>No Posts found!</h1>;
  }

  if (!isLoading && !isError && posts.length > 0) {
    content = (
      <ul>
        {posts.map((post, key) => (
          <li key={key}>{post.title}</li>
        ))}
      </ul>
    );
  }

  return <div>{content}</div>;
};

export default Posts;
