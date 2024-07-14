import { Layout } from "../../components/Layout/Layout";
import { ServicesWrapper } from "../../components/ServicesWrapper/ServicesWrapper";

export function MartaMisiejuk() {
  return (
    <Layout>
      <ServicesWrapper
        team={false}
        person={true}
        description={false}
        selectedServiceId={[4]}
        selectedPersonId={4}
      />
    </Layout>
  );
}
