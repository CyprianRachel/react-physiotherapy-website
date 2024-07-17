import { Layout } from "../../components/Layout/Layout";
import TEAMIMAGE from "../../assets/team-image.svg";
import { ServicesWrapper } from "../../components/ServicesWrapper/ServicesWrapper";
import { SubCategory } from "../../components/SubCategory/SubCategory";

export function KonsultacjaSI() {
  return (
    <Layout>
      <ServicesWrapper
        team={false}
        selectedServiceId={[3]}
        description={false}
        selectedEmployeesId={[3]}
        subCategory={true}
      />
    </Layout>
  );
}
