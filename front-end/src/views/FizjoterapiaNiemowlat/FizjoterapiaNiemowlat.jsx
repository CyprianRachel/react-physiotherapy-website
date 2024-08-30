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

export function FizjoterapiaNiemowlat() {
  return (
    <Layout>
      <div className={styles.wrapper}>
        <div className={styles.leftWrapper}>
          <H1Wrapper>
            <Breadcrumbs />
            <div className={styles.groupWrapperWithoutMarginBottom}>
              <h1>
                Fizjoterapia <span className={styles.orange}>niemowląt</span>
              </h1>
            </div>
          </H1Wrapper>
          <div className={styles.description}>
            <p>
              Fizjoterapia niemowląt koncentruje się na wspieraniu prawidłowego
              rozwoju ruchowego dzieci od urodzenia do około 12 miesięcy. Celem
              fizjoterapii niemowląt jest wczesne wykrywanie, diagnozowanie i
              leczenie wszelkich zaburzeń ruchowych oraz wspomaganie
              harmonijnego rozwoju dziecka.
            </p>
            <p>Główne aspekty fizjoterapii niemowląt obejmują:</p>
            <ol>
              <li>
                <strong>Wczesna interwencja:</strong> usprawnianie ruchowe w
                takich trudnościach jak asymetrie, zaburzenia napięcia
                mięśniowego, opóźnienia w osiąganiu kamieni milowych rozwoju
                ruchowego.
              </li>
              <li>
                <strong>Stymulacja rozwoju ruchowego:</strong> wykorzystanie
                metody NDT-Bobath, wspieranie rozwoju motorycznego dziecka.
              </li>
              <li>
                <strong>Wsparcie dla rodziców:</strong> Edukacja rodziców na
                temat prawidłowej pielęgnacji, noszenia, karmienia oraz
                stymulacji rozwoju dziecka w codziennych czynnościach. Rodzice
                uczą się, jak wspierać rozwój swojego dziecka poprzez
                odpowiednie ćwiczenia i zabawy.
              </li>
              <li>
                <strong>Ocena rozwoju:</strong> Regularna ocena rozwoju
                ruchowego niemowlęcia, aby w razie potrzeby modyfikować plan
                terapii i dostosowywać go do aktualnych potrzeb dziecka.
              </li>
            </ol>
            <p>
              Wczesna interwencja może zapobiec późniejszym problemom zdrowotnym
              i wspomóc dziecko w osiąganiu pełni jego potencjaOcena rozwoju:
              Regularna ocena rozwoju ruchowego niemowlęcia, aby w razie
              potrzeby modyfikować plan terapii i dostosowywać go do aktualnych
              potrzeb dziecka.łu rozwojowego. Terapeuci współpracują z
              rodzicami, aby zapewnić spójność i ciągłość opieki, co jest
              niezbędne dla skutecznej terapii.
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
