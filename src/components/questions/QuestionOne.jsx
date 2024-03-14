import { useState } from "react";
import "./Questions.css";

export const QuestionOne = () => {
  const [value, setValue] = useState("");
  const [error, setErrorMessage] = useState("");

  const handleChange = (event) => {
    // Handle error message
    console.log(event);

    setValue (event.target.value);

    // Om inget är ifyllt i inputfältet så visas meddelandet "Sorry but you need to add an activity"
    if (!event.target.value) {
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
          value={value}
          onChange={handleChange}
          required
        />
      </label>
    </div>
  );
};
