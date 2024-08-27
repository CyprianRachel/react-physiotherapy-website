import { TEAMMEMBERS } from "../../constants/teamMembers";
import { Breadcrumbs } from "../Breadcrumbs/Breadcrumbs";
import { CenteredContent } from "../CenteredContent/CenteredContent";
import styles from "./EmployeeProfil.module.css";

export function EmployeeProfil({ selectedPersonId }) {
  const filteredEmployee = TEAMMEMBERS.find(
    (employee) => employee.id === selectedPersonId
  );

  if (!filteredEmployee) {
    return <div className={styles.wrapper}>Pracownik nie znaleziony</div>;
  }

  return (
    <CenteredContent>
      <Breadcrumbs />
      <div className={styles.wrapper}>
        <div className={styles.singleMemberWrapper}>
          <div className={styles.employeeImageWrapper}>
            <img
              src={filteredEmployee.image}
              alt={filteredEmployee.name}
              className={styles.employeeImage}
            />
          </div>
          <div className={styles.description}>
            <h1>{filteredEmployee.name}</h1>
            <h3>{filteredEmployee.profession}</h3>
          </div>
        </div>
        {filteredEmployee.description && (
          <p className={styles.descriptionP}>{filteredEmployee.description}</p>
        )}
      </div>
    </CenteredContent>
  );
}
