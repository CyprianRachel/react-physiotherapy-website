import { CategorySlider } from "../../components/CategorySlider/CategorySlider";
import { Hero } from "../../components/Hero/Hero";
import { Layout } from "../../components/Layout/Layout";
import { ServicesWrapper } from "../../components/ServicesWrapper/ServicesWrapper";

export function MainPage() {
  return (
    <Layout>
      <Hero />
      <CategorySlider />
      <ServicesWrapper />
    </Layout>
  );
}
