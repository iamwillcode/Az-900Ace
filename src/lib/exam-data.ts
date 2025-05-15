
import type { Question } from './azure-data'; // Reusing the Question type

export interface Exam {
  id: string;
  name: string;
  description: string;
  questions: Question[]; // Target: 50 questions per exam
}

export const exams: Exam[] = [
  {
    id: 'practice-exam-1',
    name: 'Practice Exam 1',
    description: 'A comprehensive set of 50 questions covering all AZ-900 objectives.',
    questions: [
      // Example questions - You need to populate 50 questions for each exam
      {
        id: 'exam1-q1',
        text: 'Which Azure service model provides the highest level of control over the operating system?',
        options: ['PaaS', 'SaaS', 'IaaS', 'FaaS'],
        correctAnswerIndex: 2,
        feedback: 'IaaS (Infrastructure as a Service) provides virtual machines where you have full control over the OS, networking, and installed software.',
      },
      {
        id: 'exam1-q2',
        text: 'What is the primary benefit of using Azure Availability Zones?',
        options: ['Reduced cost of virtual machines', 'Protection against regional outages', 'Protection against datacenter failures within a region', 'Faster deployment of resources'],
        correctAnswerIndex: 2,
        feedback: 'Availability Zones are physically separate locations within an Azure region, each with independent power, cooling, and networking, protecting applications from datacenter-level failures.',
      },
      {
        id: 'exam1-q3',
        text: 'Which Azure feature allows you to logically organize resources by applying name/value pairs?',
        options: ['Resource Groups', 'Management Groups', 'Tags', 'Azure Policy'],
        correctAnswerIndex: 2,
        feedback: 'Tags are metadata (name/value pairs) that you can apply to Azure resources to logically organize them, often used for cost tracking, billing, or automation.',
      },
      // ... add 47 more questions for Exam 1
    ],
  },
  {
    id: 'practice-exam-2',
    name: 'Practice Exam 2',
    description: 'A second comprehensive set of 50 questions to test your AZ-900 knowledge.',
    questions: [
      {
        id: 'exam2-q1',
        text: 'Which Azure service is primarily used for building, deploying, and scaling web apps and APIs without managing the underlying infrastructure?',
        options: ['Azure Virtual Machines', 'Azure Kubernetes Service (AKS)', 'Azure App Service', 'Azure Functions'],
        correctAnswerIndex: 2,
        feedback: 'Azure App Service is a PaaS offering that provides a fully managed platform for web applications and APIs, abstracting the underlying infrastructure.',
      },
      {
        id: 'exam2-q2',
        text: 'What is the main purpose of Azure ExpressRoute?',
        options: ['To provide a secure VPN connection over the public internet', 'To offer DNS resolution for Azure resources', 'To establish a private, dedicated connection to Azure from on-premises', 'To distribute network traffic across multiple servers'],
        correctAnswerIndex: 2,
        feedback: 'Azure ExpressRoute enables you to create private connections between Azure datacenters and infrastructure on your premises or in a colocation environment. These connections do not go over the public Internet.',
      },
      // ... add 48 more questions for Exam 2
    ],
  },
  {
    id: 'practice-exam-3',
    name: 'Practice Exam 3',
    description: 'A final comprehensive set of 50 questions to ensure AZ-900 exam readiness.',
    questions: [
      {
        id: 'exam3-q1',
        text: 'What is the term for the Azure pricing model where you only pay for the resources you use?',
        options: ['Reserved Instances', 'Consumption-based model', 'Spot Pricing', 'Subscription model'],
        correctAnswerIndex: 1,
        feedback: 'The consumption-based model, often referred to as pay-as-you-go, means you are billed only for the resources you consume.',
      },
      {
        id: 'exam3-q2',
        text: 'Which Azure security feature helps you enforce organizational standards and assess compliance across your resources?',
        options: ['Microsoft Defender for Cloud', 'Azure Firewall', 'Azure Policy', 'Network Security Groups (NSGs)'],
        correctAnswerIndex: 2,
        feedback: 'Azure Policy allows you to create, assign, and manage policies that enforce rules over your resources, helping maintain compliance and consistency.',
      },
      // ... add 48 more questions for Exam 3
    ],
  },
];

export const getExamById = (id: string): Exam | undefined => {
  return exams.find((exam) => exam.id === id);
};

    