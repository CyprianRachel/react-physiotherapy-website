import { useRef, useEffect } from "react";
import styles from "./MainBookingButton.module.css";

export function MainBookingButton() {
  const buttonRef = useRef(null);
  const widgetButtonRef = useRef(null);

  useEffect(() => {
    // Przechwyć element z klasą `booksy-widget-button` po zamontowaniu komponentu
    widgetButtonRef.current = document.querySelector(".booksy-widget-button");
  }, []);

  const handleClick = () => {
    if (widgetButtonRef.current) {
      widgetButtonRef.current.click();
    }
  };

  return (
    <button
      ref={buttonRef}
      className={styles.MainBookingButton}
      onClick={handleClick}
    >
      Zarezerwuj
    </button>
  );
}
