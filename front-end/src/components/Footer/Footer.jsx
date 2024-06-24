import { LogoFooter } from "../LogoFooter/LogoFooter";
import { MainMenu } from "../MainMenu/MainMenu";
import INSTAGRAM from "../../assets/instagram.svg";

import styles from "./Footer.module.css";

export function Footer() {
  return (
    <>
      <div className={styles.footerContainer}>
        <div className={styles.maxWidth}>
          <MainMenu textColor="white" />
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.secondFooter}>
          <div className={styles.leftFooter}>
            <LogoFooter />
            <p>© 2024 inmotion. Wszystkie prawa zastrzeżone</p>
          </div>
          <div>
            <img src={INSTAGRAM} alt="Instagram"></img>
          </div>
        </div>
      </div>
    </>
  );
}
