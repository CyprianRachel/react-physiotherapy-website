import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { CATEGORIES } from "../../constants/categories";
import styles from "./MobileMenu.module.css";
import CARROT_DOWN from "../../assets/arrow-down-sign-to-navigate.png";

export function MobileMenu({ onLinkClick }) {
  const [openSubmenuIndex, setOpenSubmenuIndex] = useState(null);

  const toggleSubmenu = (index) => {
    setOpenSubmenuIndex(openSubmenuIndex === index ? null : index);
  };

  return (
    <ul className={styles.menu}>
      {CATEGORIES.map((category, index) => {
        // Check if this is the last item
        const isLastItem = index === CATEGORIES.length - 1;
        return (
          <li key={index} className={styles.menuItem}>
            <div
              className={`${styles.arrowContainer} ${
                isLastItem ? styles.lastArrowContainer : ""
              }`}
            >
              <NavLink onClick={onLinkClick} to={category.path}>
                <span className={styles.categoryName}>
                  {category.categoryName}
                </span>
              </NavLink>
              <div
                className={`${styles.arrowDiv} ${
                  openSubmenuIndex === index ? styles.rotated : ""
                }`}
                onClick={() => toggleSubmenu(index)}
                style={{
                  backgroundImage: `url(${CARROT_DOWN})`,
                }}
              />
            </div>
            {category.subcategory && openSubmenuIndex === index && (
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
        );
      })}
    </ul>
  );
}
