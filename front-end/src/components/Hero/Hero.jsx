import { CenteredContent } from "../CenteredContent/CenteredContent";
import styles from "./Hero.module.css";
import LOCATIONICON from "../../assets/location-icon.svg";
import { HeroSlider } from "../HeroSlider/HeroSlider";
import { H1 } from "../H1/H1";
import { HeroImage } from "../HeroImage/HeroImage";
import { TEAMMEMBERS } from "../../constants/teamMembers";

export function Hero({ text, highlight, image, slider }) {
  return (
    <div className={styles.hero}>
      <CenteredContent>
        <div className={styles.leftDiv}>
          <H1 text={text} highlight={highlight} />
          <HeroImage image={image} />
        </div>
        <HeroSlider slider={slider} />
        <div className={styles.rightDiv}>
          <div className={styles.location}>
            <img src={LOCATIONICON} alt="LocationDotIcon"></img>
            <a>Ślęzan 27/II, 41-608, Świętochłowice</a>
          </div>
          <div className={styles.aboutUs}>
            <div className={styles.membersContainer}>
              <h2>O nas</h2>
              <div className={styles.membersWrapper}>
                {TEAMMEMBERS.map((employee) => {
                  return (
                    <div
                      key={employee.name}
                      className={styles.employeeImage}
                      style={{
                        backgroundImage: `url(${employee.image})`,
                      }}
                    ></div>
                  );
                })}
              </div>
            </div>
            <p>
              W naszym gabinecie świadczymy usługi kompleksowej fizjoterapii
              ortopedycznej, pediatrycznej oraz terapii integracji sensorycznej.
              Stawiamy na ciągły rozwój naszej praktyki - naszym celem jest
              osiąganie jak najlepszych rezultatów podczas współpracy zarówno z
              dorosłymi jak i dziećmi.
            </p>
          </div>
        </div>
      </CenteredContent>
    </div>
  );
}
