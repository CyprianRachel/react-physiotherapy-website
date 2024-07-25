import { Link } from "react-router-dom";
import { ZAJECIA_GRUPOWE } from "../../constants/zajeciaGrupowe";
import styles from "./ZajeciaGrupoweSite.module.css";

export function ZajeciaGrupoweSite() {
  return (
    <div className={styles.wrapper}>
      <h1>
        Zajęcia <span className={styles.orange}>grupowe</span>
      </h1>
      <div className={styles.membersWrapper}>
        {ZAJECIA_GRUPOWE.map((employee) => {
          return (
            <Link to={employee.path} key={employee.name}>
              <div className={styles.singleMemberWrapper}>
                <div className={styles.employeeImageWrapper}>
                  <img className={styles.employeeImage} src={employee.image} />
                </div>
                <div className={styles.description}>
                  <p>{employee.profession}</p>
                  <h2>{employee.name}</h2>
                  <button>Zobacz zajęcia</button>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
