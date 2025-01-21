export interface Project {
    id: string
    title: string
    content: {
      techStack: string[],
      website?: string
      description1: string
      description2: string
      image: string
    }
  }
  
  