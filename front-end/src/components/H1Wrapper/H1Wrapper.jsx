import { Breadcrumbs } from "../Breadcrumbs/Breadcrumbs";
import styles from "./H1Wrapper.module.css";

export function H1Wrapper({ children }) {
  return <div className={styles.h1Wrapper}>{children}</div>;
}
