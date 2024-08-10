import { BlogSite } from "../../components/BlogSite/BlogSIte";
import { CenteredContent } from "../../components/CenteredContent/CenteredContent";
import { H1 } from "../../components/H1/H1";
import { Layout } from "../../components/Layout/Layout";
import { ServicesWrapper } from "../../components/ServicesWrapper/ServicesWrapper";

export function Blog() {
  return (
    <Layout>
      <CenteredContent>
        <H1 text={"Blog"} />
        <BlogSite />
      </CenteredContent>
    </Layout>
  );
}
