# React & JSX 프로젝트

이 프로젝트는 **React**와 **JSX**를 사용하여 만든 예시 프로젝트입니다. React와 JSX의 특징과 사용법을 다룹니다.

---

## 🚨 주의 사항

- **.js / .jsx 파일은 혼자서 실행될 수 없음**  
  React 컴포넌트는 브라우저에서 직접 실행되지 않으며, `npm start`로 빌드 후 실행해야 합니다.

- **React가 설치된 디렉토리에서 실행**  
  React 프로젝트는 `src` 폴더 내에서 실행됩니다. React 컴포넌트는 `public/index.html`에서 렌더링됩니다.

- **JSX는 함수 형태로 작성**  
  JSX는 함수로 구성되며, 반환값으로 HTML처럼 보이는 JavaScript 코드를 반환합니다.
  ```jsx
  function App() {
    return (
      <div>
        <h1>Hello, JSX!</h1>
        <p>This is a JSX example.</p>
      </div>
    );
  }

📘 React와 JavaScriptXML
React의 npm과 npx
npm: Node.js 패키지를 설치하고 관리하는 패키지 매니저입니다.
예: npm install react

npx: npm 패키지를 실행하는 도구입니다. 전역 설치 없이 직접 실행할 수 있습니다.
예: npx create-react-app my-app

🚀 JSX 장점
1. 가독성이 좋고 직관적
    HTML과 유사한 문법 덕분에 코드를 읽고 이해하기 쉬움.

2. 코드가 간결하고 유지보수가 쉬움
    JSX는 React 컴포넌트를 간단하게 작성할 수 있도록 도와주며, 반복 코드를 줄여줍니다.

3. 자바스크립트와 자연스럽게 결합 가능
    JavaScript의 동적인 기능과 HTML의 구조를 자연스럽게 결합할 수 있습니다.

4. 조건부 렌더링이 쉬움
    JSX 내에서 자바스크립트 조건문을 사용하여 동적으로 렌더링 가능합니다.

5. 스타일 및 이벤트 핸들링이 쉬움
    JSX는 React의 상태 및 스타일을 쉽게 다룰 수 있도록 도와줍니다.

