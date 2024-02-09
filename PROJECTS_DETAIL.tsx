const PROJECTS = [
  {
    name: 'amsa',
    title: `AMSA Thailand's Official Website`,
    desc: `Worked as a Back-End Developer to developed an official website for The Asian Medical Student's Association of Thailand, which serves as a platform for public relations and event registration.\n
          My primary responsibility is to create a REST API integrated with MongoDB, which provided functionalities for managing Events and User information, implementing authentication and authorization mechanism to ensure data security on both the main website and management pages.`,
    website: 'https://amsa-th.org/',
    source: 'Private Repository',
    stack: 'Next.js, Typescript, Tailwind, MUI, Node.js, Express.js, MongoDB',
    images: ['amsa_eyecatching.png', 'amsa_02.png']
  },
  {
    name: 'weather',
    title: 'Weather Report App',
    desc: `A responsive application that allows users to search for the weather for that day by typing the name of their city of interest in the search bar.`,
    website: 'https://weather-app-three-theta.vercel.app/',
    source: 'https://github.com/Dope21/next-weather-app/',
    stack: 'Next.js, Tailwind, OpenWeatherMap API',
    images: ['weather_01.png', 'weather_02.png', 'weather_03.png']
  },
  {
    name: 'todo',
    title: 'Todo App',
    desc: `A Todo application allows users to create and delete tasks, supports Dark/Light themes, and has an authentication system built with JWT, Express, and MySQL.`,
    website: 'Not available',
    source: 'https://github.com/Dope21/react-todo-app',
    stack: 'React.js, Tailwind, Express.js, JWT, MySQL',
    images: ['todo_01.png', 'todo_02.png', 'todo_03.png']
  },
  {
    name: 'ecom',
    title: 'Restaurant Website',
    desc: `An E-commerce website for a restaurant allows customers to create accounts, explore the menu, and place online food orders. 
          Additionally, the website includes a POS application for management.`,
    website: 'Not available',
    source: 'https://github.com/Dope21/restaurant-management',
    stack: 'Bootstrap 5, SCSS, jQuery, PHP, MySQL',
    images: ['ecom_01.png', 'ecom_02.png', 'ecom_03.png']
  },
  {
    name: 'pos',
    title: 'Restaurant Management',
    desc: `A POS (Point of Sale) application specifically designed for The Restaurant Website to support online food ordering and in-house customers. Features include user and menu management, order processing, and sales reporting.`,
    website: 'Not available',
    source: 'https://github.com/Dope21/restaurant-management',
    stack: 'HTML, SCSS, jQuery, PHP, MySQL',
    images: ['pos_01.png', 'pos_02.png', 'pos_03.png']
  },
  {
    name: 'food',
    title: 'Grab Me App',
    desc: `The platform allows users to post food ordering requests, with other users able to commit to purchasing the requested food for the requester.
          A simple CRUD application built with ASP.NET MVC utilized Docker for containerization and Robot Framework for API unit testing.`,
    website: 'Not available',
    source: 'https://github.com/Dope21/asp.net-grab-me-app',
    stack: 'React, C#, ASP.NET MVC, Robot Framework, Docker',
    images: ['food_01.png', 'food_02.png', 'food_03.png', 'food_04.png']

  },
]

export default PROJECTS
