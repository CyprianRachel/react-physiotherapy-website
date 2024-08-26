import styles from "./HeroAboutUs.module.css";

export function HeroAboutUs({ descriptionText }) {
  return <div className={styles.wrapper}>{descriptionText}</div>;
}
