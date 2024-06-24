import { Hero } from "../../components/Hero/Hero";
import { Layout } from "../../components/Layout/Layout";
import PAWELZERDZINSKI from "../../assets/pawel-zerdzinski.jpg";
import FIZJOTERAPIAORTOPEDYCZNA from "../../assets/bengowskafoto-8.jpg";
import { ServicesWrapper } from "../../components/ServicesWrapper/ServicesWrapper";

export function FizjoterapiaOrtopedyczna() {
  return (
    <Layout>
      <Hero
        text={"Fizjoterapia"}
        highlight={"Ortopedyczna"}
        image={PAWELZERDZINSKI}
        slider={FIZJOTERAPIAORTOPEDYCZNA}
      />
      <ServicesWrapper team={false} selectedServiceId={1} />
    </Layout>
  );
}
