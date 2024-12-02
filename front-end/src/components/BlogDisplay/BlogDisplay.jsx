import styles from "./BlogDisplay.module.css";

export function BlogDisplay({ children }) {
  return <div className={styles.flex}>{children}</div>;
}
