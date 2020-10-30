import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Button from './Button';
import reportWebVitals from './reportWebVitals';
import DataLoader from "./DataLoader";
import DemoApp from "./LifeCycleDemo";
import Counter from "./Counter";
import ThreeCounts from "./ThreeCount";
import PropChangeDemo from "./PropChangeWatch";
import RefDemo from "./RefDemo";
import Reddit from "./FetchDataWithUseEffect";
import ReFetch from "./ReFetchDataWithUseEffect";

ReactDOM.render(
  <React.StrictMode>
    <Reddit/>
    <RefDemo />
    <PropChangeDemo/>
    <ThreeCounts/>
    <Counter />
    <Button />
    <DataLoader />
    <DemoApp />
    <ReFetch/>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
