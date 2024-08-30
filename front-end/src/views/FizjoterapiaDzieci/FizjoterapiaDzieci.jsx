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

export function FizjoterapiaDzieci() {
  return (
    <Layout>
      <div className={styles.wrapper}>
        <div className={styles.leftWrapper}>
          <H1Wrapper>
            <Breadcrumbs />
            <div className={styles.groupWrapperWithoutMarginBottom}>
              <h1>
                Fizjoterapia <span className={styles.orange}>dzieci</span>
              </h1>
            </div>
          </H1Wrapper>
          <div className={styles.description}>
            <p>
              Fizjoterapia dzieci to specjalistyczna dziedzina medycyny, która
              koncentruje się na diagnozowaniu, leczeniu i zapobieganiu
              problemom zdrowotnym oraz wspieraniu prawidłowego rozwoju
              ruchowego i funkcjonalnego dzieci. Celem fizjoterapii dziecięcej
              jest poprawa jakości życia poprzez wspomaganie rozwijania
              umiejętności ruchowych, eliminowanie bólu i dysfunkcji oraz
              wspieranie zdrowego rozwoju. Obejmuje różne techniki i podejścia
              dostosowane do indywidualnych potrzeb i możliwości dziecka.
            </p>
            <p>Główne cele fizjoterapii dzieci:</p>
            <ol>
              <li>
                <strong>Poprawa sprawności ruchowej</strong>
              </li>
              <li>
                <strong>Korygowanie wad postawy</strong>
              </li>
              <li>
                <strong>Leczenie i zapobieganie urazom</strong>
              </li>
              <li>
                <strong>Poprawa koordynacji i równowagi</strong>
              </li>
            </ol>
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
