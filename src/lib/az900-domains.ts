// AZ-900 Domain Structure
export interface Domain {
  id: number;
  title: string;
  percentage: string;
  color: string;
  iconColor: string;
  description: string;
}

export const domains: Domain[] = [
  {
    id: 1,
    title: "Describe cloud concepts",
    percentage: "25–30%",
    color: "bg-blue-600",
    iconColor: "text-blue-600",
    description: "Cloud computing fundamentals, shared responsibility model, cloud models (public, private, hybrid), and service types (IaaS, PaaS, SaaS)"
  },
  {
    id: 2,
    title: "Describe Azure architecture and services",
    percentage: "35–40%",
    color: "bg-green-600", 
    iconColor: "text-green-600",
    description: "Core architectural components, compute services, networking services, storage services, and identity services"
  },
  {
    id: 3,
    title: "Describe Azure management and governance",
    percentage: "30–35%",
    color: "bg-purple-600",
    iconColor: "text-purple-600", 
    description: "Cost management, governance features, compliance tools, and monitoring services"
  }
];

export const getDomainFromKey = (key: string): string => {
  // Map concept keys to domains based on their content
  if (key.includes('cloud') || key.includes('shared-responsibility') || key.includes('consumption')) {
    return 'Domain 1: Cloud Concepts';
  }
  if (key.includes('compute') || key.includes('storage') || key.includes('network') || key.includes('database')) {
    return 'Domain 2: Azure Architecture';
  }
  if (key.includes('cost') || key.includes('governance') || key.includes('policy') || key.includes('compliance')) {
    return 'Domain 3: Management & Governance';
  }
  return 'General';
};