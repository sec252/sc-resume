export interface Certification {
  name: string;
  issuer: string;
  date?: string;
  credentialUrl?: string;
}

export const certifications: Certification[] = [
  {
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
  },
];
