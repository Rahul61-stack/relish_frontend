import { motion } from "framer-motion";

export default function Loader() {
  return (
    <motion.div
      className="border-y-4 rounded-full border-blue-500 w-40 h-40"
      animate={{
        scale: [1, 1, 1, 1, 1],
        rotate: [180,0, 180, 0, 180],
        borderRadius: ["50%", "50%", "50%", "50%", "50%"]
      }}
      transition={{
        duration: 3,
        ease: "easeInOut",
        times: [0, 0.2, 0.5, 0.8, 1],
        repeat: Infinity,
        repeatDelay: 0
      }}
    ></motion.div>
  );
}
