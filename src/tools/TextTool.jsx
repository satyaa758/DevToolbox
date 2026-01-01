import { useState } from "react";
import { motion } from "framer-motion";
import { FaCopy, FaCheck } from "react-icons/fa";

export default function TextTool() {
  const [text, setText] = useState("");
  const [copied, setCopied] = useState(false);

  const copyText = async () => {
    if (!text) return;

    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  };

  return (
    <motion.div
      className="tool"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <h2>Text Converter</h2>

      {/* Textarea wrapper */}
      <div className="textarea-wrapper">
        <textarea
          placeholder="Type something..."
          value={text}
          onChange={(e) => {
            setText(e.target.value);
            e.target.style.height = "auto"; 
            e.target.style.height = e.target.scrollHeight + "px";
          }}
          rows={3}
        />

       
        <motion.button
          className="copy-icon"
          onClick={copyText}
          whileTap={{ scale: 0.85 }}
        >
          {copied ? <FaCheck /> : <FaCopy />}
        </motion.button>
      </div>

      
      <div className="btn-group">
        <button onClick={() => setText(text.toUpperCase())}>UPPER</button>
        <button onClick={() => setText(text.toLowerCase())}>lower</button>
        <button onClick={() => setText("")}>Clear</button>
      </div>

      <p className="char-count">Characters: {text.length}</p>
    </motion.div>
  );
}
