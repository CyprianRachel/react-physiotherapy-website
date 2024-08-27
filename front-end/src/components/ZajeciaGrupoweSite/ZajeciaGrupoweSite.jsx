import { Link } from "react-router-dom";
import { ZAJECIA_GRUPOWE } from "../../constants/zajeciaGrupowe";
import styles from "./ZajeciaGrupoweSite.module.css";
import { H1 } from "../H1/H1";

export function ZajeciaGrupoweSite() {
  return (
    <>
      <H1 text={"Zajęcia"} highlight={"grupowe"}></H1>
      <div className={styles.membersWrapper}>
        {ZAJECIA_GRUPOWE.map((employee) => {
          return (
            <Link to={employee.path} key={employee.name}>
              <div className={styles.singleMemberWrapper}>
                <img className={styles.employeeImage} src={employee.image} />
                <div className={styles.description}>
                  <h2>{employee.name}</h2>
                  <button>Zobacz zajęcia</button>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
}
