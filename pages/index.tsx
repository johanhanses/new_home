import { LandingBio } from '../components/LandingBio';
import { Layout } from '../components/Layout';
import { Seo } from '../components/Seo';

const IndexPage = () => (
  <Layout>
    <Seo
      title="Johan Hanses"
      description="Welcome to Johan Hanses home."
      keywords="Typescript, Developer, React"
    />
    <LandingBio />
  </Layout>
);

export default IndexPage;
