import { TEAMMEMBERS } from "../../constants/teamMembers";
import { BorderTop } from "../BorderTop/BorderTop";
import { Breadcrumbs } from "../Breadcrumbs/Breadcrumbs";
import { CenteredContent } from "../CenteredContent/CenteredContent";
import styles from "./EmployeeProfil.module.css";

export function EmployeeProfil({ selectedPersonId }) {
  const filteredEmployee = TEAMMEMBERS.find(
    (employee) => employee.id === selectedPersonId
  );

  if (!filteredEmployee) {
    return <div className={styles.wrapper2} />;
  }

  return (
    <>
      <div className={styles.wrapper}>
        <Breadcrumbs />
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
      <BorderTop />
    </>
  );
}
