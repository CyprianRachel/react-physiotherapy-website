import { Hero } from "../../components/Hero/Hero";
import { Layout } from "../../components/Layout/Layout";
import TEAMIMAGE from "../../assets/team-image.svg";
import { SLIDER_IMAGES } from "../../constants/sliderImages";
import { ServicesWrapper } from "../../components/ServicesWrapper/ServicesWrapper";

const sliderImages = SLIDER_IMAGES.find(
  (imageSet) => imageSet.id === 3
).servicesImages.map((img) => img.image);

export function FizjoterapiaDzieciIMlodzierzy() {
  return (
    <Layout>
      <Hero
        text={"Fizjoterapia"}
        highlight={"Dzieci i Młodzieży"}
        image={TEAMIMAGE}
        slider={sliderImages}
      />
      <ServicesWrapper
        team={false}
        selectedServiceId={[2]}
        description={true}
        selectedEmployeesId={[2]}
      />
    </Layout>
  );
}
