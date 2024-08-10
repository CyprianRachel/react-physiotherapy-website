import { BlogHorizontal } from "../../components/BlogHorizontal/BlogHorizontal";
import { Layout } from "../../components/Layout/Layout";
import { ServicesWrapper } from "../../components/ServicesWrapper/ServicesWrapper";

export function PawelZerdzinski() {
  return (
    <Layout>
      <ServicesWrapper
        team={false}
        person={true}
        description={false}
        selectedServiceId={[1, 4]}
        selectedPersonId={1}
      />
      <BlogHorizontal postId="1" />
    </Layout>
  );
}
