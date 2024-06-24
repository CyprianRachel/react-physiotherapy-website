import styles from "./H1.module.css";

export function H1({ text, highlight }) {
  return (
    <>
      <h1>
        {text} <span className={styles.highlight}>{highlight}</span>
      </h1>
    </>
  );
}
