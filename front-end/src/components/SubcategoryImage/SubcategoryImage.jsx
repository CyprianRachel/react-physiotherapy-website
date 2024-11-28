import styles from "./SubcategoryImage.module.css";

export function SubcategoryImage({ image }) {
  return (
    <>
      <div className={styles.wrapper}>
        <img src={image} className={styles.backgroundImage} />
        <div className={styles.priceWrapper}>
          <span className={styles.price}>85 zł</span>
          <span className={styles.time}>45min</span>
        </div>
      </div>
    </>
  );
}
