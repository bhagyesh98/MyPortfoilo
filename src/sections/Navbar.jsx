import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = ["Home", "About", "Projects", "Contact"];


const Navigation = ({ isMobile = false, toggleMenu }) => (
  <ul
    className={`flex flex-col sm:flex-row items-center ${
      isMobile ? "space-y-6" : "space-x-10"
    }`}
  >
    {navItems.map((item, index) => (
      <li key={index}>
        <a
          href={`#${item.toLowerCase()}`}
          onClick={toggleMenu}
          className="relative text-white text-lg font-medium group"
        >
          {item}
          <span className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-center duration-300" />
        </a>
      </li>
    ))}
  </ul>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/40 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <a href="/" className="text-2xl font-bold text-white">
          Bhagyesh Patil
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden sm:block">
          <Navigation />
        </nav>

        {/* Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="sm:hidden text-white"
        >
          <img
            src={isOpen ? "/assets/close.svg" : "/assets/menu.svg"}
            className="w-6 h-6"
            alt="menu"
          />
        </button>
      </div>

      {/* Mobile Menu with AnimatePresence */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="sm:hidden px-6 pb-6 pt-2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            <Navigation isMobile={true} toggleMenu={() => setIsOpen(false)} />
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
