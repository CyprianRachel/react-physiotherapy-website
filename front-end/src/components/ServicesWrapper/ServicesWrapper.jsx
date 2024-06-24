import { AllAboutUs } from "../AllAboutUs/AllAboutUs";
import { CenteredContent } from "../CenteredContent/CenteredContent";
import { ServicesList } from "../ServicesList/ServicesList";
import styles from "./ServicesWrapper.module.css";

export function ServicesWrapper({ team, selectedServiceId }) {
  return (
    <div className={styles.wrapper}>
      <CenteredContent>
        <ServicesList selectedServiceId={selectedServiceId} />
        <AllAboutUs team={team} />
      </CenteredContent>
    </div>
  );
}
