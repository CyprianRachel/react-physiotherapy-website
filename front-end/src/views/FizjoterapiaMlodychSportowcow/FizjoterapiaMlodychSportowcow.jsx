import { AllAboutUs } from "../../components/AllAboutUs/AllAboutUs";
import { BorderTop } from "../../components/BorderTop/BorderTop";
import { Breadcrumbs } from "../../components/Breadcrumbs/Breadcrumbs";
import { CenteredContent } from "../../components/CenteredContent/CenteredContent";
import { H1 } from "../../components/H1/H1";
import { H1Wrapper } from "../../components/H1Wrapper/H1Wrapper";
import { Layout } from "../../components/Layout/Layout";
import { ServicesList } from "../../components/ServicesList/ServicesList";
import { ServicesWrapper } from "../../components/ServicesWrapper/ServicesWrapper";
import styles from "../KonsultacjaSI/KonsultacjaSI.module.css";

export function FizjoterapiaMlodychSportowcow() {
  return (
    <Layout>
      <div className={styles.wrapper}>
        <div className={styles.leftWrapper}>
          <H1Wrapper>
            <Breadcrumbs />
            <div className={styles.groupWrapperWithoutMarginBottom}>
              <h1>
                Fizjoterapia młodych{" "}
                <span className={styles.orange}>sportowców</span>
              </h1>
            </div>
          </H1Wrapper>
          <div className={styles.description}>
            <p>
              Fizjoterapia młodych sportowców to specjalistyczna dziedzina,
              której celem jest prewencja, diagnoza i leczenie urazów oraz
              optymalizacja zdolności fizycznych młodych osób aktywnie
              uprawiających sport. Składa się z różnych metod i technik, które
              są dostosowane do specyficznych potrzeb rozwijającego się
              organizmu, uwzględniając dynamiczny wzrost i zmiany fizjologiczne.
            </p>
            <p>Główne cele fizjoterapii młodych sportowców to:</p>
            <ol>
              <li>
                <strong>Prewencja urazów:</strong> Edukacja w zakresie właściwej
                techniki wykonywania ćwiczeń, prawidłowego rozgrzewania i
                rozciągania, a także ergonomii treningu.
              </li>
              <li>
                <strong>Rehabilitacja urazów:</strong> Indywidualne programy
                terapeutyczne obejmujące ćwiczenia, mobilizacje, terapie
                manualne i inne techniki wspomagające powrót do pełnej
                sprawności po kontuzjach.
              </li>
              <li>
                <strong>Optymalizacja wydolności:</strong> Ćwiczenia i techniki
                mające na celu poprawę siły, wytrzymałości, elastyczności oraz
                koordynacji, co może przyczynić się do lepszych wyników
                sportowych.
              </li>
              <li>
                <strong>Edukacja:</strong> Informowanie młodych sportowców i ich
                rodziców o znaczeniu odpowiedniego nawodnienia, odżywiania oraz
                dbania o równowagę między treningiem a odpoczynkiem.
              </li>
              <li>
                <strong>Indywidualne podejście:</strong> Każdy młody sportowiec
                otrzymuje program dostosowany do jego specyficznych potrzeb,
                rodzaju uprawianego sportu oraz poziomu zaawansowania.
              </li>
            </ol>
            <p>
              Fizjoterapia młodych sportowców odgrywa kluczową rolę w
              zapewnieniu zdrowego i bezpiecznego rozwoju fizycznego, pozwalając
              na osiąganie lepszych wyników sportowych oraz minimalizując ryzyko
              długoterminowych urazów.
            </p>
          </div>
          <BorderTop />
          <ServicesList
            team={false}
            sectionH2={true}
            borderTop={true}
            selectedServiceId={[2]}
            description={false}
          />
        </div>

        <AllAboutUs sectionH2={true} selectedEmployeesId={[2]} />
      </div>
    </Layout>
  );
}
