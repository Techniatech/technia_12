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
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    ChitCharp,
    LearnTech,
    SpotifyClone,
    SteypLogo
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
      title: "React Native Developer",
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
      name: "Three JS",
      icon: threejs,
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
  ];
  
  const experiences = [
    {
      title: "Fullstack Developer",
      company_name: "Steyp",
      icon: SteypLogo,
      iconBg: "#383E56",
      date: "October 2021 - present",
      points: [
        "Develop and deploy user interfaces using React.js for customerfacing web apps, resulting in a 30% increase in user engagement",
        "Provide technical assistance to team members, contributing to a 20% improvement in project delivery time",
        "Define product requirements and create high-level architectural specifications, ensuring alignment with business goals and user needs",
        "Profile, troubleshoot, and fix bugs to improve system performance, resulting in a 15% reduction in system downtime",
        "Develop new features for the product and ensure comprehensive list of requirements matches existing functionalities, contributing to a 25% increase in product adoption",
        "Determine areas for improvement by monitoring system performance, resulting in a 10% improvement in system efficiency",
        "Work on backend system, ensuring seamless integration with frontend and optimal performance"
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
      name: "ChitCharp",
      description:
        "Web-based platform that allows users to chat and connect with peaples and share your daily photos and much more",
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
          name: "styled-components",
          color: "pink-text-gradient",
        },
        {
          name: "django",
          color: "blue-text-gradient",
        },
      ],
      image: ChitCharp,
      source_code_link: "https://github.com/wazeer1/mearn-chat-app-frontend.git",
    },
    {
      name: "Spotify-clone",
      description:
        "Web application that enables users to search music and play from your spotify playlist and login to your spotify account",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "spotify-api",
          color: "green-text-gradient",
        },
        {
          name: "styled-components",
          color: "pink-text-gradient",
        },
      ],
      image: SpotifyClone,
      source_code_link: "https://github.com/wazeer1/spotify.git",
    },
    {
      name: "LearnTech",
      description:
        "Web application that enables to learn coding in diffrent language and videos can be uploaded by the chief users and student can pay and join the classes and also can put on the time table to learn",
      tags: [
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "styled-components",
          color: "green-text-gradient",
        },
        {
          name: "django",
          color: "pink-text-gradient",
        },
        {
          name: "postgresql",
          color: "blue-text-gradient",
        },
      ],
      image: LearnTech,
      source_code_link: "https://github.com/wazeer1/edtech.git",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };