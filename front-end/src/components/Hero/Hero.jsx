import { CenteredContent } from "../CenteredContent/CenteredContent";
import styles from "./Hero.module.css";
import TEAMIMAGE from "../../assets/team-image.svg";
import LOCATIONICON from "../../assets/location-icon.svg";

export function Hero() {
  return (
    <div className={styles.hero}>
      <CenteredContent>
        <div className={styles.leftDiv}>
          <h1>
            Właściwy wybór dla twojego{" "}
            <span className={styles.highlight}>Zdrowia</span>
          </h1>

          <img src={TEAMIMAGE} alt="TeamImage"></img>
        </div>
        <div
          className={styles.centerDiv}
          style={{ backgroundImage: `url(${TEAMIMAGE})` }}
        >
          <div className={styles.opinionCounter}>
            <h2>5,0</h2>
            <p>44 opinie</p>
          </div>
        </div>
        <div className={styles.rightDiv}>
          <div className={styles.location}>
            <img src={LOCATIONICON} alt="LocationDotIcon"></img>
            <a>Ślęzan 27/II, 41-608, Świętochłowice</a>
          </div>
          <div className={styles.aboutUs}>
            <div className={styles.membersContainer}>
              <h2>O nas</h2>
              <div className={styles.members}>
                <div></div>
                <div></div>
                <div></div>
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
