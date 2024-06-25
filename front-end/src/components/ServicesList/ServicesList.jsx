import { useState } from "react";
import { SERVICES } from "../../constants/services";
import { ServicePopup } from "../ServicePopup/ServicePopup";
import styles from "./ServicesList.module.css";

export function ServicesList({ selectedServiceId }) {
  const filteredServices = selectedServiceId
    ? SERVICES.filter((service) => service.id === selectedServiceId)
    : SERVICES;

  const [popupData, setPopupData] = useState({
    isPopupOpen: false,
    serviceName: "",
    serviceDescription: "",
    servicePrice: "",
    serviceTime: "",
  });

  function openPopup(
    serviceName,
    serviceDescription,
    servicePrice,
    serviceTime
  ) {
    setPopupData({
      isPopupOpen: true,
      serviceName,
      serviceDescription,
      servicePrice,
      serviceTime,
    });
  }

  function closePopup() {
    setPopupData({
      isPopupOpen: false,
      serviceName: "",
      serviceDescription: "",
      servicePrice: "",
      serviceTime: "",
    });
  }

  const getDescriptionPreview = (description) => {
    const words = description.split(" ");
    if (words.length > 10) {
      return words.slice(0, 10).join(" ") + "...";
    }
    return description;
  };

  return (
    <div className={styles.wrapper}>
      {popupData.isPopupOpen && (
        <ServicePopup
          serviceName={popupData.serviceName}
          serviceDescription={popupData.serviceDescription}
          servicePrice={popupData.servicePrice}
          serviceTime={popupData.serviceTime}
          onClose={closePopup}
        />
      )}
      <h2>
        Nasze <span className={styles.highlighted}>usługi</span>
      </h2>
      {filteredServices.map((services) => {
        const serviceCount = services.servicesList.length;
        return (
          <div className={styles.servicesWrapper} key={services.servicesName}>
            <div className={styles.servicesCounterName}>
              <h3>{services.servicesName}</h3>
              <span className={styles.servicesCounter}>
                {serviceCount} usług
              </span>
            </div>
            <div className={styles.servicesWrapperAll}>
              {services.servicesList.map((service) => {
                const words = service.description.split(" ");
                const isLongDescription = words.length > 10;
                const descriptionPreview = getDescriptionPreview(
                  service.description
                );

                return (
                  <div
                    className={styles.singleServiceWrapper}
                    key={service.serviceName}
                  >
                    <div className={styles.serviceDescription}>
                      <p>{service.serviceName}</p>
                      <span>{descriptionPreview}</span>
                      {isLongDescription && (
                        <div
                          className={styles.buttonPopup}
                          onClick={() =>
                            openPopup(
                              service.serviceName,
                              service.description,
                              service.price,
                              service.time
                            )
                          }
                        >
                          Więcej
                        </div>
                      )}
                    </div>
                    <div className={styles.servicePriceMinButton}>
                      <div className={styles.servicePriceMin}>
                        <span className={styles.price}>{service.price}</span>
                        <span className={styles.time}>{service.time}</span>
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
