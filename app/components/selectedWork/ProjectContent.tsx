import { type Project } from "@/app/types/project";
import Image from "next/image";

interface ProjectContentProps {
  content: Project["content"];
}

export function ProjectContent({ content }: ProjectContentProps) {
  if (!content) return null;

  return (
    <div className="flex flex-col justify-between h-full p-6">
      <div className="flex gap-14 p-6 max-h-[70%]">
        <div className="flex-[1] flex flex-col justify-end space-y-6">
          <div className="flex flex-wrap gap-2">
            {content.techStack.map((tech, index) => (
              <div key={index} className="rounded-full px-4 py-1 text-sm font-medium bg-grey-200">
                {tech}
              </div>
            ))}
          </div>
          {content.description1 && <p className="text-brandblack text-base font-light">{content.description1}</p>}
          {content.description2 && <p className="text-brandblack text-base font-light">{content.description2}</p>}
        </div>
        {content.image && (
          <div className="relative flex-[2] overflow-hidden max-h-[80vh] bg-brandblue rounded-xl p-20">
            <Image src={content.image} layout="responsive" width={16} height={14} alt="project image" className="rounded-md" />
          </div>
        )}
      </div>
      <a className="ml-auto mr-6 mt-12 hover:text-brandblue transition-all duration-300 ease-in-out" href={content.website} target="blank">
        <div className="font-semibold underline">
          See live website
        </div>
      </a>
    </div>
  );
}
