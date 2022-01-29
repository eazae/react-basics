import React from 'react';
// 1. ReactDOM을 import하고,
import ReactDOM from 'react-dom';
import App from './App6';
// CSS option 1.
//// import './styles.css';

// 2. ReactDOM을 render
ReactDOM.render(
  <React.StrictMode>
    {/* 4. App.js에 컴포넌트 정의되어있음, JSX return */}
    <App />
  </React.StrictMode>,
  // 3. 컴포넌트 하나를 rendering
  document.getElementById('root')
);
