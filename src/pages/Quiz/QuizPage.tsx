import axios from "axios";
import { useState, useEffect } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

import Challenges from "../../components/Challenges";
import QuizResults from "../../components/QuizResults";

import StyledQuiz from "./QuizPage.module.css";

const fetchCountries = async (host: string) => {
  const data = await axios.get(host);

  const filteredArr = data.data.filter((item: any) => {
    return item.capital && item.population;
  });

  return filteredArr;
};

const QuizPage = () => {
  // params
  const { level, region } = useParams();

  // state
  const [host, setHost] = useState<string>("");
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const [challengeData, setChallengeData] = useState<any>([]);
  const [counter, setCounter] = useState<number>(0);
  const [endQuiz, setEndQuiz] = useState<boolean>(false);
  const [cachedResults, setCachedResults] = useState({
    easy: null,
    medium: null,
    difficult: null,
  });

  // query
  const { data, isLoading } = useQuery(
    ["Quiz", host],
    () => fetchCountries(host),
    {
      enabled: host !== "",
      staleTime: 300,
      retry: 1,
    }
  );
  // side effects
  useEffect(() => {
    if (region === "All") {
      setHost("https://restcountries.com/v3.1/all");
    } else if (region !== "All") {
      setHost(`https://restcountries.com/v3.1/region/${region}`);
    }
    if (data && !isMounted) {
      setChallengeData(challengeArray(data));
      setIsMounted(true);
    }
    if (counter === 10) setEndQuiz(true);
  }, [region, data, challengeData, isMounted, counter, cachedResults]);

  // functions
  const challengeArray = (arr: []) => {
    return arr.sort(() => 0.5 - Math.random()).slice(0, 10);
  };

  const updateCounter = () => {
    setCounter((prev) => prev + 1);
  };
  const cacheResults = (easy: any, medium?: any, difficult?: any) => {
    if (level === "easy") setCachedResults({ ...cachedResults, easy: easy });
    if (level === "medium")
      setCachedResults({ ...cachedResults, easy: easy, medium: medium });
    if (level === "difficult")
      setCachedResults({ easy: easy, medium: medium, difficult: difficult });
  };
  return (
    <main className={StyledQuiz.wrapper}>
      {!isLoading && (
        <div className={StyledQuiz.container}>
          {challengeData && !endQuiz && (
            <Challenges
              level={level}
              challengeArr={challengeData}
              wrongArr={data}
              counter={counter}
              updateCounter={updateCounter}
              cacheResults={cacheResults}
            />
          )}
          {endQuiz && cachedResults.easy && (
            <QuizResults
              correctData={challengeData}
              selectedAnswers={cachedResults}
            />
          )}
        </div>
      )}
    </main>
  );
};

export default QuizPage;
