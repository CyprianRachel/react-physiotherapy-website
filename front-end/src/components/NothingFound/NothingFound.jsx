import { Link } from "react-router-dom";
import NO_RESULTS from "../../assets/no-results.png";
import styles from "./NothingFound.module.css";
import { scrollToTop } from "../../hooks/scrollToTop";

export function NothingFound() {
  return (
    <div className={styles.wrapperAll}>
      <div className={styles.wrapper}>
        <img className={styles.img} src={NO_RESULTS} />
        <div className={styles.containerH3}>
          <h3>Brak wyników</h3>
          <p>Żadna z usług nie spełnia twoich kryteriów wyszukiwania</p>
        </div>
      </div>
    </div>
  );
}
