import { useState, useRef, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

import { ThemeContext } from "../../App";
import DropdownMenu from "../../components/DropdownMenu";
import DescriptionPopup from "../../components/DescriptionPopup";

import styledChallenge from "./ChallengePage.module.css";

const ChallengePage = () => {
  // context
  const theme = useContext(ThemeContext);
  // variables
  const description = {
    level1:
      "1. You will be presented with a flag and you'll have to select the name of the country that represents that flag.",
    level2: "2. You will have to select the capital city of that country.",
    level3:
      "3. You will have to select the approximate population of that country.",
  };

  // navigate
  const navigate = useNavigate();
  // state
  const [selectedLevel, setSelectedLevel] = useState<string>("");
  const [selectedRegion, setSelectedRegion] = useState<string>("");
  const [openedDropdownStyle, setOpenedDropdownStyle] = useState(false);

  const [togglePopup, setTogglePopup] = useState<boolean>(false);

  const [message, setMessage] = useState<string>("");

  // refs
  const level1Ref = useRef<HTMLLIElement>(null);
  const level2Ref = useRef<HTMLLIElement>(null);
  const level3Ref = useRef<HTMLLIElement>(null);

  const btnReference = {
    level1: level1Ref.current,
    level2: level2Ref.current,
    level3: level3Ref.current,
  };
  // functions
  const isDropdownActive = () => {
    setOpenedDropdownStyle(!openedDropdownStyle);
  };
  const handleButtonClick = (level: string) => {
    if (selectedLevel === level) {
      setTogglePopup((prev) => !prev);
    } else {
      setSelectedLevel(level);
      setTogglePopup(true);
    }
  };

  const closePopup = () => {
    setTogglePopup(false ? true : false);
  };

  const handleRegion = (e: any) => {
    setSelectedRegion(e);
  };
  const startChallenge = () => {
    if (!selectedLevel && !selectedRegion) {
      setMessage(
        "Please choose the difficulty and the region to start the challenge!"
      );
    } else if (!selectedLevel) {
      setMessage("Please select the difficulty to start the challenge!");
    } else if (!selectedRegion) {
      setMessage("Please select the region to start the challenge!");
    } else {
      setMessage("");
    }
    if (selectedLevel && selectedRegion) {
      navigate(`/challenge/${selectedLevel}/${selectedRegion}`);
    }
  };
  return (
    <AnimatePresence>
      <motion.main
        className={styledChallenge.wrapper}
        animate={{ height: "auto" }}
      >
        <div className={`${styledChallenge.container} element-full`}>
          <div className={styledChallenge.startupSettings}>
            <h2>Challenge your geographical skills!</h2>
            <div>
              <h3>Choose the difficulty: </h3>
              <ul className={styledChallenge.difficultyContainer}>
                <li
                  onClick={() => handleButtonClick("easy")}
                  className={`${
                    selectedLevel === "easy" && styledChallenge.selectedLevel
                  } element-full`}
                  ref={level1Ref}
                >
                  Easy
                </li>
                <li
                  onClick={() => handleButtonClick("medium")}
                  className={`${
                    selectedLevel === "medium" && styledChallenge.selectedLevel
                  } element-full`}
                  ref={level2Ref}
                >
                  Medium
                </li>
                <li
                  onClick={() => handleButtonClick("difficult")}
                  className={`${
                    selectedLevel === "difficult" &&
                    styledChallenge.selectedLevel
                  } element-full`}
                  ref={level3Ref}
                >
                  Difficult
                </li>
                {togglePopup && (
                  <DescriptionPopup
                    description={
                      selectedLevel === "easy"
                        ? description.level1
                        : selectedLevel === "medium"
                        ? `${description.level1} ${description.level2}`
                        : selectedLevel === "difficult"
                        ? `${description.level1} ${description.level2} ${description.level3}`
                        : ""
                    }
                    refs={btnReference}
                    onClose={closePopup}
                    theme={theme}
                  />
                )}
              </ul>
            </div>
            <motion.div
              style={{ minHeight: openedDropdownStyle ? "300px" : "0px" }}
            >
              <h3>Choose the region: </h3>
              <DropdownMenu
                isChallenge={true}
                filterName="Choose region:"
                handleFilter={handleRegion}
                isOpen={isDropdownActive}
              />
            </motion.div>
            <div>
              <h4
                onClick={() => startChallenge()}
                className={styledChallenge.startChallenge}
              >
                Start the challenge!
              </h4>
            </div>
            {message && (
              <motion.p
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className={styledChallenge.message}
              >
                {message}
              </motion.p>
            )}
          </div>
        </div>
      </motion.main>
    </AnimatePresence>
  );
};

export default ChallengePage;
