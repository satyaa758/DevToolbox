import { useState } from "react";
import { motion } from "framer-motion";

const tips = [
  "Break UI into small components",
  "Use meaningful variable names",
  "Keep state minimal",
  "Reuse components",
  "Practice every day",
  "Write reusable hooks",
  "Keep components pure",
  "Use PropTypes or TypeScript for type checking",
  "Lift state up when necessary",
  "Avoid deeply nested state",
  "Use CSS modules or styled-components",
  "Keep effects simple",
  "Clean up side effects in useEffect",
  "Use descriptive folder structure",
  "Avoid anonymous functions in render",
  "Memoize expensive calculations",
  "Use context sparingly",
  "Separate logic and UI",
  "Write small utility functions",
  "Avoid inline styles unless necessary",
  "Prefer controlled components",
  "Debounce input when needed",
  "Use lazy loading for components",
  "Use error boundaries",
  "Write unit tests for components",
  "Document your components",
  "Keep props short and clear",
  "Avoid unnecessary re-renders",
  "Use React DevTools",
  "Use semantic HTML",
  "Avoid overusing useEffect",
  "Use useCallback for functions passed as props",
  "Optimize images and assets",
  "Use consistent naming conventions",
  "Keep components focused on a single responsibility",
  "Avoid prop drilling with context or state management",
  "Use descriptive commit messages",
  "Keep CSS class names meaningful",
  "Use destructuring for props and state",
  "Avoid unnecessary console.log statements",
  "Profile performance with React Profiler",
  "Write comments where necessary",
  "Keep component tree shallow",
  "Refactor often to keep code clean",
  "Stay updated with React versions",
  "Follow a consistent code style guide",
  "Practice accessibility (a11y) principles"
];


export default function TipTool() {
  const [tip, setTip] = useState(tips[0]);

  const newTip = () => {
    const random = tips[Math.floor(Math.random() * tips.length)];
    setTip(random);
  };

  return (
    <motion.div
      className="tool"
      initial={{ scale: 0.9 }}
      animate={{ scale: 1 }}
    >
      <h2>Dev Tip</h2>
      <p>{tip}</p>
      <button onClick={newTip}>New Tip</button>
    </motion.div>
  );
}
