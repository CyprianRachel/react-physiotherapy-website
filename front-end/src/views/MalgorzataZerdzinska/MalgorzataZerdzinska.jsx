import { Layout } from "../../components/Layout/Layout";
import { ServicesWrapper } from "../../components/ServicesWrapper/ServicesWrapper";

export function MalgorzataZerdzinska() {
  return (
    <Layout>
      <ServicesWrapper
        team={false}
        person={true}
        description={false}
        selectedServiceId={[3]}
        selectedPersonId={3}
      />
    </Layout>
  );
}
