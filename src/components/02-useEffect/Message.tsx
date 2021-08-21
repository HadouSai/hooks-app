import React, { useEffect, useState } from "react";

const Message = () => {
  const [cors, setCors] = useState({ x: 0, y: 0 });
  const { x, y } = cors;

  useEffect(() => {
    console.log("mounted", cors);

    const mouseMove = (e: any) => {
      const coords = { x: e.x, y: e.y };
      setCors(coords);
    };

    window.addEventListener("mousemove", mouseMove);
    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  return (
    <div>
      SOY lO MAXIMO x:{x} y:{y}
    </div>
  );
};

export default Message;
