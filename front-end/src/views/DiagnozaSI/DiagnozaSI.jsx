import { CenteredContent } from "../../components/CenteredContent/CenteredContent";
import { H1 } from "../../components/H1/H1";
import { Layout } from "../../components/Layout/Layout";
import { ServicesWrapper } from "../../components/ServicesWrapper/ServicesWrapper";
import styles from "../../components/SubCategory/SubCategory.module.css";

export function DiagnozaSI() {
  return (
    <Layout>
      <CenteredContent>
        <H1 text={"Diagnoza"} highlight={"SI"}></H1>
      </CenteredContent>
      <ServicesWrapper
        team={false}
        selectedServiceId={[3]}
        description={false}
        selectedEmployeesId={[3]}
        subCategory={true}
        borderTop={true}
        sectionH2={true}
      >
        {/* <div className={styles.leftDiv}>
        <HeroImage image={image} />
      </div> */}
        <div className={styles.h1DescriptionWrapper}>
          <p className={styles.description}>
            <p>
              <strong>
                W in.motion Diagnoza Procesów Przetwarzania Sensorycznego
              </strong>{" "}
              składa się z trzech części, które obejmują:{" "}
            </p>
            <ul>
              <li>Wywiad z rodzicem/prawnym opiekunem</li>
              <li>Spotkanie diagnostyczne z dzieckiem</li>
              <li>Szczegółowe omówienie wyników przeprowadzonej diagnozy</li>
            </ul>
            <p>
              {" "}
              Termin każdej części ustala się osobno i niezależnie od
              pozostałych spotkań.
            </p>
            <h2>Diagnoza SI dziecka do 4 r.ż.</h2>
            <p>
              <strong>Część I</strong> obejmuje szczegółowy wywiad z
              rodzicem/opiekunem prawnym na temat okresu przed narodzeniem
              dziecka, okresu okołoporodowego oraz czasu po narodzinach.
              <strong>
                {" "}
                Konieczne jest zabranie ze sobą: książeczki zdrowia dziecka,
                kompletu ewentualnych badań i konsultacji specjalistycznych oraz
                opinii wychowawcy ze żłobka lub przedszkola.
              </strong>{" "}
              Spotkanie odbywa się bez obecności dziecka i trwa około 50 minut.
              Na zakończenie spotkania rodzic/opiekun prawny otrzymuje
              Kwestionariusz Rozwoju Sensomotorycznego dziecka. Wypełniony
              dokument należy zabrać ze sobą na II część diagnozy SI.
            </p>{" "}
            <p>
              <strong>Część II (w przypadku dziecka do 4 r.ż.)</strong> obejmuje
              obserwację dziecka podczas spontanicznej zabawy oraz konkretnych
              zadań i aktywności. Konieczne jest zapewnienie dziecku wygodnego
              stroju (spodnie dresowe/getry, koszulka). Spotkanie trwa około 1
              godziny.
            </p>{" "}
            <p>
              <strong>Część III</strong> obejmuje omówienie procesów
              przetwarzania sensorycznego dziecka, zalecenia do dalszej pracy w
              warunkach domowych oraz do ewentualnej pracy terapeutycznej.
              Spotkanie odbywa się bez obecności dziecka, trwa około 30 minut i
              kończy się wydaniem pisemnej opinii.
            </p>
            <h2>Diagnoza SI dziecka powyżej 4 r.ż.</h2>
            <p>
              <strong>Część I</strong> obejmuje szczegółowy wywiad z
              rodzicem/opiekunem prawnym na temat okresu przed narodzeniem
              dziecka, okresu okołoporodowego oraz czasu po narodzinach.
              <strong>
                {" "}
                Konieczne jest zabranie ze sobą: książeczki zdrowia dziecka,
                kompletu ewentualnych badań i konsultacji specjalistycznych oraz
                opinii wychowawcy przedszkola lub szkoły.
              </strong>{" "}
              Spotkanie odbywa się bez obecności dziecka i trwa około 50 minut.
              Na zakończenie spotkania rodzic/opiekun prawny otrzymuje
              Kwestionariusz Rozwoju Sensomotorycznego dziecka. Wypełniony
              dokument należy zabrać ze sobą na II część diagnozy SI.
            </p>{" "}
            <p>
              <strong>Część II (w przypadku dziecka powyżej 4 r.ż.)</strong>{" "}
              obejmuje Obserwację Kliniczną (w skład której wchodzi szereg zadań
              sprawdzających poziom umiejętności planowania ruchowego,
              koordynacji, reakcji równoważnych, itp.) oraz specjalistyczne
              testy (sprawdzające m.in. reakcję na polecenia słowne, percepcję
              dotykową czy wyczucie rytmu). Konieczne jest zapewnienie dziecku
              wygodnego stroju (spodnie dresowe/getry, koszulka, skarpetki).
              Spotkanie trwa około 1,5 godziny.
            </p>{" "}
            <p>
              <strong>Część III</strong> obejmuje omówienie procesów
              przetwarzania sensorycznego dziecka, zalecenia do dalszej pracy w
              warunkach domowych oraz do ewentualnej pracy terapeutycznej.
              Spotkanie odbywa się bez obecności dziecka, trwa około 30 minut i
              kończy się wydaniem pisemnej opinii.
            </p>
          </p>
        </div>
      </ServicesWrapper>
    </Layout>
  );
}
