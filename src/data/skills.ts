export interface SkillGroup {
  category: string;
  items: string[];
}

export const skills: SkillGroup[] = [
  {
    category: "Programming Languages",
    items: ["Python", "Java", "C", "Go", "Bash"],
  },
  {
    category: "DevOps & Infrastructure Tools",
    items: [
      "Git",
      "Ansible",
      "Terraform",
      "Docker",
      "Kubernetes",
      "Helm",
      "Gitlab",
      "Openshift",
      "Kafka",
      "Rancher",
    ],
  },
  {
    category: "Cloud Platforms",
    items: ["AWS", "Azure"],
  },
  {
    category: "Operating Systems",
    items: ["Debian based Linux", "RedHat Enterprise Linux", "Windows"],
  },
  {
    category: "Networking & Security",
    items: [
      "Burp Suite",
      "Nessus",
      "Nmap",
      "Wireshark",
      "MITRE ATT&CK Framework",
      "OpenVAS",
    ],
  },
  {
    category: "Other",
    items: ["Jira", "Confluence", "Technical Writing"],
  },
];
