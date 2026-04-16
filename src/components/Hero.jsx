import React, { useState } from "react";
import me2 from "../assets/Me2.png";
import scroll from "../assets/scroll.png";
import { motion, spring } from "motion/react";
const Hero = () => {
  const [open, setOpen] = useState(true);
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 , x:10, transition:{ duration: 2,type:"spring" ,stiffness:300,damping:100 }},
  };
  return (
    <div>
      <div className="flex justify-between items-center  px-10 pb-14">
        <motion.div
          variants={variants}
          // animate="visible"
          // initial="hidden"
          animate={open ? "visible" : "hidden"}
         
          className="w-175 text-xl leading-8 shadow-2xl space-y-13 py-20 px-10  text-black font-semibold"
        >
          
          <motion.p className="text-3xl">
            Hi, my name is{" "}
            <span className="text-secondary">Mehdi Selmi</span>{" "}
          </motion.p>
          <motion.p>
            As a Frontend Engineer, I focus on bridging the complexity of deep
            technologies with the simplicity of elegant user interfaces. I
            specialize in building reusable component libraries, data-driven
            UIs, and responsive designs that can scale alongside fast-evolving
            products. I work across multiple ventures, helping teams bring
            sophisticated platforms to market without compromising user
            experience.
          </motion.p>
        </motion.div>
        <img
          src={scroll}
          alt="scroll image"
          className="absolute left-176 cursor-pointer top-127"
        />
        <img src={me2} alt="photo me" className="w-120" />
      </div>
    </div>
  );
};

export default Hero;
