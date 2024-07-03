import { LogoFooter } from "../LogoFooter/LogoFooter";
import { MainMenu } from "../MainMenu/MainMenu";
import INSTAGRAM from "../../assets/instagram.svg";

import styles from "./Footer.module.css";
import { Link } from "react-router-dom";

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
            <Link to="/">
              <LogoFooter />
            </Link>
            <p>© 2024 inmotion. Wszystkie prawa zastrzeżone</p>
          </div>
          <div>
            <a
              target="_blank"
              href="https://www.instagram.com/in.motion.gabinet/"
            >
              <img src={INSTAGRAM} alt="Instagram"></img>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
