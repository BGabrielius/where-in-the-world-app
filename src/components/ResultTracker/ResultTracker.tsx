import React, { useState, useEffect } from "react";
import { motion, MotionProps, AnimatePresence } from "framer-motion";

import { MdOutlinePending } from "react-icons/md";
import { GiCheckMark } from "react-icons/gi";
import { GiCrossMark } from "react-icons/gi";

import styledTracker from "./ResultTracker.module.css";

interface Props {
  difficulty: unknown;
  questionIndex: number;
  questionStage: number;
  isCorrect?: boolean | null;
  cacheResults: (easy: any, medium?: any, difficult?: any) => void;
}

const ResultTracker: React.FC<Props> = ({
  difficulty,
  questionIndex,
  questionStage,
  isCorrect,
  cacheResults,
}) => {
  // state
  const [results, setResults] = useState<any>({
    easy: Array.from<unknown>({ length: 10 }).fill("pending"),
    medium: Array.from<unknown>({ length: 10 }).fill("pending"),
    difficult: Array.from<unknown>({ length: 10 }).fill("pending"),
    currentIndex: null,
    currentStage: null,
  });
  // motion
  const resultsAnimation: MotionProps["variants"] = {
    initial: {},
    animate: {
      y: [50, 0],
      x: [75, 0],
      scale: [2, 1],
      rotateX: [180, 0],
      rotateY: [360, 250, 180, 90, 0],
      rotate: [360, 180, 90, 0],
    },
    exit: { y: [50, 0], x: [50, 0] },
  };

  // side effects
  useEffect(() => {
    if (isCorrect === true || isCorrect === false) {
      updateResults(questionIndex, isCorrect, questionStage);
    }

    if (results.currentIndex === 9) {
      if (results.currentStage === 1 && difficulty === "easy") {
        cacheResults(results.easy);
      } else if (results.currentStage === 2 && difficulty === "medium") {
        cacheResults(results.easy, results.medium);
      } else if (results.currentStage === 3 && difficulty === "difficult") {
        cacheResults(results.easy, results.medium, results.difficult);
      }
    }
  }, [isCorrect, questionStage]);

  // functions
  const updateResults = (index: number, isCorrect: boolean, stage: number) => {
    let newResults: any = [];
    if (stage === 1) {
      newResults = [...results.easy];
      newResults[index] = isCorrect;
      setResults({
        ...results,
        easy: newResults,
        currentIndex: index,
        currentStage: stage,
      });
    } else if (stage === 2) {
      newResults = [...results.medium];
      newResults[index] = isCorrect;
      setResults({
        ...results,
        medium: newResults,
        currentIndex: index,
        currentStage: stage,
      });
    } else if (stage === 3) {
      newResults = [...results.difficult];
      newResults[index] = isCorrect;
      setResults({
        ...results,
        difficult: newResults,
        currentIndex: index,
        currentStage: stage,
      });
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        className={`${styledTracker.wrapper} element-full`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.3 }}
      >
        <motion.div
          className={`${styledTracker.numericContainer} element-border `}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3 }}
        >
          <span className="numeric-stage-filler"></span>
          <span>I</span>
          <span>II</span>
          <span>III</span>
          <span>IV</span>
          <span>V</span>
          <span>VI</span>
          <span>VII</span>
          <span>VIII</span>
          <span>IX</span>
          <span>X</span>
        </motion.div>
        <motion.div
          className={`${styledTracker.resultsContainer} element-border`}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3 }}
        >
          <span
            className={`${styledTracker.numericStageContainer} numeric-stage-filler`}
          >
            {difficulty === "easy" ? (
              <span>I</span>
            ) : difficulty === "medium" ? (
              <>
                <span>I</span>
                <span>II</span>
              </>
            ) : difficulty === "difficult" ? (
              <>
                <span>I</span>
                <span>II</span>
                <span>III</span>
              </>
            ) : (
              <></>
            )}
          </span>
          {/* quiz-easy */}
          {results.easy &&
            difficulty === "easy" &&
            results.easy.map((_item: unknown, index: number) => (
              <span
                key={index}
                className={`${styledTracker.iconContainer} ${styledTracker.iconTransform}`}
              >
                <motion.span
                  key={`icon-wrapper-${isCorrect}`}
                  variants={resultsAnimation}
                  initial="initial"
                  animate={
                    index === results.currentIndex && questionIndex === index
                      ? "animate"
                      : "initial"
                  }
                  exit="exit"
                  className={styledTracker.easy}
                >
                  {results.easy[index] === "pending" && <MdOutlinePending />}
                  {results.easy[index] === true && <GiCheckMark />}
                  {results.easy[index] === false && <GiCrossMark />}
                </motion.span>
              </span>
            ))}

          {/* quiz-medium */}
          {results.medium &&
            difficulty === "medium" &&
            results.medium.map((_item: unknown, index: number) => (
              <span
                key={`icon-wrapper-${index}-${isCorrect}`}
                className={styledTracker.iconContainer}
              >
                <span className={styledTracker.iconTransform}>
                  <motion.span
                    variants={resultsAnimation}
                    initial="initial"
                    animate={
                      index === results.currentIndex &&
                      questionIndex === index &&
                      results.currentStage === 1 &&
                      results.currentStage === questionStage
                        ? "animate"
                        : "initial"
                    }
                    exit="exit"
                    className={styledTracker.easy}
                  >
                    {results.easy[index] === "pending" ? (
                      <MdOutlinePending />
                    ) : results.easy[index] === true ? (
                      <GiCheckMark />
                    ) : results.easy[index] === false ? (
                      <GiCrossMark />
                    ) : (
                      <></>
                    )}
                  </motion.span>
                </span>
                <span className={styledTracker.iconTransform}>
                  <motion.span
                    variants={resultsAnimation}
                    initial="initial"
                    animate={
                      index === results.currentIndex &&
                      questionIndex === index &&
                      results.currentStage === 2 &&
                      results.currentStage === questionStage
                        ? "animate"
                        : "initial"
                    }
                    exit="exit"
                    className={styledTracker.medium}
                  >
                    {results.medium[index] === "pending" ? (
                      <MdOutlinePending />
                    ) : results.medium[index] === true ? (
                      <GiCheckMark />
                    ) : results.medium[index] === false ? (
                      <GiCrossMark />
                    ) : (
                      <></>
                    )}
                  </motion.span>
                </span>
              </span>
            ))}
          {/* quiz-difficult */}
          {results &&
            difficulty === "difficult" &&
            results.medium.map((_item: unknown, index: number) => (
              <span
                key={`icon-wrapper-${index}-${isCorrect}`}
                className={styledTracker.iconContainer}
              >
                <span className={styledTracker.iconTransform}>
                  <motion.span
                    variants={resultsAnimation}
                    initial="initial"
                    animate={
                      index === results.currentIndex &&
                      questionIndex === index &&
                      results.currentStage === 1 &&
                      results.currentStage === questionStage
                        ? "animate"
                        : "initial"
                    }
                    exit="exit"
                    className={styledTracker.easy}
                  >
                    {results.easy[index] === "pending" ? (
                      <MdOutlinePending />
                    ) : results.easy[index] === true ? (
                      <GiCheckMark />
                    ) : results.easy[index] === false ? (
                      <GiCrossMark />
                    ) : (
                      <></>
                    )}
                  </motion.span>
                </span>
                <span className={styledTracker.iconTransform}>
                  <motion.span
                    variants={resultsAnimation}
                    initial="initial"
                    animate={
                      index === results.currentIndex &&
                      questionIndex === index &&
                      results.currentStage === 2 &&
                      results.currentStage === questionStage
                        ? "animate"
                        : "initial"
                    }
                    exit="exit"
                    className={styledTracker.medium}
                  >
                    {results.medium[index] === "pending" ? (
                      <MdOutlinePending />
                    ) : results.medium[index] === true ? (
                      <GiCheckMark />
                    ) : results.medium[index] === false ? (
                      <GiCrossMark />
                    ) : (
                      <></>
                    )}
                  </motion.span>
                </span>
                <span className={styledTracker.iconTransform}>
                  <motion.span
                    variants={resultsAnimation}
                    initial="initial"
                    animate={
                      index === results.currentIndex &&
                      questionIndex === index &&
                      results.currentStage === 3 &&
                      results.currentStage === questionStage
                        ? "animate"
                        : "initial"
                    }
                    exit="exit"
                    className={styledTracker.difficult}
                  >
                    {results.difficult[index] === "pending" ? (
                      <MdOutlinePending />
                    ) : results.difficult[index] === true ? (
                      <GiCheckMark />
                    ) : results.difficult[index] === false ? (
                      <GiCrossMark />
                    ) : (
                      <></>
                    )}
                  </motion.span>
                </span>
              </span>
            ))}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ResultTracker;
