import React from "react";
import "./App.css";
import Main from "./components/Main/Main";
import Question from "./components/Question/Question";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div id="app">
      <Main />
      <Question />
    </div>
  );
};

export default App;
