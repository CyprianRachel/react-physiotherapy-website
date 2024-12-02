import { AllAboutUs } from "../../components/AllAboutUs/AllAboutUs";
import { BlogDisplay } from "../../components/BlogDisplay/BlogDisplay";
import { BlogWeb } from "../../components/BlogSite/BlogWeb";
import { CenteredContent } from "../../components/CenteredContent/CenteredContent";
import { H1 } from "../../components/H1/H1";
import { Layout } from "../../components/Layout/Layout";
import styles from "./Blog.module.css";

export function Blog() {
  return (
    <Layout>
      <CenteredContent>
        <BlogDisplay>
          <div>
            <H1 text={"Blog"} />
            <BlogWeb />
          </div>
          <AllAboutUs />
        </BlogDisplay>
      </CenteredContent>
    </Layout>
  );
}
