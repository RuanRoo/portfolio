"use client";

import { useState } from "react";
import { RoadmapCard } from "./RoadmapCard";
import { roadmapData } from "@/data/data";
import Link from "next/link";
import { NavigationButtons } from "@/components/navButtons";

export function Roadmap() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrevious = () => {
    setActiveIndex((current) => (current > 0 ? current - 1 : roadmapData.length - 1));
  };

  const handleNext = () => {
    setActiveIndex((current) => (current < roadmapData.length - 1 ? current + 1 : 0));
  };

  const handleHover = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="mx-8 md:mx-14 my-8">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-8">
        <div className="space-y-2">
          <h2 className="text-4xl md:text-6xl font-semibold mb-12">The roadmap</h2>
          <div className="md:max-w-96">
            <p className="text-base md:text-xl">Travel through time to learn about my work experience</p>
          </div>
        </div>
        <div className="mt-4 ml-auto md:mr-16">
          <NavigationButtons onPrevious={handlePrevious} onNext={handleNext} />
        </div>
      </div>

      {/* Mobile view */}
      <div className="md:hidden">
        <RoadmapCard card={roadmapData[activeIndex]} isActive={true} onHover={() => {}} />
      </div>

      {/* Desktop view */}
      <div className="hidden md:grid grid-cols-4 gap-6 overflow-hidden">
        {roadmapData.map((card, index) => (
          <RoadmapCard key={index} card={card} isActive={index === activeIndex} onHover={() => handleHover(index)} />
        ))}
      </div>
      <div className="flex justify-end mt-4">
        <Link href="/about">
          <div className="border border-brandblack font-semibold rounded-[91px] px-6 py-2 hover:border-brandblue hover:text-brandblue transition-all duration-500 ease-in-out inline-block">
            more about me
          </div>
        </Link>
      </div>
    </div>
  );
}