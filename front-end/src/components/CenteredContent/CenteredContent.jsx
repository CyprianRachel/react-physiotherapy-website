import styles from "./CenteredContent.module.css";

export function CenteredContent({ children, borderTop }) {
  const className = borderTop
    ? `${styles.wrapper} ${styles.borderTop}`
    : styles.wrapper;

  return <div className={className}>{children}</div>;
}
