
import type { LucideIcon } from 'lucide-react';
import { Cloud, Layers, ShieldCheck, DollarSign, BrainCircuit, Zap, Server, Database, Network, ListTree } from 'lucide-react';

export interface Question {
  id: string;
  text: string;
  options: string[];
  correctAnswerIndex: number;
  feedback: string;
}

export interface SubTopic {
  id: string;
  name: string;
  studyGuide: string;
  mnemonicSuggestion?: string; // Textual idea for a mnemonic
}

export interface Topic {
  id: string;
  name: string;
  description: string;
  icon?: LucideIcon;
  studyGuide: string; // Concise breakdown for quick understanding
  mnemonicSuggestion?: string; // Textual idea for a mnemonic for the main topic
  subTopics?: SubTopic[];
  questions: Question[];
}

export const topics: Topic[] = [
  {
    id: 'cloud-concepts',
    name: 'Cloud Concepts',
    description: 'Understand core cloud computing concepts, models, and benefits.',
    icon: Cloud,
    studyGuide: `
**Core Idea:** Cloud computing is about accessing computing resources (servers, storage, software) over the internet ("the cloud") instead of owning and managing physical infrastructure.

**Key Benefits:**
*   **Cost Savings (CapEx to OpEx):** Pay only for what you use, reducing upfront hardware costs.
*   **Scalability:** Easily increase or decrease resources based on demand.
    *   *Elasticity:* Automatic scaling.
    *   *Scalability:* Manual/planned scaling.
*   **Reliability & Availability:** Cloud providers offer high uptime and data redundancy.
*   **Global Reach:** Deploy applications closer to users worldwide.
*   **Security:** Often more robust security than individual organizations can manage.
*   **Agility:** Rapidly provision resources and deploy applications.

**Service Models:**
*   **IaaS (Infrastructure as a Service):** Basic building blocks. You manage OS, middleware, apps. (e.g., Azure VMs, Storage, Networking)
    *   *Analogy:* Renting the land and building materials.
*   **PaaS (Platform as a Service):** Platform for developing/deploying apps without managing infrastructure. You manage apps & data. (e.g., Azure App Service, Azure SQL Database)
    *   *Analogy:* Renting a workshop with tools provided.
*   **SaaS (Software as a Service):** Ready-to-use software. Provider manages everything. (e.g., Microsoft 365, Gmail)
    *   *Analogy:* Renting a fully furnished and serviced house.

**Deployment Models:**
*   **Public Cloud:** Resources owned and operated by a third-party provider (e.g., Azure, AWS, GCP).
*   **Private Cloud:** Resources used exclusively by a single organization. Can be on-premises or hosted.
*   **Hybrid Cloud:** Combines public and private clouds, allowing data and apps to be shared between them.
`,
    mnemonicSuggestion: "Imagine a fluffy cloud (representing the internet) holding various tools (IaaS - hammer, PaaS - workbench, SaaS - finished product) that businesses can easily rent and scale.",
    subTopics: [
      {
        id: 'cc-st-ha',
        name: 'High Availability vs. Fault Tolerance vs. Disaster Recovery',
        studyGuide: `
**High Availability (HA):** Aims to ensure an agreed level of operational performance, usually uptime, for a higher than normal period. Focuses on preventing downtime.
    *   *Example:* Multiple instances of an application running, so if one fails, others take over.
**Fault Tolerance (FT):** The ability of a system to continue operating without interruption when one or more of its components fail. More robust than HA.
    *   *Example:* Redundant hardware components (power supplies, disks) that automatically take over.
**Disaster Recovery (DR):** The ability to recover from a disaster and restore business operations. Focuses on recovery after a major outage.
    *   *Example:* Backups in a different geographical region that can be restored if the primary region fails.
        `,
        mnemonicSuggestion: "HA: A trapeze artist with a safety net (backup). FT: A trapeze artist with two identical ropes, if one snaps, the other holds. DR: The entire circus tent burns down, but they have a plan to rebuild it quickly in another town."
      },
      {
        id: 'cc-st-capex-opex',
        name: 'CapEx vs. OpEx',
        studyGuide: `
**Capital Expenditure (CapEx):** Spending money on physical infrastructure upfront. Costs are fixed and have a long-term value.
    *   *Cloud context:* Less CapEx as you don't buy servers.
    *   *Example:* Buying servers, storage, networking equipment for an on-premises data center.
**Operational Expenditure (OpEx):** Spending money on services or products as you use them. Pay-as-you-go.
    *   *Cloud context:* More OpEx as you pay for cloud services consumed.
    *   *Example:* Monthly bill for Azure services, electricity, IT staff salaries.
        `,
        mnemonicSuggestion: "CapEx: Buying a whole Cow (big upfront cost). OpEx: Buying Milk cartons as needed (pay-as-you-go)."
      }
    ],
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
        text: 'Which cloud service model provides virtual machines, storage, and networking resources, giving you the most control over the hardware?',
        options: ['SaaS (Software as a Service)', 'PaaS (Platform as a Service)', 'IaaS (Infrastructure as a Service)', 'FaaS (Function as a Service)'],
        correctAnswerIndex: 2,
        feedback: 'Infrastructure as a Service (IaaS) offers fundamental building blocks for cloud IT, including access to networking features, computers (virtual or on dedicated hardware), and data storage space.',
      },
      {
        id: 'cc-q3',
        text: 'Migrating from an on-premises server to Azure Virtual Machines primarily shifts IT expenditure from:',
        options: ['OpEx to CapEx', 'CapEx to OpEx', 'Fixed costs to variable costs', 'Variable costs to fixed costs'],
        correctAnswerIndex: 1,
        feedback: 'Moving to Azure VMs reduces upfront hardware purchases (CapEx) and converts it to ongoing operational costs for using Azure services (OpEx). While costs become variable, the core shift is CapEx to OpEx.',
      },
    ],
  },
  {
    id: 'core-azure-services',
    name: 'Core Azure Services',
    description: 'Explore essential Azure services for compute, storage, networking, and databases.',
    icon: Layers,
    studyGuide: `
**Compute Services:** Run applications and workloads.
*   **Azure Virtual Machines (VMs):** IaaS. Linux & Windows. Full control.
*   **Azure App Service:** PaaS. Web apps, mobile backends, APIs. Auto-scaling, patching.
*   **Azure Functions:** Serverless (FaaS). Event-driven code execution. Pay per execution.
*   **Azure Kubernetes Service (AKS):** Managed Kubernetes for container orchestration.
*   **Azure Container Instances (ACI):** Run Docker containers without managing servers.

**Storage Services:** Store and manage data.
*   **Blob Storage:** Unstructured data (objects, files). Tiers: Hot, Cool, Archive.
*   **Disk Storage:** Persistent disks for VMs (SSD, HDD).
*   **File Storage:** Managed file shares (SMB protocol).
*   **Queue Storage:** Asynchronous messaging between application components.
*   **Table Storage:** NoSQL key-value store for semi-structured data.

**Networking Services:** Connect and manage network resources.
*   **Virtual Network (VNet):** Isolated network in Azure.
*   **Load Balancer:** Distribute traffic across multiple VMs/services.
*   **VPN Gateway:** Securely connect on-premises networks to Azure.
*   **Application Gateway:** Web traffic load balancer (Layer 7) with WAF.
*   **Content Delivery Network (CDN):** Cache content closer to users.

**Database Services:**
*   **Azure SQL Database:** Managed relational SQL database (PaaS).
*   **Azure Cosmos DB:** Globally distributed, multi-model NoSQL database.
*   **Azure Database for MySQL/PostgreSQL/MariaDB:** Managed open-source databases (PaaS).
`,
    mnemonicSuggestion: "Think of Azure as a giant digital city. Compute services are different types of buildings (VMs-houses, AppService-apartments, Functions-kiosks). Storage services are warehouses (Blob-general, File-office files). Networking provides roads (VNet, Load Balancer). Databases are libraries (SQL-structured, CosmosDB-global knowledge).",
    questions: [
      {
        id: 'cas-q1',
        text: 'Which Azure service is used to build, deploy, and scale web apps and APIs without managing the underlying infrastructure?',
        options: ['Azure Virtual Machines', 'Azure App Service', 'Azure Functions', 'Azure Kubernetes Service'],
        correctAnswerIndex: 1,
        feedback: 'Azure App Service is a fully managed platform (PaaS) for building, deploying, and scaling web apps and APIs quickly.',
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
        feedback: 'Azure Blob Storage is optimized for storing massive amounts of unstructured data, such as text or binary data (objects).',
      },
      {
        id: 'cas-q3',
        text: 'You need to run a small piece of code in response to an HTTP request, and you want to pay only when the code executes. Which Azure compute service is most suitable?',
        options: ['Azure Virtual Machines', 'Azure App Service', 'Azure Functions', 'Azure Kubernetes Service'],
        correctAnswerIndex: 2,
        feedback: 'Azure Functions is a serverless compute service (FaaS) that allows you to run event-triggered code without managing infrastructure, and you pay per execution.',
      },
    ],
  },
  {
    id: 'security-compliance',
    name: 'Security, Privacy, Compliance & Trust',
    description: 'Learn about Azure security features, compliance offerings, and data privacy.',
    icon: ShieldCheck,
    studyGuide: `
**Core Security Concepts:**
*   **Defense in Depth:** Multiple layers of security controls.
*   **Shared Responsibility Model:** Azure manages cloud infrastructure security; you manage security of your data and applications *in* the cloud.
*   **Zero Trust:** Assume breach; verify explicitly; use least privilege access.

**Key Azure Security Services:**
*   **Azure Active Directory (Azure AD):** Identity and access management (IAM). Authentication (who you are), Authorization (what you can do).
    *   *Features:* Multi-Factor Authentication (MFA), Conditional Access, Single Sign-On (SSO).
*   **Azure Security Center (Microsoft Defender for Cloud):** Unified security management. Provides recommendations, threat detection, and vulnerability assessment.
*   **Azure Key Vault:** Securely store and manage secrets, keys, and certificates.
*   **Azure Sentinel:** Cloud-native SIEM (Security Information and Event Management) and SOAR (Security Orchestration, Automation, and Response).
*   **Network Security Groups (NSGs):** Filter network traffic to/from Azure resources in a VNet. (Stateful firewall)
*   **Azure Firewall:** Managed, cloud-based network security service. Protects VNet resources. (Stateful, with threat intelligence)
*   **Web Application Firewall (WAF):** Protects web apps from common exploits (e.g., SQL injection, XSS). Available with Application Gateway, Front Door.
*   **Azure DDoS Protection:** Protects against Distributed Denial of Service attacks.

**Compliance & Trust:**
*   **Azure Policy:** Enforce organizational standards and assess compliance.
*   **Azure Blueprints:** Define and deploy compliant environments.
*   **Compliance Manager (in Microsoft Purview):** Assess and manage compliance with regulations (e.g., GDPR, HIPAA, ISO 27001).
*   **Trust Center:** Information about Microsoft's security, privacy, and compliance practices.
*   **Service Trust Portal:** Access audit reports and compliance documentation.

**Data Privacy:**
*   Data residency options (choose where data is stored).
*   Encryption: At rest (e.g., Azure Storage Service Encryption) and in transit (e.g., TLS/SSL).
`,
    mnemonicSuggestion: "Imagine a castle (Azure). Azure AD is the gatekeeper checking IDs. Security Center is the watchtower spotting threats. Key Vault is the treasure chest for secrets. NSGs are walls around districts. Azure Firewall is the main castle wall. WAF protects the castle's main entrance (web apps). Policies are the castle rules.",
    questions: [
      {
        id: 'sct-q1',
        text: 'Which Azure service helps you manage and enforce policies for your Azure resources to ensure compliance with organizational standards?',
        options: ['Azure Monitor', 'Microsoft Defender for Cloud (formerly Azure Security Center)', 'Azure Policy', 'Azure Active Directory'],
        correctAnswerIndex: 2,
        feedback: 'Azure Policy helps to enforce organizational standards and to assess compliance at-scale. It provides governance and resource consistency.',
      },
      {
        id: 'sct-q2',
        text: 'What is the primary function of Azure Active Directory (Azure AD)?',
        options: ['Network traffic filtering', 'Storing application secrets', 'Identity and access management', 'Monitoring application performance'],
        correctAnswerIndex: 2,
        feedback: 'Azure Active Directory is Microsoft’s cloud-based identity and access management service, which helps your employees sign in and access resources.',
      },
      {
        id: 'sct-q3',
        text: 'Which security principle involves implementing multiple layers of security measures, assuming that any single layer might be breached?',
        options: ['Least Privilege', 'Zero Trust', 'Defense in Depth', 'Shared Responsibility'],
        correctAnswerIndex: 2,
        feedback: 'Defense in Depth is a strategy that employs a series of mechanisms to slow the advance of an attack aimed at acquiring unauthorized access to information.',
      },
    ],
  },
  {
    id: 'pricing-support',
    name: 'Azure Pricing and Support',
    description: 'Understand Azure pricing models, cost management tools, and support options.',
    icon: DollarSign,
    studyGuide: `
**Azure Pricing Factors:**
*   **Resource Type:** Different services have different pricing (e.g., VMs vs. Storage).
*   **Service Tier/Performance:** Higher performance/more features = higher cost (e.g., Standard vs. Premium SSD).
*   **Usage Meters:** How much you consume (e.g., compute hours, storage GB, data transfer).
*   **Location (Region):** Prices vary by Azure region.
*   **Billing Zones (for data transfer):** Data transfer between regions or out to the internet can incur costs.

**Cost Management Tools:**
*   **Azure Pricing Calculator:** Estimate costs *before* deployment.
*   **Azure Cost Management + Billing:** Track spending, set budgets, get recommendations. Found in Azure portal.
*   **Azure Advisor:** Provides recommendations for cost optimization, performance, security, and reliability.
*   **Tags:** Label resources for cost tracking and organization.
*   **Azure Reservations:** Pre-pay for 1 or 3 years for significant discounts on VMs, SQL Database, etc.
*   **Azure Hybrid Benefit:** Use existing on-premises Windows Server/SQL Server licenses with Software Assurance for discounted rates on Azure.
*   **Spot VMs:** Access unused Azure compute capacity at deep discounts (can be preempted).

**Azure Support Plans:**
*   **Basic:** Included for all Azure customers. Billing and subscription management support. No technical support.
*   **Developer:** For trial and non-production. Business hours tech support via email.
*   **Standard:** For production workloads. 24/7 tech support via phone/email. Faster response times.
*   **Professional Direct (ProDirect):** Business-critical workloads. Fastest response times, architectural guidance, operational support.
*   **Enterprise:** For strategic customers. Includes ProDirect benefits + dedicated Technical Account Manager (TAM).

**Service Level Agreements (SLAs):**
*   Microsoft's commitment for uptime and connectivity for individual Azure services.
*   Usually expressed as a percentage (e.g., 99.9%).
*   If SLA is not met, you may be eligible for service credits.
*   SLAs can be combined (e.g., two VMs in different Availability Zones have a higher composite SLA).
`,
    mnemonicSuggestion: "Pricing: A shopping cart (Calculator) filling up based on items (Resource Type), quantity (Usage), and store location (Region). Cost Management: A piggy bank with tools to monitor (Cost Management), get advice (Advisor), and save (Reservations). Support: Different levels of mechanics for your car (Basic - manual only, Developer - email mechanic, Standard - 24/7 roadside, ProDirect - personal F1 pit crew).",
    questions: [
      {
        id: 'ps-q1',
        text: 'What tool can help you estimate the cost of Azure services *before* deploying them?',
        options: ['Azure Cost Management + Billing', 'Azure Advisor', 'Azure Pricing Calculator', 'Azure Monitor'],
        correctAnswerIndex: 2,
        feedback: 'The Azure Pricing Calculator is a free tool that helps you estimate the cost of Azure products and services before you commit to them.',
      },
      {
        id: 'ps-q2',
        text: 'Which Azure feature allows you to use existing on-premises Windows Server and SQL Server licenses with Software Assurance to get discounted rates on Azure?',
        options: ['Azure Reservations', 'Azure Spot VMs', 'Azure Hybrid Benefit', 'Azure Dev/Test pricing'],
        correctAnswerIndex: 2,
        feedback: 'Azure Hybrid Benefit allows you to leverage your existing on-premises licenses with Software Assurance to save money on Azure services like VMs and SQL Database.',
      },
      {
        id: 'ps-q3',
        text: 'Which Azure support plan is included at no cost for all Azure customers and primarily covers billing and subscription management issues?',
        options: ['Developer', 'Standard', 'Professional Direct', 'Basic'],
        correctAnswerIndex: 3,
        feedback: 'The Basic support plan is included for all Azure accounts and provides support for billing and subscription management, but not technical support for services.',
      },
    ],
  },
];

export const getTopicById = (id: string): Topic | undefined => {
  return topics.find((topic) => topic.id === id);
};

export const getSubTopicById = (topic: Topic, subTopicId: string): SubTopic | undefined => {
  return topic.subTopics?.find(subtopic => subtopic.id === subTopicId);
}

