// AZ-900 Concept Explanations
export interface ConceptExplanation {
  title: string;
  explanation: string;
  mnemonic?: string;
  examples?: string;
}

export const conceptExplanations: Record<string, ConceptExplanation> = {
  // Domain 1: Cloud Concepts
  'cloud-computing': {
    title: 'Cloud Computing',
    explanation: 'The delivery of computing services over the internet, including servers, storage, databases, networking, software, analytics, and intelligence.',
    mnemonic: 'Think COIN: Computing Over Internet Networks',
    examples: 'Email services like Gmail, streaming services like Netflix, or storage services like OneDrive'
  },
  'high-availability': {
    title: 'High Availability',
    explanation: 'The ability of a system to remain operational and accessible for a high percentage of time, typically 99.9% or higher.',
    mnemonic: 'HA = Happy Always (system is always up)',
    examples: 'Azure guarantees 99.95% uptime SLA for virtual machines with multiple instances'
  },
  'scalability': {
    title: 'Scalability',
    explanation: 'The ability to handle increased workload by adding resources to the system.',
    mnemonic: 'Scale = Size Can Accommodate Load Expansion',
    examples: 'Auto-scaling web apps during traffic spikes, or adding more VMs during peak hours'
  },
  'elasticity': {
    title: 'Elasticity',
    explanation: 'The ability to automatically provision and release resources based on demand.',
    mnemonic: 'Elastic = Expands and Contracts automatically',
    examples: 'Azure VM Scale Sets that automatically add/remove VMs based on CPU usage'
  },
  'fault-tolerance': {
    title: 'Fault Tolerance',
    explanation: 'The ability of a system to continue operating properly in the event of failure of some components.',
    mnemonic: 'FT = Failure Tolerant (keeps working despite failures)',
    examples: 'Azure Availability Zones, redundant storage accounts, backup databases'
  },
  'disaster-recovery': {
    title: 'Disaster Recovery',
    explanation: 'The process of restoring systems and data after a catastrophic failure or natural disaster.',
    mnemonic: 'DR = Disaster Restoration (bringing systems back to life)',
    examples: 'Azure Site Recovery, geo-redundant backups, cross-region replication'
  },

  // Cloud Models
  'public-cloud': {
    title: 'Public Cloud',
    explanation: 'Cloud services offered over the public internet and available to anyone who wants to purchase them.',
    mnemonic: 'Public = Everyone can use it (like a public park)',
    examples: 'Microsoft Azure, Amazon AWS, Google Cloud Platform'
  },
  'private-cloud': {
    title: 'Private Cloud',
    explanation: 'Cloud computing resources used exclusively by one business or organization.',
    mnemonic: 'Private = Personal and Exclusive (like a private home)',
    examples: 'On-premises data centers, Azure Stack, VMware vSphere'
  },
  'hybrid-cloud': {
    title: 'Hybrid Cloud',
    explanation: 'A computing environment that combines public and private clouds, allowing data and applications to be shared between them.',
    mnemonic: 'Hybrid = Half public, Half private (like a hybrid car)',
    examples: 'Azure Arc, connecting on-premises servers to Azure services'
  },

  // Service Models
  'iaas': {
    title: 'Infrastructure as a Service (IaaS)',
    explanation: 'Cloud computing service that provides virtualized computing resources over the internet.',
    mnemonic: 'IaaS = I manage the Apps and OS, Azure provides Infrastructure',
    examples: 'Azure Virtual Machines, Azure Storage, Azure Virtual Networks'
  },
  'paas': {
    title: 'Platform as a Service (PaaS)',
    explanation: 'Cloud computing service that provides a platform allowing customers to develop, run, and manage applications.',
    mnemonic: 'PaaS = Platform provided, I just write Apps',
    examples: 'Azure App Service, Azure SQL Database, Azure Functions'
  },
  'saas': {
    title: 'Software as a Service (SaaS)',
    explanation: 'Cloud computing service where software applications are delivered over the internet on a subscription basis.',
    mnemonic: 'SaaS = Software Already Served (ready to use)',
    examples: 'Microsoft 365, Salesforce, Dropbox, Gmail'
  },

  // Shared Responsibility
  'shared-responsibility-model': {
    title: 'Shared Responsibility Model',
    explanation: 'A security and compliance framework that defines the responsibilities of cloud service providers and customers.',
    mnemonic: 'Shared = We both Share the Responsibility',
    examples: 'Microsoft secures the datacenter, you secure your data and access controls'
  },

  // Domain 2: Azure Architecture and Services
  'azure-regions': {
    title: 'Azure Regions',
    explanation: 'Geographical areas containing one or more datacenters that are nearby and networked together with a low-latency network.',
    mnemonic: 'Regions = Real locations around the globe',
    examples: 'East US, West Europe, Southeast Asia - each region has multiple datacenters'
  },
  'availability-zones': {
    title: 'Availability Zones',
    explanation: 'Physically separate locations within an Azure region, each with independent power, cooling, and networking.',
    mnemonic: 'AZ = Areas that are Zoned separately for high availability',
    examples: 'In East US region, there are 3 availability zones for redundancy'
  },
  'resource-groups': {
    title: 'Resource Groups',
    explanation: 'Logical containers for resources deployed on Azure, used to organize and manage related resources.',
    mnemonic: 'RG = Related items Grouped together',
    examples: 'A web app resource group containing VMs, databases, and load balancers'
  },
  'azure-resource-manager': {
    title: 'Azure Resource Manager (ARM)',
    explanation: 'The deployment and management service for Azure that provides a consistent management layer.',
    mnemonic: 'ARM = All Resources Managed through one interface',
    examples: 'ARM templates for infrastructure as code, managing resource lifecycles'
  },

  // Compute Services
  'virtual-machines': {
    title: 'Azure Virtual Machines',
    explanation: 'On-demand, scalable computing resources that provide the flexibility of virtualization.',
    mnemonic: 'VM = Virtual computer Machine',
    examples: 'Windows Server VMs, Linux VMs, specialized workload VMs'
  },
  'app-service': {
    title: 'Azure App Service',
    explanation: 'A fully managed platform for building, deploying, and scaling web apps and APIs.',
    mnemonic: 'App Service = Applications Served fully managed',
    examples: 'Web apps, mobile app backends, RESTful APIs'
  },
  'container-instances': {
    title: 'Azure Container Instances',
    explanation: 'The fastest and simplest way to run containers in Azure without managing virtual machines.',
    mnemonic: 'ACI = Applications in Containers Instantly',
    examples: 'Running Docker containers, batch processing, microservices'
  },
  'kubernetes-service': {
    title: 'Azure Kubernetes Service (AKS)',
    explanation: 'A managed Kubernetes container orchestration service.',
    mnemonic: 'AKS = Applications managed with Kubernetes Service',
    examples: 'Orchestrating microservices, scaling containerized applications'
  },
  'azure-functions': {
    title: 'Azure Functions',
    explanation: 'A serverless computing service that lets you run code on-demand without managing infrastructure.',
    mnemonic: 'Functions = Code that Functions without servers to manage',
    examples: 'HTTP triggers, timer-based processing, event-driven workflows'
  },

  // Storage Services
  'blob-storage': {
    title: 'Azure Blob Storage',
    explanation: 'A service for storing large amounts of unstructured data, such as text or binary data.',
    mnemonic: 'Blob = Big Lumps of Binary data',
    examples: 'Images, videos, documents, backups, static website content'
  },
  'disk-storage': {
    title: 'Azure Disk Storage',
    explanation: 'High-performance, durable block storage for Azure Virtual Machines.',
    mnemonic: 'Disk = Data stored on virtual disks',
    examples: 'OS disks, data disks, managed disks for VMs'
  },
  'file-storage': {
    title: 'Azure File Storage',
    explanation: 'Fully managed file shares in the cloud accessible via SMB protocol.',
    mnemonic: 'Files = Shared file systems in the cloud',
    examples: 'Shared application data, configuration files, lift-and-shift scenarios'
  },
  'storage-tiers': {
    title: 'Azure Storage Tiers',
    explanation: 'Different access tiers for blob storage based on how frequently data is accessed.',
    mnemonic: 'Tiers = Temperature determines cost (Hot, Cool, Archive)',
    examples: 'Hot tier for frequently accessed data, Archive tier for long-term backups'
  },

  // Domain 3: Management and Governance
  'azure-cost-management': {
    title: 'Azure Cost Management',
    explanation: 'A suite of tools to help monitor, allocate, and optimize cloud costs.',
    mnemonic: 'Cost Management = Control your spending',
    examples: 'Cost analysis, budgets and alerts, spending recommendations'
  },
  'pricing-calculator': {
    title: 'Azure Pricing Calculator',
    explanation: 'A tool to estimate costs for Azure services before deployment.',
    mnemonic: 'Calculator = Calculate costs before you buy',
    examples: 'Estimating VM costs, storage pricing, bandwidth charges'
  },
  'total-cost-ownership': {
    title: 'Total Cost of Ownership (TCO)',
    explanation: 'The complete cost of owning and operating a system over its entire lifecycle.',
    mnemonic: 'TCO = Total Cost of Ownership (everything included)',
    examples: 'Comparing on-premises vs cloud costs, including hardware, power, maintenance'
  },
  'azure-policy': {
    title: 'Azure Policy',
    explanation: 'A service that allows you to create, assign, and manage policies to enforce rules and effects over your resources.',
    mnemonic: 'Policy = Rules to ensure compliance',
    examples: 'Requiring encryption, restricting VM sizes, enforcing naming conventions'
  },
  'role-based-access-control': {
    title: 'Role-Based Access Control (RBAC)',
    explanation: 'A system that provides fine-grained access management of Azure resources.',
    mnemonic: 'RBAC = Right person, Right access, Based on their role',
    examples: 'Owner, Contributor, Reader roles; custom roles for specific permissions'
  },
  'resource-locks': {
    title: 'Resource Locks',
    explanation: 'A feature that prevents accidental deletion or modification of critical resources.',
    mnemonic: 'Locks = Protect resources from accidental changes',
    examples: 'Delete locks on production databases, ReadOnly locks on shared resources'
  },
  'azure-blueprints': {
    title: 'Azure Blueprints',
    explanation: 'A service that enables cloud architects to define a repeatable set of Azure resources.',
    mnemonic: 'Blueprints = Building plan for consistent environments',
    examples: 'Compliance templates, environment standards, governance frameworks'
  }
};

export const getConceptById = (key: string): ConceptExplanation | undefined => {
  return conceptExplanations[key];
};