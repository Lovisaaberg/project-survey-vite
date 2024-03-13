import "./Questions.css";
import { useState } from "react";

export const QuestionTwo = () => {
  const [radioButton] = useState();

  return (
    <form>
      Does music make you happy?
      <label>
        <p>Yes, absolutely</p>
        <input
          type="radio"
          value="Yes"
          onChange={(event) => event.target.value}
          checked={"Yes"}
        />
      </label>
      <label>
        <p>No, I like the silence</p>
        <input
          type="radio"
          value="No"
          onChange={(event) => event.target.value}
          checked={"NO"}
        />
      </label>
    </form>
  );
};
