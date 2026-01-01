import { FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <span>Developer Toolbox © 2026</span>

      <a
        href="https://github.com/SRCarlo"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub /> GitHub
      </a>
    </footer>
  );
}
