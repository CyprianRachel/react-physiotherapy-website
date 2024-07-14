import { NavLink } from "react-router-dom";
import styles from "./SubMenu.module.css";

export function SubMenu({ subcategories }) {
  return (
    <ul className={styles.subMenu}>
      {subcategories.map((subcategory) => (
        <li key={subcategory.path}>
          <NavLink to={subcategory.path}>{subcategory.categoryName}</NavLink>
        </li>
      ))}
    </ul>
  );
}
