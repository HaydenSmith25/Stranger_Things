import { useState, useEffect } from "react";
import { BASE_URL } from "../../constants";

export function usePosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPost = async () => {
      try {
        const resp = await fetch(`${BASE_URL}/posts`);
        const { success, error, data } = await resp.json();

        if (success) {
          setPosts(data.posts);
        } else {
          console.error(error.message);
        }
      } catch (ex) {
        console.error(ex);
      }
    };

    getPost();
  }, []);
  return { posts };
}
