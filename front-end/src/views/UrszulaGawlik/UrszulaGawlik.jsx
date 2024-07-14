import { Layout } from "../../components/Layout/Layout";
import { ServicesWrapper } from "../../components/ServicesWrapper/ServicesWrapper";

export function UrszulaGawlik() {
  return (
    <Layout>
      <ServicesWrapper
        team={false}
        person={true}
        description={false}
        selectedServiceId={[2]}
        selectedPersonId={2}
      />
    </Layout>
  );
}
