"use client"
import { useEffect, useRef } from "react";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import { useScrollSnap } from "@/app/hooks/useScrollSnap";

export default function About() {

  const aboutRef = useRef<HTMLDivElement>(null)
  const { observeElement } = useScrollSnap()

  useEffect(() => {
    if (aboutRef.current) {
      observeElement(aboutRef.current, -80); // Pass the same offset as in scrollToSelectedWork
    }
  }, [observeElement])

  const scrollToAboutSections = () => {
    if (aboutRef.current) {
      const yOffset = -80; // Adjust this value to control the scroll position
      const y = aboutRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }

  return (
    <div className="mt-16 pl-20">
      <h2 className="font-semibold text-2xl pb-4">About</h2>
      <h1 className="font-semibold text-7xl tracking-tight !leading-super-tight">
        Hi folks, I'm Ruan
      </h1>
      <Section1 scroll={scrollToAboutSections} />
      <div ref={aboutRef}>
      <Section2 />
      </div>
      <Section3 />
    </div>
  );
}
