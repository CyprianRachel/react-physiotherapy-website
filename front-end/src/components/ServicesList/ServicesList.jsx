import { SERVICES } from "../../constants/services";
import styles from "./ServicesList.module.css";

export function ServicesList() {
  return (
    <div className={styles.wrapper}>
      <h2>Nasze usługi</h2>{" "}
      {SERVICES.map((services) => {
        const serviceCount = services.servicesList.length;
        return (
          <div className={styles.servicesWrapper} key={services.servicesName}>
            <div className={styles.servicesCounterName}>
              <h3>{services.servicesName}</h3>
              <span>Liczba usług: {serviceCount}</span>
            </div>
            <div className={styles.servicesWrapperAll}>
              {services.servicesList.map((service) => {
                return (
                  <div
                    className={styles.singleServiceWrapper}
                    key={service.serviceName}
                  >
                    <div className={styles.serviceDescription}>
                      <h4>{service.serviceName}</h4>
                      <span>{service.description}</span>
                    </div>
                    <div className={styles.servicePriceMinButton}>
                      <div className={styles.servicePriceMin}>
                        <span>{service.price} zł</span>
                        <span>{service.time}min</span>
                      </div>
                      <button>Umów</button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
