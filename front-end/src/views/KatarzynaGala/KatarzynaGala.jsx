import { Layout } from "../../components/Layout/Layout";
import { ServicesWrapper } from "../../components/ServicesWrapper/ServicesWrapper";

export function KatarzynaGala() {
  return (
    <Layout>
      <ServicesWrapper
        team={false}
        person={true}
        description={false}
        selectedServiceId={[4, 5]}
        borderTop={true}
        sectionH2={true}
        selectedPersonId={5}
      />
    </Layout>
  );
}
