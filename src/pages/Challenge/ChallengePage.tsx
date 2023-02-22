import React, { useState, useRef, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { ThemeContext } from "../../App";
import DropdownMenu from "../../components/DropdownMenu";
import DescriptionPopup from "../../components/DescriptionPopup";

import styledChallenge from "./ChallengePage.module.css";

const ChallengePage = () => {
  const theme = useContext(ThemeContext);
  // variables
  const description = {
    level1:
      "1. You will be presented with a flag and you'll have to type the name of the country that represents that flag.",
    level2:
      "1. You will be presented with a flag and you'll have to type the name of the country that represents that flag. 2. You will have to write down the capital city of that country.",
    level3:
      "1. You will be presented with a flag and you'll have to type the name of the country that represents that flag. 2. You will have to write down the capital city of that country. 3. You will have to write down the approximate population of that country.",
  };

  // navigate
  const navigate = useNavigate();
  // state
  const [selectedLevel, setSelectedLevel] = useState<string>("");
  const [selectedRegion, setSelectedRegion] = useState<string>("");

  const [togglePopup, setTogglePopup] = useState<boolean>(false);

  const [message, setMessage] = useState<string>("");
  // side effects
  useEffect(() => {
    if (selectedLevel) {
      setTogglePopup(true);
    }
  }, [selectedLevel]);

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
  // const selectLevel = (e: any) => {
  //   console.log(level1.current?.outerText);
  //   setSelectedLevel(e);
  // };

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
    <main className={styledChallenge.wrapper}>
      <div className={`${styledChallenge.container} startupContainer`}>
        <div className={styledChallenge.startupSettings}>
          <h2 className="universal-color-swap">
            Challenge your geographical skills!
          </h2>
          <div>
            <h3 className="universal-color-swap">Choose the difficulty: </h3>
            <ul className={styledChallenge.difficultyContainer}>
              <li
                onClick={() => setSelectedLevel("easy")}
                className={`${
                  selectedLevel === "easy" && styledChallenge.selectedLevel
                } levelBtn`}
                ref={level1Ref}
              >
                Easy
              </li>
              <li
                onClick={() => setSelectedLevel("medium")}
                className={`${
                  selectedLevel === "medium" && styledChallenge.selectedLevel
                } levelBtn`}
                ref={level2Ref}
              >
                Medium
              </li>
              <li
                onClick={() => setSelectedLevel("difficult")}
                className={`${
                  selectedLevel === "difficult" && styledChallenge.selectedLevel
                } levelBtn`}
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
                      ? description.level2
                      : selectedLevel === "difficult"
                      ? description.level3
                      : ""
                  }
                  refs={btnReference}
                  onClose={closePopup}
                  theme={theme}
                />
              )}
            </ul>
          </div>
          <div>
            <h3 className="universal-color-swap">Choose the region: </h3>
            <DropdownMenu
              isChallenge={true}
              filterName="Choose region:"
              handleFilter={handleRegion}
            />
          </div>
          <div>
            <h4
              onClick={() => startChallenge()}
              className={`${styledChallenge.startChallenge} universal-color-swap`}
            >
              Start the challenge!
            </h4>
          </div>
          {message && <p className={styledChallenge.message}>{message}</p>}
        </div>
      </div>
    </main>
  );
};

export default ChallengePage;
