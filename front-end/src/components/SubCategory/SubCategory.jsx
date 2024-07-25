import styles from "./SubCategory.module.css";

export function SubCategory({ subCategoryChild }) {
  return <div className={styles.wrapper}>{subCategoryChild}</div>;
}
