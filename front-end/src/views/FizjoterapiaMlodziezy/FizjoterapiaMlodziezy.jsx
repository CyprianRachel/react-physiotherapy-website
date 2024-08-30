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

export function FizjoterapiaMlodziezy() {
  return (
    <Layout>
      <div className={styles.wrapper}>
        <div className={styles.leftWrapper}>
          <H1Wrapper>
            <Breadcrumbs />
            <div className={styles.groupWrapperWithoutMarginBottom}>
              <h1>
                Fizjoterapia <span className={styles.orange}>młodzieży</span>
              </h1>
            </div>
          </H1Wrapper>
          <div className={styles.description}>
            <p>
              Fizjoterapia młodzieży koncentruje się na diagnozowaniu, leczeniu
              i zapobieganiu problemom zdrowotnym u młodych ludzi. Ta grupa
              wiekowa jest szczególnie podatna na różne dolegliwości ze względu
              na szybki wzrost, zmiany hormonalne i aktywność fizyczną.
            </p>
            <p>Główne cele fizjoterapii młodzieży to:</p>
            <ol>
              <li>
                <strong>Prewencja urazów i schorzeń:</strong> Edukacja młodzieży
                w zakresie prawidłowej postawy, ergonomii podczas nauki i pracy
                oraz zdrowych nawyków ruchowych.
              </li>
              <li>
                <strong>Leczenie urazów:</strong> Indywidualne programy
                rehabilitacyjne dla młodzieży, która doznała kontuzji, np.
                skręceń, złamań, naciągnięć mięśni czy uszkodzeń stawów. Terapie
                mogą obejmować ćwiczenia wzmacniające, techniki manualne.
              </li>
              <li>
                <strong>Poprawa sprawności fizycznej:</strong> Ćwiczenia
                wzmacniające, poprawiające elastyczność, koordynację i
                wytrzymałość, które mogą przyczynić się do lepszego
                funkcjonowania młodzieży zarówno w codziennych czynnościach, jak
                i w aktywnościach sportowych.
              </li>
              <li>
                <strong>Wsparcie rozwoju fizycznego:</strong> Zapewnienie, że
                młodzież rozwija się w sposób zdrowy i zrównoważony,
                uwzględniając indywidualne potrzeby i możliwości fizyczne
                każdego pacjenta.
              </li>
              <li>
                <strong>Terapia:</strong> Techniki i metody, które pomagają w
                łagodzeniu bólu, na przykład bólu pleców, kolan, barków czy
                innych części ciała, które mogą być obciążone w wyniku
                aktywności fizycznej, złej postawy lub innych przyczyn.
              </li>
              <li>
                <strong>Rehabilitacja pooperacyjna:</strong> Wsparcie w powrocie
                do pełnej sprawności po zabiegach chirurgicznych, takich jak
                operacje ortopedyczne, przez indywidualnie dobrane programy
                rehabilitacyjne.
              </li>
            </ol>
            <p>
              Fizjoterapia młodzieży jest kluczowa dla zapewnienia zdrowego
              rozwoju i zapobiegania problemom zdrowotnym, które mogą wpływać na
              jakość życia młodych ludzi w przyszłości.
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
