import { Link } from "react-router-dom";
import { TEAMMEMBERS } from "../../constants/teamMembers";
import styles from "./NaszZespol.module.css";
import { scrollToTop } from "../../hooks/scrollToTop";
import UP_RIGHT_ICON from "../../assets/up-right-icon.svg";

export function NaszZespol() {
  return (
    <div className={styles.membersWrapper}>
      {TEAMMEMBERS.map((employee) => {
        return (
          <Link
            className={styles.singleMemberWrapper}
            to={employee.path}
            key={employee.name}
            onClick={scrollToTop}
          >
            <div className={styles.circularBorder}>
              <div
                className={styles.employeeImage}
                style={{
                  backgroundImage: `url(${employee.image})`,
                }}
              ></div>
            </div>
            <div className={styles.description}>
              <h2>{employee.name}</h2>
              <h3>{employee.profession}</h3>
              <button>Zobacz usługi</button>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
