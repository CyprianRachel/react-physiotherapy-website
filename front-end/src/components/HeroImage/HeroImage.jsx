import styles from "./HeroImage.module.css";

export function HeroImage({ image }) {
  return (
    <div className={styles.wrapper}>
      <div
        className={styles.backgroundImage}
        style={{ backgroundImage: `url(${image})` }}
      ></div>
    </div>
  );
}
