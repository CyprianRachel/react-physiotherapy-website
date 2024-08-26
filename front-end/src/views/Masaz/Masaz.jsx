import { Hero } from "../../components/Hero/Hero";
import { Layout } from "../../components/Layout/Layout";
import TEAMIMAGE from "../../assets/team-image.svg";
import { ServicesWrapper } from "../../components/ServicesWrapper/ServicesWrapper";
import { SLIDER_IMAGES } from "../../constants/sliderImages";
import { CenteredContent } from "../../components/CenteredContent/CenteredContent";
import { H1 } from "../../components/H1/H1";

const sliderImages = SLIDER_IMAGES.find(
  (imageSet) => imageSet.id === 4
).servicesImages.map((img) => img.image);

export function Masaz() {
  return (
    <Layout>
      <CenteredContent>
        <H1 text={"Masaż"} />
      </CenteredContent>
      <ServicesWrapper
        team={false}
        selectedServiceId={[4]}
        description={false}
        selectedEmployeesId={[1, 4]}
        borderTop={true}
        cennik={true}
      />
    </Layout>
  );
}
