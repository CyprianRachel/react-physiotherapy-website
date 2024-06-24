import { CenteredContent } from "../CenteredContent/CenteredContent";
import { HeroSlider } from "../HeroSlider/HeroSlider";
import { ServicesWrapper } from "../ServicesWrapper/ServicesWrapper";
import styles from "./CategoryHero.module.css";

export function CategoryHero() {
  return (
    <div>
      <CenteredContent>
        <div className={styles.wrapper}>
          <div className={styles.wrapperHero}>
            <div className={styles.singleCategory}></div>
            <HeroSlider />
          </div>
          <ServicesWrapper team={false} selectedServiceId={1} />
        </div>
      </CenteredContent>
    </div>
  );
}
