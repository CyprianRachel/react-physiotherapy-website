import { AllAboutUs } from "../../components/AllAboutUs/AllAboutUs";
import { BorderTop } from "../../components/BorderTop/BorderTop";
import { Breadcrumbs } from "../../components/Breadcrumbs/Breadcrumbs";
import { CenteredContent } from "../../components/CenteredContent/CenteredContent";
import { H1 } from "../../components/H1/H1";
import { H1Wrapper } from "../../components/H1Wrapper/H1Wrapper";
import { Layout } from "../../components/Layout/Layout";
import { ServicesList } from "../../components/ServicesList/ServicesList";
import styles from "./Kontakt.module.css";

export function Kontakt() {
  return (
    <Layout>
      <div className={styles.wrapper}>
        <div className={styles.h1}>
          <Breadcrumbs />
          <h1>Kontakt</h1>
        </div>
        <AllAboutUs sectionH2={false} />
      </div>
    </Layout>
  );
}
