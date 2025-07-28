// components/DownloadResume.jsx
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FileDown, CheckCircle2 } from "lucide-react";

export function DownloadResume() {
  const [status, setStatus] = useState("idle"); // "idle", "downloading", "done"

  const handleDownload = () => {
    setStatus("downloading");

    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "BhagyeshPatilCV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setTimeout(() => {
      setStatus("done");
      setTimeout(() => setStatus("idle"), 3000);
    }, 1800);
  };

  return (
    <motion.button
      onClick={handleDownload}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="relative flex items-center justify-center gap-3 overflow-hidden rounded-full border border-purple-600 bg-gradient-to-r from-[#4e00c2] to-[#9e00ff] px-7 py-3 text-white shadow-xl transition-all duration-300 hover:from-purple-700 hover:to-pink-600"
    >
      {/* Glow animation background */}
      <span className="absolute inset-0 -z-10 animate-pulse rounded-full bg-gradient-to-r from-purple-600/30 to-pink-500/30 blur-sm" />

      {/* Icon animation */}
      <AnimatePresence mode="wait">
        {status === "downloading" ? (
          <motion.div
            key="loading"
            initial={{ rotate: 0, opacity: 0 }}
            animate={{ rotate: 360, opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <FileDown className="w-5 h-5 animate-ping" />
          </motion.div>
        ) : status === "done" ? (
          <motion.div
            key="check"
            initial={{ scale: 0 }}
            animate={{ scale: 1.2 }}
            exit={{ scale: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
          >
            <CheckCircle2 className="w-5 h-5 text-green-300" />
          </motion.div>
        ) : (
          <motion.div
            key="idle"
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <FileDown className="w-5 h-5" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Text transition */}
      <motion.span
        key={status}
        initial={{ opacity: 0, x: 10 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -10 }}
        transition={{ duration: 0.3 }}
        className="text-sm font-medium tracking-wide"
      >
        {status === "downloading"
          ? "Downloading..."
          : status === "done"
          ? "Resume Ready!"
          : "Download My Resume"}
      </motion.span>
    </motion.button>
  );
}
