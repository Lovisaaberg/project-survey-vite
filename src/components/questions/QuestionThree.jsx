import { useState } from "react"
import "./Questions.css"


export const QuestionThree = () => {
  const [song, setSong] = useState("");

  return (
    <div className="3">
      <span>3.</span>
      <h3>What is your go-to happy song?</h3>
      <select name="questionThree"
        onChange={event => setSong(event.target.value)}
        value={song}
        required
        >
        <option value="">Select</option>
        <option value="song1">First option</option>
        <option value="song2">Second option</option>
        <option value="song3">Third option</option>
      </select>
    </div>
  )
}
