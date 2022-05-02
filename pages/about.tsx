import { About } from '../components/About';
import { Layout } from '../components/Layout';
import { Seo } from '../components/Seo';

const IndexPage = () => (
  <Layout>
    <Seo
      title="About | Johan Hanses"
      description="Welcome to Johan Hanses home."
      keywords="Typescript, Developer, React"
    />
    <About />
  </Layout>
);

export default IndexPage;
