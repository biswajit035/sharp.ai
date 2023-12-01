/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const Navlink = ({ isOpen, handleClick }) => {
  const navlinkAnimaton = {
    initial: {
      y: -200,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  };
  const navlinkAnimatonMobile = {
    initial: {
      x: -200,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.2,
        staggerChildren: 0.1,
      },
    },
  };
  const list = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "Data",
      link: "data",
    },
    {
      title: "Transaction",
      link: "transaction",
    },
  ];

  const laptop = true;

  return (
    <>
      {laptop && (
        <motion.div
          initial="initial"
          animate="animate"
          variants={isOpen ? navlinkAnimatonMobile : navlinkAnimaton}
          className={`navlink ${isOpen ? "show" : "hide"}`}
          onClick={handleClick}
        >
          {list.map((item, idx) => (
            <motion.span
              variants={isOpen ? navlinkAnimatonMobile : navlinkAnimaton}
              key={idx}
            >
              <NavLink to={item.link} activeClassName="active" key={idx}>
                {item.title}
              </NavLink>
            </motion.span>
          ))}
        </motion.div>
      )}
    </>
  );
};

export default Navlink;
