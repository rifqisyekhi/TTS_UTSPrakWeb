import React from "react";
import Grid from "./Grid";
import Question from "./Question";
import "./style.css";
import Title from "./Title";

const Crossword = () => {
  const answerGrid = [
    [" ", " ", " ", " ", " ", "S", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", "W", " ", " ", " ", "C", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", "I", " ", " ", "T", "A", "Y", "L", "O", "R", "S", "W", "I", "F", "T"],
    [" ", " ", " ", " ", " ", "F", " ", " ", " ", "N", " ", " ", " ", " ", " ", " ", " ", " ", "A"],
    [" ", " ", " ", " ", " ", "T", " ", " ", " ", "B", "A", "N", "D", "U", "N", "G", " ", " ", "U"],
    [" ", " ", " ", " ", " ", "I", " ", " ", " ", "E", " ", " ", " ", " ", "O", " ", " ", " ", "C"],
    ["M", "A", "N", "C", "H", "E", "S", "T", "E", "R", " ", " ", " ", " ", "W", " ", " ", " ", "O"],
    [" ", " ", " ", " ", " ", "S", " ", " ", " ", "R", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", "K", "A", "N", "G", "U", "R", "U", " ", " ", " ", " "],
  ];

  const numberGrid = [
    [" ", " ", " ", " ", " ", "6", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", "5", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", "1", " ", " ", " ", " ", " ", " ", " ", " ", " ", "7"],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", "3", " ", " ", " ", " ", "8", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    ["4", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", "2", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
  ];

  return (
    <>
      <Title />
      <div className="container">
        <div className="row">
        <div className="col grid">
          <Grid answerGrid={answerGrid} numberGrid={numberGrid} />
        </div>
        <div className="col question">
          <Question />
        </div>
        </div>
      </div>
    </>
  );
};

export default Crossword;
