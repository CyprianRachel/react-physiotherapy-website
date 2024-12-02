import { Layout } from "../../components/Layout/Layout";
import { ServicesWrapper } from "../../components/ServicesWrapper/ServicesWrapper";

export function DawidOlszowka() {
  return (
    <Layout>
      <ServicesWrapper
        team={false}
        person={true}
        description={false}
        selectedServiceId={[1, 6]}
        selectedPersonId={6}
        borderTop={true}
        sectionH2={true}
      />
    </Layout>
  );
}
