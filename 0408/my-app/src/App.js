import React, { useState, useEffect } from 'react';
import KeyDisplay from './KeyDisplay';

function App() {
  const [lastKey, setLastKey] = useState('');
  const [keyCount, setKeyCount] = useState(0);
  const [pressedKeys, setPressedKeys] = useState([]);
  const [resetMessage, setResetMessage] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      setLastKey(e.key);
      setKeyCount((prev) => prev + 1);
      setPressedKeys((prev) => [...prev, e.key]);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);


  const handleReset = () => {
    setKeyCount(0);
    setPressedKeys([]);
    setResetMessage(true);
    setTimeout(() => setResetMessage(false), 1000);
  };

  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>🔤 키보드 입력 감지기</h1>
      <KeyDisplay title="마지막 입력 키" value={lastKey} color="#ffcccb" />
      <KeyDisplay title="총 입력 횟수" value={keyCount} color="#c3f7c3" />
      <KeyDisplay
        title="지금까지 누른 키 목록"
        value={pressedKeys.join(', ')}
        color="#cce5ff"
      />

      
      <button
        onClick={handleReset}
        style={{
          marginTop: '20px',
          padding: '10px 20px',
          fontSize: '16px',
          borderRadius: '8px',
          backgroundColor: '#ff9999',
          color: 'white',
          border: 'none',
          cursor: 'pointer',
        }}
      >
        입력 기록 리셋
      </button>

     
      {resetMessage && <p style={{ color: 'gray' }}>입력 기록이 초기화되었습니다.</p>}
    </div>
  );
}

export default App;

