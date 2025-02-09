export interface Milestone {
    title: string
    description: string[]
  }
  
  export interface RoadmapCard {
    year: number
    title: string
    milestones: Milestone[]
  }
  
  