index.js

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';  // App.js를 import

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


reportWebVitals();

App.js

import React from "react";

import Library from './chapter_03/Library';
import Clock from './chapter_04/Clock';
import CommentList from "./chapter_05/CommentList.jsx"; // 추가

function App() {
    return (
        <div>
            <Library/>
            <Clock/>
            <CommentList /> 
        </div>
    );
}

export default App;
