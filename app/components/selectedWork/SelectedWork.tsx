import { ProjectAccordion } from "./ProjectAccordion";
import { projects } from "@/data/data";



export default function SelectedWork() {
  return (
    <div id="selected-work" className="mx-4 sm:mx-10 mt-16 sm:mt-28 mb-20 sm:mb-36 scroll-mt-20">
      <h1 className="text-4xl sm:text-6xl mt-6 sm:mt-10 font-semibold mb-4 md:mb-6 sm:mb-10 text-brandblack tracking-tight">Selected Work</h1>
      <ProjectAccordion projects={projects} />
    </div>
  );
}
