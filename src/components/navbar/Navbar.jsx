import logo from "../../assets/logo.png";
import Navlink from "./Navlink";
import { motion } from "framer-motion";
import MenuButton from './MenuButton'
import { useEffect, useState } from "react";

const Navbar = () => {

  const [isOpen, setOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleClick = ()=>{
    setOpen(!isOpen);
  }

    const menuButtonStyle = {
      marginLeft: "2rem",
    };

    const logoAnimation = {
      initial: { opacity: 0, scale: 0 },
      animate: { opacity: 1, scale: 1 },
      transition: {  duration: 0.7 },
    };

    useEffect(() => {
      // Update the windowWidth state when the window is resized
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };
      // Add event listener for window resize
      window.addEventListener("resize", handleResize);
      // Remove event listener on component unmount
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, [])
    

  return (
    <div className="navContainer">
      <div className="navbar">
        <motion.img {...logoAnimation} className="logo" src={logo} alt="" />
        <MenuButton
          isOpen={isOpen}
          onClick={handleClick}
          strokeWidth="3"
          color="#3399cc"
          transition={{ ease: "easeOut", duration: 0.2 }}
          width="25"
          height="15"
          style={menuButtonStyle}
        />
        {/* This for desktop */}
        {windowWidth>=992 && <Navlink isOpen={isOpen} handleClick={null} />}
        {/* This is for mobile */}
        {windowWidth<992 && isOpen && <Navlink isOpen={isOpen} handleClick={handleClick} />}
      </div>
    </div>
  );
};

export default Navbar;
