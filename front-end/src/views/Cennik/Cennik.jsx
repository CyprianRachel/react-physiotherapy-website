import { CenteredContent } from "../../components/CenteredContent/CenteredContent";
import { H1 } from "../../components/H1/H1";
import { Layout } from "../../components/Layout/Layout";
import { ServicesWrapper } from "../../components/ServicesWrapper/ServicesWrapper";

export function Cennik() {
  return (
    <Layout>
      <CenteredContent>
        {" "}
        <H1 text={"Cennik"} />
      </CenteredContent>
      <ServicesWrapper
        team={false}
        sectionH2={false}
        borderTop={true}
        cennik={true}
      />
    </Layout>
  );
}
