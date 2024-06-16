import styles from "./Logo.module.css";
import LOGO from "../../assets/logo.svg";

export function Logo() {
  return (
    <div className={styles.Logo}>
      <img src={LOGO} alt="Logo"></img>
    </div>
  );
}
