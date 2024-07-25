import { Layout } from "../../components/Layout/Layout";
import { ServicesWrapper } from "../../components/ServicesWrapper/ServicesWrapper";
import styles from "../../components/SubCategory/SubCategory.module.css";

export function OfertaDlaKlubow() {
  return (
    <Layout>
      <ServicesWrapper
        team={false}
        selectedServiceId={[3]}
        description={false}
        subCategory={true}
      >
        <div className={styles.h1DescriptionWrapper}>
          <div className={styles.h1Wrapper}>
            <h1>
              Oferta dla <span className={styles.orange}>klubów</span>
            </h1>
          </div>

          <div className={styles.description}>
            <p>
              Specjalizujemy się w kompleksowej opiece medycznej sportowców,
              zapewniając profesjonalne wsparcie na każdym etapie ich kariery.
            </p>
            <p>
              Nasze doświadczenie oraz nowoczesne metody diagnostyczne i
              terapeutyczne pozwalają na:
            </p>
            <ul>
              <li>Przygotowanie celowanych programów prewencyjnych</li>
              <li>Podniesienie wyników i poprawę wydajności zawodnika</li>
              <li>
                Gwarantują skuteczność w powrocie do aktywności po kontuzji.
              </li>
            </ul>
            <h2>Zakres usług diagnostycznych:</h2>
            <ol>
              <li>
                <strong>Badanie fizjoterapeutyczne składające się z:</strong>{" "}
                oceny zakresu ruchu stawów, badania postawy ciała, badania stóp,
                specjalistycznych testów ortopedycznych,{" "}
              </li>
              <li>
                <strong>Diagnostyka funkcjonalna, na którą składa się:</strong>{" "}
                Test FMS (Functional Movement Screen), YBT (Y- Balance Test),{" "}
              </li>
              <li>
                <strong>Ocena motoryczna:</strong> ocena maksymalnej siły
                izometrycznej kończyny dolnej, skok w dal,
              </li>
              <li>
                <strong>Badanie dodatkowe:</strong> analiza składu ciała.
              </li>
            </ol>
            <h2>Korzyści dla klubu:</h2>
            <ul>
              <li>
                Poprawa wyników sportowych dzięki drużynowym i indywidualnym
                programom prewencyjnym i treningowym
              </li>
              <li>
                Redukcja ryzyka kontuzji – regularne badania i monitorowanie
                stanu zdrowia zawodnika,
              </li>
              <li>Skuteczna rehabilitacja pourazowa</li>
              <li>
                Profesjonalne wsparcie – zespół specjalistów z doświadczeniem w
                pracy ze sportowcami (Piast Gliwice, Ruch Chorzów, Sośnica
                Gliwice, Grunwald Ruda Śląska)
              </li>
            </ul>
          </div>
        </div>
      </ServicesWrapper>
    </Layout>
  );
}
