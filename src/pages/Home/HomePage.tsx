import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";
import styledHome from "./HomePage.module.css";
import { Earth3D } from "../../components/Earth/Earth3D";

const HomePage = () => {
  // variables
  const headlineText = {
    library:
      "Library page allows you to filter and sort countries based on your interests, so you can explore the world on your own terms.",
    challenge:
      "Challenge page puts your global knowledge to the test! It challenges you to identify flags, match capitals to countries, and approximate populations. Improve your understanding of the world's countries.",
  };

  // state
  const [message, setMessage] = useState<string>("");

  // motion
  const itemVariants = {
    initial: { opacity: 0, scale: 0 },
    animate: { opacity: [0, 0, 1], scale: 1, transition: { delay: 2 } },
  };
  const headlineVariants = {
    initial: { opacity: 1, scale: 1 },
    animate: { opacity: [0, 0.5, 1], scale: 1 },
  };
  // navigate
  const navigate = useNavigate();

  return (
    <main className={styledHome.wrapper} id="dark">
      <Suspense fallback={null}>
        <Canvas
          style={{
            height: "calc(100vh - 72px - 3em)",
          }}
        >
          <Earth3D />
        </Canvas>
      </Suspense>

      <div className={styledHome.heroEntry}>
        <div className={styledHome.headlineContainer}>
          <motion.h1
            variants={itemVariants}
            initial="initial"
            animate="animate"
          >
            Explore the World Your Way
          </motion.h1>
          <div className={styledHome.messageContainer}>
            {message ? (
              <motion.h3
                variants={headlineVariants}
                initial="initial"
                animate="animate"
              >
                {message}
              </motion.h3>
            ) : null}
          </div>
        </div>
        <motion.ul className={styledHome.list}>
          <motion.li
            className={styledHome.listItem}
            onClick={() => navigate("library")}
            variants={itemVariants}
            initial="initial"
            animate="animate"
            onHoverStart={() => setMessage(headlineText.library)}
            onHoverEnd={() => setMessage("")}
          >
            <p className={styledHome.link}>Library</p>
          </motion.li>
          <motion.li
            className={styledHome.listItem}
            onClick={() => navigate("challenge")}
            variants={itemVariants}
            initial="initial"
            animate="animate"
            onHoverStart={() => setMessage(headlineText.challenge)}
            onHoverEnd={() => setMessage("")}
          >
            <p className={styledHome.link}>Challenge</p>
          </motion.li>
        </motion.ul>
      </div>
    </main>
  );
};

export default HomePage;
