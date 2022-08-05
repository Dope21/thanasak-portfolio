import { Title } from '../components/title'
import Article from '../components/layout/article'
import Project from '../components/projects-item'
import Section from '../components/section'

import weather from '../public/images/projects/weather_eyecatching.png'
import todo from '../public/images/projects/todo_eyecatching.png'
import ecom from '../public/images/projects/ecom_eyecatching.png'
import pos from '../public/images/projects/pos_eyecatching.png'
import cloud from '../public/images/projects/cloud_eyecatching.png'
import creative from '../public/images/projects/creative_eyecatching.png'

const Projects = () => {
  return (
    <Article>
      <Section>
        <Title>Some projecsts I&apos;ve done!</Title>

        <Project
          src={weather}
          alt="weather-app"
          title="Weather Report App"
          desc="A weather report app from OpenWeatherMap API. Support Server Side Rendering, Searchbox Suggestion, and Smooth fade in animation."
          href="/projects/weather"
        />
        <Project
          src={todo}
          alt="todo-app"
          title="Todo App"
          desc="A React Todo application, allow user to create and delete task. This project also support Dark/Light theme and user authentication."
          href="/projects/todo"
        />
        <Project
          src={ecom}
          alt="restaurant-website"
          title="Restaurant Website"
          desc="An E-commerce website for a restaurant. Users can register and login to order food online through this website."
          href="/projects/ecom"
        />
        <Project
          src={pos}
          alt="restaurant-pos"
          title="Restaurant Management"
          desc="A POS dashboard application for a restaurant. Has features to manage users, menu, orders, payments, and report sales."
          href="/projects/pos"
        />
        <Project
          src={creative}
          alt="bootstrap-landing-page"
          title="Bootstrap 5 Landing page"
          desc="A Bootstrap responsive landing page with Semantic HTML and little animation with jQuery."
          href="/projects/bootstrap"
        />
        <Project
          src={cloud}
          alt="react-landing-page"
          title="React Landing page"
          desc="A react responsive website with tailwind CSS."
          href="/projects/cloud"
        />
      </Section>
    </Article>
  )
}

export default Projects
