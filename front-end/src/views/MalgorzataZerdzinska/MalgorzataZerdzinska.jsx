import { EmployeeProfil } from "../../components/EmployeeProfil/EmployeeProfil";
import { Layout } from "../../components/Layout/Layout";
import { ServicesWrapper } from "../../components/ServicesWrapper/ServicesWrapper";

export function MalgorzataZerdzinska() {
  return (
    <Layout>
      <EmployeeProfil selectedPersonId={3} />
      <ServicesWrapper
        team={false}
        person={true}
        description={false}
        selectedServiceId={[3]}
        borderTop={true}
        sectionH2={true}
      />
    </Layout>
  );
}
