export interface Project {
    id: string
    title: string
    content: {
      techStack: string[],
      website?: string
      description: string
      image: string
    }
  }
  
  