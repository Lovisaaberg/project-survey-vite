import "./Form.css";
// import { survey } from "../survey.json";
import { QuestionOne } from "./questions/QuestionOne";
import { QuestionTwo } from "./questions/QuestionTwo";
import { QuestionThree } from "./questions/QuestionThree";
import { SubmitButton } from "./SubmitButton";
import { useState } from "react";

export const Form = () => {
  // Save anwers
  const [answers, setAnswers] = useState({});

  // 1.
  // Ta emot svar från varje Question komponent
  // och lagra dessa i answers objektet
  
  /*
  answers: 
  {
    "questionOne": "dansa",
    "questionTwo": "true or false",
    "questionThree": "option"
  }
  
  */

  // 2.
  // Klicka på submit knappen och skicka
  // alla svar till Summery komponeten

  return (
    <form className="form-container">
      <QuestionOne />
      <QuestionTwo />
      <QuestionThree />
      <SubmitButton />
    </form>
  );
};
