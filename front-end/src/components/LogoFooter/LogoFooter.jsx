import styles from "./LogoFooter.module.css";
import LOGOFOOTER from "../../assets/logo-footer.svg";

export function LogoFooter() {
  return (
    <div className={styles.LogoFooter}>
      <img src={LOGOFOOTER} alt="LogoFooter"></img>
    </div>
  );
}
