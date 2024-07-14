import { Hero } from "../../components/Hero/Hero";
import { Layout } from "../../components/Layout/Layout";
import TEAMIMAGE from "../../assets/team-image.svg";
import { ServicesWrapper } from "../../components/ServicesWrapper/ServicesWrapper";
import { SLIDER_IMAGES } from "../../constants/sliderImages";

const sliderImages = SLIDER_IMAGES.find(
  (imageSet) => imageSet.id === 2
).servicesImages.map((img) => img.image);

export function FizjoterapiaOrtopedyczna() {
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
      />
    </Layout>
  );
}
