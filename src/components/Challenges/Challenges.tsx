import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import QuizAnswers from "../QuizAnswers";
import ResultTracker from "../ResultTracker";

import styledChallenges from "./Challenges.module.css";
interface Props {
  challengeArr: any;
  wrongArr: any;
  updateCounter: () => void;
  counter: number;
  level: unknown;
  cacheResults: (easy: any, medium?: any, difficult?: any) => void;
}

const Challenges: React.FC<Props> = ({
  challengeArr,
  wrongArr,
  counter,
  updateCounter,
  level,
  cacheResults,
}) => {
  // state
  const [data, setData] = useState<any>(null);
  const [incorrectAnswers, setIncorrectAnswers] = useState<any>({
    easy: [],
    medium: [],
    difficult: [],
  });
  const [correctAnswer, setCorrectAnswer] = useState<any>({
    easy: "",
    medium: "",
    difficult: 0,
  });
  const [currentStage, setCurrentStage] = useState<number>(1);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  // refs
  let svgUrl = useRef<string>("");

  // motion
  const motionH3 = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
    },
  };

  // side effect
  useEffect(() => {
    if (challengeArr) {
      setData(challengeArr);
    }
    if (data) {
      setCorrectAnswer({
        easy: data[counter]?.name.common,
        medium: data[counter]?.capital[0],
        difficult: data[counter]?.population,
      });
    }
    if (correctAnswer.easy) {
      setIncorrectAnswers({
        easy: handleIncorrectAnswers(wrongArr, "easy"),
        medium: handleIncorrectAnswers(wrongArr, "medium"),
        difficult: handleIncorrectAnswers(wrongArr, "difficult"),
      });
    }

    // svg aspect ratio
    if (data) {
      if (svgUrl.current === data[counter]?.flags.svg) return;
      svgUrl.current = data ? data[counter]?.flags.svg : "";
      const img = new Image();

      img.onload = () => {
        const aspectRatio = img.width / img.height;
        document.documentElement.style.setProperty(
          "--aspect-ratio",
          `${aspectRatio}`
        );
      };

      img.src = svgUrl.current;
    }
  }, [challengeArr, data, counter, wrongArr, correctAnswer.easy]);

  // functions
  const handleIncorrectAnswers = (arr: any, difficulty: string) => {
    let prefixArr: any = [];

    arr.forEach((item: any) => {
      if (item.name.common !== correctAnswer.easy) {
        if (item.capital && item.population) {
          if (difficulty === "easy") {
            prefixArr.push(item.name.common);
          } else if (difficulty === "medium") {
            prefixArr.push(item.capital[0]);
          } else if (difficulty === "difficult") {
            prefixArr.push(new Intl.NumberFormat().format(item.population));
          }
        }
      }
    });

    const incorrectAnswers: any = [];
    while (incorrectAnswers.length < 3) {
      const randomIndex = Math.floor(Math.random() * prefixArr.length);
      if (!incorrectAnswers.includes(prefixArr[randomIndex])) {
        incorrectAnswers.push(prefixArr[randomIndex]);
      }
    }
    return incorrectAnswers;
  };
  const updateStage = () => {
    if (currentStage === 1) {
      if (level === "easy") {
        updateCounter();
      } else if (level === "medium" || level === "difficult") {
        setCurrentStage(2);
      }
    }
    if (currentStage === 2) {
      if (level === "medium") {
        updateCounter();
        setCurrentStage(1);
      } else if (level === "difficult") {
        setCurrentStage(3);
      }
    }
    if (currentStage === 3) {
      updateCounter();
      setCurrentStage(1);
    }
  };

  const handleResultValidation = (isCorrect: boolean | null) => {
    setIsCorrect(isCorrect);
  };

  return (
    <div className={styledChallenges.wrapper}>
      <div className={styledChallenges.container}>
        {data && (
          <>
            <div className={styledChallenges.resultimgWrapper}>
              <div className={styledChallenges.resultTrackerWrapper}>
                <ResultTracker
                  difficulty={level}
                  questionIndex={counter}
                  questionStage={currentStage}
                  isCorrect={isCorrect}
                  cacheResults={cacheResults}
                />
              </div>
              <div className={styledChallenges.imgWrapper}>
                <motion.div
                  className={`${styledChallenges.imgContainer} img-container`}
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  transition={{ delay: 0.1 }}
                  key={counter}
                >
                  <img
                    src={data[counter]?.flags.svg}
                    key={data[counter]?.flags.svg}
                    alt=""
                    className="quiz-img"
                  />
                </motion.div>
              </div>
            </div>

            {currentStage === 1 && (
              <>
                <motion.h3
                  className={styledChallenges.challengeHeadline}
                  variants={motionH3}
                  initial="initial"
                  animate="animate"
                >
                  Select the name of the country that represents this flag
                </motion.h3>
                {correctAnswer && incorrectAnswers && (
                  <QuizAnswers
                    correct={correctAnswer.easy}
                    incorrect={incorrectAnswers.easy}
                    updateStage={updateStage}
                    handleResults={handleResultValidation}
                  />
                )}
              </>
            )}
            {level !== "easy" && currentStage === 2 && (
              <>
                <motion.h3
                  className={styledChallenges.challengeHeadline}
                  variants={motionH3}
                  initial="initial"
                  animate="animate"
                >
                  Select the capital city of this country
                </motion.h3>
                {correctAnswer && incorrectAnswers && (
                  <QuizAnswers
                    correct={correctAnswer.medium}
                    incorrect={incorrectAnswers.medium}
                    updateStage={updateStage}
                    handleResults={handleResultValidation}
                  />
                )}
              </>
            )}
            {level === "difficult" && currentStage === 3 && (
              <>
                <motion.h3
                  className={styledChallenges.challengeHeadline}
                  variants={motionH3}
                  initial="initial"
                  animate="animate"
                >
                  Select the approximate population of this country
                </motion.h3>
                {correctAnswer && incorrectAnswers && (
                  <QuizAnswers
                    correct={new Intl.NumberFormat().format(
                      correctAnswer.difficult
                    )}
                    incorrect={incorrectAnswers.difficult}
                    updateStage={updateStage}
                    handleResults={handleResultValidation}
                  />
                )}
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Challenges;
