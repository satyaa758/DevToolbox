import { useState } from "react";
import { motion } from "framer-motion";

export default function ColorTool() {
  const [color, setColor] = useState("#3498db");

  const generateColor = () => {
    const random = "#" + Math.floor(Math.random() * 16777215).toString(16);
    setColor(random);
  };

  return (
    <motion.div
      className="tool"
      animate={{ backgroundColor: color }}
      transition={{ duration: 0.5 }}
    >
      <h2>Color Generator</h2>
      <h1>{color}</h1>
      <button onClick={generateColor}>Generate Color</button>
    </motion.div>
  );
}
