import React from "react";
import { motion } from "motion/react";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaGithub } from "react-icons/fa";
import Test from "../components/Test";
const Navbar = () => {
  const []
  return (
    <div>
      <div className="flex justify-between items-center py-5  px-10">
        <Test/>
        <GiHamburgerMenu onClick={} className="text-2xl cursor-pointer font-bold bg-white  text-neutral w-9 p-1.5 h-9 rounded-full" />
        <motion.p
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="font-semibold text-xl "
        >
          Mehdi Selmi
        </motion.p>
        <div className="flex gap-2 text-2xl">
          <a href="#https://www.linkedin.com/in/mehdi-selmi-939a82273/">
            <FaLinkedinIn />
          </a>
          <a href="#https://github.com/mehdiselmi">
            <FaGithub />
          </a>

          <a href="#https://www.facebook.com/mehdi.selmi.121">
            <FaFacebookF />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
