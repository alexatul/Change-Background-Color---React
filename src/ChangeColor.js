import "./ButtonChangeColor.css";
import { useEffect, useState } from "react";

function ChangeColor(props) {
  const [changeBackgroundColor, setBackgroundColor] = useState("#451252");
  const toggleBackgroundColor = () => {
    const randomColors = "#" + Math.random().toString(16).slice(3, 9);
    setBackgroundColor(randomColors);
    document.body.style.backgroundColor = `${changeBackgroundColor}`;
  };
  return (
    <div className="button-change">
      <button onClick={toggleBackgroundColor}>Change color</button>
    </div>
  );
}

export default ChangeColor;
