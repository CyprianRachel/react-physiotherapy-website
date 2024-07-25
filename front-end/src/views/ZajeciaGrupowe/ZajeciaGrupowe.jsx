import { CenteredContent } from "../../components/CenteredContent/CenteredContent";
import { Layout } from "../../components/Layout/Layout";
import { ZajeciaGrupoweSite } from "../../components/ZajeciaGrupoweSite/ZajeciaGrupoweSite";

export function ZajeciaGrupowe() {
  return (
    <Layout>
      <CenteredContent>
        <ZajeciaGrupoweSite />
      </CenteredContent>
    </Layout>
  );
}
