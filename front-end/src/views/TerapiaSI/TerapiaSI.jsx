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

export function TerapiaSI() {
  return (
    <Layout>
      <div className={styles.wrapper}>
        <div className={styles.leftWrapper}>
          <H1Wrapper>
            <Breadcrumbs />
            <div className={styles.groupWrapperWithoutMarginBottom}>
              <h1>
                Terapia <span className={styles.orange}>SI</span>
              </h1>
            </div>
          </H1Wrapper>
          <div className={styles.description}>
            <p>
              To proces, którego celem jest poprawa funkcjonowania dziecka w
              środowisku domowym oraz przedszkolnym/szkolnym. Wykorzystując
              naturalną potrzebę zabawy i ruchu terapeuta SI dobiera aktywności
              w taki sposób, by układ nerwowy dziecka był „usatysfakcjonowany”,
              a reakcja adaptacyjna (czyli odpowiedź na bodziec) stała się
              adekwatna do sytuacji. Podczas zajęć dziecko korzysta ze
              specjalistycznego sprzętu jak: hamak, różnego typu huśtawki,
              deskorolka, piłka rehabilitacyjna czy tor równoważny dlatego
              konieczne jest zapewnienie mu wygody. Podczas zajęć obowiązuje
              strój sportowy (dres/spodenki/getry i koszulka) oraz spięte włosy.
              Terapia SI odbywa się w kontakcie indywidualnym i trwa 50 minut.
            </p>
            <p>
              <strong>
                WAŻNE: terapią SI może być objęte dziecko posiadające aktualną
                diagnozę procesów przetwarzania sensorycznego (nie starszą niż 6
                miesięcy).
              </strong>
            </p>
          </div>
          <BorderTop />
          <ServicesList
            team={false}
            sectionH2={true}
            borderTop={true}
            selectedServiceId={[3]}
            description={false}
            selectedEmployeesId={[3]}
          />
        </div>

        <AllAboutUs sectionH2={true} selectedEmployeesId={[3]} />
      </div>
    </Layout>
  );
}
