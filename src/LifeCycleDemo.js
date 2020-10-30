import React, {useState, useEffect} from 'react';

const LifeCycleDemo = () => {
  useEffect(() => {
    console.log('render!');

    return () => console.log('unmounting...')
  })

  return "I'm a life cycle demo"
}

const DemoApp = () => {
  const [random, setRandom] = useState(Math.random());

  const [mounted, setMounted] = useState(true);


  const reRender = () => setRandom(Math.random());

  const toggle = () => setMounted(!mounted);

  const [value, setValue] = useState('initial')

  useEffect(() => {
    console.log(value);
  }, [value])

  const changeValue = () => {
    setValue(Math.random());
  }

  return (
    <>
      <button onClick={reRender}>Re render</button>
      <button onClick={toggle}>Show/Hide Demo</button>
      <button onClick={changeValue}>change value</button>
      {mounted && <LifeCycleDemo/>}
    </>
  )
}

export default DemoApp;
