import React, { useState } from "react";
import { motion } from "framer-motion";
import styledQuizAnswers from "./QuizAnswers.module.css";

import { DoubleArrowRightIcon } from "@radix-ui/react-icons";

interface Props {
  correct: string | number;
  incorrect: any;
  updateStage: () => void;
  handleResults: (isCorrect: boolean | null) => void;
}
interface Answer {
  value: any;
  isCorrect: boolean;
}

const QuizAnswers: React.FC<Props> = ({
  correct,
  incorrect,
  updateStage,
  handleResults,
}) => {
  // state
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<Answer | null>(null);

  // side effects
  React.useEffect(() => {
    if (correct) {
      setAnswers(
        [
          ...incorrect.map((value: any) => ({ value, isCorrect: false })),
          { value: correct, isCorrect: true },
        ].sort(() => Math.random() - 0.5)
      );
    }
  }, [correct, incorrect]);

  // functions
  const handleAnswers = (answer: Answer) => {
    handleResults(answer.isCorrect);
    setSelectedAnswer(answer);
  };
  const handleForward = () => {
    handleResults(null);
    setSelectedAnswer(null);
    updateStage();
  };
  return (
    <>
      <div className={styledQuizAnswers.container}>
        <div className={styledQuizAnswers.btnContainer}>
          {answers.map((answer) => (
            <motion.button
              key={answer.value + answer.isCorrect}
              onClick={() => handleAnswers(answer)}
              className={`${styledQuizAnswers.quizBtn} quiz-btn ${
                selectedAnswer ? "disabled" : ""
              }
            ${
              selectedAnswer &&
              answer.isCorrect &&
              styledQuizAnswers.selectedCorrect
            }
            ${
              !selectedAnswer?.isCorrect &&
              answer === selectedAnswer &&
              styledQuizAnswers.selectedIncorrect
            }
            `}
              disabled={selectedAnswer ? true : false}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {answer.value}
            </motion.button>
          ))}
        </div>

        <div className={styledQuizAnswers.forwardBtnContainer}>
          {selectedAnswer && (
            <motion.button
              animate={{ scale: [0, 1.5, 1.5, 1] }}
              transition={{ type: "tween", duration: 0.5 }}
              initial={{ scale: 0 }}
              onClick={handleForward}
              className={`${styledQuizAnswers.forwardBtn} element-full`}
            >
              <DoubleArrowRightIcon className={styledQuizAnswers.forwardIcon} />
            </motion.button>
          )}
        </div>
      </div>
    </>
  );
};

export default QuizAnswers;
