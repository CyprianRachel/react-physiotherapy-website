import styles from "./ServicePopup.module.css";
import X_BUTTON from "../../assets/xmark-solid.svg";
import { MainBookingButton } from "../MainBookingButton/MainBookingButton";

export function ServicePopup({
  serviceName,
  serviceDescription,
  servicePrice,
  serviceTime,
  onClose,
}) {
  return (
    <div className={styles.wrapper}>
      <div key={serviceName} className={styles.popup}>
        <div className={styles.serviceNameWrapper}>
          <div className={styles.closeButton} onClick={onClose}>
            <img src={X_BUTTON} alt={X_BUTTON} />
          </div>
          <h2>{serviceName}</h2>
        </div>
        <div className={styles.descriptionWrapper}>{serviceDescription}</div>
        <div className={styles.priceTimeButtonWrapper}>
          <div className={styles.priceTimeWrapper}>
            <div className={styles.price}>{servicePrice}</div>
            <div className={styles.time}>{serviceTime}</div>
          </div>
          <div className={styles.bookingButton}>
            <MainBookingButton />
          </div>
        </div>
      </div>
    </div>
  );
}
