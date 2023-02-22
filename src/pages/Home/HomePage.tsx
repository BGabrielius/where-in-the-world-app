import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoLibraryOutline } from "react-icons/io5";
import { SlBookOpen } from "react-icons/sl";
import styledHome from "./HomePage.module.css";

const HomePage = () => {
  // navigate
  const navigate = useNavigate();
  return (
    <main className={styledHome.wrapper}>
      <nav className={styledHome.nav}>
        <ul className={styledHome.list}>
          <li
            className={`${styledHome.listItem} route`}
            onClick={() => navigate("library")}
          >
            <p className={styledHome.link}>Library</p>
            <IoLibraryOutline
              className={`${styledHome.routeIcon} routeIconBackground`}
            />
          </li>
          <li
            className={`${styledHome.listItem} route`}
            onClick={() => navigate("challenge")}
          >
            <p className={styledHome.link}>Challenge</p>
            <SlBookOpen
              className={`${styledHome.routeIcon} routeIconBackground`}
            />
          </li>
        </ul>
      </nav>
    </main>
  );
};

export default HomePage;
