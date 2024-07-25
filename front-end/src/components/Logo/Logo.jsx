import styles from "./Logo.module.css";
import LOGO from "../../assets/logo.png";
import { Link } from "react-router-dom";

export function Logo({ onLinkClick }) {
  return (
    <div className={styles.Logo}>
      <Link onClick={onLinkClick} to="/">
        <img className={styles.logo} src={LOGO} alt="Logo"></img>
      </Link>
    </div>
  );
}
