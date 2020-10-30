import React, {useState, useEffect} from 'react';

const ReFetchReddit = ({ subreddit }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(`https://www.reddit.com/r/${subreddit}.json`);
      const json = await res.json();

      setPosts(json.data.children.map(c => c.data));
    }

    fetchData();
  }, [subreddit, setPosts]);

  return (
    <ul>
      {posts.map(post => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );

}

const ReFetch = () => {
  const [inputValue, setValue] = useState("reactjs");
  const [subreddit, setSubreddit] = useState(inputValue);

  // Update the subreddit when the user presses enter
  const handleSubmit = e => {
    e.preventDefault();
    setSubreddit(inputValue);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          value={inputValue}
          onChange={e => setValue(e.target.value)}
        />
      </form>
      <ReFetchReddit subreddit={subreddit} />
    </>
  );
}
export default ReFetch;
