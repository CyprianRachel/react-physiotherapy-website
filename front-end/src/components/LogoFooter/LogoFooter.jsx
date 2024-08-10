import styles from "./LogoFooter.module.css";
import LOGOFOOTER from "../../assets/logo-footer.png";

export function LogoFooter() {
  return (
    <img className={styles.logoFooter} src={LOGOFOOTER} alt="LogoFooter"></img>
  );
}
