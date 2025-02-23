import { Hero } from "../../components/Hero/Hero";
import { Layout } from "../../components/Layout/Layout";
import TEAMIMAGE from "../../assets/team-image.svg";
import { ServicesWrapper } from "../../components/ServicesWrapper/ServicesWrapper";
import { SLIDER_IMAGES } from "../../constants/sliderImages";

const sliderImages = SLIDER_IMAGES.find(
  (imageSet) => imageSet.id === 4
).servicesImages.map((img) => img.image);

export function IntegracjaSensoryczna() {
  return (
    <Layout>
      <Hero
        text={"Integracja"}
        highlight={"Sensoryczna"}
        image={TEAMIMAGE}
        slider={sliderImages}
      />
      <ServicesWrapper
        team={false}
        selectedServiceId={[3]}
        description={false}
        selectedEmployeesId={[3]}
        borderTop={true}
        sectionH2={true}
      />
    </Layout>
  );
}
