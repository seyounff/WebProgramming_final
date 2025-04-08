import React, { useState, useEffect, useRef } from "react";

const Area = () => {
  const [size, setSize] = useState({ width: 0, height: 0 });
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    ctx.clearRect(0, 0, canvas.width, canvas.height); // 이전 그림 지움

    const x = 300 - size.width / 2;
    const y = 300 - size.height / 2;
    ctx.fillStyle = "black";
    ctx.fillRect(x, y, size.width, size.height);
  }, [size]);

  return (
    <div>
      <canvas
        ref={canvasRef}
        id="myCanvas"
        width={600}
        height={600}
        style={{ border: "1px solid black", marginBottom: "1rem" }}
      />

      <h1>
        너비: {size.width}, 높이: {size.height}
      </h1>

      <button
        onClick={() => {
          const copy = { ...size };
          if (copy.width <= 130) {
            copy.width += 20;
            setSize(copy);
          }
        }}
      >
        너비 증가
      </button>
      <button
        onClick={() => {
          const copy = { ...size };
          if (copy.width >= 20) {
            copy.width -= 20;
            setSize(copy);
          }
        }}
      >
        너비 감소
      </button>
      <button
        onClick={() => {
          const copy = { ...size };
          if (copy.height <= 140) {
            copy.height += 10;
            setSize(copy);
          }
        }}
      >
        높이 증가
      </button>
      <button
        onClick={() => {
          const copy = { ...size };
          if (copy.height >= 10) {
            copy.height -= 10;
            setSize(copy);
          }
        }}
      >
        높이 감소
      </button>
    </div>
  );
};

export default Area;
