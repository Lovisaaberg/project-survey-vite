import "./Form.css";
// import { survey } from "../survey.json";
import { QuestionOne } from "./questions/QuestionOne";
import { QuestionTwo } from "./questions/QuestionTwo";
import { QuestionThree } from "./questions/QuestionThree";
import { useState } from "react";

export const Form = () => {
  // Save anwers
  const [answers, setAnswers] = useState({});

  // Logga data
  //console.log(survey);

  return (
    <form className="form-container">
      <QuestionOne />
      <QuestionTwo />
      <QuestionThree />
    </form>
  );
};
