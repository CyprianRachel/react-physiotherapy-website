import { LogoFooter } from "../LogoFooter/LogoFooter";
import { MainMenu } from "../MainMenu/MainMenu";
import INSTAGRAM from "../../assets/instagram-orange.svg";
import FACEBOOK from "../../assets/facebook-brands-solid.svg";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";
import { scrollToTop } from "../../hooks/scrollToTop";

export function Footer() {
  return (
    <>
      <div className={styles.footer}>
        <div className={styles.secondFooter}>
          <div className={styles.firstLine}>
            <div className={styles.leftFooter}>
              <Link onClick={scrollToTop} to="/">
                <LogoFooter />
              </Link>
            </div>
            <div className={styles.iconsWrapper}>
              <a
                target="_blank"
                href="https://www.instagram.com/in.motion.gabinet/"
              >
                <img
                  className={styles.icons}
                  src={INSTAGRAM}
                  alt="Instagram"
                ></img>
              </a>
              <a
                target="_blank"
                href="https://www.facebook.com/in.motion.gabinet"
              >
                <img
                  className={styles.icons}
                  src={FACEBOOK}
                  alt="Facebook"
                ></img>
              </a>
            </div>
          </div>
          <p className={styles.copyrgith}>
            © 2024 inmotion. Wszystkie prawa zastrzeżone
          </p>
        </div>
      </div>
    </>
  );
}
