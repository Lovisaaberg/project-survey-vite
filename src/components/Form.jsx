import "./Form.css";
import { QuestionOne } from "./questions/QuestionOne";
import { QuestionTwo } from "./questions/QuestionTwo";
import { QuestionThree } from "./questions/QuestionThree";
import { useState } from "react";

export const Form = () => {
  // Save anwers
  const [answers, setAnswers] = useState({});

  return (
    <form>
      <QuestionOne />
      <QuestionTwo />
      <QuestionThree />
    </form>
  );
};
