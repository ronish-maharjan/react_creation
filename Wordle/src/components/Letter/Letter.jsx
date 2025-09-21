import styles from "./Letter.module.css";

const Letter = ({ children, status }) => {
  return (
    <div className={`${styles.box} ${styles[status]}`}>
      <p className={`${styles[status]} ${styles.letter}`}>{children}</p>
    </div>
  );
};

export default Letter;
