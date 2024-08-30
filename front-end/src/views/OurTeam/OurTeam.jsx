import { AllAboutUs } from "../../components/AllAboutUs/AllAboutUs";
import { CenteredContent } from "../../components/CenteredContent/CenteredContent";
import { H1 } from "../../components/H1/H1";
import { H1Wrapper } from "../../components/H1Wrapper/H1Wrapper";
import { Layout } from "../../components/Layout/Layout";
import { NaszZespol } from "../../components/NaszZespol/NaszZespol";
import styles from "./OurTeam.module.css";

export function OurTeam() {
  return (
    <Layout>
      <div className={styles.wrapper}>
        <div className={styles.leftWrapper}>
          <H1Wrapper>
            <H1 text={"Nasz zespół"} />
          </H1Wrapper>
          <NaszZespol />
        </div>
        <AllAboutUs sectionH2={true} />
      </div>
    </Layout>
  );
}
