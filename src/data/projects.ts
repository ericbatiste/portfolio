import { Project } from "../types/project";

const projects: Project[] = [
  {
    title: "Personal Website",
    description: "You're looking at it! Built with intention and care to showcase my skills, some projects I've worked on, and my instincts for design and user experience. Like what you see? I'd like to hear from you!",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Motion", "Resend"],
    link: "https://github.com/ericbatiste/portfolio"
  },
  {
    title: "Our Travis Country",
    description: "A community engagement platform for HOA members featuring user authentication, a protected admin dashboard, and custom email functionality. Built with Next.js and Supabase.",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Supabase", "Mailgun", "ReactQuill"],
    link: "https://github.com/ericbatiste/travis-country-hoa"
  },
  {
    title: "Maptivity",
    description: "A mobile app tracking user geolocation with real-time movement stats. Implements JWT authorization, iOS CoreLocation services, and Google's Polyline Algorithm for route storage.",
    techStack: ["SwiftUI", "Mapbox", "Ruby", "Rails", "PostgreSQL"],
    link: {
      frontend: "https://github.com/ericbatiste/maptivity",
      backend: "https://github.com/ericbatiste/maptivity_be"
    }
  },
  {
    title: "Cocktail Finder",
    description: "A web application for discovering and saving cocktail recipes. Features Firebase authentication, comprehensive Cypress testing, and responsive design across all device sizes.",
    techStack: ["React", "Router", "Firebase", "Cypress", "JavaScript", "CSS"],
    link: "https://github.com/ericbatiste/cocktail-finder"
  },
  // {
  //   title: "Fido's Trick Log",
  //   description: "Dog training web app for cataloging tricks with training videos. Features custom Node.js/Express API, deployment via Render and Vercel, and high accessibility standards.",
  //   techStack: ["React", "Router", "CSS", "Cypress", "Node.js", "Express"],
  //   link: {
  //     frontend: "https://github.com/ericbatiste/dog-tricks-ui",
  //     backend: "https://github.com/ericbatiste/dog-tricks-api",
  //   }
  // }
];

export default projects;