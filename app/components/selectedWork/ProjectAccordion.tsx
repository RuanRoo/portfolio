'use client'

import * as React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { ProjectContent } from './ProjectContent'
import { type Project } from '@/app/types/project'

interface ProjectAccordionProps {
  projects: Project[]
}

export function ProjectAccordion({ projects }: ProjectAccordionProps) {
  const [openItem, setOpenItem] = React.useState<string | undefined>(undefined)

  return (
    <Accordion 
      type="single" 
      collapsible 
      className="w-full"
      value={openItem}
      onValueChange={(value) => setOpenItem(value)}
    >
      {projects.map((project) => {
        const isOpen = openItem === project.id
        return (
          <AccordionItem
            key={project.id}
            value={project.id}
            className=""
          >
            <AccordionTrigger className="hover:no-underline">
              <div className="flex w-full items-center justify-between border-b border-grey-400 py-2">
                <div className="flex items-center gap-3">
                  <div className={`h-2 w-2 rounded-full ${isOpen ? 'bg-brandblue' : 'bg-grey-500'}`} />
                  <span className="text-lg font-normal text-brandblack">
                    {project.title}
                  </span>
                </div>
                <span className={`text-sm ${isOpen ? 'text-brandblue' : 'text-grey-500'}`}>
                  See details
                </span>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <ProjectContent content={project.content} />
            </AccordionContent>
          </AccordionItem>
        )
      })}
    </Accordion>
  )
}

