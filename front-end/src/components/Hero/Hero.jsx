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
          <div className={styles.mobileDisplayNone}>
            <HeroImage image={image} />
          </div>
        </div>
        <HeroSlider slider={slider} />
        <div className={styles.rightDiv}>
          <div className={styles.location}>
            <img src={LOCATIONICON} alt="LocationDotIcon"></img>
            <a
              target="_blank"
              href="https://www.google.pl/maps/place/in.motion/@50.3120921,18.925124,17z/data=!3m1!4b1!4m6!3m5!1s0x4716d3f81385df47:0x9ceed8850cf2d68b!8m2!3d50.3120887!4d18.9276989!16s%2Fg%2F11l721ttwh?entry=ttu"
            >
              Ślęzan 27/II, 41-608, Świętochłowice
            </a>
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
              W naszym gabinecie świadczymy usługi kompleksowej{" "}
              <strong>fizjoterapii ortopedycznej</strong>,{" "}
              <strong>pediatrycznej</strong> oraz{" "}
              <strong>terapii integracji sensorycznej</strong>. Stawiamy na
              ciągły rozwój naszej praktyki - naszym celem jest osiąganie jak
              najlepszych rezultatów podczas współpracy zarówno z dorosłymi jak
              i dziećmi.
            </p>
          </div>
        </div>
      </CenteredContent>
    </div>
  );
}
