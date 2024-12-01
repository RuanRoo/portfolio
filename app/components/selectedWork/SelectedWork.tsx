import { ProjectAccordion } from "./ProjectAccordion";
import { type Project } from "@/app/types/project";

const projects: Project[] = [
  {
    id: "1",
    title: "7SecondSolar",
    content: {
      techStack: ["React", "NextJS", "TypeScript", "Zustand", "Axios", "React Query", "Tailwind", "Radix", "StoryBook"],
      website: "https://www.7secondsolar.com/",
      description:
        "7SecondSolar is a leading innovator in sustainable, cost-effective solar solutions, transforming the design and deployment of large-scale Solar PV projects globally. Their SaaS platform, AUTOPV, streamlines and optimizes the solar energy system design process for maximum efficiency. My role focuses on building a modern, high-performance UI with React, ensuring seamless integration with backend APIs, and crafting an intuitive experience for complex data interactions. I collaborate closely with cross-functional teams to build and maintain a scalable, responsive codebase.",
      image: "/7SecondSOlar.png",
    },
  },
  {
    id: "2",
    title: "Almost Sunday",
    content: {
      techStack: ["React", "React Router", "AOS Animate",],
      website: "https://www.almostsunday.co.za/",
      description:
        "7SecondSolar is a leading innovator in sustainable, cost-effective solar solutions, transforming the design and deployment of large-scale Solar PV projects globally. Their SaaS platform, AUTOPV, streamlines and optimizes the solar energy system design process for maximum efficiency. My role focuses on building a modern, high-performance UI with React, ensuring seamless integration with backend APIs, and crafting an intuitive experience for complex data interactions. I collaborate closely with cross-functional teams to build and maintain a scalable, responsive codebase.",
      image: "/almostSunday.png",
    },
  },
  {
    id: "3",
    title: "7SecondSolar",
    content: {
      techStack: ["React", "NextJS", "TypeScript", "Zustand", "Axios", "React Query", "Tailwind", "Radix", "StoryBook"],
      website: "https://www.7secondsolar.com/",
      description:
        "7SecondSolar is a leading innovator in sustainable, cost-effective solar solutions, transforming the design and deployment of large-scale Solar PV projects globally. Their SaaS platform, AUTOPV, streamlines and optimizes the solar energy system design process for maximum efficiency. My role focuses on building a modern, high-performance UI with React, ensuring seamless integration with backend APIs, and crafting an intuitive experience for complex data interactions. I collaborate closely with cross-functional teams to build and maintain a scalable, responsive codebase.",
      image: "/7SecondSOlar.png",
    },
  },
  {
    id: "4",
    title: "7SecondSolar",
    content: {
      techStack: ["React", "NextJS", "TypeScript", "Zustand", "Axios", "React Query", "Tailwind", "Radix", "StoryBook"],
      website: "https://www.7secondsolar.com/",
      description:
        "7SecondSolar is a leading innovator in sustainable, cost-effective solar solutions, transforming the design and deployment of large-scale Solar PV projects globally. Their SaaS platform, AUTOPV, streamlines and optimizes the solar energy system design process for maximum efficiency. My role focuses on building a modern, high-performance UI with React, ensuring seamless integration with backend APIs, and crafting an intuitive experience for complex data interactions. I collaborate closely with cross-functional teams to build and maintain a scalable, responsive codebase.",
      image: "/7SecondSOlar.png",
    },
  },
  {
    id: "5",
    title: "7SecondSolar",
    content: {
      techStack: ["React", "NextJS", "TypeScript", "Zustand", "Axios", "React Query", "Tailwind", "Radix", "StoryBook"],
      website: "https://www.7secondsolar.com/",
      description:
        "7SecondSolar is a leading innovator in sustainable, cost-effective solar solutions, transforming the design and deployment of large-scale Solar PV projects globally. Their SaaS platform, AUTOPV, streamlines and optimizes the solar energy system design process for maximum efficiency. My role focuses on building a modern, high-performance UI with React, ensuring seamless integration with backend APIs, and crafting an intuitive experience for complex data interactions. I collaborate closely with cross-functional teams to build and maintain a scalable, responsive codebase.",
      image: "/7SecondSOlar.png",
    },
  },
  {
    id: "6",
    title: "7SecondSolar",
    content: {
      techStack: ["React", "NextJS", "TypeScript", "Zustand", "Axios", "React Query", "Tailwind", "Radix", "StoryBook"],
      website: "https://www.7secondsolar.com/",
      description:
        "7SecondSolar is a leading innovator in sustainable, cost-effective solar solutions, transforming the design and deployment of large-scale Solar PV projects globally. Their SaaS platform, AUTOPV, streamlines and optimizes the solar energy system design process for maximum efficiency. My role focuses on building a modern, high-performance UI with React, ensuring seamless integration with backend APIs, and crafting an intuitive experience for complex data interactions. I collaborate closely with cross-functional teams to build and maintain a scalable, responsive codebase.",
      image: "/7SecondSOlar.png",
    },
  },
];

export default function SelectedWork() {
  return (
    <div className="mx-10 mt-36 mb-36">
      <h1 className="text-6xl font-semibold mb-20 text-brandblack">Selected Work</h1>
      <ProjectAccordion projects={projects} />
    </div>
  );
}
