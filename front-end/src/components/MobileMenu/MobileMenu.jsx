import { NavLink } from "react-router-dom";
import { CATEGORIES } from "../../constants/categories";
import styles from "./MobileMenu.module.css";
import CARROT_DOWN from "../../assets/angle-down-solid.svg";

export function MobileMenu({ onLinkClick }) {
  return (
    <ul className={styles.menu}>
      {CATEGORIES.map((category, index) => (
        <li key={index} className={styles.menuItem}>
          <div className={styles.arrowContainer}>
            <NavLink onClick={onLinkClick} to={category.path}>
              <span className={styles.categoryName}>
                {category.categoryName}
              </span>
            </NavLink>
            <div
              className={styles.arrowDiv}
              style={{
                backgroundImage: `url(${CARROT_DOWN})`,
              }}
            />
          </div>
          {category.subcategory && (
            <ul className={styles.submenu}>
              {category.subcategory.map((subcat, subindex) => (
                <li key={subindex} className={styles.submenuItem}>
                  <NavLink
                    to={subcat.path}
                    key={subindex}
                    activeClassName={styles.active}
                    onClick={onLinkClick}
                  >
                    <span>{subcat.categoryName}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
}
