import { AllAboutUs } from "../AllAboutUs/AllAboutUs";
import { BorderTop } from "../BorderTop/BorderTop";
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
  children,
  sectionH2,
  borderTop,
  cennik,
}) {
  return (
    <div className={styles.wrapper}>
      <ServicesList
        selectedServiceId={selectedServiceId}
        selectedPersonId={selectedPersonId}
        subCategory={subCategory}
        subCategoryChild={children}
        sectionH2={sectionH2}
        borderTop={borderTop}
        cennik={cennik}
      />
      <AllAboutUs
        team={team}
        person={person}
        selectedPersonId={selectedPersonId}
        description={description}
        descriptionText={children}
        selectedEmployeesId={selectedEmployeesId}
        borderTop={borderTop}
        sectionH2={sectionH2}
      />
    </div>
  );
}
