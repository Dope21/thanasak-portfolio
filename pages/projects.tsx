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
    desc: "Worked as a Back-End Developer, Developed an official website for The Asian Medical Student's Association of Thailand.",
    href: "/projects/amsa"
  },
  {
    thumnail: food,
    alt: "grab-me-app",
    title: "Grab Me App",
    desc: "A simple CRUD app built with APS.NET MVC to post food ordering requests, with other person able to commit to purchasing the requested food for the requester.",
    href: "/projects/food"
  },
  {
    thumnail: weather,
    alt: "weather-app",
    title: "Weather Report App",
    desc: "A responsive weather report web application built with Next.js and the OpenWeatherMap API.",
    href: "/projects/weather"
  },
  {
    thumnail: todo,
    alt: "todo-app",
    title: "Todo App",
    desc: "A React Todo application with features for task creation and deletion, Dark/Light themes, and JWT for secure user authentication.",
    href: "/projects/todo"
  },
  {
    thumnail: ecom,
    alt: "restaurant-website",
    title: "Restaurant Website",
    desc: "An e-commerce website for a restaurant facilitate online food ordering.",
    href: "/projects/ecom"
  },
  {
    thumnail: pos,
    alt: "restaurant-pos",
    title: "Restaurant Management",
    desc: "A POS application specifically designed for Restaurant Website to support online food ordering from customers.",
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
