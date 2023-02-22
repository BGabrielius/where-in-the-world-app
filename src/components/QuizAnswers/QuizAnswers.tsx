import React, { useState } from "react";
import styledQuizAnswers from "./QuizAnswers.module.css";

import { DoubleArrowRightIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import ResultTracker from "../ResultTracker";

interface Props {
  correct: string | number;
  incorrect: any;
  updateStage: () => void;
  difficulty: unknown;
  questionIndex: number;
  questionStage: number;
}
interface Answer {
  value: any;
  isCorrect: boolean;
}

const QuizAnswers: React.FC<Props> = ({
  correct,
  incorrect,
  updateStage,
  difficulty,
  questionIndex,
  questionStage,
}) => {
  // state
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<Answer | null>(null);

  // side effects
  React.useEffect(() => {
    setAnswers(
      [
        ...incorrect.map((value: any) => ({ value, isCorrect: false })),
        { value: correct, isCorrect: true },
      ].sort(() => Math.random() - 0.5)
    );

    if (answers) {
      // console.log(answers, "yeet");
      // console.log(selectedAnswer, "selectedAnswer");
    }
    if (selectedAnswer) {
    }
  }, [correct, incorrect]);

  // functions
  const handleAnswers = (answer: Answer) => {
    setSelectedAnswer(answer);
    // updateCounter();
    // updateStage();
    // console.log(answer, "answer");
  };
  const handleForward = () => {
    setSelectedAnswer(null);
    updateStage();
  };
  console.log(selectedAnswer, "selectedAnswer");
  return (
    <>
      <div className={styledQuizAnswers.container}>
        <div className={styledQuizAnswers.btnContainer}>
          {answers.map((answer) => (
            <button
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
            >
              {answer.value}
            </button>
          ))}
        </div>
        {selectedAnswer && (
          <button
            onClick={handleForward}
            className={`${styledQuizAnswers.forwardBtn} levelBtn`}
          >
            <DoubleArrowRightIcon className={styledQuizAnswers.forwardIcon} />
          </button>
        )}
      </div>

      <ResultTracker
        difficulty={difficulty}
        questionIndex={questionIndex}
        questionStage={questionStage}
        isCorrect={selectedAnswer?.isCorrect}
      />
    </>
  );
};

export default QuizAnswers;
