import { Title } from '../components/title'
import Layout from '../components/layout/content'
import { BlogItem } from '../components/projects-items'
import Section from '../components/section'

import weather from '../public/images/projects/weather_eyecatching.png'
import todo from '../public/images/projects/todo_eyecatching.png'
import ecom from '../public/images/projects/ecom_eyecatching.png'
import pos from '../public/images/projects/pos_eyecatching.png'
import creative from '../public/images/projects/creative_eyecatching.png'
import django from '../public/images/projects/django_eyecatching.png'
import amsa from '../public/images/projects/amsa_eyecatching.png'

const Projects = () => {
  return (
    <Layout>
      <Section>
        <Title>Currently developing !</Title>
        <Section delay={0.2}>
          <BlogItem
            src={amsa}
            alt="amsa-th"
            title="AMSA Thailand's Website"
            desc="The official website of the Asian Medical Student's Association of Thailand."
            href="/projects/amsa"
          />
          <BlogItem
            src={django}
            alt="django"
            title="Django REST API"
            desc="A REST API using Django, a Python web framework with PostgreSQL for an e-commerce website."
            href="/projects/django"
          />
        </Section>
        <Title> Other projects I&apos;ve done !</Title>
        <Section delay={0.3}>
          <BlogItem
            src={weather}
            alt="weather-app"
            title="Weather Report App"
            desc="A weather report web application built with Next.js and the OpenWeatherMap API, featuring server-side rendering for improved performance."
            href="/projects/weather"
          />
          <BlogItem
            src={todo}
            alt="todo-app"
            title="Todo App"
            desc="A React Todo application that allows users to create and delete tasks. It features support for Dark/Light themes and user authentication using a Node.js API."
            href="/projects/todo"
          />
          <BlogItem
            src={ecom}
            alt="restaurant-website"
            title="Restaurant Website"
            desc="An e-commerce website for a restaurant. Allow customers to create their accounts, browse the menu  and order food online."
            href="/projects/ecom"
          />
          <BlogItem
            src={pos}
            alt="restaurant-pos"
            title="Restaurant Management"
            desc="A POS dashboard application designed for restaurants, featuring various management functions such as user and menu management, order processing, and sales reporting."
            href="/projects/pos"
          />
          <BlogItem
            src={creative}
            alt="bootstrap-landing-page"
            title="Bootstrap 5 Landing page"
            desc="A Bootstrap responsive landing page with Semantic HTML and little animation with jQuery."
            href="/projects/creative"
          />
        </Section>
      </Section>
    </Layout>
  )
}

export default Projects
