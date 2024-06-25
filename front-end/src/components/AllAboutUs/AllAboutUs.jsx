import { TEAMMEMBERS } from "../../constants/teamMembers";
import styles from "./AllAboutUs.module.css";
import PHONEICON from "../../assets/phone-icon.svg";
import UPRIGHTICON from "../../assets/up-right-icon.svg";
import INSTAGRAMORANGE from "../../assets/instagram-orange.svg";
import { OPENHOURS } from "../../constants/openHours";

export function AllAboutUs({ team }) {
  return (
    <div className={styles.wrapper}>
      {team ? (
        <>
          <h4>Nasz zespół</h4>
          <div className={styles.membersWrapper}>
            {TEAMMEMBERS.map((employee) => {
              return (
                <div key={employee.name} className={styles.memberWrapper}>
                  <div className={styles.singleEmployee}>
                    <div
                      className={styles.employeeImage}
                      style={{
                        backgroundImage: `url(${employee.image})`,
                      }}
                    ></div>
                    <div className={styles.professionWrapper}>
                      <p>{employee.profession}</p>
                      <h4>{employee.name}</h4>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      ) : (
        ""
      )}
      <h4>Kontakt</h4>
      <div className={styles.contactWrapper}>
        <div className={styles.number}>
          <img className={styles.icon} src={PHONEICON}></img>
          <span>660 143 444</span>
        </div>
        <button className={styles.button}>Zadzwoń</button>
      </div>
      <h4>Godziny otwarcia</h4>
      <div className={styles.openHoursWrapper}>
        {OPENHOURS.map((hours) => {
          return (
            <div className={styles.singleOpenHours} key={hours.day}>
              <span>{hours.day}</span>
              <div>
                <span>
                  <b>
                    {hours.open} - {hours.close}
                  </b>
                </span>
              </div>
            </div>
          );
        })}
      </div>
      <h4>Media społecznościowe</h4>
      <div className={styles.contactWrapper}>
        <div className={styles.number}>
          <img className={styles.icon} src={INSTAGRAMORANGE}></img>
          <span>Instagram</span>
        </div>
        <img className={styles.icon} src={UPRIGHTICON}></img>
      </div>
    </div>
  );
}
