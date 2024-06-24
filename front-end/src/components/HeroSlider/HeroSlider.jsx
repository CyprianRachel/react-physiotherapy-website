import styles from "./HeroSlider.module.css";

export function HeroSlider({ slider }) {
  return (
    <div
      className={styles.centerDiv}
      style={{ backgroundImage: `url(${slider})` }}
    >
      <div className={styles.opinionCounter}>
        <h2>5,0</h2>
        <p>44 opinie</p>
      </div>
    </div>
  );
}
