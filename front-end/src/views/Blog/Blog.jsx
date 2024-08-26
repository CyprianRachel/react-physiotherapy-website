import { BlogWeb } from "../../components/BlogSite/BlogWeb";
import { CenteredContent } from "../../components/CenteredContent/CenteredContent";
import { H1 } from "../../components/H1/H1";
import { Layout } from "../../components/Layout/Layout";

export function Blog() {
  return (
    <Layout>
      <CenteredContent>
        <H1 text={"Blog"} />
      </CenteredContent>
      <CenteredContent>
        <BlogWeb />
      </CenteredContent>
    </Layout>
  );
}
