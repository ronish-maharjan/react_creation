import { useState } from "react";
import Display from "./components/Display/Display";
import styles from "./App.module.css";
const App = () => {
  const todayWord = "apple";
  const [guess, setGuess] = useState("");
  const [allGuess, setAllGuess] = useState([]);
  const [disableInput, setDisableInput] = useState(false);
  const [won, setWon] = useState(false);

  // Function to verify the word is correct or not
  function verifyWord(word) {
    const wordArray = word.split("");
    const finalData = [];
    let playerWon = false;
    wordArray.map((character, index) => {
      if (!todayWord.includes(character)) {
        finalData.push({ character, status: "incorrect" });
      } else if (!(character == todayWord[index])) {
        finalData.push({ character, status: "mismatch" });
      } else {
        finalData.push({ character, status: "correct" });
      }
    });
    setGuess("");
    // Checking if the word is correct or not
    playerWon = finalData.every((obj) => obj.status === "correct");
    return { finalData, playerWon };
  }

  // function to handle submit
  function handleSubmit(e) {
    e.preventDefault();

    // Check guess length first
    if (guess.length !== todayWord.length) {
      alert("Word must be 5 letters");
      return;
    }

    // Verify the word
    const { finalData, playerWon } = verifyWord(guess);

    // Add to all guesses
    setAllGuess((prev) => {
      const newAllGuess = [...prev, finalData];

      // Disable input if 6 guesses reached
      if (newAllGuess.length >= 6) {
        setDisableInput(true);
        alert("Game over");
      }

      return newAllGuess;
    });

    // Disable input if won
    if (playerWon) {
      setWon(true);
      setDisableInput(true);
      alert("You won!");
    }

    // Clear input
    setGuess("");
  }

  return (
    <div className={styles.container}>
      <Display allGuess={allGuess} />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className={styles.input}
          value={guess}
          onChange={(e) => {
            setGuess(e.target.value);
          }}
          disabled={disableInput}
        ></input>
      </form>
    </div>
  );
};

export default App;
