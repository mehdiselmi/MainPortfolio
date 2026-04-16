import React from "react";
import { motion, spring, stagger } from "motion/react";
const Test = () => {
  const variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      x: 100,
        transition: {staggerChildren:0.2},
    },
  };
  const items = ["item1", "item2", "item3", "item4"];
  return (
    <div>
      <motion.ul className="bg-white text-black w-100 h-120" variants={variants} initial="hidden" animate="visible">
        {items.map((item) => (
          <motion.li variants={variants} key={item}>{item}</motion.li>
        ))}
      </motion.ul>
    </div>
  );
};

export default Test;
