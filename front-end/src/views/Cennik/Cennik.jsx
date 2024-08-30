import { AllAboutUs } from "../../components/AllAboutUs/AllAboutUs";
import { BorderTop } from "../../components/BorderTop/BorderTop";
import { H1 } from "../../components/H1/H1";
import { H1Wrapper } from "../../components/H1Wrapper/H1Wrapper";
import { Layout } from "../../components/Layout/Layout";
import { ServicesList } from "../../components/ServicesList/ServicesList";
import styles from "./Cennik.module.css";

export function Cennik() {
  return (
    <Layout>
      <div className={styles.wrapper}>
        <div className={styles.leftWrapper}>
          <H1Wrapper>
            <H1 text={"Cennik"} />
          </H1Wrapper>
          <BorderTop />
          <ServicesList team={false} sectionH2={true} borderTop={true} />
        </div>
        <AllAboutUs sectionH2={true} />
      </div>
    </Layout>
  );
}
