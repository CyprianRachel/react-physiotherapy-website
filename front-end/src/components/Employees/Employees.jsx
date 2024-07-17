import { TEAMMEMBERS } from "../../constants/teamMembers";
import styles from "./Employees.module.css";
import UPRIGHTICON from "../../assets/up-right-icon.svg";
import { Link } from "react-router-dom";

export function Employees({ selectedEmployeesId }) {
  if (!selectedEmployeesId || selectedEmployeesId.length === 0) {
    return <></>;
  }
  const selectedEmployees = TEAMMEMBERS.filter((employee) =>
    selectedEmployeesId.includes(employee.id)
  );

  return (
    <div className={styles.wrapper}>
      {selectedEmployees.map((employee) => (
        <Link to={employee.path} key={employee.name}>
          <div className={styles.employeeWrapper}>
            <div className={styles.left}>
              <div
                className={styles.employeeImage}
                style={{
                  backgroundImage: `url(${employee.image})`,
                }}
              ></div>
              <div className={styles.aboutWrapper}>
                <p>{employee.profession}</p>
                <h4>{employee.name}</h4>
              </div>
            </div>
            <img className={styles.icon} src={UPRIGHTICON}></img>
          </div>
        </Link>
      ))}
    </div>
  );
}
