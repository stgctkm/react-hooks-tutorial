import React, {useState, useEffect} from 'react';

const Reddit = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("https://www.reddit.com/r/reactjs.json");
      const json = await res.json();

      setPosts(json.data.children.map(c => c.data));
    }

    fetchData();
  }, [setPosts]);

  return (
    <ul>
      {posts.map(post => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );

}

export default Reddit;
