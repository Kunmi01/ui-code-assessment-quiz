import React, { useEffect } from "react";
import * as S from "./styles";

const QUESTIONS_API_URL = "http://localhost:4000/api/questions";

const Questions = () => {
  const getQuestionsData = async () => {
    try {
      const data = await (await fetch(QUESTIONS_API_URL)).json();
      return data;
    } catch (err) {
      console.log(err.message);
      return null;
    }
  };

  const initializeQuiz = async () => {
    const questionsData = await getQuestionsData();
    console.log("questionsData", questionsData);
  };

  useEffect(() => {
    initializeQuiz();
  });

  return (
    <S.Container>
      <p>Test</p>
      <S.NextButton type="submit">Next</S.NextButton>
    </S.Container>
  );
};

export default Questions;
