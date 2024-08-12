import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { CATEGORIES } from "../../constants/categories";
import styles from "./HorizontalMenu.module.css";

export function HorizontalMenu() {
  return (
    <ul className={styles.menu}>
      {CATEGORIES.map((category, index) => {
        return (
          <li key={index} className={styles.menuItem}>
            <div>
              <NavLink to={category.path}>
                <span className={styles.categoryName}>
                  {category.categoryName}
                </span>
              </NavLink>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
