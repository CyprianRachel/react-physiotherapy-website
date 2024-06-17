import { NavLink } from "react-router-dom";
import { CATEGORIES } from "../../constants/categories";
import styles from "./MainMenu.module.css";

export function MainMenu({ textColor }) {
  return (
    <ul className={styles.mainMenu}>
      {CATEGORIES.map((category) => {
        return (
          <li key={category.path}>
            <NavLink style={{ "--text-color": textColor }} to={category.path}>
              {category.categoryName}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
}
