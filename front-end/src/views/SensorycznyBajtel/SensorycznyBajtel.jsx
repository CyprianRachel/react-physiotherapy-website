import { AllAboutUs } from "../../components/AllAboutUs/AllAboutUs";
import { CenteredContent } from "../../components/CenteredContent/CenteredContent";
import { Layout } from "../../components/Layout/Layout";
import { ZajeciaGrupoweView } from "../../components/ZajeciaGrupoweView/ZajeciaGrupoweView";
import styles from "../../components/SubCategory/SubCategory.module.css";
import SENSORYCZNY_BAJTEL from "../../assets/sensoryczny-bajtel.png";

export function SensorycznyBajtel() {
  return (
    <Layout>
      <ZajeciaGrupoweView>
        <div className={styles.h1DescriptionWrapper}>
          <div className={styles.groupWrapper}>
            <img className={styles.employeeImage} src={SENSORYCZNY_BAJTEL} />

            <h2>
              Sensoryczny <span className={styles.orange}>Bajtel</span>
            </h2>
          </div>
          <div className={styles.description}>
            <p>
              <strong>Sensoryczny Bajtel </strong> to profilaktyczne zajęcia
              grupowe z elementami metody integracji sensorycznej oraz ruchu
              rozwijającego Weroniki Sherborne inspirowane programem
              SMYKOMULTISENSORYKA® stworzonym przez doświadczonego pedagoga –
              Panią Aleksandrę Charezińską.
            </p>
            <p>
              Celem zajęć jest całościowy rozwój dziecka (w zakresie dużej i
              małej motoryki oraz integracji bodźców), zapobieganie deficytom
              sensorycznym a także wczesne wykrycie ewentualnych
              nieprawidłowości w sensorycznym i ruchowym rozwoju malucha.{" "}
            </p>
            <p>
              Program Sensorycznego Bajtla opracowany jest dla każdego dziecka,
              a zwłaszcza dla tych z grupy ryzyka zaburzeń integracji
              sensorycznej (dzieci z ciąż wysokiego ryzyka, ciąż rozwiązanych
              przedwcześnie oraz przez cesarskie cięcie, dla dzieci z niską
              punktacją w skali Apgar, z problemami z właściwą dystrybucją
              napięcia mięśniowego oraz tych, które późno osiągały kamienie
              milowe).
            </p>
            <p>
              Będziemy: bawić się i doświadczać, zgniatać i przesypywać,
              hałasować i mruczeć, wspinać się i huśtać, przytulać się i turlać,
              smakować i wąchać, a także rzucać, biegać, dotykać, układać i
              eksplorować!
            </p>
            <h2>Garstka ważnych informacji – Sensoryczny Bajtel to zajęcia:</h2>
            <ul>
              <li>Przeznaczone dla dzieci w wieku 15-30 miesięcy</li>
              <li>
                Grupowe (5 dzieci) – uczestniczy w nich dziecko wraz z jednym
                opiekunem
              </li>
              <li>Trwające 45 minut (+ 10 minut zabawy swobodnej)</li>
              <li>Na których nie zmuszamy i nie oczekujemy – proponujemy</li>
              <li>
                Brudzące – pamiętajmy o ubraniach na zmianę oraz mokrych
                chusteczkach
              </li>
            </ul>
          </div>
        </div>
      </ZajeciaGrupoweView>
      <AllAboutUs borderTop={true} sectionH2={true} selectedEmployeesId={[3]} />
    </Layout>
  );
}
