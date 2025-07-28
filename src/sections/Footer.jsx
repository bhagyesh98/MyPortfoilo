import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="flex flex-wrap items-center justify-between w-full gap-4 px-6 py-4 text-sm text-neutral-400 bg-transparent">
      {/* Left: Policies */}
      <div className="flex gap-3 flex-wrap items-center">
        <p className="hover:underline cursor-pointer">Terms & Conditions</p>
        <span>|</span>
        <p className="hover:underline cursor-pointer">Privacy Policy</p>
      </div>

      {/* Center: Socials */}
      <div className="flex gap-5 justify-center items-center">
        <a
          href="https://github.com/bhagyesh98"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition-colors"
        >
          <Github className="w-5 h-5" />
        </a>
        <a
          href="https://www.linkedin.com/in/bhagyesh-patil-/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition-colors"
        >
          <Linkedin className="w-5 h-5" />
        </a>
        <a
          href="bhagyeshpatil789@gmail.com"
          className="hover:text-white transition-colors"
        >
          <Mail className="w-5 h-5" />
        </a>
      </div>

      {/* Right: Copyright */}
      <div className="text-xs text-right">
        <p>© 2025 All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
