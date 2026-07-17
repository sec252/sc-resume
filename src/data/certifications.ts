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
    // TODO: add the month/year earned once you have it handy.
    credentialUrl:
      "https://www.credly.com/badges/b0809db3-837b-4493-973e-c76d9fa67a2c/linked_in_profile",
  },
];
