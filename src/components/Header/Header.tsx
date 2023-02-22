import React from "react";
import {
  // MdLightMode,
  MdOutlineLightMode,
  MdDarkMode,
  // MdOutlineDarkMode,
} from "react-icons/md";
import { Link } from "react-router-dom";

import styledHeader from "./Header.module.css";

interface Props {
  mode: string;
  onToggle: () => void;
}

const Header: React.FC<Props> = ({ mode, onToggle }) => {
  return (
    <header>
      <nav className={styledHeader.nav}>
        <ul className={styledHeader.container}>
          <li>
            <Link to="/">
              <h1 className={`${styledHeader.logo} mainHeadline`}>
                Where in the world?
              </h1>
            </Link>
          </li>
          <li onClick={onToggle} className={styledHeader.listItem}>
            {mode === "dark" ? (
              <>
                <MdDarkMode color="white" className={styledHeader.modeIcon} />
                <p className={`${styledHeader.modeText} modeText`}>Dark Mode</p>
              </>
            ) : (
              <>
                <MdOutlineLightMode className={styledHeader.modeIcon} />
                <p className={`${styledHeader.modeText} modeText`}>
                  Light Mode
                </p>
              </>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
