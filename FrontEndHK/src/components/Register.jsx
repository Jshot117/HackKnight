import { motion } from "framer-motion";

export function Register() {
  return (
    <div className="mx-auto justify-center items-center">
      <div className="flex justify-center items-center md:mt-32">
        <div className="md:m-6">
          <h1 className="text-center text-xl md:text-5xl">
            Join an opportunity to learn and grow with us!
          </h1>
        </div>
      </div>
      <p className="text-lg">Registration is coming soon!</p>
      {/* <motion.button
        className="md:text-xl font-bold rounded-xl mx-auto border-black border-5 bg-gray-600 p-5 text-gray-200 transform transition-all duration-300"
        disabled
        onClick={() => {
          window.open(
            "https://docs.google.com/forms/d/e/1FAIpQLSfQ6cIO6YuTWfyfUZHcJx7c3UiRbZrRPaRJYRRusfFSgCDSVQ/viewform?usp=header",
            "_blank"
          );
        }}
      >
        REGISTER NOW
      </motion.button> */}
    </div>
  );
}
