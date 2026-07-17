export interface Reference {
  name: string;
  title?: string;
  quote: string;
  linkedinUrl?: string;
}

// Sourced from the "Recommendations received" section of LinkedIn. Verify
// wording against the profile directly before treating these as exact
// quotes — job titles weren't visible without logging in, so they're
// omitted rather than guessed.
export const references: Reference[] = [
  {
    name: "Gabe Ingram",
    quote:
      "Samuel has vast knowledge with technologies including OpenShift, Grafana, NiFi, and Linux distributions. He deployed, maintained, and troubleshot these applications effectively. Dedicated to learning, Samuel tackles challenges persistently and communicates well across technical and non-technical teams, making him a valuable asset.",
  },
  {
    name: "Johnathan Irvin",
    quote:
      "Chance is an exceptionally talented and motivated engineer who quickly familiarized himself with the team's work and contributed significantly to software security efforts. He made valuable suggestions for process improvements and is highly recommended for any organization seeking a driven software engineer.",
  },
];
