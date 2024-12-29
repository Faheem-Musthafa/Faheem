import { RiReactjsLine } from "react-icons/ri";
import { SiBurpsuite } from "react-icons/si";
import { SiGnubash } from "react-icons/si";
import { FaJs } from "react-icons/fa";
import { FaRedditAlien } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { FaMediumM } from "react-icons/fa";
import { motion } from "framer-motion";  // Corrected import

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const iconData = [
  { icon: <RiReactjsLine className="text-7xl text-cyan-400" />, key: "react", duration: 2 },
  { icon: <SiBurpsuite className="text-7xl text-orange-400" />, key: "burp", duration: 3 },
  { icon: <SiGnubash className="text-7xl text-white" />, key: "bash", duration: 1.5 },
  { icon: <FaJs className="text-7xl text-yellow-300" />, key: "js", duration: 2.5 },
  { icon: <FaRedditAlien className="text-7xl text-orange-800" />, key: "alien", duration: 4 },
  { icon: <FaPython className="text-7xl text-blue-400" />, key: "python", duration: 3.5 },
  { icon: <FaMediumM className="text-7xl text-white" />, key: "medium", duration: 2.2 },
];

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h1 className="my-20 text-center text-4xl">Technologies</h1>
      <div className="flex flex-wrap items-center justify-center gap-4">
        {iconData.map(({ icon, key, duration }) => (
          <motion.div
            key={key}
            variants={iconVariants(duration)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            {icon}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;
   