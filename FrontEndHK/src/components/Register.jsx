import { motion } from "framer-motion";

export function Register() {
  return (
    <>
      <div className="flex justify-center items-center md:mt-32">
        <div className="md:m-6">
          <h1 className="text-center text-xl md:text-5xl">
            Join an opportunity to learn and grow with us!
          </h1>
        </div>
      </div>
      <motion.button
        className="md:text-xl font-bold rounded-xl mx-auto border-black border-5 bg-black p-5 text-white hover:scale-110 transform transition-all duration-300"
        animate={{
          boxShadow: [
            "0px 4px 20px 0px rgba(89, 7, 240, 0.75)",
            "0px 4px 30px 0px rgba(89, 7, 240, 0.9)",
            "0px 4px 60px 0px rgba(89, 7, 240, 0.9)",
            "0px 4px 30px 0px rgba(89, 7, 240, 0.9)",
            "0px 4px 20px 0px rgba(89, 7, 240, 0.75)",
          ],
        }}
        transition={{
          duration: 3, // Time for one complete cycle
          repeat: Infinity, // Keep repeating
          ease: "easeInOut", // Smooth transition
        }}
        style={{
          border: "1px solid rgba(89, 7, 240, 0.75)",
        }}
      >
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSfQ6cIO6YuTWfyfUZHcJx7c3UiRbZrRPaRJYRRusfFSgCDSVQ/viewform?usp=header"
          target="_blank"
          rel="noopener noreferrer"
        >
          REGISTER NOW
        </a>
      </motion.button>
    </>
  );
}
