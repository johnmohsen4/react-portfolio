import Lottie from "lottie-react";
import "./hero.css";
import devAnimation from "../../animation/dev.json";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <section className="hero flex">
      <div className="left-section ">
        <div className="parent-avatar flex">
          <motion.img
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2 }}
          src="./Profile FB.jpeg" alt="" className="avatar" />
          <div className="icon-verified"></div>
        </div>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 3 }}
          className="title"
        >
          Full-Stack Developer and Graphic Designer
        </motion.h1>
        <p className="sub-title">
          I am John Mohsen, a fourth-year student at the Faculty of Business
          Information Systems ( BIS ). I am an aspiring full-stack developer and
          graphic designer, passionate about creating seamless and visually
          appealing digital experiences. My studies have provided me with a
          solid foundation in both front-end and back-end development, including
          skills in HTML, CSS, JavaScript, Bootstrap, React JS, PHP, MySQL,
          Laravel, and WordPress.
        </p>
        <div className="all-icons flex">
          <a
            className="icon icon-twitter"
            href="https://x.com/JohnMohsen_"
            target="blank"
          ></a>
          <a
            className="icon icon-instagram"
            href="https://www.instagram.com/johnmohsen_/"
            target="blank"
          ></a>
          <a
            className="icon icon-github"
            href="https://github.com/johnmohsen4"
            target="blank"
          ></a>
          <a
            className="icon icon-linkedin-square"
            href="https://www.linkedin.com/in/john-mohsen-ab1587255/"
            target="blank"
          ></a>
        </div>
      </div>
      <div className="right-section animation">
        {" "}
        <Lottie animationData={devAnimation} />
      </div>
    </section>
  );
};

export default Hero;
