import { Link, useLocation } from "react-router-dom";
import styles from "./Breadcrumbs.module.css";
// import { CATEGORIES } from "../../constants/categories";

export function Breadcrumbs({ text }) {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);
  // console.log(CATEGORIES.find((y) => (y.subcategory.path = location.pathname)));

  // Jeżeli jesteś na stronie głównej, nie pokazuj breadcrumbs
  if (pathnames.length === 0) {
    return null;
  }

  // Sprawdź, czy ścieżka zawiera "blog"
  const blogIndex = pathnames.indexOf("blog");

  // Jeżeli "blog" jest w ścieżce i ma dalszą część
  if (blogIndex !== -1 && blogIndex < pathnames.length - 1) {
    // Zastąp wszystko po "blog" props text
    pathnames.splice(blogIndex + 1, pathnames.length - blogIndex - 1, text);
  }

  return (
    <div className={styles.breadcrumbs}>
      <ul>
        <li>
          <Link to="/">Strona główna</Link>
        </li>
        {pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join("/")}`;

          const formattedValue = value
            .replace(/-/g, " ") // zamień myślniki na spacje
            .replace(/^./, (char) => char.toUpperCase()); // zamień tylko pierwszą literę na wielką

          return (
            <li key={to}>
              <Link to={to}>{formattedValue}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
