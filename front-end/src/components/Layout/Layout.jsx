import { Footer } from "../Footer/Footer";
import { Logo } from "../Logo/Logo";
import { MainBookingButton } from "../MainBookingButton/MainBookingButton";
import { MainContent } from "../MainContent/MainContent";
import { MainMenu } from "../MainMenu/MainMenu";
import { TopBar } from "../TopBar/TopBar";

export function Layout({ children }) {
  return (
    <>
      <MainContent>
        <TopBar>
          <Logo />
          <MainMenu />
          <MainBookingButton />
        </TopBar>
        {children}
      </MainContent>
      <Footer />
    </>
  );
}
