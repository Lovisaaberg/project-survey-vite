import "./Form.css";


export const Form = ({ value, setValue, mood, setMood, song, setSong, setShowSummary, error, setErrorMessage }) => {

  const handleSubmit = (event) => {
      event.preventDefault()
      setShowSummary(true)
    }
const handleChange = (event) => {
  setValue (event.target.value);
        
  //Om inget är ifyllt i inputfältet så visas meddelandet "Sorry but you need to add an activity"
  if (!event.target.value) {
  setErrorMessage("Sorry but you need to add an activity")
 }
}
  
  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <div className="star"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="100" height="100">
        <path fill="#896757" d="M12 1l2.5 7.4h7.9l-6.4 4.9 2.5 7.4-6.5-4.9-6.4 4.9 2.5-7.4-6.4-4.9h7.9z"/>
        </svg>
      </div>
      <div className="form-wrapper">
      <div className="question-container">
        <span className="count">1.</span>
        <h3>What is your favorite mood-boosting activity?</h3>
        <label>
          <input
            type="text"
            name="questionOne"
            placeholder="Write your answer here..."
            value={value}
            onChange={event => setValue(event.target.value)}
            required
          />
        </label>
      </div>

      <div className="question-container">
      <span className="count">2.</span>
      <h3>Does music make you happy?</h3>
      <label>
        <p>Yes, absolutely</p>
        <input
          type="radio"
          value="Yes"
          name="questionTwo"
          onChange={event => setMood(event.target.value)}
          checked={mood === "Yes"}
        />
      </label>
      <label>
        <p>No, I like the silence</p>
        <input
          type="radio"
          value="No"
          name="questionTwo"
          onChange={event => setMood(event.target.value)}
          checked={mood === "No"}
        />
      </label>
    </div>

    <div className="question-container">
      <span className="count">3.</span>
      <h3>What is your go-to happy song?</h3>
      <select 
        aria-label="QuestionThree"
        name="questionThree"
        onChange={(event) => setSong(event.target.value)}
        value={song}
        required
      >
        <option value="">Select</option>
        <option value="song1">First option</option>
        <option value="song2">Second option</option>
        <option value="song3">Third option</option>
      </select>
    </div>
    <button type="submit">Submit your answers</button>
    </div>
    </form>
    );
  };
  