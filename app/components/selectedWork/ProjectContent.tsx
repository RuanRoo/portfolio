import { type Project } from "@/app/types/project";
import Image from "next/image";

interface ProjectContentProps {
  content: Project["content"];
}

export function ProjectContent({ content }: ProjectContentProps) {
  if (!content) return null;

  return (
    <div className="flex flex-col justify-between h-full p-2 sm:p-6">
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-14 p-2 sm:p-6 max-h-full lg:max-h-[70%]">
        <div className="flex-1 flex flex-col justify-end space-y-4 lg:space-y-6 order-2 lg:order-1">
          <div className="flex flex-wrap gap-2">
            {content.techStack.map((tech, index) => (
              <div key={index} className="rounded-full px-3 sm:px-4 py-1 text-xs sm:text-sm font-medium bg-grey-200">
                {tech}
              </div>
            ))}
          </div>
          {content.description1 && (
            <p className="text-brandblack text-sm sm:text-base font-light">
              {content.description1}
            </p>
          )}
          {content.description2 && (
            <p className="text-brandblack text-sm sm:text-base font-light">
              {content.description2}
            </p>
          )}
        </div>
        {content.image && (
          <div className="relative flex-[1] lg:flex-[2] overflow-hidden max-h-[40vh] lg:max-h-[80vh] bg-brandblue rounded-xl p-4 sm:p-20 order-1 lg:order-2">
            <Image 
              src={content.image} 
              layout="responsive" 
              width={16} 
              height={14} 
              alt="project image" 
              className="rounded-md"
              priority 
            />
          </div>
        )}
      </div>
      <a 
        className="mr-2 sm:mr-6 mt-6 sm:mt-12 hover:text-brandblue transition-all duration-300 ease-in-out" 
        href={content.website} 
        target="blank"
      >
        <div className="font-semibold underline text-sm sm:text-base">
          See live website
        </div>
      </a>
    </div>
  );
}