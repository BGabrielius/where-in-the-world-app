import React, { useState, useEffect } from "react";

import { MdPending } from "react-icons/md";
import { BsCheckCircleFill } from "react-icons/bs";
import { HiXMark } from "react-icons/hi2";

import styledTracker from "./ResultTracker.module.css";

interface Props {
  difficulty: unknown;
  questionIndex: number;
  questionStage: number;
  isCorrect?: boolean;
}

const ResultTracker: React.FC<Props> = ({
  difficulty,
  questionIndex,
  questionStage,
  isCorrect,
}) => {
  // state
  const [results, setResults] = useState<unknown[]>(
    Array.from<unknown>({ length: 10 }).fill("pending")
  );

  // side effects
  useEffect(() => {
    if (isCorrect === true || isCorrect === false) {
      updateResults(questionIndex, isCorrect);
    }
  }, [isCorrect]);

  // functions
  const updateResults = (index: number, isCorrect: boolean) => {
    const newResults = [...results];
    newResults[index] = isCorrect;
    console.log(newResults[index], "yeet");
    setResults(newResults);
  };
  return (
    <div>
      <div>
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
      </div>
      <div>
        {results &&
          results.map((_item, index) => (
            <span>
              {difficulty === "easy" ? (
                <span>
                  {results[index] === "pending" ? (
                    <MdPending />
                  ) : results[index] === true ? (
                    <BsCheckCircleFill />
                  ) : !results[index] ? (
                    <HiXMark />
                  ) : (
                    <></>
                  )}
                </span>
              ) : difficulty === "medium" ? (
                <>
                  <span>{questionIndex === index && questionStage === 1}</span>
                  <span></span>
                </>
              ) : difficulty === "difficult" ? (
                <>
                  <span></span>
                  <span></span>
                  <span></span>
                </>
              ) : (
                <span>
                  <p>Error...</p>
                </span>
              )}
            </span>
          ))}
      </div>
    </div>
  );
};

export default ResultTracker;
