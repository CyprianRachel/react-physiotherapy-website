import { useState } from "react";
import { Hero } from "../../components/Hero/Hero";
import { Layout } from "../../components/Layout/Layout";
import TEAMIMAGE from "../../assets/team-image.svg";
import { ServicesWrapper } from "../../components/ServicesWrapper/ServicesWrapper";
import { SLIDER_IMAGES } from "../../constants/sliderImages";
import styles from "../../components/SubCategory/SubCategory.module.css";
import CARROT_DOWN from "../../assets/caret-down-solid.svg";
import { BlogHorizontal } from "../../components/BlogHorizontal/BlogHorizontal";

const sliderImages = SLIDER_IMAGES.find(
  (imageSet) => imageSet.id === 2
).servicesImages.map((img) => img.image);

export function FizjoterapiaOrtopedyczna() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleContent = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Layout>
      <Hero
        text={"Fizjoterapia"}
        highlight={"Ortopedyczna"}
        image={TEAMIMAGE}
        slider={sliderImages}
      />
      <ServicesWrapper
        team={false}
        selectedServiceId={[1]}
        description={true}
        selectedEmployeesId={[1]}
        subCategory={false}
        borderTop={true}
        sectionH2={true}
      >
        <div className={styles.h1DescriptionWrapper}>
          <div className={styles.h1Wrapper}>
            <h2>
              Fizjoterapia <span className={styles.orange}>Ortopedyczna</span> z
              in.motion
            </h2>
          </div>

          <div className={styles.description}>
            <p>
              Pracujemy z <strong>pacjentami ortopedycznymi</strong>,
              <strong> sportowcami po urazach</strong> oraz{" "}
              <strong>pacjentami bólowymi</strong>.
              <p>Specjalizujemy się w rehabilitacji:</p>
            </p>
            <ol className={isExpanded ? styles.expanded : styles.collapsed}>
              <strong>
                <li>Kręgosłupa</li>
              </strong>
              <ul>
                <li>Rehabilitacja pozabiegowa w obrębie kręgosłupa</li>
                <li>Dyskopatie</li>
                <li>Zespoły bólowe kręgosłupa</li>
                <li>Kręgozmyki</li>
                <li>Niestabilność funkcjonalna</li>
                <li>
                  Drętwienia i mrowienia w obrębie kończyn górnych i dolnych
                </li>
              </ul>
              <strong>
                <li>Stawów obwodowych</li>{" "}
              </strong>
              <ul>
                <li>
                  Rehabilitacja po zabiegach po zabiegach endoprotezoplastyki
                  stawów
                </li>
                <li>
                  Rehabilitacja po zabiegach rekonstrukcji więzadeł, chrząstek,
                  zabiegach w obrębie łąkotek
                </li>
                <li>Rehabilitacja po zabiegach artroskopii</li>
                <li>W przypadku urazów przeciążeniowych</li>
                <li>Urazów mięśniowych</li>
                <li>
                  W przypadkach problemów bólowych w obrębie mięśni i stawów
                </li>
              </ul>
            </ol>
            <button onClick={toggleContent} className={styles.toggleButton}>
              {isExpanded ? "Pokaż mniej" : "Pokaż więcej"}{" "}
              <span className={styles.arrow}>
                {isExpanded ? (
                  <img className={styles.carrotUp} src={CARROT_DOWN} />
                ) : (
                  <img className={styles.carrotDown} src={CARROT_DOWN} />
                )}
              </span>
            </button>
          </div>
        </div>
      </ServicesWrapper>
      {/* <BlogHorizontal postId="1" borderTop={true} /> */}
    </Layout>
  );
}
