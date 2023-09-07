import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

/*
  组件
    - React中组件有两种创建方式
    - 函数式组件
      - 函数组件就是一个返回JSX的普通
      - 组件的首字母必须是大写
    - 类组件（麻烦）


*/



const root = ReactDOM.createRoot(document.getElementById('root'));

//React组件可以直接通过JSX渲染
root.render(
  <App/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
