import { useEffect, useState } from "react";
import Footer from "../footer/Footer";
import "./RandomColorGenerator.css";

export default function RandomColorGenerator() {
  const [hexColorCode, setHexColorCode] = useState("");
  const [rgbColorCode, setrgbColorCode] = useState("");
  const [textColor, setTextColor] = useState("");

  useEffect(() => {
    generateColor();
  }, []);

  function generateColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    setrgbColorCode(`rgb(${r}, ${g}, ${b})`);

    const rHex = r.toString(16).padStart(2, "0");
    const gHex = g.toString(16).padStart(2, "0");
    const bHex = b.toString(16).padStart(2, "0");

    setHexColorCode(`#${rHex}${gHex}${bHex}`);

    const rText = 255 - r;
    const gText = 255 - g;
    const bText = 255 - b;

    setTextColor(`rgb(${rText},${gText},${bText})`);
  }

  return (
    <>
      <div
        className="color-generator-container"
        style={{ background: `${rgbColorCode}` }}
      >
        <button onClick={generateColor}>Generate Random Color</button>
        <div style={{ color: `${textColor}` }}>
          <div>RGB: {rgbColorCode}</div>
          <div>HEX: {hexColorCode}</div>
        </div>
      </div>
      <Footer />
    </>
  );
}
