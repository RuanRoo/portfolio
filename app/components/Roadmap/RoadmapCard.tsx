import type { RoadmapCard } from "@/app/types/roadmap";

interface RoadmapCardProps {
  card: RoadmapCard;
  isActive: boolean;
  onHover: () => void;
}

export function RoadmapCard({ card, isActive, onHover }: RoadmapCardProps) {
  return (
    <div className="relative my-12" onMouseEnter={onHover}>
      <div
        className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border transition-transform duration-300 ease-in-out 
          ${isActive ? "translate-y-[-12px] border-brandblack" : "translate-y-0 border-muted"}`}
      >
        <div className={`w-2 h-2 rounded-full ${isActive ? "bg-brandblue" : "bg-grey-400"}`} />
        <span className={`text-sm font-medium ${isActive ? "" : "text-grey-400"}`}>{card.year}</span>
      </div>

      <div
        className={`w-full md:max-w-[320px] min-h-[340px] p-6 rounded-lg mt-6 transition-all duration-500 ease-in-out flex flex-col justify-between
    ${isActive ? "bg-brandblue text-white" : "bg-background text-grey-400"}`}
      >
        <h3 className="text-[28px] font-medium">{card.title}</h3>
        <div>
          {card.milestones.map((milestone, index) => (
            <div key={index} className="space-y-2">
              {milestone.description.map((desc, i) => (
                <p key={i} className="font-light tracking-normal text-base">
                  {desc}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
