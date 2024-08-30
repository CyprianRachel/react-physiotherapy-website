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

export function TreningFunkcjonalnyDzieciIMlodziezy() {
  return (
    <Layout>
      <div className={styles.wrapper}>
        <div className={styles.leftWrapper}>
          <H1Wrapper>
            <Breadcrumbs />
            <div className={styles.groupWrapperWithoutMarginBottom}>
              <h1>
                Trening funkcjonalny{" "}
                <span className={styles.orange}>dzieci i młodzieży</span>
              </h1>
            </div>
          </H1Wrapper>
          <div className={styles.description}>
            <p>
              Trening funkcjonalny dla dzieci i młodzieży to forma ćwiczeń
              fizycznych skoncentrowana na poprawie zdolności do wykonywania
              codziennych czynności i aktywności sportowych. Celem jest rozwój
              siły, elastyczności, koordynacji, równowagi i wytrzymałości w
              sposób, który jest dostosowany do wieku i zdolności fizycznych
              młodych osób. Trening funkcjonalny jest holistycznym podejściem,
              które uwzględnia wszechstronny rozwój motoryczny.
            </p>
            <p>Korzyści Treningu Funkcjonalnego:</p>
            <ol>
              <li>
                <strong>Poprawa sprawności ogólnej</strong>
              </li>
              <li>
                <strong>Prewencja urazów</strong>
              </li>
              <li>
                <strong>Lepsza postawa</strong>
              </li>
              <li>
                <strong>Zwiększenie pewności siebie</strong>
              </li>
              <li>
                <strong>Zabawa i motywacja</strong>
              </li>
            </ol>
            <p>Dostosowanie do Wiek i Poziomu Zaawansowania</p>
            <ol>
              <li>
                <strong>Indywidualizacja Treningu</strong>
              </li>
            </ol>
            <ul>
              <li>
                <strong>Programy dostosowane do indywidualnych potrzeb:</strong>
                Trening jest dostosowany do wieku, poziomu zaawansowania i
                specyficznych potrzeb każdego dziecka.
              </li>
            </ul>
            <ol start="2">
              <li>
                <strong>Progresywność Ćwiczeń</strong>
              </li>
            </ol>
            <ul>
              <li>
                <strong>Stopniowe zwiększanie intensywności:</strong>
                Trening jest dostosowany do wieku, poziomu zaawansowania i
                specyficznych potrzeb każdego dziecka.
              </li>
            </ul>
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
