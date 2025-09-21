import Letter from "../Letter/Letter";
import styles from "./Display.module.css";

const ROWS = 6;
const COLS = 5;

const Display = ({ allGuess }) => {
  const rows = [];

  for (let rowIndex = 0; rowIndex < ROWS; rowIndex++) {
    const guess = allGuess[rowIndex] || [];
    const letters = [];

    for (let colIndex = 0; colIndex < COLS; colIndex++) {
      const letterObj = guess[colIndex] || { character: "", status: "empty" };
      letters.push(
        <Letter key={colIndex} status={letterObj.status}>
          {letterObj.character}
        </Letter>
      );
    }

    rows.push(
      <section key={rowIndex} className={styles.section}>
        {letters}
      </section>
    );
  }

  return <div className={styles.container}>{rows}</div>;
};

export default Display;
