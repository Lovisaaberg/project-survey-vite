import { useState } from "react";
import { Header } from "./components/Header";
import { Form } from "./components/Form";
import { Summary } from "./components/Summary.jsx";

export const App = () => {
  const [value, setValue] = useState("");
  const [error, setErrorMessage] = useState("");
  const [mood, setMood] = useState("");
  const [song, setSong] = useState("");
  const [showSummary, setShowSummary] = useState(false)

  return (
    <>
      <Header />
      <main>
        {showSummary ?
        <Summary value={value} mood={mood} song={song} /> :
        <Form 
        value={value}
        setValue={setValue}
        mood={mood}
        setMood={setMood}
        song={song}
        setSong={setSong}
        setShowSummary={setShowSummary}
        />}

      </main>
    </>
  );
};
