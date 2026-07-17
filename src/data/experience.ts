export interface Job {
  company: string;
  role: string;
  start: string;
  end: string;
  bullets: string[];
}

export const experience: Job[] = [
  {
    company: "PlanSource",
    role: "Sr. DevOps Engineer",
    start: "April 2025",
    end: "Present",
    bullets: [
      "Deployed and hardened Kubernetes observability infrastructure, rolling out Zabbix proxy/agent monitoring with TLS across 6 K3s clusters via Helm and GitOps, closing critical alerting gaps.",
      "Authored 25+ operational runbooks on Confluence covering incident response for MySQL replication/locking, Salt master failures, disk capacity, GitLab outages, and Kubernetes pod troubleshooting — standardizing on-call procedures across the DevOps team.",
      "Executed major-version upgrades for core infrastructure (GitLab, Salt Stack, Zabbix), producing comprehensive test/production upgrade runbooks and coordinating zero-downtime cutovers for critical DevOps tooling.",
    ],
  },
  {
    company: "Market America - SHOP.COM",
    role: "Sr. Web Systems Engineer",
    start: "October 2023",
    end: "September 2024",
    bullets: [
      "Manage IT functions to support hardware, software and network systems.",
      "Applied regular patches and reviewed breach attempts to keep systems protected against emerging security threats.",
      "Improve network operations by recommending and implementing proactive hardware, software and policy updates.",
      "Administer, proactively monitor, and troubleshoot applications to prevent and correct any issues.",
    ],
  },
  {
    company: "Invisible AI",
    role: "Infrastructure Engineer",
    start: "December 2022",
    end: "August 2023",
    bullets: [
      "Monitored and maintained an increasing number of edge deployments, totaling in the tens.",
      "Supported clients in issue resolution, coordinating in-person consultations to troubleshoot and diagnose hardware problems.",
      "Deployed, maintained and monitored edge operating environments.",
      "Identified network, hardware and software problems and promptly implemented solutions.",
      "Developed scalable technology for deploying, operating, and monitoring software across diverse deployments and devices.",
    ],
  },
  {
    company: "Prometheus Group",
    role: "Cloud Deployment Specialist",
    start: "March 2022",
    end: "December 2022",
    bullets: [
      "Served as technical resource to field personnel for deployment issues.",
      "Delivered end-to-end infrastructure management solutions in a cloud environment.",
      "Automated deployment of cloud infrastructure using Gitlab-CI, ArgoCD, Terraform, and Helm for 20+ environments.",
      "Improved processes to reduce deployment times by 50%.",
      "Developed scripts to assist and automate software deployment and maintenance tasks.",
    ],
  },
  {
    company: "Point3 Security INC.",
    role: "Software Engineer",
    start: "July 2020",
    end: "February 2022",
    bullets: [
      "Coordinate/Automate network operations, maintenance, repairs, and upgrades using Ansible, AWX, and Gitlab CI/CD pipelines.",
      "Installed and configured software applications like Gitlab, Youtrack, and Nextcloud.",
      "Assess/Mitigate threats, risks, and vulnerabilities from emerging security issues to advise pertinent stakeholders on appropriate measures.",
      "Designed API fuzzer in python to break into a security-protected application to probe for vulnerabilities.",
      "Successfully discovered and fixed over 30 bugs/vulnerabilities, while conducting an internal penetration test.",
    ],
  },
];
