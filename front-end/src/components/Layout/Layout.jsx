import { Footer } from "../Footer/Footer";
import { Logo } from "../Logo/Logo";
import { MainBookingButton } from "../MainBookingButton/MainBookingButton";
import { MainContent } from "../MainContent/MainContent";
import { MainMenu } from "../MainMenu/MainMenu";
import { TopBar } from "../TopBar/TopBar";
import styles from "./Layout.module.css";

export function Layout({ children }) {
  return (
    <>
      <TopBar>
        <Logo />
        <div className={styles.mobileDisplayNone}>
          <MainMenu />
        </div>
        <MainBookingButton />
      </TopBar>
      <div className={styles.mobileDisplayBlock}>
        <MainMenu />
      </div>
      <MainContent>{children}</MainContent>
      <Footer />
    </>
  );
}
