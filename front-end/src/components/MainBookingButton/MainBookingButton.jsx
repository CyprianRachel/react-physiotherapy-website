import styles from "./MainBookingButton.module.css";

export function MainBookingButton() {
  return (
    <a href="tel:+48660143444">
      <button className={styles.MainBookingButton}>Zarezerwuj</button>
    </a>
  );
}
