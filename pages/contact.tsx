import ContactForm from '../components/contact-form'
import Layout from '../components/layout/content'
import Section from '../components/section'
import { Title } from '../components/title'
import Social from '../components/social'
import {
  AiOutlineGoogle,
  AiFillLinkedin,
  AiOutlineGithub,
} from 'react-icons/ai'

const Contact = () => {
  return (
    <Layout>
      <Section>
        <Title>Sending your message to me!</Title>

        <Section delay={0.2}>
          <ContactForm />
        </Section>

        <Section delay={0.3}>
          <Title>Other social media!</Title>
          <Social
            href={'https://github.com/Dope21'}
            icon={<AiOutlineGithub size={30} />}
          >
            @Dope21
          </Social>
          <Social
            href={'linkedin.com/in/thanasak-limsila-99a814225'}
            icon={<AiFillLinkedin size={30} />}
          >
            @Thanasak Limsila
          </Social>
          <Social
            href={
              'https://mail.google.com/mail/u/0/?fs=1&to=thanasaklimsila@gmail.com&tf=cm'
            }
            icon={<AiOutlineGoogle size={30} />}
          >
            Thanasaklimsila@gmail.com
          </Social>
        </Section>
      </Section>
    </Layout>
  )
}

export default Contact
