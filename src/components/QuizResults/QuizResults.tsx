import React, { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

import { GiCheckMark } from "react-icons/gi";
import { GiCrossMark } from "react-icons/gi";
import { motion, AnimatePresence } from "framer-motion";

import styledResults from "./QuizResults.module.css";
import Button from "../Button";

interface Props {
  correctData: any;
  selectedAnswers: {
    easy: [] | null;
    medium?: [] | null;
    difficult?: [] | null;
  };
}
interface Answer {
  value: any;
  isCorrect: boolean;
}

const QuizResults: React.FC<Props> = ({ correctData, selectedAnswers }) => {
  // state
  const [isMounted, setIsMounted] = useState(false);
  const [validatedAnswers, setValidatedAnswers] = useState<any>({
    flags: [] as String[],
    easy: [] as Answer[],
    medium: [] as Answer[],
    difficult: [] as Answer[],
  });

  const [scoredPoints, setScoredPoints] = useState({
    totalPoints: null as Number | null,
    pointsPerCountry: [] as String[],
  });
  // motion
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -100 },
    visible: { opacity: 1, y: 0 },
  };

  // naviage
  const navigate = useNavigate();

  // side effects
  useEffect(() => {
    if (correctData && selectedAnswers && !isMounted) {
      validateSelectedAnswers();
      setIsMounted(true);
    }
  }, [correctData, selectedAnswers, isMounted]);

  // functions
  const formatPopulation = (population: number) => {
    return population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const handleReload = () => {
    const { pathname, search } = window.location;
    const currentUrl = `${pathname}${search}`;

    window.history.pushState(null, "", currentUrl);
    window.location.replace(currentUrl);
  };

  const validateSelectedAnswers = () => {
    let flags = [] as String[];
    let validatedEasy = [] as Answer[];
    let validatedMedium = [] as Answer[];
    let validatedDifficult = [] as Answer[];

    let tempTotalPoints = 0;
    let tempPointsPerCountry = [] as String[];
    let questionsPerCountry = null as Number | null;

    if (!questionsPerCountry) {
      if (selectedAnswers.difficult) questionsPerCountry = 3;
      else if (selectedAnswers.medium) questionsPerCountry = 2;
      else questionsPerCountry = 1;
    }

    if (selectedAnswers.easy && correctData) {
      for (let i = 0; i < selectedAnswers.easy?.length; i++) {
        if (selectedAnswers.easy) {
          validatedEasy.push({
            value: correctData[i]?.name.common,
            isCorrect: selectedAnswers.easy[i],
          });
          flags.push(correctData[i].flags.png);
        }

        if (selectedAnswers.medium) {
          validatedMedium.push({
            value: correctData[i]?.capital[0],
            isCorrect: selectedAnswers.medium[i],
          });
        }
        if (selectedAnswers.difficult) {
          validatedDifficult.push({
            value: correctData[i]?.population,
            isCorrect: selectedAnswers.difficult[i],
          });
        }
        if (validatedEasy) {
          let points = calculateScore(
            validatedEasy[i].isCorrect,
            validatedMedium[i]?.isCorrect,
            validatedDifficult[i]?.isCorrect
          );

          tempTotalPoints += points;
          tempPointsPerCountry[i] = `${points} / ${questionsPerCountry}`;
        }
      }
    }
    if (validatedEasy) {
      setValidatedAnswers({
        flags: flags,
        easy: validatedEasy,
        medium: validatedMedium,
        difficult: validatedDifficult,
      });
      setScoredPoints({
        totalPoints: tempTotalPoints,
        pointsPerCountry: tempPointsPerCountry,
      });
    }
  };
  const calculateScore = (
    name: boolean,
    capital?: boolean,
    population?: boolean
  ) => {
    let pointsPerCountry = 0;

    if (name === true) ++pointsPerCountry;
    if (capital === true) ++pointsPerCountry;
    if (population === true) ++pointsPerCountry;

    return pointsPerCountry;
  };
  return (
    <>
      <motion.div
        className={styledResults.noteContainer}
        initial={{ y: -100, scale: 0 }}
        animate={{ y: 0, scale: 1 }}
        transition={{ delay: 1.35 }}
      >
        <p className={styledResults.noteItem}>
          Note: only the correct answers are shown in the results tab and the
          icon indicates whether you got it right or wrong
        </p>
      </motion.div>
      <div className={`${styledResults.wrapper} element-full`}>
        <div className={`${styledResults.container} element-border`}>
          <div className={styledResults.resultsWrapper}>
            <AnimatePresence>
              <motion.div
                className={`${styledResults.resultsContainer} results-item-container`}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <div className={styledResults.itemFlag}>
                  <p className={styledResults.resultsItemHead}>Flag</p>
                </div>
                <div className={styledResults.itemName}>
                  <p className={styledResults.resultsItemHead}>Name</p>
                </div>
                {selectedAnswers.medium && validatedAnswers.medium && (
                  <div className={styledResults.itemCapital}>
                    <p className={styledResults.resultsItemHead}>Capital</p>
                  </div>
                )}
                {selectedAnswers.difficult && validatedAnswers.difficult && (
                  <div className={styledResults.itemPopulation}>
                    <p className={styledResults.resultsItemHead}>Population</p>
                  </div>
                )}
              </motion.div>
              {validatedAnswers.easy[0] &&
                Array.from<null>({ length: 10 })
                  .fill(null)
                  .map((_item: null, index: number) => (
                    <motion.div
                      variants={containerVariants}
                      initial="hidden"
                      animate="visible"
                      className={`${styledResults.resultsContainer} results-item-container`}
                      key={index}
                    >
                      <motion.div
                        className={` ${styledResults.itemFlag}`}
                        variants={itemVariants}
                        transition={{ delay: index * 0.1 }}
                      >
                        <img
                          src={validatedAnswers.flags[index]}
                          alt=""
                          className="element-border"
                        />
                      </motion.div>
                      <motion.div
                        className={` ${styledResults.itemName}`}
                        variants={itemVariants}
                        transition={{ delay: index * 0.125 }}
                      >
                        <p className={`${styledResults.resultsItem} `}>
                          {validatedAnswers.easy[index].value}
                        </p>
                        <span className={styledResults.icon}>
                          {validatedAnswers.easy[index].isCorrect ? (
                            <GiCheckMark color="green" />
                          ) : (
                            <GiCrossMark color="red" />
                          )}
                        </span>
                      </motion.div>
                      {selectedAnswers.medium && validatedAnswers.medium && (
                        <motion.div
                          className={` ${styledResults.itemCapital}`}
                          variants={itemVariants}
                          transition={{ delay: index * 0.15 }}
                        >
                          <p className={`${styledResults.resultsItem} `}>
                            {validatedAnswers.medium[index].value}
                          </p>
                          <span className={styledResults.icon}>
                            {validatedAnswers.medium[index].isCorrect ? (
                              <GiCheckMark color="green" />
                            ) : (
                              <GiCrossMark color="red" />
                            )}
                          </span>
                        </motion.div>
                      )}
                      {selectedAnswers.difficult &&
                        validatedAnswers.difficult && (
                          <motion.div
                            className={` ${styledResults.itemPopulation}`}
                            variants={itemVariants}
                            transition={{ delay: index * 0.175 }}
                          >
                            <p className={`${styledResults.resultsItem} `}>
                              {formatPopulation(
                                validatedAnswers.difficult[index].value
                              )}
                            </p>
                            <span className={styledResults.icon}>
                              {validatedAnswers.difficult[index].isCorrect ? (
                                <GiCheckMark color="green" />
                              ) : (
                                <GiCrossMark color="red" />
                              )}
                            </span>
                          </motion.div>
                        )}
                      <motion.span
                        className={styledResults.itemPoints}
                        variants={itemVariants}
                        transition={{ delay: index * 0.2 }}
                      >
                        <p>{scoredPoints.pointsPerCountry[index]}</p>
                      </motion.span>
                    </motion.div>
                  ))}
            </AnimatePresence>
          </div>
        </div>

        {scoredPoints.pointsPerCountry[0] && (
          <motion.div
            className={styledResults.youScoredContainer}
            variants={containerVariants}
            initial={{ y: -100, scale: 0 }}
            animate={{ y: 0, scale: 1 }}
            transition={{ delay: 1.25 }}
          >
            <motion.p className={styledResults.youScored}>
              You scored:
              {` ${scoredPoints.totalPoints} / ${
                parseInt(scoredPoints.pointsPerCountry[0].charAt(4)) * 10
              }`}
            </motion.p>
          </motion.div>
        )}
        <div className={styledResults.btnContainer}>
          <Button text="Back" action={() => navigate("/challenge")} />
          <Button text="Retry" action={handleReload} />
        </div>
      </div>
    </>
  );
};

export default QuizResults;
