import { Link, useLocation } from "react-router-dom";
import styles from "./Breadcrumbs.module.css";
import CARRET from "../../assets/caret-down-solid.svg";

export function Breadcrumbs() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  // Jeżeli jesteś na stronie głównej, nie pokazuj breadcrumbs
  if (pathnames.length === 0) {
    return null;
  }

  return (
    <div className={styles.breadcrumbs}>
      <ul>
        <li>
          <Link to="/">Strona główna</Link>
        </li>
        {pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join("/")}`;

          return (
            <li key={to}>
              <Link to={to}>{value.replace(/-/g, " ")}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
