import { HEROCATEGORIES } from "../../constants/heroCategories";
import UPRIGHTICON from "../../assets/up-right-icon.svg";
import { CenteredContent } from "../CenteredContent/CenteredContent";
import styles from "./CategorySlider.module.css";
import { Link } from "react-router-dom";

export function CategorySlider() {
  const handleLinkClick = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" }); // przewijanie do samej góry, natychmiastowo
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  };
  return (
    <div className={styles.wrapper}>
      <CenteredContent>
        <div className={styles.mainCategories}>
          {HEROCATEGORIES.map((category) => {
            const words = category.categoryTitle.split(" ");
            return (
              <Link
                to={category.path}
                className={styles.link}
                key={category.categoryTitle}
                onClick={handleLinkClick}
              >
                <div className={styles.leftDiv}>
                  <h2>
                    {words.map((word, index) => (
                      <span
                        key={index}
                        className={index === 0 ? styles.black : styles.orange}
                      >
                        {word}{" "}
                      </span>
                    ))}
                  </h2>
                </div>
                <div className={styles.rightDiv}>
                  <div className={styles.imageWrapper}>
                    <div className={styles.whiteCircle}></div>
                    <div className={styles.orangeCircle}></div>
                    <div
                      style={{
                        backgroundImage: `url(${category.image})`,
                        backgroundPosition: category.position,
                      }}
                      className={styles.image}
                    ></div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </CenteredContent>
    </div>
  );
}
