
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
    description: 'A comprehensive set of questions covering all AZ-900 objectives. Target: 50 questions.',
    questions: [
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
      {
        id: 'exam1-q4',
        text: 'What is the term for the cloud pricing model where you pay only for the IT resources you use?',
        options: ['CapEx', 'OpEx', 'Pay-as-you-go', 'Reserved Instances'],
        correctAnswerIndex: 2,
        feedback: 'Pay-as-you-go, also known as the consumption-based model, means you are billed only for the resources you consume.',
      },
      {
        id: 'exam1-q5',
        text: 'Which of the following best describes a hybrid cloud model?',
        options: ['All resources are hosted on-premises.', 'All resources are hosted by a third-party cloud provider.', 'A combination of public and private cloud resources.', 'Resources are shared among multiple organizations with common goals.'],
        correctAnswerIndex: 2,
        feedback: 'A hybrid cloud model combines public and private clouds, allowing data and applications to be shared between them, offering flexibility and optimized solutions.',
      },
      {
        id: 'exam1-q6',
        text: 'What is the primary function of Azure Virtual Network (VNet)?',
        options: ['To provide compute resources on demand.', 'To enable private network connectivity for Azure resources.', 'To store large amounts of unstructured data.', 'To manage user identities and access.'],
        correctAnswerIndex: 1,
        feedback: 'Azure Virtual Network (VNet) enables many types of Azure resources, such as Azure Virtual Machines (VM), to securely communicate with each other, the internet, and on-premises networks.',
      },
      {
        id: 'exam1-q7',
        text: 'Which Azure service is used to enforce organizational standards and assess compliance at scale?',
        options: ['Azure Monitor', 'Azure Advisor', 'Azure Policy', 'Azure Blueprints'],
        correctAnswerIndex: 2,
        feedback: 'Azure Policy helps to enforce organizational standards and assess compliance at-scale. It evaluates resources in Azure by comparing the properties of those resources to business rules.',
      },
      {
        id: 'exam1-q8',
        text: 'What is the purpose of Azure Blob Storage "Cool" access tier?',
        options: ['For frequently accessed data requiring low latency.', 'For long-term backup and archival data that is rarely accessed.', 'For infrequently accessed data that needs to be stored for at least 30 days.', 'For high-performance disk storage for VMs.'],
        correctAnswerIndex: 2,
        feedback: 'The Cool access tier in Azure Blob Storage is optimized for storing data that is infrequently accessed and stored for at least 30 days, offering lower storage costs than Hot tier but higher access costs.',
      },
      {
        id: 'exam1-q9',
        text: 'Which authentication method requires users to provide more than one form of verification?',
        options: ['Single Sign-On (SSO)', 'Passwordless Authentication', 'Multi-Factor Authentication (MFA)', 'Basic Authentication'],
        correctAnswerIndex: 2,
        feedback: 'Multi-Factor Authentication (MFA) is a security process that requires users to provide two or more verification factors to gain access, adding an extra layer of security.',
      },
      {
        id: 'exam1-q10',
        text: 'What does Azure Resource Manager (ARM) provide?',
        options: ['A physical device for offline data transfer.', 'A machine learning service for building models.', 'A deployment and management service for Azure resources.', 'A content delivery network for caching static assets.'],
        correctAnswerIndex: 2,
        feedback: 'Azure Resource Manager (ARM) is the deployment and management service for Azure. It provides a consistent management layer that enables you to create, update, and delete resources in your Azure subscription.',
      },
      // ... add 40 more questions for Exam 1 to reach 50
    ],
  },
  {
    id: 'practice-exam-2',
    name: 'Practice Exam 2',
    description: 'A second comprehensive set of questions to test your AZ-900 knowledge. Target: 50 questions.',
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
      {
        id: 'exam2-q3',
        text: 'Which of the following is a benefit of using Azure regions?',
        options: ['All services cost the same in every region.', 'Allows deployment of resources closer to users for lower latency.', 'Eliminates the need for data backups.', 'Guarantees 100% uptime for all services.'],
        correctAnswerIndex: 1,
        feedback: 'Azure regions allow you to deploy resources in geographical locations closer to your users or specific markets, which can reduce network latency and improve user experience.',
      },
      {
        id: 'exam2-q4',
        text: 'What is the primary role of a Network Security Group (NSG) in Azure?',
        options: ['To provide DNS name resolution.', 'To encrypt data at rest in Azure Storage.', 'To filter network traffic to and from Azure resources in an Azure Virtual Network.', 'To connect an on-premises network to Azure.'],
        correctAnswerIndex: 2,
        feedback: 'Network Security Groups (NSGs) are used to filter network traffic to and from Azure resources within an Azure Virtual Network (VNet) using inbound and outbound security rules.',
      },
      {
        id: 'exam2-q5',
        text: 'Which Azure tool would you use to estimate the cost savings of migrating your on-premises workloads to Azure?',
        options: ['Azure Pricing Calculator', 'Azure Cost Management', 'Azure Advisor', 'Total Cost of Ownership (TCO) Calculator'],
        correctAnswerIndex: 3,
        feedback: 'The Total Cost of Ownership (TCO) Calculator helps you estimate the cost savings you can realize by migrating your on-premises workloads to Azure by comparing your current datacenter costs with Azure costs.',
      },
      {
        id: 'exam2-q6',
        text: 'What is the benefit of using "Availability Sets" for Azure Virtual Machines?',
        options: ['To automatically scale the number of VMs based on demand.', 'To protect VMs from regional outages.', 'To protect VMs from hardware failures within a single Azure datacenter.', 'To provide a managed desktop virtualization service.'],
        correctAnswerIndex: 2,
        feedback: 'Availability Sets ensure that the VMs you deploy are distributed across multiple fault domains and update domains within a single datacenter, protecting your application from localized hardware failures or planned maintenance events.',
      },
      {
        id: 'exam2-q7',
        text: 'Which Azure identity service is designed for enabling guest users from other organizations to collaborate on your Azure resources?',
        options: ['Microsoft Entra Domain Services', 'Azure AD B2C', 'Microsoft Entra B2B', 'Azure RBAC'],
        correctAnswerIndex: 2,
        feedback: 'Microsoft Entra B2B (Business-to-Business) collaboration allows you to invite guest users (partners, vendors) from other organizations to collaborate using their own credentials.',
      },
      {
        id: 'exam2-q8',
        text: 'Which storage redundancy option replicates data to a secondary region and provides read-access to that data in the secondary region?',
        options: ['Locally-Redundant Storage (LRS)', 'Zone-Redundant Storage (ZRS)', 'Geo-Redundant Storage (GRS)', 'Read-Access Geo-Redundant Storage (RA-GRS)'],
        correctAnswerIndex: 3,
        feedback: 'Read-Access Geo-Redundant Storage (RA-GRS) replicates your data to a secondary region and also provides read-only access to the data in the secondary region from a separate endpoint.',
      },
       {
        id: 'exam2-q9',
        text: 'What is the primary use case for Azure Functions?',
        options: ['Running traditional, stateful enterprise applications.', 'Hosting full operating systems with custom configurations.', 'Executing small pieces of code in response to events (serverless).', 'Providing managed Kubernetes orchestration.'],
        correctAnswerIndex: 2,
        feedback: 'Azure Functions is a serverless compute service that enables you to run event-triggered code without having to explicitly provision or manage infrastructure.',
      },
      {
        id: 'exam2-q10',
        text: 'Which security principle is embodied by Azure Role-Based Access Control (RBAC)?',
        options: ['Zero Trust', 'Defense in Depth', 'Shared Responsibility', 'Least Privilege'],
        correctAnswerIndex: 3,
        feedback: 'Azure RBAC helps you enforce the principle of least privilege by allowing you to grant users only the permissions they need to perform their specific job tasks.',
      },
      // ... add 40 more questions for Exam 2 to reach 50
    ],
  },
  {
    id: 'practice-exam-3',
    name: 'Practice Exam 3',
    description: 'A final comprehensive set of questions to ensure AZ-900 exam readiness. Target: 50 questions.',
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
      {
        id: 'exam3-q3',
        text: 'Which Azure service would you use to get personalized recommendations for optimizing your Azure resources for cost, security, and performance?',
        options: ['Azure Monitor', 'Azure Service Health', 'Azure Advisor', 'Azure Cost Management'],
        correctAnswerIndex: 2,
        feedback: 'Azure Advisor provides personalized recommendations to help you optimize your Azure deployments across cost, security, reliability, performance, and operational excellence.',
      },
      {
        id: 'exam3-q4',
        text: 'What is the purpose of Azure Management Groups?',
        options: ['To manage virtual machines and their storage.', 'To provide a scope for applying governance controls across multiple subscriptions.', 'To create isolated network environments in Azure.', 'To store and manage secrets, keys, and certificates.'],
        correctAnswerIndex: 1,
        feedback: 'Azure Management Groups provide a level of scope above subscriptions, allowing you to organize subscriptions into a hierarchy and apply governance controls like policies and RBAC across them.',
      },
      {
        id: 'exam3-q5',
        text: 'Which type of Azure resource lock prevents users from deleting a resource but still allows them to modify it?',
        options: ['ReadOnly lock', 'CanNotDelete lock', 'DenyWrite lock', 'Audit lock'],
        correctAnswerIndex: 1,
        feedback: 'A CanNotDelete lock ensures that authorized users can read and modify a resource, but they cannot delete it.',
      },
      {
        id: 'exam3-q6',
        text: 'Which Azure service allows you to extend Azure management and services to on-premises or multi-cloud environments?',
        options: ['Azure Virtual Network', 'Azure Migrate', 'Azure Arc', 'Azure Lighthouse'],
        correctAnswerIndex: 2,
        feedback: 'Azure Arc provides a bridge that extends Azure management and services to your infrastructure, whether it\'s on-premises, at the edge, or in other clouds.',
      },
      {
        id: 'exam3-q7',
        text: 'If a company needs to transfer 50TB of data to Azure and has limited internet bandwidth, which Azure service or tool is most appropriate?',
        options: ['AzCopy over the internet', 'Azure Storage Explorer', 'Azure Migrate online migration', 'Azure Data Box'],
        correctAnswerIndex: 3,
        feedback: 'Azure Data Box is a physical device shipped to you for offline transfer of large amounts of data, ideal for scenarios with limited bandwidth or very large datasets.',
      },
      {
        id: 'exam3-q8',
        text: 'What is the core concept behind "Infrastructure as Code" (IaC)?',
        options: ['Manually configuring all infrastructure through a GUI.', 'Managing and provisioning infrastructure through machine-readable definition files.', 'Using physical hardware exclusively for all deployments.', 'Outsourcing all infrastructure management to a third party.'],
        correctAnswerIndex: 1,
        feedback: 'Infrastructure as Code (IaC) is the practice of managing and provisioning IT infrastructure using code and automation, rather than manual processes or interactive tools.',
      },
      {
        id: 'exam3-q9',
        text: 'Which Azure service offers a Cloud Security Posture Management (CSPM) and Cloud Workload Protection Platform (CWPP)?',
        options: ['Azure Firewall', 'Azure Key Vault', 'Microsoft Defender for Cloud', 'Azure Sentinel'],
        correctAnswerIndex: 2,
        feedback: 'Microsoft Defender for Cloud provides both CSPM capabilities to help you strengthen your security posture and CWPP capabilities to protect your cloud workloads against threats.',
      },
      {
        id: 'exam3-q10',
        text: 'What type of information does Azure Service Health primarily provide?',
        options: ['Performance metrics of your applications.', 'Recommendations for cost optimization.', 'Information about Azure platform issues, planned maintenance, and health advisories affecting your resources.', 'Logs from your Azure resources.'],
        correctAnswerIndex: 2,
        feedback: 'Azure Service Health keeps you informed about the health of the Azure services and regions you use, including service issues, planned maintenance, and health advisories from Microsoft that might impact your resources.',
      },
      // ... add 40 more questions for Exam 3 to reach 50
    ],
  },
];

export const getExamById = (id: string): Exam | undefined => {
  return exams.find((exam) => exam.id === id);
};
