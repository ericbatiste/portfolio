import { Project } from "../types/project";

const projects: Project[] = [
  {
    title: "Our Travis Country",
    description: "A community engagement platform for HOA members featuring user authentication, a protected admin dashboard, and custom email functionality. Built with Next.js and Supabase.",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Supabase", "Mailgun", "ReactQuill"],
    link: "https://github.com/ericbatiste/travis-country-hoa",
    color: { bgColor: "bg-sky-600", textColor: "text-sky-600" }
  },
  {
    title: "Maptivity",
    description: "A mobile app tracking user geolocation with real-time movement stats. Implements JWT authorization, iOS CoreLocation services, and Google's Polyline Algorithm for route storage.",
    techStack: ["SwiftUI", "Mapbox", "Ruby", "Rails", "PostgreSQL"],
    link: {
      frontend: "https://github.com/ericbatiste/maptivity",
      backend: "https://github.com/ericbatiste/maptivity_be"
    },
    color: { bgColor: "bg-teal-600", textColor: "text-teal-600" }
  },
  {
    title: "Cocktail Finder",
    description: "A web application for discovering and saving cocktail recipes. Features Firebase authentication, comprehensive Cypress testing, and responsive design across all device sizes.",
    techStack: ["React", "Router", "Firebase", "Cypress", "JavaScript", "CSS"],
    link: "https://github.com/ericbatiste/cocktail-finder",
    color: { bgColor: "bg-violet-600", textColor: "text-violet-600" }
  },
  // {
  //   title: "Streaming on the Go",
  //   description: "Mobile app enabling simultaneous live video streaming and location sharing. Integrates Firebase Realtime DB with geolocation tracking and Agora SDK for video streaming.",
  //   techStack: ["React Native", "JavaScript", "Firebase Realtime DB", "Jest", "CSS", "Agora SDK", "React Native Geolocation"],
  //   link: "https://github.com/2310-combined/live-stream-react-native",
  //   color: { bgColor: "bg-red-600", textColor: "text-red-600" }
  // },
  {
    title: "Fido's Trick Log",
    description: "Dog training web app for cataloging tricks with training videos. Features custom Node.js/Express API, deployment via Render and Vercel, and high accessibility standards.",
    techStack: ["React", "Router", "CSS", "Cypress", "Node.js", "Express"],
    link: {
      frontend: "https://github.com/ericbatiste/dog-tricks-ui",
      backend: "https://github.com/ericbatiste/dog-tricks-api",
    },
    color: { bgColor: "bg-amber-600", textColor: "text-amber-600" }
  }
];

export default projects;