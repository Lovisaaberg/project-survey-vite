import { useState } from "react";
import "./Questions.css";

export const QuestionOne = () => {
  const [value, setValue] = useState("");
  const [error, setErrorMessage] = useState("");

  const handleValue = (inputValue) => {
    // Handle error message
    console.log(inputValue);

    if (!inputValue) {
      setErrorMessage("Sorry but you need to add an activity");
    }
  };

  return (
    <div className="question-container">
      <span className="count">1.</span>
      <h3>What is your favorite mood-boosting activity?</h3>
      <label>
        <input
          type="text"
          name="questionOne"
          placeholder="Write your answer here..."
          onClick={() => handleValue(value)}
          onChange={(e) => setValue(e.target.value)}
          required
        />
      </label>
    </div>
  );
};
