import { CenteredContent } from "../../components/CenteredContent/CenteredContent";
import { H1 } from "../../components/H1/H1";
import { Layout } from "../../components/Layout/Layout";
import { NaszZespol } from "../../components/NaszZespol/NaszZespol";

export function OurTeam() {
  return (
    <Layout>
      <CenteredContent>
        <H1 text={"Nasz zespół"} />
      </CenteredContent>
      <CenteredContent>
        <NaszZespol />
      </CenteredContent>
    </Layout>
  );
}
