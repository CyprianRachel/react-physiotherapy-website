import { Link } from "react-router-dom";
import { TEAMMEMBERS } from "../../constants/teamMembers";
import styles from "./NaszZespol.module.css";
import { scrollToTop } from "../../hooks/scrollToTop";

export function NaszZespol() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.membersWrapper}>
        {TEAMMEMBERS.map((employee) => {
          return (
            <Link to={employee.path} key={employee.name} onClick={scrollToTop}>
              <div className={styles.singleMemberWrapper}>
                <div
                  className={styles.employeeImage}
                  style={{
                    backgroundImage: `url(${employee.image})`,
                  }}
                ></div>
                <div className={styles.description}>
                  <p>{employee.profession}</p>
                  <h2>{employee.name}</h2>
                  <button>Zobacz usługi</button>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
