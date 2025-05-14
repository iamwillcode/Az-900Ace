import type { LucideIcon } from 'lucide-react';
import { Cloud, Layers, ShieldCheck, DollarSign, BrainCircuit } from 'lucide-react';

export interface Question {
  id: string;
  text: string;
  options: string[];
  correctAnswerIndex: number;
  feedback: string;
}

export interface Topic {
  id: string;
  name: string;
  description: string;
  icon?: LucideIcon;
  questions: Question[];
}

export const topics: Topic[] = [
  {
    id: 'cloud-concepts',
    name: 'Cloud Concepts',
    description: 'Understand core cloud computing concepts, models, and benefits.',
    icon: Cloud,
    questions: [
      {
        id: 'cc-q1',
        text: 'What is the primary benefit of High Availability in the cloud?',
        options: [
          'Reduced cost',
          'Increased application uptime',
          'Faster deployment',
          'Better scalability',
        ],
        correctAnswerIndex: 1,
        feedback: 'High Availability ensures your applications and services remain operational even if some components fail, thus increasing uptime.',
      },
      {
        id: 'cc-q2',
        text: 'Which cloud service model provides virtual machines, storage, and networking resources?',
        options: ['SaaS', 'PaaS', 'IaaS', 'FaaS'],
        correctAnswerIndex: 2,
        feedback: 'Infrastructure as a Service (IaaS) offers fundamental building blocks for cloud IT, including access to networking features, computers (virtual or on dedicated hardware), and data storage space.',
      },
    ],
  },
  {
    id: 'core-azure-services',
    name: 'Core Azure Services',
    description: 'Explore essential Azure services for compute, storage, networking, and databases.',
    icon: Layers,
    questions: [
      {
        id: 'cas-q1',
        text: 'Which Azure service is used to build, deploy, and scale web apps and APIs?',
        options: ['Azure Virtual Machines', 'Azure App Service', 'Azure Functions', 'Azure Kubernetes Service'],
        correctAnswerIndex: 1,
        feedback: 'Azure App Service is a fully managed platform for building, deploying, and scaling web apps and APIs quickly.',
      },
      {
        id: 'cas-q2',
        text: 'What is the primary purpose of Azure Blob Storage?',
        options: [
          'Storing relational data',
          'Storing unstructured data like text or binary data',
          'Hosting virtual machine disks',
          'Managing user identities',
        ],
        correctAnswerIndex: 1,
        feedback: 'Azure Blob Storage is optimized for storing massive amounts of unstructured data, such as text or binary data.',
      },
    ],
  },
  {
    id: 'security-compliance',
    name: 'Security, Privacy, Compliance & Trust',
    description: 'Learn about Azure security features, compliance offerings, and data privacy.',
    icon: ShieldCheck,
    questions: [
      {
        id: 'sct-q1',
        text: 'Which Azure service helps you manage and enforce policies for your Azure resources?',
        options: ['Azure Monitor', 'Azure Security Center', 'Azure Policy', 'Azure Active Directory'],
        correctAnswerIndex: 2,
        feedback: 'Azure Policy helps to enforce organizational standards and to assess compliance at-scale. It provides governance and resource consistency.',
      },
    ],
  },
  {
    id: 'pricing-support',
    name: 'Azure Pricing and Support',
    description: 'Understand Azure pricing models, cost management tools, and support options.',
    icon: DollarSign,
    questions: [
      {
        id: 'ps-q1',
        text: 'What tool can help you estimate the cost of Azure services?',
        options: ['Azure Cost Management', 'Azure Advisor', 'Azure Pricing Calculator', 'Azure Monitor'],
        correctAnswerIndex: 2,
        feedback: 'The Azure Pricing Calculator is a free tool that helps you estimate the cost of Azure products and services.',
      },
    ],
  },
];

export const getTopicById = (id: string): Topic | undefined => {
  return topics.find((topic) => topic.id === id);
};
