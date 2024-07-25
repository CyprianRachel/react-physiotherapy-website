import { useState } from "react";
import { Footer } from "../Footer/Footer";
import { Logo } from "../Logo/Logo";
import { MainBookingButton } from "../MainBookingButton/MainBookingButton";
import { MainContent } from "../MainContent/MainContent";
import { MainMenu } from "../MainMenu/MainMenu";
import { SubMenu } from "../SubMenu/SubMenu";
import { TopBar } from "../TopBar/TopBar";
import styles from "./Layout.module.css";
import { MobileMenuIcon } from "../MobileMenuIcon/MobileMenuIcon";
import { MobileMenu } from "../MobileMenu/MobileMenu";

export function Layout({ children }) {
  const [activeCategory, setActiveCategory] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleCategoryHover = (category) => {
    setActiveCategory(category);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <TopBar>
        <Logo onLinkClick={closeMobileMenu} />
        <div className={styles.mobileDisplayNone}>
          <MainMenu onCategoryHover={handleCategoryHover} />
        </div>
        <div className={styles.wrapperButtons}>
          <MainBookingButton />
          <MobileMenuIcon
            onClick={toggleMobileMenu}
            isOpen={isMobileMenuOpen}
          />
        </div>
      </TopBar>
      {isMobileMenuOpen ? (
        <MobileMenu onLinkClick={closeMobileMenu} />
      ) : (
        <>
          <MainContent>{children}</MainContent>
          {/* <Footer /> */}
        </>
      )}
    </>
  );
}
