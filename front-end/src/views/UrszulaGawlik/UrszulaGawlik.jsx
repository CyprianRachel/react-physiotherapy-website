import { EmployeeProfil } from "../../components/EmployeeProfil/EmployeeProfil";
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
        borderTop={true}
        sectionH2={true}
        selectedPersonId={2}
      />
    </Layout>
  );
}
