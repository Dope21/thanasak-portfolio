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
        href={'https://www.linkedin.com/in/thanasak-limsila/'}
        icon={<AiFillLinkedin size={30} />}
      >
        @Thanasak Limsila
      </Social>
      <Social
        href={
          'https://mail.google.com/mail/u/0/?fs=1&to=tk.limsila@gmail.com&tf=cm'
        }
        icon={<AiOutlineGoogle size={30} />}
      >
        tk.limsila@gmail.com
      </Social>
    </>
  )
}

export default Socials
