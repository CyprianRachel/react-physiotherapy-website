import styles from "./HeroAboutUs.module.css";
import { CATEGORIES } from "../../constants/categories";

export function HeroAboutUs({ descriptionText }) {
  return <div className={styles.wrapper}>{descriptionText}</div>;
}
