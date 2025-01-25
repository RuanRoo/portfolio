import { ProjectAccordion } from "./ProjectAccordion";
import { type Project } from "@/app/types/project";

const projects: Project[] = [
  {
    id: "1",
    title: "7SecondSolar",
    content: {
      techStack: ["React", "NextJS", "TypeScript", "Zustand", "Tailwind", "Radix", "StoryBook"],
      website: "https://www.7secondsolar.com/",
      description1:
        "7SecondSolar is a leading innovator in sustainable, cost-effective solar solutions, transforming the design and deployment of large-scale Solar PV projects globally. Their SaaS platform, AUTOPV, streamlines and optimizes the solar energy system design process for maximum efficiency.",
      description2:
        "My role focuses on building a modern, high-performance UI with React, ensuring seamless integration with backend APIs, and crafting an intuitive experience for complex data interactions. I collaborate closely with cross-functional teams to build and maintain a scalable, responsive codebase.",
      image: "/7SecondSOlar.png",
    },
  },
  {
    id: "2",
    title: "Almost Sunday",
    content: {
      techStack: ["React", "React Router", "AOS Animate"],
      website: "https://www.almostsunday.co.za/",
      description1:
        "This project was a collaborative effort between my wife, who is a product designer, and myself. I took charge of developing her portfolio and in return, she designed mine.",
      description2: "The entire project was executed using React and includes complex layouts and micro interactions.",
      image: "/almostSunday.png",
    },
  },
  {
    id: "3",
    title: "Excella",
    content: {
      techStack: ["HTML", "CSS", "Javascript"],
      website: "https://excella.co.za/",
      description1:
        "I was brought on board by 4Shaw Productions on a contract basis to take the lead in the development of this project from the ground up. Given the project's static nature, I crafted it using HTML, CSS, and vanilla JavaScript to ensure an efficient and seamless user experience.",
      description2:
        "It was a fantastic chance for me to see a project through from start to finish and gain some valuable experience as a developer.",
      image: "/excella.png",
    },
  },
  {
    id: "4",
    title: "Capital Express",
    content: {
      techStack: ["Wordpress", "Elementor", "Javascript", "CSS"],
      website: "https://www.7secondsolar.com/",
      description1: "This is another project where I was the lead developer while working on contract for4Shaw Productions. ",
      description2:
        "It is an understated yet functional Cash Advance solution website that was built in Wordpress using Elementor and some custom CSS and Javascript.",
      image: "/7SecondSOlar.png",
    },
  },
  {
    id: "5",
    title: "Budget Buddy",
    content: {
      techStack: ["React", "React Router"],
      website: "https://splendorous-licorice-1e655b.netlify.app/",
      description1:
        "This is a personal project I did to learn the new features of React Router and play around with pages & layouts, nesting routes, using loaders & actions, etc",
      description2:
        "It is a simple frontend budgeting app that saves user data to Local Storage that allows you to create budgets and helps you track your expenses.",
      image: "/7SecondSOlar.png",
    },
  },
];

export default function SelectedWork() {
  return (
    <div id="selected-work" className="mx-4 sm:mx-10 mt-16 sm:mt-28 mb-20 sm:mb-36 scroll-mt-20">
      <h1 className="text-4xl sm:text-6xl mt-6 sm:mt-10 font-semibold mb-6 sm:mb-10 text-brandblack">Selected Work</h1>
      <ProjectAccordion projects={projects} />
    </div>
  );
}
