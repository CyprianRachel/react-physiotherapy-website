import { Breadcrumbs } from "../Breadcrumbs/Breadcrumbs";
import styles from "./H1.module.css";

export function H1({ text, highlight }) {
  return (
    <div className={styles.wrapper}>
      <Breadcrumbs />
      <h1 className={styles.h1}>
        {text} <span className={styles.highlight}>{highlight}</span>
      </h1>
    </div>
  );
}
