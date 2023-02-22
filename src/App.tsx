import React, { Suspense, useState } from "react";
import { Routes, Route } from "react-router-dom";

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

// export const ThemeContext = createContext<unknown>(null);

const App: React.FC = () => {
  // State
  const [theme, setTheme] = useState<ThemeContextType>("light");

  // Functions
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={theme}>
      <div className="App" id={theme}>
        <Header mode={theme} onToggle={toggleTheme} />
        <Suspense fallback={<div>Loading...</div>}>
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
