import ContactForm from '../components/contact-form'
import Layout from '../components/layout/content'
import Section from '../components/section'
import { Title } from '../components/title'
import Socials from '../components/other-socials'

const Contact = () => {
  return (
    <Layout>
      <Section>
        <Title>Sending your message to me!</Title>

        <Section delay={0.2}>
          <ContactForm />
        </Section>

        <Section delay={0.3}>
          <Socials />
        </Section>
      </Section>
    </Layout>
  )
}

export default Contact
