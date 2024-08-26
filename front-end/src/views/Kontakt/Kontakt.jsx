import { AllAboutUs } from "../../components/AllAboutUs/AllAboutUs";
import { CenteredContent } from "../../components/CenteredContent/CenteredContent";
import { H1 } from "../../components/H1/H1";
import { Layout } from "../../components/Layout/Layout";

export function Kontakt() {
  return (
    <Layout>
      <CenteredContent>
        <H1 text={"Kontakt"} />
      </CenteredContent>
      <AllAboutUs borderTop={false} sectionH2={false} />
    </Layout>
  );
}
