import React, { useState, useEffect } from "react";
import QuizAnswers from "../QuizAnswers";

import styledChallenges from "./Challenges.module.css";
interface Props {
  challengeArr: any;
  wrongArr: any;
  updateCounter: () => void;
  counter: number;
  level: unknown;
}

const Challenges: React.FC<Props> = ({
  challengeArr,
  wrongArr,
  counter,
  updateCounter,
  level,
}) => {
  // state
  const [isMounted, setIsMounted] = useState(false);
  const [data, setData] = useState<any>(null);
  const [incorrectAnswers, setIncorrectAnswers] = useState<any>({
    easy: [],
    medium: [],
    difficult: [],
  });
  const [correctAnswer, setCorrectAnswer] = useState({
    easy: "",
    medium: "",
    difficult: "",
  });
  const [currentStage, setCurrentStage] = useState<number>(1);
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

      // console.log(data[0]?.flags.png, "dataaa");
      // console.log(incorrectAnswers, "incorrect");
      // console.log(correctAnswer, "correct");
    }
    if (correctAnswer.easy) {
      setIncorrectAnswers({
        easy: handleIncorrectAnswers(wrongArr, "easy"),
        medium: handleIncorrectAnswers(wrongArr, "medium"),
        difficult: handleIncorrectAnswers(wrongArr, "difficult"),
      });
      setIsMounted(true);
    }
  }, [challengeArr, data, counter, wrongArr, correctAnswer.easy]);

  // functions
  const handleIncorrectAnswers = (arr: any, difficulty: string) => {
    let prefixArr: any = [];
    console.log(correctAnswer, "correctAnswer");

    arr.forEach((item: any) => {
      if (item.name.common !== correctAnswer.easy) {
        if (item.capital && item.population) {
          if (difficulty === "easy") {
            prefixArr.push(item.name.common);
          } else if (difficulty === "medium") {
            prefixArr.push(item.capital[0]);
          } else if (difficulty === "difficult") {
            prefixArr.push(item.population);
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
    console.log(prefixArr, "hahahah");
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

  return (
    <div className={styledChallenges.wrapper}>
      <div className={styledChallenges.container}>
        {data && (
          <>
            <div className={`${styledChallenges.imgContainer} img-container`}>
              <img src={data[counter]?.flags.png} alt="" />
            </div>
            {currentStage === 1 && (
              <>
                <h3 className={styledChallenges.challengeHeadline}>
                  Select the name of the country that represents this flag
                </h3>
                {correctAnswer && incorrectAnswers && (
                  <QuizAnswers
                    correct={correctAnswer.easy}
                    incorrect={incorrectAnswers.easy}
                    updateStage={updateStage}
                    difficulty={level}
                    questionIndex={counter}
                    questionStage={currentStage}
                  />
                )}
              </>
            )}
            {level !== "easy" && currentStage === 2 && (
              <>
                <h3 className={styledChallenges.challengeHeadline}>
                  Select the capital city of this country
                </h3>
                {correctAnswer && incorrectAnswers && (
                  <QuizAnswers
                    correct={correctAnswer.medium}
                    incorrect={incorrectAnswers.medium}
                    updateStage={updateStage}
                    difficulty={level}
                    questionIndex={counter}
                    questionStage={currentStage}
                  />
                )}
              </>
            )}
            {level === "difficult" && currentStage === 3 && (
              <>
                <h3 className={styledChallenges.challengeHeadline}>
                  Select the approximate population of this country
                </h3>
                {correctAnswer && incorrectAnswers && (
                  <QuizAnswers
                    correct={correctAnswer.difficult}
                    incorrect={incorrectAnswers.difficult}
                    updateStage={updateStage}
                    difficulty={level}
                    questionIndex={counter}
                    questionStage={currentStage}
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
