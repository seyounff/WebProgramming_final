import React, { useState, useEffect } from "react";

function MyComponent() {
  const [count, setCount] = useState(0);

  // Mount 컴포넌트가 처음 렌더링될 때 실행됨
  useEffect(() => {
    console.log("컴포넌트가 마운트됨"); // componentDidMount 역할

    // 언마운트될 때 실행되는 cleanup 함수
    return () => {
      console.log("컴포넌트가 언마운트됨"); // componentWillUnmount 역할
    };
  }, []); // 빈 배열([])을 넣어주면 컴포넌트가 처음 렌더링될 때만 실행됨

  // Update count 값이 변경될 때 실행됨
  useEffect(() => {
    console.log(`count 값이 변경됨 : ${count}`);
  }, [count]); // count가 변경될 때마다 실행됨

  return (
    <div>
      <h1>카운트 : {count}</h1>
      <button onClick={() => setCount(count + 1)}>증가</button>
    </div>
  );
}

export default MyComponent;
