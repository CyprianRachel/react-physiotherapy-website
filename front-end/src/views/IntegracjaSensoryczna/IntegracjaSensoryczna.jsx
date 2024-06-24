import { Hero } from "../../components/Hero/Hero";
import { Layout } from "../../components/Layout/Layout";
import MALGORZANA_ZERDZINSKA from "../../assets/IN-MOTION-38.jpg";
import INTEGRACJA_SENSORYCZNA from "../../assets/IN-MOTION-5.jpg";
import { ServicesWrapper } from "../../components/ServicesWrapper/ServicesWrapper";

export function IntegracjaSensoryczna() {
  return (
    <Layout>
      <Hero
        text={"Integracja"}
        highlight={"Sensoryczna"}
        image={MALGORZANA_ZERDZINSKA}
        slider={INTEGRACJA_SENSORYCZNA}
      />
      <ServicesWrapper team={false} selectedServiceId={3} />
    </Layout>
  );
}
