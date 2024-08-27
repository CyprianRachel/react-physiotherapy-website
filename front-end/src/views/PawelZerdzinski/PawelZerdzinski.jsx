import { BlogHorizontal } from "../../components/BlogHorizontal/BlogHorizontal";
import { EmployeeProfil } from "../../components/EmployeeProfil/EmployeeProfil";
import { Layout } from "../../components/Layout/Layout";
import { ServicesWrapper } from "../../components/ServicesWrapper/ServicesWrapper";

export function PawelZerdzinski() {
  return (
    <Layout>
      <EmployeeProfil selectedPersonId={1} />
      <ServicesWrapper
        team={false}
        person={true}
        description={false}
        selectedServiceId={[1, 4]}
        borderTop={true}
        sectionH2={true}
      />
      <BlogHorizontal borderTop={true} postId="1" />
    </Layout>
  );
}
