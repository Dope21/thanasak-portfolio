import { Title } from '../components/title'
import {
  AiOutlineGithub,
  AiFillLinkedin,
  AiOutlineGoogle,
} from 'react-icons/ai'

const Social = ({ children, href, icon }) => {
  return (
    <div>
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="social-color p-2 inline-flex items-center gap-3 rounded-md transition-all"
      >
        {icon}
        {children}
      </a>
    </div>
  )
}

const Socials = () => {
  return (
    <>
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
    </>
  )
}

export default Socials
