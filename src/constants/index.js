import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  carrent,
  jobit,
  tripguide,
  net,
  shanbay,
  zijin,
  python,
  uwa
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: ".net",
    icon: net,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "python",
    icon:python
  }
];

const experiences = [
  {
    title: "Master of IT",
    company_name:"UWA",
    icon:uwa,
    iconBg: "white",
    date: "2020 - 2022",
    points:[
      "Software Engineering with Java", 
      "Computational Thinking with Python", 
      "Software Testing and Quality Assurance", 
      "Open Source Tools and Scripting", 
      "Data Warehousing", 
      "Cloud Computing", 
      "Agile Web Development", 
      "Software Requirement and Design."
    ]
},
  {
    title: "Inten React.js Developer",
    company_name: "Shanbay",
    icon: shanbay,
    iconBg: "black",
    date: "Aug 2021 - Nov 2021",
    points: [
      "Accomplished requirements of the Product Manager and the Operation Manager like, updated the advertisement of course basing on the monthly process.",
      "To support the data analyzers, took AB tests and tracked the customers' behavior by event tracking.",
      "Explored the practicability of technique, like using the plugin of Webpack to import the elements or code by needs. ", 
      "Updated the third library and using the bridge mode to quarantine the third-party libraries effect like updated momentJs to dayJs." 
    ],
  },
  {
    title: "Project Assistant",
    company_name: "Zijin mining",
    icon: zijin,
    iconBg: "#E6DEDD",
    date: "Aug 2022 - Jun 2023",
    points: [
      "Assess the actual value of the project and coordinate experts to carry out post-project evaluation tasks, encompassing truck dispatch system, CRM system, BPM system, etc.", 
      "Reevaluate the IT requirements and determine their feasibility and actual value.",
      "Conduct research on emerging technologies, including the implementation progress of advanced solutions such as autonomous mining trucks, hyper-converged networks, and SD-WAN networks.",
      "Organize collaborations with other major enterprises, including the establishment of a strategic cooperation framework agreement with China Mobile."
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Jira Clone",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "JWT",
        color: "black-text-gradient"
      }
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restful",
        color: "green-text-gradient",
      },
      {
        name: ".net",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
