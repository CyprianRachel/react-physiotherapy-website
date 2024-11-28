import { AllAboutUs } from "../../components/AllAboutUs/AllAboutUs";
import { BorderTop } from "../../components/BorderTop/BorderTop";
import { Breadcrumbs } from "../../components/Breadcrumbs/Breadcrumbs";
import { CenteredContent } from "../../components/CenteredContent/CenteredContent";
import { H1 } from "../../components/H1/H1";
import { H1Wrapper } from "../../components/H1Wrapper/H1Wrapper";
import { Layout } from "../../components/Layout/Layout";
import { ServicesList } from "../../components/ServicesList/ServicesList";
import { ServicesWrapper } from "../../components/ServicesWrapper/ServicesWrapper";
import { SubcategoryImage } from "../../components/SubcategoryImage/SubcategoryImage";
import styles from "../KonsultacjaSI/KonsultacjaSI.module.css";
import SUBCATEGORYIMAGE from "../../assets/drenaz-limfatyczny/bengowskafoto-6.jpg";

export function DrenazLimfatyczny() {
  return (
    <Layout>
      <div className={styles.wrapper}>
        <div className={styles.leftWrapper}>
          <H1Wrapper>
            <Breadcrumbs />
            <div className={styles.groupWrapperWithoutMarginBottom}>
              <h1>
                Drenaż limfatyczny
                <span className={styles.orange}> mechaniczny</span>
              </h1>
            </div>
          </H1Wrapper>
          <SubcategoryImage image={SUBCATEGORYIMAGE} />
          <div className={styles.description}>
            <h2>Drenaż limfatyczny aparatem Normatec co to?</h2>
            <p>
              Drenaż limfatyczny mechaniczny wykonywany przy użyciu aparatu
              Normatec to innowacyjna terapia uciskowa, która wspomaga przepływ
              limfy w organizmie, przyczyniając się do poprawy ogólnego stanu
              zdrowia i samopoczucia. Aparat Normatec, wykorzystując
              zaawansowaną technologię pulsacyjnej kompresji, naśladuje
              naturalne ruchy ciała, pomagając w odprowadzeniu nadmiaru płynów z
              tkanek i redukcji obrzęków. Ten zabieg jest coraz częściej
              wybierany zarówno przez osoby aktywne fizycznie, jak i przez osoby
              w trakcie rehabilitacji.
            </p>
            <h2>Zalety drenażu limfatycznego aparatem Normatec</h2>
            <p>
              Drenaż limfatyczny aparatem Normatec niesie ze sobą wiele
              korzyści, zarówno zdrowotnych, jak i regeneracyjnych. Poniżej
              przedstawiamy główne zalety tej terapii oraz sytuacje, w których
              warto ją zastosować:
            </p>
            <ol>
              <li>
                <strong>Redukcja obrzęków i poprawa przepływu limfy</strong>
              </li>
              <li>
                <strong>Przyspieszenie regeneracji po wysiłku fizycznym</strong>
              </li>
              <li>
                <strong>Łagodzenie uczucia ciężkich nóg</strong>
              </li>
              <li>
                <strong>
                  Wsparcie w rehabilitacji po zabiegach ortopedycznych
                </strong>
              </li>
              <li>
                <strong>Redukcja napięcia mięśniowego</strong>
              </li>
              <li>
                <strong>Poprawa krążenia</strong>
              </li>
              <li>
                <strong>Nieinwazyjność i bezpieczeństwo</strong>
              </li>
            </ol>
            <h2>
              Kiedy warto zastosować drenaż limfatyczny aparatem Normatec?
            </h2>
            <p>
              Drenaż limfatyczny Normatec jest wszechstronną terapią, która może
              być stosowana w różnych sytuacjach i przy wielu dolegliwościach.
              Jest szczególnie polecany osobom aktywnym fizycznie, pacjentom w
              trakcie rehabilitacji, a także osobom borykającym się z problemami
              krążenia lub obrzękami. Poniżej przedstawiamy najważniejsze
              sytuacje, w których warto rozważyć zastosowanie tego zabiegu:
            </p>
            <ol>
              <li>
                <strong>Po intensywnym wysiłku fizycznym</strong>
              </li>
              <li>
                <strong>
                  W trakcie rehabilitacji po zabiegach ortopedycznych
                </strong>
              </li>
              <li>
                <strong>Przy problemach z obrzękami limfatycznymi</strong>
              </li>
              <li>
                <strong>Przy uczuciu ciężkich, zmęczonych nóg</strong>
              </li>
              <li>
                <strong>W celach regeneracyjnych</strong>
              </li>
              <li>
                <strong>Po zabiegach estetycznych</strong>
              </li>
            </ol>
            <h2>Podsumowanie</h2>
            <p>
              Drenaż limfatyczny aparatem Normatec to wszechstronny zabieg,
              który nie tylko wspomaga regenerację mięśni i przyspiesza powrót
              do zdrowia po operacjach, ale także przynosi ulgę w przypadku
              obrzęków, uczucia ciężkich nóg czy napięcia mięśniowego. Jest to
              bezpieczna i efektywna metoda terapii, która z powodzeniem może
              być stosowana zarówno przez sportowców, jak i osoby zmagające się
              z problemami zdrowotnymi czy szukające wsparcia regeneracyjnego.
            </p>
          </div>
          <BorderTop />
          <ServicesList
            team={false}
            sectionH2={true}
            borderTop={true}
            selectedServiceId={[1]}
            description={false}
          />
        </div>

        <AllAboutUs sectionH2={true} selectedEmployeesId={[1]} />
      </div>
    </Layout>
  );
}
