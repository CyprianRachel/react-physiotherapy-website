import { CategorySlider } from "../../components/CategorySlider/CategorySlider";
import { Hero } from "../../components/Hero/Hero";
import { Layout } from "../../components/Layout/Layout";
import { ServicesWrapper } from "../../components/ServicesWrapper/ServicesWrapper";
import TEAMIMAGE from "../../assets/team-image.svg";
import { SLIDER_IMAGES } from "../../constants/sliderImages";

const sliderImages = SLIDER_IMAGES.find(
  (imageSet) => imageSet.id === 1
).servicesImages.map((img) => img.image);

export function MainPage() {
  return (
    <Layout>
      <Hero
        text={"Właściwy Wybór Dla Twojego"}
        highlight={"Zdrowia"}
        image={TEAMIMAGE}
        slider={sliderImages}
      />
      <CategorySlider />
      <ServicesWrapper team={false} description={false} />
    </Layout>
  );
}
