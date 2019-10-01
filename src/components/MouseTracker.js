import React, { useState, useEffect } from "react";

const MouseTracker = () => {
  const [point, setPoint] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handler = e => {
      setPoint({ x: e.clientX, y: e.clientY });
    };

    document.body.addEventListener("mousemove", handler);

    return () => {
      document.body.removeEventListener("mousemove", handler);
    };
  }, []);

  return (
    <div>
      Mouse is at ({point.x}, {point.y})
    </div>
  );
};

export default MouseTracker;
