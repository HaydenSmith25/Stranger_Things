import React from "react";
import Post from "./Post";
import { usePosts } from "../custom-hooks";

const AllPosts = () => {
  const { posts } = usePosts();
  return posts.map((post) => <Post key={post._id} post={post} />);
};

export default AllPosts;
