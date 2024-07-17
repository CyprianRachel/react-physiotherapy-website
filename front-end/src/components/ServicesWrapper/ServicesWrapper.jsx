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
  selectedEmployeesId,
  subCategory,
}) {
  return (
    <div className={styles.wrapper}>
      <CenteredContent>
        <ServicesList
          selectedServiceId={selectedServiceId}
          selectedPersonId={selectedPersonId}
          subCategory={subCategory}
        />
        <AllAboutUs
          team={team}
          person={person}
          selectedPersonId={selectedPersonId}
          description={description}
          selectedEmployeesId={selectedEmployeesId}
        />
      </CenteredContent>
    </div>
  );
}
