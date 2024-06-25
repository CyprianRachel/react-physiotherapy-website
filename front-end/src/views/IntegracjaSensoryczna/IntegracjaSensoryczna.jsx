import { Hero } from "../../components/Hero/Hero";
import { Layout } from "../../components/Layout/Layout";
import MALGORZANA_ZERDZINSKA from "../../assets/IN-MOTION-38.jpg";
import { ServicesWrapper } from "../../components/ServicesWrapper/ServicesWrapper";
import { SLIDER_IMAGES } from "../../constants/sliderImages";

const sliderImages = SLIDER_IMAGES.find(
  (imageSet) => imageSet.id === 3
).servicesImages.map((img) => img.image);

export function IntegracjaSensoryczna() {
  return (
    <Layout>
      <Hero
        text={"Integracja"}
        highlight={"Sensoryczna"}
        image={MALGORZANA_ZERDZINSKA}
        slider={sliderImages}
      />
      <ServicesWrapper team={false} selectedServiceId={3} />
    </Layout>
  );
}
