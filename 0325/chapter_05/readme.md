App.js

import React from "react";
import CommentList from "./chapter_05/CommentList.jsx"; // 추가

function App() {
    return (
        <CommentList />
    );
}

export default App;


index.js

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(<App/>);

Report
  웹사이트를 5개 이상의 컴포넌트로 구성하세요
  2개 이상의 props를 전달하는 컴포넌트를 하나 이상 포함하세요
  => 자기 소개 페이지를 사용 생성 AI를 이용해 만들어도됨

