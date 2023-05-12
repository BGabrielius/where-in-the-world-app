import React, { Suspense, useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import { Routes, Route, useLocation } from "react-router-dom";

import { createContext } from "react";

import "./App.css";
import "./utilities/resets.css";
import "./utilities/variables.css";
import Header from "./components/Header";

type ThemeContextType = "light" | "dark";

export const ThemeContext = createContext<ThemeContextType>("light");

// Pages
const HomePage = React.lazy(() => import("./pages/Home"));
const LibraryPage = React.lazy(() => import("./pages/Library"));
const LibraryItemPage = React.lazy(() => import("./pages/LibraryItem"));
const ChallengePage = React.lazy(() => import("./pages/Challenge"));
const QuizPage = React.lazy(() => import("./pages/Quiz"));

const App: React.FC = () => {
  // State
  const [cookies, setCookie] = useCookies(["theme"]);
  const [theme, setTheme] = useState<ThemeContextType>(cookies.theme || "dark");

  // location
  const location = useLocation();

  // side effects
  useEffect(() => {
    const isHomePage = location.pathname === "/";
    if (isHomePage) {
      setTheme("dark");
      setCookie("theme", "dark");
    } else {
      const savedTheme = cookies.theme;
      setTheme(savedTheme || "dark");
    }
  }, [cookies, window.location.pathname, theme]);

  // Functions
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    setCookie("theme", newTheme);
  };

  return (
    <ThemeContext.Provider value={theme}>
      <div className="App" id={theme}>
        <Header mode={theme} onToggle={toggleTheme} />
        <Suspense fallback={<main></main>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/library" element={<LibraryPage />} />
            <Route path="/library/:id" element={<LibraryItemPage />} />
            <Route path="/challenge" element={<ChallengePage />} />
            <Route path="/challenge/:level/:region" element={<QuizPage />} />
          </Routes>
        </Suspense>
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
