import { Footer } from "../Footer/Footer";
import { Logo } from "../Logo/Logo";
import { MainBookingButton } from "../MainBookingButton/MainBookingButton";
import { MainMenu } from "../MainMenu/MainMenu";
import { TopBar } from "../TopBar/TopBar";

export function Layout() {
  return (
    <>
      <TopBar>
        <Logo />
        <MainMenu />
        <MainBookingButton />
      </TopBar>
      <Footer />
    </>
  );
}
