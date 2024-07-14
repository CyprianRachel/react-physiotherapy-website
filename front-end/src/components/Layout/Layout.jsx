import { useState } from "react";
import { Footer } from "../Footer/Footer";
import { Logo } from "../Logo/Logo";
import { MainBookingButton } from "../MainBookingButton/MainBookingButton";
import { MainContent } from "../MainContent/MainContent";
import { MainMenu } from "../MainMenu/MainMenu";
import { SubMenu } from "../SubMenu/SubMenu";
import { TopBar } from "../TopBar/TopBar";
import styles from "./Layout.module.css";

export function Layout({ children }) {
  const [activeCategory, setActiveCategory] = useState(null);

  const handleCategoryHover = (category) => {
    setActiveCategory(category);
  };

  return (
    <>
      <TopBar>
        <Logo />
        <MainMenu onCategoryHover={handleCategoryHover} />
        <MainBookingButton />
      </TopBar>
      {activeCategory && activeCategory.subcategory && (
        <SubMenu subcategories={activeCategory.subcategory} />
      )}
      <div className={styles.mobileDisplayBlock}>
        <MainMenu onCategoryHover={handleCategoryHover} />
      </div>
      <MainContent>{children}</MainContent>
      <Footer />
    </>
  );
}
