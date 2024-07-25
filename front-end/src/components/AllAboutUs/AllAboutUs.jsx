import styles from "./AllAboutUs.module.css";
import { OPENHOURS } from "../../constants/openHours";
import { HeroAboutUs } from "../HeroAboutUs/HeroAboutUs";
import { Employees } from "../Employees/Employees";
import { IconsWrapper } from "../IconsWrapper/IconsWrapper";
import { CONTACT_ICONS, ICONS } from "../../constants/aboutUsIcons";

export function AllAboutUs({
  description,
  selectedEmployeesId,
  descriptionText,
  groupActivity,
}) {
  return (
    <div className={styles.wrapperAll}>
      <Employees
        selectedEmployeesId={selectedEmployeesId}
        groupActivity={groupActivity}
      />
      {description && <HeroAboutUs descriptionText={descriptionText} />}
      <div className={styles.sticky}>
        <div className={styles.wrapper}>
          <h4>Kontakt</h4>
          <IconsWrapper icons={CONTACT_ICONS} />
          <h4>Godziny otwarcia</h4>
          <div className={styles.openHoursWrapper}>
            {OPENHOURS.map((hours) => {
              return (
                <div className={styles.singleOpenHours} key={hours.day}>
                  <span>{hours.day}</span>
                  <div>
                    <span className={styles.hours}>
                      {hours.open} - {hours.close}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
          <h4>Media społecznościowe</h4>
          <IconsWrapper icons={ICONS} />
        </div>
      </div>
    </div>
  );
}
