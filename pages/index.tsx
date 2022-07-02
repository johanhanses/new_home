import { LandingBio } from '../components/LandingBio'
import { Layout } from '../components/Layout'
import { Seo } from '../components/Seo'

export default function IndexPage() {
  return (
    <Layout>
      <Seo
        title="Johan Hanses"
        description="Welcome to Johan Hanses home."
        keywords="Typescript, Developer, React"
      />
      <LandingBio />
    </Layout>
  )
}
