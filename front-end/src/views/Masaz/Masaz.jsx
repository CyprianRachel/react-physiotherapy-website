import { Hero } from "../../components/Hero/Hero";
import { Layout } from "../../components/Layout/Layout";
import TEAMIMAGE from "../../assets/team-image.svg";
import { ServicesWrapper } from "../../components/ServicesWrapper/ServicesWrapper";
import { SLIDER_IMAGES } from "../../constants/sliderImages";
import { CenteredContent } from "../../components/CenteredContent/CenteredContent";
import { H1 } from "../../components/H1/H1";
import { H1Wrapper } from "../../components/H1Wrapper/H1Wrapper";
import { BorderTop } from "../../components/BorderTop/BorderTop";
import { ServicesList } from "../../components/ServicesList/ServicesList";
import { AllAboutUs } from "../../components/AllAboutUs/AllAboutUs";
import styles from "./Masaz.module.css";

const sliderImages = SLIDER_IMAGES.find(
  (imageSet) => imageSet.id === 4
).servicesImages.map((img) => img.image);

export function Masaz() {
  return (
    <Layout>
      <div className={styles.wrapper}>
        <div className={styles.leftWrapper}>
          <H1Wrapper>
            <H1 text={"Masaż"} />
          </H1Wrapper>
          <BorderTop />
          <ServicesList
            team={false}
            sectionH2={true}
            borderTop={true}
            description={false}
            selectedServiceId={[4]}
          />
        </div>
        <AllAboutUs selectedEmployeesId={[1, 4, 5]} sectionH2={true} />
      </div>
    </Layout>
  );
}
