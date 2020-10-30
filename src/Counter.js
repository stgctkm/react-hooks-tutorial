import React, {useState, useEffect} from 'react';

function Top() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Top rendered.');
  });

  return (
    <div>
      <div onClick={() => setCount(count + 1)}> Top Level {count}</div>
    </div>
  );
}


function Middle() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Top rendered.');
  });

  return (
    <div>
      <div onClick={() => setCount(count + 1)}> Middle Level {count}</div>
    </div>
  );
}

function Bottom() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Top rendered.');
  });

  return (
    <div>
      <div onClick={() => setCount(count + 1)}> Bottom Level {count}</div>
    </div>
  );
}

export default function Counter() {
  return (
    <>
      <Top/>
      <Middle/>
      <Bottom/>
    </>
  );
}
