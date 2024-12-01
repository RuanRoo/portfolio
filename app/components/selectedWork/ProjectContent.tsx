import { type Project } from "@/app/types/project";
import Image from "next/image";

interface ProjectContentProps {
  content: Project["content"];
}

export function ProjectContent({ content }: ProjectContentProps) {
  if (!content) return null;

  return (
    <div className="flex gap-6 p-6">
      <div className="flex-[1] flex flex-col justify-end space-y-12">
        <div className="flex flex-wrap gap-3">
          {content.techStack.map((tech, index) => (
            <div
              key={index}
              className="rounded-full border border-gray-500 px-4 py-1 text-sm font-medium"
            >
              {tech}
            </div>
          ))}
        </div>
        {content.description && <p className="text-brandblack text-base">{content.description}</p>}
      </div>
      {content.image && (
        <div className="relative flex-[2] overflow-hidden bg-brandblue rounded-xl px-10 pt-10 pb-20">
          <Image src={content.image} layout="responsive" width={16} height={14} alt="project image" className="rounded-md" />
        </div>
      )}
    </div>
  );
}
