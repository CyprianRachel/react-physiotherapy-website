import { AllAboutUs } from "../AllAboutUs/AllAboutUs";
import { CenteredContent } from "../CenteredContent/CenteredContent";
import { ServicesList } from "../ServicesList/ServicesList";
import styles from "./ServicesWrapper.module.css";

export function ServicesWrapper({
  team,
  person,
  description,
  selectedServiceId,
  selectedPersonId,
}) {
  return (
    <div className={styles.wrapper}>
      <CenteredContent>
        <ServicesList
          selectedServiceId={selectedServiceId}
          selectedPersonId={selectedPersonId}
        />
        <AllAboutUs
          team={team}
          person={person}
          selectedPersonId={selectedPersonId}
          description={description}
        />
      </CenteredContent>
    </div>
  );
}
