import React, { useState } from "react";

function Counter(props) {
  var count = 0;
  const [count2, setCount] = useState(0);

  return (
    <div>
      <p>Counter 총 {count}번 클릭했습니다.</p>
      <button onClick={() => count++}>클릭</button>
      <p>Counter2 총 {count2}번 클릭했습니다.</p>
      <button onClick={() => setCount(count2 + 1)}>클릭</button>
    </div>
  );
}
export default Counter;
