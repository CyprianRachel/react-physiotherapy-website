import { AllAboutUs } from "../../components/AllAboutUs/AllAboutUs";
import { CenteredContent } from "../../components/CenteredContent/CenteredContent";
import { Layout } from "../../components/Layout/Layout";
import { ZajeciaGrupoweView } from "../../components/ZajeciaGrupoweView/ZajeciaGrupoweView";
import styles from "../../components/SubCategory/SubCategory.module.css";
import BAJTEL_W_RUCHU from "../../assets/bajtel-w-ruchu.png";

export function BajtelWRuchu() {
  return (
    <Layout>
      <ZajeciaGrupoweView>
        <div className={styles.h1DescriptionWrapper}>
          <div className={styles.groupWrapper}>
            <div className={styles.employeeImageWrapper}>
              <img className={styles.employeeImage} src={BAJTEL_W_RUCHU} />
            </div>
            <h2>
              Bajtel w <span className={styles.orange}>ruchu</span>
            </h2>
          </div>
          <div className={styles.description}>
            <p>
              <strong>Bajtel w ruchu</strong> to zajęcia sportowe dla
              przedszkolaków zaprojektowane przez fizjoterapeutę i terapeutę SI
              tak, by: wspierać zdrowy rozwój dzieci, budować ich umiejętności
              społeczne, rozwijać samodzielność i dostarczać mnóstwa radości
              poprzez aktywność fizyczną.
            </p>
            <p>
              Celem zajęć jest wszechstronny rozwój ruchowy (zwinność, gibkość,
              wytrzymałość, wzmacnianie mięśni brzucha i pleców, równowaga,
              koordynacja obustronna, orientacja przestrzenna, praksja) poprzez
              gry i zabawy zespołowe, elementy gimnastyki korekcyjnej oraz
              metody integracji sensorycznej i bilateralnej.
            </p>
            <p>
              Będziemy: skakać i biegać, projektować i montować, współpracować i
              dopingować, huśtać się i wspinać, przeciskać się i turlać, a także
              poznawać, pokonywać, doskonalić, rozwijać, budować i świetnie się
              bawić!
            </p>
            <h2>Garstka ważnych informacji – Bajtel w ruchu to zajęcia:</h2>
            <ul>
              <li>Przeznaczone dla przedszkolaków</li>
              <li>Kameralne (max 6 dzieci)</li>
              <li>Trwające 60 minut</li>
              <li>Na których nie zmuszamy i nie oczekujemy – proponujemy</li>
              <li>
                Sportowe, konieczne jest wyposażenie dziecka w sportowy strój
                oraz bidon z wodą
              </li>
            </ul>
          </div>
        </div>
      </ZajeciaGrupoweView>
      <AllAboutUs selectedEmployeesId={[2, 3]} />
    </Layout>
  );
}
