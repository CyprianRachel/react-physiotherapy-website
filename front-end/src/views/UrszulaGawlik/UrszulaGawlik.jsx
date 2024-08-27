import { EmployeeProfil } from "../../components/EmployeeProfil/EmployeeProfil";
import { Layout } from "../../components/Layout/Layout";
import { ServicesWrapper } from "../../components/ServicesWrapper/ServicesWrapper";

export function UrszulaGawlik() {
  return (
    <Layout>
      <EmployeeProfil selectedPersonId={2} />
      <ServicesWrapper
        team={false}
        person={true}
        description={false}
        selectedServiceId={[2]}
        borderTop={true}
        sectionH2={true}
      />
    </Layout>
  );
}
