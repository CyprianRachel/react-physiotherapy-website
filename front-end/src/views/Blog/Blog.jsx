import { AllAboutUs } from "../../components/AllAboutUs/AllAboutUs";
import { BlogWeb } from "../../components/BlogSite/BlogWeb";
import { CenteredContent } from "../../components/CenteredContent/CenteredContent";
import { H1 } from "../../components/H1/H1";
import { Layout } from "../../components/Layout/Layout";
import styles from "./Blog.module.css";

export function Blog() {
  return (
    <Layout>
      <CenteredContent>
        <div className={styles.flex}>
          <div>
            <H1 text={"Blog"} />
            <BlogWeb />
          </div>
          <AllAboutUs />
        </div>
      </CenteredContent>
    </Layout>
  );
}
