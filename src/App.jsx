import { useState } from "react";
import { FaFont, FaPalette, FaLock, FaLightbulb,FaTools } from "react-icons/fa";
import { motion } from "framer-motion"; 
import TextTool from "./tools/TextTool";
import ColorTool from "./tools/ColorTool";
import PasswordTool from "./tools/PasswordTool";
import TipTool from "./tools/TipTool";
import Footer from "./components/Footer";

export default function App() {
  const [activeTool, setActiveTool] = useState("text");

  
  const handleTitleClick = () => {
    setActiveTool("text");
    window.scrollTo({ top: 0, behavior: "smooth" }); 
  };

  return (
    <div className="layout">
      {/* Sidebar */}
      <aside className="sidebar">
        {/* Motion Title */}
        <motion.h2
          whileHover={{ scale: 1.1 }} 
          whileTap={{ scale: 0.95 }} 
          style={{
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: "10px",
            fontFamily: "'Quantico', sans-serif",
          }}
          onClick={handleTitleClick}
        >
          <motion.span
            whileHover={{ rotate: [0, 10, -10, 0] }} 
            transition={{ duration: 0.5 }}
            style={{ display: "inline-block" }}
          >
            <FaTools />
          </motion.span>
          Toolbox
        </motion.h2>

        <button onClick={() => setActiveTool("text")}>
          <FaFont /> Text
        </button>
        <button onClick={() => setActiveTool("color")}>
          <FaPalette /> Color
        </button>
        <button onClick={() => setActiveTool("password")}>
          <FaLock /> Password
        </button>
        <button onClick={() => setActiveTool("tips")}>
          <FaLightbulb /> Tips
        </button>
      </aside>

      {/* Main Content */}
      <main className="content">
        {activeTool === "text" && <TextTool />}
        {activeTool === "color" && <ColorTool />}
        {activeTool === "password" && <PasswordTool />}
        {activeTool === "tips" && <TipTool />}
      </main>

      <Footer />
    </div>
  );
}
