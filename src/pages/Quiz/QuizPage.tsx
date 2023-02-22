import axios from "axios";
import React, { useState, useEffect } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

import Challenges from "../../components/Challenges";
import QuizResults from "../../components/QuizResults";

import StyledQuiz from "./QuizPage.module.css";

const fetchCountries = async (host: string) => {
  const data = await axios.get(host);

  return data.data;
};

const QuizPage = () => {
  // variables

  // params
  const { level, region } = useParams();

  // state
  const [host, setHost] = useState<string>("");
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const [challengeData, setChallengeData] = useState<any>([]);
  const [counter, setCounter] = useState(0);
  const [endQuiz, setEndQuiz] = useState(false);
  // const [selectedLevel, setSelectedLevel] = useState<string>("");

  // query
  const { data, isLoading } = useQuery(
    ["Quiz", host],
    () => fetchCountries(host),
    {
      staleTime: 300,
      retry: 1,
    }
  );
  // side effects
  useEffect(() => {
    // setSelectedLevel(level);
    if (region === "All") {
      setHost("https://restcountries.com/v3.1/all");
    } else if (region !== "All") {
      setHost(`https://restcountries.com/v3.1/region/${region}`);
    }
    if (data && !isMounted) {
      setChallengeData(challengeArray(data));
      setIsMounted(true);
    }
    if (challengeData) {
    }
    if (counter === 10) setEndQuiz(true);
  }, [region, data, challengeData, isMounted, counter]);

  // functions
  const challengeArray = (arr: []) => {
    return arr.sort(() => 0.5 - Math.random()).slice(0, 10);
  };

  const updateCounter = () => {
    setCounter((prev) => prev + 1);
  };
  return (
    <main className={`${StyledQuiz.wrapper}`}>
      {!isLoading && (
        <div className={`${StyledQuiz.container}`}>
          {challengeData && !endQuiz && (
            <Challenges
              level={level}
              challengeArr={challengeData}
              wrongArr={data}
              counter={counter}
              updateCounter={updateCounter}
            />
          )}
          {endQuiz && <QuizResults />}
        </div>
      )}
    </main>
  );
};

export default QuizPage;
