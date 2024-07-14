import styles from "./AllAboutUs.module.css";
import PHONEICON from "../../assets/smartphone-call.png";
import UPRIGHTICON from "../../assets/up-right-icon.svg";
import INSTAGRAMORANGE from "../../assets/instagram-orange.svg";
import { OPENHOURS } from "../../constants/openHours";
import { HeroAboutUs } from "../HeroAboutUs/HeroAboutUs";

export function AllAboutUs({ description }) {
  return (
    <div className={styles.wrapperAll}>
      {description && <HeroAboutUs />}
      <div className={styles.sticky}>
        <div className={styles.wrapper}>
          <h4>Kontakt</h4>
          <div className={styles.contactWrapper}>
            <div className={styles.number}>
              <img className={styles.icon} src={PHONEICON}></img>

              <span className={styles.phone}>660 143 444</span>
            </div>
            <a href="tel:+48660143444">
              <button className={styles.button}>Zadzwoń</button>{" "}
            </a>
          </div>
          <h4>Godziny otwarcia</h4>
          <div className={styles.openHoursWrapper}>
            {OPENHOURS.map((hours) => {
              return (
                <div className={styles.singleOpenHours} key={hours.day}>
                  <span>{hours.day}</span>
                  <div>
                    <span className={styles.hours}>
                      {hours.open} - {hours.close}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
          <h4>Media społecznościowe</h4>
          <div className={styles.contactWrapper}>
            <div className={styles.number}>
              <img className={styles.icon} src={INSTAGRAMORANGE}></img>
              <span className={styles.instagram}>Instagram</span>
            </div>
            <a
              target="_blank"
              className={styles.a}
              href="https://www.instagram.com/in.motion.gabinet/"
            >
              <img className={styles.icon} src={UPRIGHTICON}></img>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
