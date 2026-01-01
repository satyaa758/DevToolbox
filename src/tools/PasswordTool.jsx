import { useState } from "react";
import { motion } from "framer-motion";

export default function PasswordTool() {
  const [password, setPassword] = useState("");

  // Password validation rules
  const rules = [
    {
      id: "length",
      label: "At least 8 characters",
      test: (pw) => pw.length >= 8,
    },
    {
      id: "uppercase",
      label: "At least 1 uppercase letter",
      test: (pw) => /[A-Z]/.test(pw),
    },
    {
      id: "number",
      label: "At least 1 number",
      test: (pw) => /[0-9]/.test(pw),
    },
    {
      id: "symbol",
      label: "At least 1 special character",
      test: (pw) => /[!@#$%^&*(),.?":{}|<>]/.test(pw),
    },
  ];

  // Calculate strength percentage
  const strength = Math.round(
    (rules.filter((r) => r.test(password)).length / rules.length) * 100
  );

  return (
    <motion.div
      className="tool"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <h2>Password Checker</h2>

      <input
        type="password"
        placeholder="Enter password..."
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      {/* Strength Bar */}
      <div className="strength-bar">
        <div
          className="strength-fill"
          style={{
            width: `${strength}%`,
            background:
              strength < 50
                ? "#ef4444"
                : strength < 75
                ? "#facc15"
                : "#22c55e",
          }}
        ></div>
      </div>

      <ul className="rules-list">
        {rules.map((rule) => (
          <li
            key={rule.id}
            style={{
              color: rule.test(password) ? "#22c55e" : "#94a3b8",
            }}
          >
            {rule.label}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
