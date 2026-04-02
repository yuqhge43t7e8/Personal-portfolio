export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  github: string;
  demo?: string;
  learningOutcome: string;
}

export interface Skill {
  name: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  percentage: number;
  category: 'Frontend' | 'Programming' | 'Tools';
}

export interface JourneyStep {
  year: string;
  title: string;
  description: string;
}
