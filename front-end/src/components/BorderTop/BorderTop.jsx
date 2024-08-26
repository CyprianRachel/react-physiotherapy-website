import styles from "./BorderTop.module.css";

export function BorderTop({ borderTop }) {
  return <>{borderTop && <div className={styles.borderTop} />}</>;
}
