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
            return (
              <div
                key={category.categoryTitle}
                className={styles.singleCategoryWrapper}
              >
                <div className={styles.leftDiv}>
                  <h2>{category.categoryTitle}</h2>
                  <p>{category.description}</p>
                </div>
                <div className={styles.rightDiv}>
                  <img
                    style={{ marginLeft: "auto", width: "3rem" }}
                    src={UPRIGHTICON}
                  ></img>
                  <div className={styles.imageWrapper}>
                    <img src={category.image}></img>
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
