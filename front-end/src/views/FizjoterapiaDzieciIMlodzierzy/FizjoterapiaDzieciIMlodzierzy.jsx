import { Hero } from "../../components/Hero/Hero";
import { Layout } from "../../components/Layout/Layout";
import URSZULA_GAWLIK from "../../assets/IN-MOTION-37.jpg";
import FIZJOTERAPIA_DZIECI_I_MLODZIERZY from "../../assets/IN-MOTION-28.jpg";
import { ServicesWrapper } from "../../components/ServicesWrapper/ServicesWrapper";

export function FizjoterapiaDzieciIMlodzierzy() {
  return (
    <Layout>
      <Hero
        text={"Fizjoterapia"}
        highlight={"Dzieci i Młodzieży"}
        image={URSZULA_GAWLIK}
        slider={FIZJOTERAPIA_DZIECI_I_MLODZIERZY}
      />
      <ServicesWrapper team={false} selectedServiceId={2} />
    </Layout>
  );
}
