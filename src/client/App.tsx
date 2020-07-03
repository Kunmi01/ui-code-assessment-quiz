import * as React from "react";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Questions from "./components/Questions";
import GlobalStyle from "./globalStyles";
import * as S from "./AppStyles";

export const App = () => (
  <S.AppContainer>
    <GlobalStyle />
    <Header />
    <Questions />
  </S.AppContainer>
);
