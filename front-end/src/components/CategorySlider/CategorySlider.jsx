import { HEROCATEGORIES } from "../../constants/heroCategories";
import UPRIGHTICON from "../../assets/up-right-icon.svg";
import { CenteredContent } from "../CenteredContent/CenteredContent";
import styles from "./CategorySlider.module.css";

export function CategorySlider() {
  return (
    <div className={styles.wrapper}>
      <CenteredContent>
        <div className={styles.mainCategories}>
          {HEROCATEGORIES.map((category) => {
            const words = category.categoryTitle.split(" ");
            return (
              <div
                key={category.categoryTitle}
                className={styles.singleCategoryWrapper}
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
                  <p>{category.description}</p>
                </div>
                <div className={styles.rightDiv}>
                  <img
                    style={{ marginLeft: "auto", width: "2.5rem" }}
                    src={UPRIGHTICON}
                  ></img>
                  <div className={styles.imageWrapper}>
                    <div className={styles.whiteCircle}></div>
                    <div className={styles.orangeCircle}></div>
                    <div
                      style={{
                        backgroundImage: `url(${category.image})`,
                        width: "100%",
                        height: "12rem",
                        position: "relative",
                        backgroundRepeat: "no-repeat",
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </CenteredContent>
    </div>
  );
}
