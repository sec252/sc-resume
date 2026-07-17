export interface Project {
  title: string;
  description: string;
  tags: string[];
  repo?: string;
  link?: string;
}

// Add projects here — the Projects page renders a "coming soon" state
// while this list is empty.
export const projects: Project[] = [];
