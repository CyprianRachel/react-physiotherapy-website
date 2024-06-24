import { CategorySlider } from "../../components/CategorySlider/CategorySlider";
import { Hero } from "../../components/Hero/Hero";
import { Layout } from "../../components/Layout/Layout";
import { ServicesWrapper } from "../../components/ServicesWrapper/ServicesWrapper";
import TEAMIMAGE from "../../assets/team-image.svg";

export function MainPage() {
  return (
    <Layout>
      <Hero
        text={"Właściwy Wybór Dla Twojego"}
        highlight={"Zdrowia"}
        image={TEAMIMAGE}
        slider={TEAMIMAGE}
      />
      <CategorySlider />
      <ServicesWrapper team={true} />
    </Layout>
  );
}
