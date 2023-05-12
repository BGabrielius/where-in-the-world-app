import React, { useState } from "react";
import { motion } from "framer-motion";
import { MdOutlineLightMode, MdDarkMode } from "react-icons/md";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { useLocation, useNavigate } from "react-router-dom";

import styledHeader from "./Header.module.css";

interface Props {
  mode: string;
  onToggle: () => void;
}

const Header: React.FC<Props> = ({ mode, onToggle }) => {
  // state
  const [themeDialog, setThemeDialog] = useState<boolean>(false);
  // location
  const location = useLocation();
  // navigate
  const navigate = useNavigate();
  // motion
  const itemVariants = {
    dark: { rotate: [60, 0], x: [20, 0], y: [25, 0] },
    light: { rotate: [-60, 0], x: [20, 0], y: [-25, 0] },
  };

  return (
    <header>
      <nav className={styledHeader.nav}>
        <ul className={styledHeader.container}>
          <motion.li
            className={styledHeader.listItem}
            onClick={() => navigate("/")}
          >
            <h1 className={`${styledHeader.logo}`}>Where in the world?</h1>
          </motion.li>
          {location.pathname !== "/" ? (
            <motion.li onClick={onToggle} className={styledHeader.listItem}>
              {mode === "dark" ? (
                <>
                  <motion.span
                    variants={itemVariants}
                    animate={mode === "dark" ? "dark" : "light"}
                  >
                    <MdDarkMode
                      color="white"
                      className={styledHeader.modeIcon}
                    />
                  </motion.span>
                  <p className={styledHeader.modeText}>Dark Mode</p>
                </>
              ) : (
                <>
                  <motion.span
                    variants={itemVariants}
                    animate={mode === "dark" ? "dark" : "light"}
                  >
                    <MdOutlineLightMode className={styledHeader.modeIcon} />
                  </motion.span>
                  <p className={styledHeader.modeText}>Light Mode</p>
                </>
              )}
            </motion.li>
          ) : (
            <>
              <motion.li
                className={styledHeader.disabledContainer}
                onHoverStart={() => setThemeDialog(true)}
                onHoverEnd={() => setThemeDialog(false)}
              >
                <AiOutlineExclamationCircle
                  className={styledHeader.exclamation}
                />
              </motion.li>
              {themeDialog && (
                <span className={styledHeader.themeDialog}>
                  Dark mode is forced on the home page
                </span>
              )}
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
