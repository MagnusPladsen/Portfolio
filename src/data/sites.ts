import { Sites } from "@/models/sites";


const sites: Sites = {
  1: {
    name: "GameHub",
    url: "https://gamehub.pladsen.dev",
    description: "Website for buying new and used games",
    image: "/images/gameHub.png",
    stack: ["HTML", "CSS", "JavaScript", "WordPress API"],
  },
  2: {
    name: "Semester Project 1",
    url: "https://semester1.pladsen.dev",
    description: "Website for a museum",
    image: "/images/semesterProject.png",
    stack: ["HTML", "CSS"],
  },
  3: {
    name: "Project Exam 1 - Travela",
    url: "https://magnuspladsen.netlify.app",
    description: "Website for a travel blog",
    image: "/images/travela.png",
    stack: ["HTML", "CSS", "JavaScript", "WordPress API"],
  },
};

export default sites;
