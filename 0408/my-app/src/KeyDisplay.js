import React from 'react';

function KeyDisplay({ title, value, color }) {
  return (
    <div
      style={{
        backgroundColor: color,
        margin: '20px auto',
        padding: '20px',
        borderRadius: '10px',
        width: '80%',
        maxWidth: '500px',
        boxShadow: '0 0 10px rgba(0,0,0,0.1)',
      }}
    >
      <h2>{title}</h2>
      <p style={{ fontSize: '24px' }}>{value || '없음'}</p>
    </div>
  );
}

export default KeyDisplay;