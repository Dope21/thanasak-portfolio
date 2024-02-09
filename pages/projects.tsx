import Layout from '../components/layout/content'
import Section from '../components/section'
import { Title } from '../components/title'
import { BlogItem } from '../components/projects-items'

import weather from '../public/images/projects/weather_eyecatching.png'
import todo from '../public/images/projects/todo_eyecatching.png'
import ecom from '../public/images/projects/ecom_eyecatching.png'
import pos from '../public/images/projects/pos_eyecatching.png'
import amsa from '../public/images/projects/amsa_eyecatching.png'
import food from '../public/images/projects/food_eyecatching.png'

const BLOGS = [
  {
    thumnail: amsa,
    alt: "amsa-th",
    title: "AMSA Thailand's Official Website",
    desc: "Worked as a Back-End Developer, Developed a website serves as a platform for public relations and event registration.",
    href: "/projects/amsa"
  },
  {
    thumnail: food,
    alt: "grab-me-app",
    title: "Grab Me App",
    desc: "The platform allows users to post food ordering requests, with other users able to commit to purchasing the requested food for the requester.",
    href: "/projects/food"
  },
  {
    thumnail: weather,
    alt: "weather-app",
    title: "Weather Report App",
    desc: "A responsive application allows users to search for the weather report of that day by typing the name of the interested city in the search bar.",
    href: "/projects/weather"
  },
  {
    thumnail: todo,
    alt: "todo-app",
    title: "Todo App",
    desc: "A Todo application allows users to create and delete tasks, supports Dark/Light themes, and has an authentication system built with JWT.",
    href: "/projects/todo"
  },
  {
    thumnail: ecom,
    alt: "restaurant-website",
    title: "Restaurant Website",
    desc: "An E-commerce website for a restaurant allows customers to create accounts, explore the menu, and place online food orders.",
    href: "/projects/ecom"
  },
  {
    thumnail: pos,
    alt: "restaurant-pos",
    title: "Restaurant Management",
    desc: "A POS application specifically designed for The Restaurant Website to support online food ordering and in-house customers.",
    href: "/projects/pos"
  },
]

const Projects = () => {
  return (
    <Layout>
      <Section>
        <Title> Some projects I&apos;ve done !</Title>
        <Section delay={0.2}>
          {BLOGS.map(project => (
            <BlogItem project={project} key={project.href} />
          ))}
        </Section>
      </Section>
    </Layout>
  )
}

export default Projects
