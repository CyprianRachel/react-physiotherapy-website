import styles from "./IconsWrapper.module.css";
import UPRIGHTICON from "../../assets/up-right-icon.svg";

export function IconsWrapper({ icons }) {
  return (
    <div className={styles.contactWrapper}>
      {icons.map((icon) => (
        <div key={icon.id} className={styles.flex}>
          <div className={styles.number}>
            <img className={styles.iconSocial} src={icon.image}></img>
            <span className={styles.instagram}>{icon.name}</span>
          </div>
          {icon.arrow ? (
            <a
              target="_blank"
              className={styles.a}
              href="https://www.instagram.com/in.motion.gabinet/"
            >
              <img className={styles.icon} src={UPRIGHTICON}></img>
            </a>
          ) : (
            ""
          )}
        </div>
      ))}
    </div>
  );
}
