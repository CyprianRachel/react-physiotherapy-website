import { AllAboutUs } from "../AllAboutUs/AllAboutUs";
import { CenteredContent } from "../CenteredContent/CenteredContent";
import { ServicesList } from "../ServicesList/ServicesList";
import styles from "./ServicesWrapper.module.css";

export function ServicesWrapper() {
  return (
    <div className={styles.wrapper}>
      <CenteredContent>
        <ServicesList />
        <AllAboutUs />
      </CenteredContent>
    </div>
  );
}
