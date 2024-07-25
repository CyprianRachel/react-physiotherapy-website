import styles from "./MobileMenuIcon.module.css";
import MENU_ICON from "../../assets/menu.png";
import CLOSE_ICON from "../../assets/close.png";

export function MobileMenuIcon({ onClick, isOpen }) {
  return (
    <div className={styles.wrapper} onClick={onClick}>
      <div className={styles.buttonWrapper}>
        <img
          className={styles.menuButton}
          src={isOpen ? CLOSE_ICON : MENU_ICON}
          alt={isOpen ? "Close Icon" : "Menu Icon"}
        />
      </div>
    </div>
  );
}
