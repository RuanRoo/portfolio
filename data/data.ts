import type { Project } from "@/app/types/project";
import type { RoadmapCard } from "@/app/types/roadmap";

export const projects: Project[] = [
  {
    id: "1",
    title: "7SecondSolar",
    content: {
      techStack: ["React", "NextJS", "TypeScript", "Zustand", "Tailwind", "Radix", "StoryBook"],
      website: "https://www.7secondsolar.com/",
      description1:
        "7SecondSolar is a leading innovator in sustainable, cost-effective solar solutions, transforming the design and deployment of large-scale Solar PV projects globally. Their SaaS platform, AUTOPV, streamlines and optimises the solar energy system design process for maximum efficiency.",
      description2:
        "My role focuses on building a modern, high-performance UI with NextJS, ensuring seamless integration with backend APIs, and crafting an intuitive experience for complex data interactions. I collaborate closely with cross-functional teams to build and maintain a scalable, responsive codebase.",
      image: "/7SecondSolar.png",
    },
  },
  {
    id: "2",
    title: "Almost Sunday",
    content: {
      techStack: ["React", "React Router", "AOS Animate"],
      website: "https://www.almostsunday.co.za/",
      description1:
        "This project was a collaborative effort between my wife, who is a product designer, and me. I took charge of developing her portfolio, and in return, she designed mine.",
      description2: "The entire project was executed using React and includes complex layouts and micro-interactions.",
      image: "/almostSunday.png",
    },
  },
  {
    id: "3",
    title: "Excella",
    content: {
      techStack: ["HTML", "CSS", "JavaScript"],
      website: "https://excella.co.za/",
      description1:
        "I was brought on board by 4Shaw Productions on a contract basis to take the lead in the development of this project from the ground up. Given the project's static nature, I crafted it using HTML, CSS, and vanilla JavaScript to ensure an efficient and seamless user experience.",
      description2:
        "It was a fantastic opportunity for me to see a project through from start to finish and gain valuable experience as a developer.",
      image: "/excella.png",
    },
  },
  {
    id: "4",
    title: "Capital Express",
    content: {
      techStack: ["WordPress", "Elementor", "JavaScript", "CSS"],
      website: "https://capitalexpress.co.za/",
      description1: "This is another project where I was the lead developer while working on contract for 4Shaw Productions.",
      description2:
        "It is an understated yet functional cash advance solution website that was built in WordPress using Elementor and some custom CSS and JavaScript.",
      image: "/CapitalExpress.png",
    },
  },
  {
    id: "5",
    title: "Budget Buddy",
    content: {
      techStack: ["React", "React Router"],
      website: "https://splendorous-licorice-1e655b.netlify.app/",
      description1:
        "This is a personal project I did to learn the new features of React Router and experiment with pages & layouts, nesting routes, using loaders & actions, etc.",
      description2:
        "It is a simple frontend budgeting app that saves user data to local storage, allowing you to create budgets and track your expenses.",
      image: "/BudgetBuddy.png",
    },
  },
];

export const roadmapData: RoadmapCard[] = [
  {
    year: 2022,
    title: "Where it started",
    milestones: [
      {
        title: "Beginning",
        description: [
          "Wrote my first line of code at 35; JavaScript blew my mind.",
          "Enrolled in HyperionDev’s full-stack bootcamp, graduated top of my class.",
          "Landed my first web developer role at 4Shaw Productions.",
        ],
      },
    ],
  },
  {
    year: 2023,
    title: "What happened next",
    milestones: [
      {
        title: "Career Progress",
        description: [
          "Led two projects at 4Shaw before my contract ended.",
          "Joined the Betway retention team as a Frontend Engineer, learning from top developers.",
          "Moved on to join the 7SecondSolar team to learn everything about clean tech.",
        ],
      },
    ],
  },
  {
    year: 2024,
    title: "What came after",
    milestones: [
      {
        title: "Career Progress",
        description: [
          "Refined an existing UI while building AutoPV’s UI from scratch as a frontend developer at 7SecondSolar.",
          "We launched the MVP for client testing by December.",
        ],
      },
    ],
  },
  {
    year: 2025,
    title: "These days",
    milestones: [
      {
        title: "Career Progress",
        description: [
          "Developing complex features & exploring 3D rendering.",
          "Continuing to learn and build on my skillset and experience as a frontend developer.",
          "734 coffees.",
        ],
      },
    ],
  },
];
