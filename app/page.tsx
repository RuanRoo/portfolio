'use client'

import { useRef } from 'react'
import Landing from "./components/landing/Landing"
import SelectedWork from "./components/selectedWork/SelectedWork"

export default function Home() {
  const selectedWorkRef = useRef<HTMLDivElement>(null)



  const scrollToSelectedWork = () => {
    if (selectedWorkRef.current) {
      const yOffset = -80; // Adjust this value to control the scroll position
      const y = selectedWorkRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }

  return (
    <div className="text-brandblack text-lg">
      <Landing onExploreClick={scrollToSelectedWork} />
      <div ref={selectedWorkRef}>
        <SelectedWork />
      </div>
    </div>
  )
}

