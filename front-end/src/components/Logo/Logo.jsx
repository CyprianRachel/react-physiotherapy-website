import styles from "./Logo.module.css";
import LOGO from "../../assets/logo.svg";
import { Link } from "react-router-dom";

export function Logo() {
  return (
    <div className={styles.Logo}>
      <Link to="/">
        <img src={LOGO} alt="Logo"></img>
      </Link>
    </div>
  );
}
