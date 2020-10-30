import React, {useState, useEffect} from 'react';

const DataLoader = () => {
  const[data, setData] = useState([]);

  useEffect(() => {
    // fetch('http://localhost:3001/links')
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => response.json())
      .then(data => setData([data]));
  }, []);

  return (
    <div>
      <ul>
        {data.map(el => (
          // <li key={el.id}> {el.title}</li>
          <li key={el.message}> <img src={el.message}/></li>
        ))}
      </ul>
    </div>
  );
}

export default DataLoader;
