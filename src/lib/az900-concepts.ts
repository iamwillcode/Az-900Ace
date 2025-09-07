// AZ-900 Concept Explanations
export interface ConceptExplanation {
  title: string;
  explanation: string;
  examples?: string;
  useCase?: string;
  mnemonic?: string;
  visual?: string;
}

export const conceptExplanations: Record<string, ConceptExplanation> = {
  // Domain 1: Cloud Concepts
  'cloud-computing': {
    title: 'Cloud Computing',
    explanation: '📚 Cloud computing is the delivery of computing services—including servers, storage, databases, networking, software, analytics, and artificial intelligence—over the Internet ("the cloud") to offer faster innovation, flexible resources, and economies of scale.',
    examples: '💡 Examples: Microsoft 365 (SaaS), Azure App Service (PaaS), Azure Virtual Machines (IaaS), Netflix streaming, Dropbox file storage, Gmail email service.',
    useCase: '🏢 Use Case: A startup company needs to deploy a web application quickly without investing in physical hardware. They use Azure App Service to host their application, Azure SQL Database for data storage, and Azure CDN for global content delivery. This allows them to scale automatically as they grow without upfront capital investment.',
    mnemonic: '🧠 CLOUD = Computing Lives Online Using Dynamic resources\nThink of it like renting vs. buying - you pay for what you use when you need it, without owning the infrastructure.',
    visual: `🎨 Visual:
    ┌─────────────────────────────────────┐
    │           THE CLOUD ☁️              │
    │  ┌─────────────────────────────────┐ │
    │  │    Microsoft Azure Services    │ │
    │  │  ┌─────┐ ┌─────┐ ┌──────────┐  │ │
    │  │  │ VMs │ │ SQL │ │ App Serv │  │ │
    │  │  └─────┘ └─────┘ └──────────┘  │ │
    │  └─────────────────────────────────┘ │
    └─────────────────────────────────────┘
              ↕️ Internet Connection
    ┌─────────────────────────────────────┐
    │        Your Business 🏢             │
    │   💻 Laptops  📱 Mobile  🖥️ Desktop │
    └─────────────────────────────────────┘`
  },
  'high-availability': {
    title: 'High Availability',
    explanation: '📚 The ability of a system to remain operational and accessible for a high percentage of time, typically 99.9% or higher. High availability is achieved through redundancy, failover mechanisms, and eliminating single points of failure.',
    examples: '💡 Examples: Azure guarantees 99.95% uptime SLA for virtual machines with multiple instances, Azure Load Balancer distributing traffic across zones, database replicas in different regions',
    useCase: '🏢 Use Case: A banking application requires 99.99% uptime to ensure customers can access their accounts 24/7. The bank deploys their application across multiple Azure availability zones with automatic failover, ensuring if one data center goes down, traffic seamlessly shifts to another location.',
    mnemonic: '🧠 HA = Happy Always (system is always up) - like having multiple backup power generators for a hospital',
    visual: `🎨 Visual: High Availability Setup
┌─────────────────────────────────────────────────┐
│                Load Balancer                    │
│              (99.99% Available)                 │
└─────────────┬───────────────────────┬───────────┘
              │                       │
         ┌────▼────┐               ┌───▼─────┐
         │ Zone A  │               │ Zone B  │
         │ Web App │               │ Web App │
         │ [Active]│               │[Standby]│
         └────┬────┘               └───┬─────┘
              │                       │
         ┌────▼────┐               ┌───▼─────┐
         │Database │◄─────────────►│Database │
         │Primary  │   Sync        │ Replica │
         └─────────┘               └─────────┘
         99.95%                    99.95%
    Combined: 99.99% availability`
  },
  'scalability': {
    title: 'Scalability',
    explanation: '📚 The ability to handle increased workload by adding resources to the system. Scalability can be vertical (scaling up - adding more power to existing machines) or horizontal (scaling out - adding more machines).',
    examples: '💡 Examples: Auto-scaling web apps during traffic spikes, adding more VMs during peak hours, Azure VM Scale Sets automatically adjusting capacity based on demand',
    useCase: '🏢 Use Case: A video streaming service expects 10x traffic during a major sports event. They configure Azure auto-scaling to automatically spin up additional VM instances when CPU usage exceeds 70%, ensuring smooth streaming for millions of viewers without manual intervention.',
    mnemonic: '🧠 SCALE = Size Can Accommodate Load Expansion - like adding more lanes to a highway during rush hour',
    visual: `🎨 Visual: Scalability Types
Vertical Scaling (Scale Up):
┌─────────┐    ┌─────────────┐
│   VM    │ => │  Bigger VM  │
│ 2 cores │    │  8 cores    │
│ 4GB RAM │    │ 32GB RAM    │
└─────────┘    └─────────────┘

Horizontal Scaling (Scale Out):
┌─────┐        ┌─────┐ ┌─────┐ ┌─────┐
│ VM1 │   =>   │ VM1 │ │ VM2 │ │ VM3 │
│2core│        │2core│ │2core│ │2core│
└─────┘        └─────┘ └─────┘ └─────┘
               Load Balancer distributes`
  },
  'elasticity': {
    title: 'Elasticity',
    explanation: '📚 The ability to automatically provision and release resources based on demand. Elasticity combines both scaling out during high demand and scaling in during low demand, providing cost optimization.',
    examples: '💡 Examples: Azure VM Scale Sets that automatically add/remove VMs based on CPU usage, Azure Functions that scale to zero when not used, auto-scaling web apps during traffic variations',
    useCase: '🏢 Use Case: An online retail store experiences traffic spikes during flash sales and quiet periods overnight. Azure auto-scaling automatically adds VM instances during sales (scaling out) and removes them during quiet hours (scaling in), ensuring performance while minimizing costs.',
    mnemonic: '🧠 ELASTIC = Expands and Contracts automatically - like a rubber band that stretches when pulled and contracts when released',
    visual: `🎨 Visual: Elasticity in Action
Time:    Morning    Noon     Evening   Night
Load:    ████       ████████  ██████    ██
VMs:       2           6        4       1

┌─────────────────────────────────────────┐
│          Auto-Scaling Rules             │
├─────────────────────────────────────────┤
│ Scale OUT when: CPU > 70%               │
│ Scale IN when:  CPU < 30%               │
│ Min VMs: 1     Max VMs: 10              │
└─────────────────────────────────────────┘
Result: Pay only for what you use!`
  },
  'fault-tolerance': {
    title: 'Fault Tolerance',
    explanation: '📚 The ability of a system to continue operating properly in the event of failure of some components. Fault tolerance is achieved through redundancy, backup systems, and graceful degradation mechanisms.',
    examples: '💡 Examples: Azure Availability Zones protecting against data center failures, redundant storage accounts with multiple copies, backup databases that take over when primary fails, load balancers detecting unhealthy instances',
    useCase: '🏢 Use Case: A hospital patient monitoring system cannot afford any downtime. The system uses fault-tolerant architecture with redundant servers across availability zones, backup power systems, and real-time data replication to ensure patient data is always available even if hardware fails.',
    mnemonic: '🧠 FT = Failure Tolerant (keeps working despite failures) - like a car with a spare tire, ready to keep going when one tire fails',
    visual: `🎨 Visual: Fault Tolerance Design
Primary System:        Backup System:
┌─────────────┐       ┌─────────────┐
│   Server A  │◄─────►│   Server B  │
│   [Active]  │ Sync  │  [Standby]  │
└─────┬───────┘       └─────┬───────┘
      │                     │
┌─────▼─────┐         ┌─────▼─────┐
│ Database  │◄───────►│ Database  │
│ Primary   │  Sync   │  Replica  │
└───────────┘         └───────────┘

If Primary Fails: ❌ → Standby Takes Over: ✅`
  },
  'disaster-recovery': {
    title: 'Disaster Recovery',
    explanation: '📚 The process of restoring systems and data after a catastrophic failure or natural disaster. DR focuses on getting systems back online after a major outage, while business continuity ensures minimal disruption during the recovery process.',
    examples: '💡 Examples: Azure Site Recovery replicating VMs to secondary regions, geo-redundant backups stored in multiple locations, cross-region database replication, automated failover procedures',
    useCase: '🏢 Use Case: A financial services company needs to meet regulatory requirements for 4-hour recovery time. They use Azure Site Recovery to replicate critical systems to a secondary region, ensuring they can restore operations within the required timeframe even if their primary data center is destroyed.',
    mnemonic: '🧠 DR = Disaster Restoration (bringing systems back to life) - like having a detailed emergency evacuation and rebuilding plan for your house',
    visual: `🎨 Visual: Disaster Recovery Process
Normal Operations:     Disaster Strikes:     Recovery:
┌─────────────┐       ┌─────────────┐      ┌─────────────┐
│  Primary    │  🔥   │  Primary    │      │  Secondary  │
│   Region    │ ───► │   Region    │ ──► │   Region    │
│  [Active]   │       │ [DESTROYED] │      │ [ACTIVATED] │
└─────────────┘       └─────────────┘      └─────────────┘
                            ❌                    ✅
                      RTO: 4 hours          RPO: 1 hour`
  },

  // Cloud Models
  'public-cloud': {
    title: 'Public Cloud',
    explanation: '📚 Cloud services offered over the public internet and available to anyone who wants to purchase them. The cloud provider owns and maintains the hardware, software, and supporting infrastructure.',
    examples: '💡 Examples: Microsoft Azure, Amazon AWS, Google Cloud Platform, Microsoft 365, Gmail, Salesforce, Netflix streaming services.',
    useCase: '🏢 Use Case: A startup launching a new mobile app needs scalable infrastructure without upfront costs. They use public cloud services like Azure App Service for hosting, Azure SQL Database for data storage, and Azure CDN for global content delivery, paying only for what they use as they grow.',
    mnemonic: '🧠 PUBLIC = Pay for Use, Building resources Live in Cloud - like using a public library where resources are shared and maintained by someone else.',
    visual: `🎨 Visual:
    ┌─────────────────────────────────────┐
    │           PUBLIC CLOUD ☁️           │
    │        (Microsoft Azure)           │
    │  ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐   │
    │  │ Co1 │ │ Co2 │ │ Co3 │ │ Co4 │   │
    │  └─────┘ └─────┘ └─────┘ └─────┘   │
    │    Shared Infrastructure           │
    └─────────────────────────────────────┘
              🌐 Internet Access
    ┌─────────────────────────────────────┐
    │     Multiple Customers 🏢🏢🏢        │
    │   Anyone can sign up and use        │
    └─────────────────────────────────────┘`
  },
  'private-cloud': {
    title: 'Private Cloud',
    explanation: '📚 Cloud computing resources used exclusively by one business or organization. The private cloud can be physically located on-premises or hosted by a third-party provider, but the infrastructure is dedicated to a single organization.',
    examples: '💡 Examples: On-premises data centers with virtualization, Azure Stack deployed in company facilities, VMware vSphere environments, private hosted clouds.',
    useCase: '🏢 Use Case: A healthcare organization needs to comply with strict HIPAA regulations for patient data. They deploy a private cloud using Azure Stack in their own data center, maintaining complete control over sensitive medical records while still getting cloud benefits like scalability and automation.',
    mnemonic: '🧠 PRIVATE = Personal Resources In Virtualized Allocated Technology Environment - like having your own personal gym instead of sharing a public one.',
    visual: `🎨 Visual:
    ┌─────────────────────────────────────┐
    │        PRIVATE CLOUD 🏢             │
    │      (Your Organization Only)       │
    │  ┌─────────────────────────────────┐ │
    │  │    Dedicated Infrastructure     │ │
    │  │  🖥️ VMs  📊 DB  🌐 Networks    │ │
    │  └─────────────────────────────────┘ │
    └─────────────────────────────────────┘
              🔒 Private Access Only
    ┌─────────────────────────────────────┐
    │      Single Organization 🏢          │
    │    Complete Control & Privacy       │
    └─────────────────────────────────────┘`
  },
  'hybrid-cloud': {
    title: 'Hybrid Cloud',
    explanation: '📚 A computing environment that combines public and private clouds, allowing data and applications to be shared between them. This approach provides greater deployment flexibility and more optimization options for existing infrastructure.',
    examples: '💡 Examples: Azure Arc connecting on-premises to Azure, AWS Outposts, data synchronization between private data center and public cloud, burst to cloud during peak demand.',
    useCase: '🏢 Use Case: A manufacturing company keeps sensitive production data in their private on-premises cloud for security, but uses public cloud services for employee collaboration tools and development environments. During peak demand, they "burst" additional computing workloads to the public cloud while keeping core data private.',
    mnemonic: '🧠 HYBRID = Half private, Yet Benefits from both Resource Integration Deployment - like having both a home office (private) and shared co-working space (public).',
    visual: `🎨 Visual:
    ┌─────────────────┐    ┌─────────────────┐
    │  PRIVATE CLOUD  │◄──►│  PUBLIC CLOUD   │
    │      🏢         │    │       ☁️        │
    │  ┌───────────┐  │    │  ┌───────────┐  │
    │  │Sensitive  │  │    │  │Development│  │
    │  │Production │  │    │  │& Testing  │  │
    │  │   Data    │  │    │  │Environments│  │
    │  └───────────┘  │    │  └───────────┘  │
    └─────────────────┘    └─────────────────┘
           🔒                      🌐
    Best of both: Security + Scalability`
  },

  // Service Models
  'iaas': {
    title: 'Infrastructure as a Service (IaaS)',
    explanation: '📚 Cloud computing service that provides virtualized computing resources over the internet. You rent IT infrastructure—servers, virtual machines, storage, networks, and operating systems—from a cloud provider on a pay-as-you-go basis.',
    examples: '💡 Examples: Azure Virtual Machines, Azure Storage accounts, Azure Virtual Networks, Amazon EC2, Google Compute Engine, raw computing power and storage.',
    useCase: '🏢 Use Case: A software development company needs to quickly set up development and testing environments for a new project. Instead of buying physical servers, they provision Azure Virtual Machines with different operating systems, configure networking, and scale resources up or down based on testing needs, paying only for what they use.',
    mnemonic: '🧠 IaaS = Infrastructure As A Service - You manage Apps/OS, Azure handles the hardware. Like renting an empty apartment where you bring your own furniture.',
    visual: `🎨 Visual: IaaS Responsibility Model
    ┌─────────────────────────────────────┐
    │        YOUR RESPONSIBILITY        │
    │   🗺️ Applications & Data           │
    │   🖥️ Operating System             │
    │   ⚙️ Runtime & Middleware         │
    ├─────────────────────────────────────┤
    │       AZURE'S RESPONSIBILITY       │
    │   🌐 Networking & Load Balancing   │
    │   💾 Virtual Machines             │
    │   📊 Storage & Databases          │
    │   🏢 Physical Infrastructure      │
    └─────────────────────────────────────┘`
  },
  'paas': {
    title: 'Platform as a Service (PaaS)',
    explanation: '📚 Cloud computing service that provides a platform allowing customers to develop, run, and manage applications without the complexity of building and maintaining the underlying infrastructure, operating systems, and runtime environments.',
    examples: '💡 Examples: Azure App Service for web apps, Azure SQL Database, Azure Functions, Google App Engine, Heroku, development frameworks and tools.',
    useCase: '🏢 Use Case: A startup wants to launch a web application quickly without managing servers or databases. They use Azure App Service to deploy their web app and Azure SQL Database for data storage. The platform automatically handles scaling, security patches, and infrastructure management, letting developers focus purely on coding features.',
    mnemonic: '🧠 PaaS = Platform As A Service - Platform provided, you just deploy Apps. Like renting a fully furnished apartment where you just move in your belongings.',
    visual: `🎨 Visual: PaaS Responsibility Model
    ┌─────────────────────────────────────┐
    │        YOUR RESPONSIBILITY        │
    │   🗺️ Applications & Data           │
    ├─────────────────────────────────────┤
    │       AZURE'S RESPONSIBILITY       │
    │   ⚙️ Runtime & Middleware         │
    │   🖥️ Operating System             │
    │   🌐 Networking & Load Balancing   │
    │   💾 Virtual Machines             │
    │   📊 Storage & Databases          │
    │   🏢 Physical Infrastructure      │
    └─────────────────────────────────────┘`
  },
  'saas': {
    title: 'Software as a Service (SaaS)',
    explanation: '📚 Cloud computing service where software applications are delivered over the internet on a subscription basis. Users access fully functional applications through a web browser without needing to install, maintain, or update the software.',
    examples: '💡 Examples: Microsoft 365 (Word, Excel, Teams), Salesforce CRM, Google Workspace, Dropbox, Zoom, Netflix, Spotify, Adobe Creative Cloud.',
    useCase: '🏢 Use Case: A small business needs email, document editing, and video conferencing capabilities. Instead of buying and maintaining email servers and software licenses, they subscribe to Microsoft 365, getting all productivity tools accessible from any device with automatic updates and 99.9% uptime guarantee.',
    mnemonic: '🧠 SaaS = Software As A Service - Software ready to use, just login and go. Like using a taxi service instead of owning a car - just get in and go.',
    visual: `🎨 Visual: SaaS Responsibility Model
    ┌─────────────────────────────────────┐
    │        YOUR RESPONSIBILITY        │
    │   📋 User Data & Settings         │
    ├─────────────────────────────────────┤
    │       AZURE'S RESPONSIBILITY       │
    │   🗺️ Applications & Updates        │
    │   ⚙️ Runtime & Middleware         │
    │   🖥️ Operating System             │
    │   🌐 Networking & Load Balancing   │
    │   💾 Virtual Machines             │
    │   📊 Storage & Databases          │
    │   🏢 Physical Infrastructure      │
    └─────────────────────────────────────┘`
  },

  // Shared Responsibility
  'shared-responsibility-model': {
    title: 'Shared Responsibility Model',
    explanation: '📚 A security and compliance framework that defines the responsibilities of cloud service providers and customers. Azure is responsible for securing the underlying cloud infrastructure, while customers are responsible for securing their data, applications, and access controls.',
    examples: '💡 Examples: Microsoft secures physical datacenters, you secure user access; Microsoft patches host OS, you patch guest OS; Microsoft encrypts storage, you manage encryption keys.',
    useCase: '🏢 Use Case: A financial company moves to Azure and needs to understand security responsibilities. Azure handles physical security, network controls, and host infrastructure, while the company remains responsible for configuring firewalls, managing user identities, encrypting sensitive financial data, and ensuring compliance with banking regulations.',
    mnemonic: '🧠 SHARED = Security Handled And Responsibilities Evenly Distributed - Microsoft secures the "cloud", you secure what\'s "in the cloud".',
    visual: `🎨 Visual: Shared Responsibility Matrix
    ┌─────────────────────────────────────────┐
    │           ALWAYS CUSTOMER               │
    │  🔑 Data & Information                 │
    │  👤 Identity & Access Management       │
    │  📱 Devices (mobile, PC)               │
    │  🏢 Accounts & Identities              │
    ├─────────────────────────────────────────┤
    │         VARIES BY SERVICE               │
    │  🛡️  Operating System                  │
    │  🌐 Network Controls                   │
    │  📋 Applications                       │
    ├─────────────────────────────────────────┤
    │          ALWAYS MICROSOFT               │
    │  🏢 Physical Infrastructure            │
    │  🌐 Physical Network                   │
    │  💾 Physical Storage                   │
    │  🖥️  Virtualization Layer              │
    └─────────────────────────────────────────┘`
  },

  // Domain 2: Azure Architecture and Services
  'azure-regions': {
    title: 'Azure Regions',
    explanation: '📚 Geographical areas containing one or more datacenters that are nearby and networked together with a low-latency network. Each region is designed to offer services within specific geographic boundaries to ensure data residency, compliance, and resilience requirements.',
    examples: '💡 Examples: East US, West Europe, Southeast Asia, Australia East, Brazil South - each region contains multiple datacenters for redundancy.',
    useCase: '🏢 Use Case: A European company must comply with GDPR data residency requirements. They deploy their customer database in the West Europe region to ensure personal data stays within EU borders, while using East US region for their development environments to be closer to their US-based development team.',
    mnemonic: '🧠 REGIONS = Real Earth Geographical Infrastructure Organized by National Standards - like postal zones but for cloud services.',
    visual: `🎨 Visual: Global Azure Regions
    ┌─────────────────────────────────────────┐
    │           🌍 GLOBAL AZURE               │
    ├─────────────────────────────────────────┤
    │  🇺🇸 East US    🇪🇺 West Europe        │
    │  🇺🇸 West US    🇬🇧 UK South           │
    │  🇨🇦 Canada     🇦🇺 Australia East     │
    │  🇧🇷 Brazil     🇯🇵 Japan East         │
    │  🇮🇳 India      🇸🇬 Southeast Asia     │
    └─────────────────────────────────────────┘
    Each region = Multiple datacenters
    Data residency + compliance requirements`
  },
  'availability-zones': {
    title: 'Availability Zones',
    explanation: '📚 Physically separate locations within an Azure region, each with independent power, cooling, and networking. They are connected by high-performance networks with low latency, providing redundancy and fault tolerance within a region.',
    examples: '💡 Examples: In East US region there are 3 availability zones (AZ1, AZ2, AZ3), virtual machines can be deployed across zones, zone-redundant storage replicates data across zones.',
    useCase: '🏢 Use Case: An e-commerce company wants 99.99% uptime for their online store. They deploy their web application across multiple availability zones - if one zone experiences a power outage or hardware failure, traffic automatically routes to healthy zones, ensuring customers can still shop without interruption.',
    mnemonic: '🧠 AZ = Available Zones - like having backup generators in separate buildings so if one fails, others keep running.',
    visual: `🎨 Visual: Availability Zones within Region
    ┌─────────────────────────────────────────┐
    │        AZURE REGION (East US)           │
    │  ┌─────────┐  ┌─────────┐  ┌─────────┐  │
    │  │   AZ-1  │  │   AZ-2  │  │   AZ-3  │  │
    │  │  🏢 DC1  │  │  🏢 DC2  │  │  🏢 DC3  │  │
    │  │  ⚡ Pwr  │  │  ⚡ Pwr  │  │  ⚡ Pwr  │  │
    │  │  ❄️  AC   │  │  ❄️  AC   │  │  ❄️  AC   │  │
    │  │  🌐 Net  │  │  🌐 Net  │  │  🌐 Net  │  │
    │  └─────────┘  └─────────┘  └─────────┘  │
    │         ↔️ High-speed connection ↔️       │
    └─────────────────────────────────────────┘
    If one zone fails ❌ others continue ✅`
  },
  'resource-groups': {
    title: 'Resource Groups',
    explanation: '📚 Logical containers for resources deployed on Azure, used to organize and manage related resources that share the same lifecycle, permissions, and policies. All resources in a resource group should share the same lifecycle - deploy, update, and delete together.',
    examples: '💡 Examples: Web app resource group with VMs, databases, load balancers; Development environment with all dev resources; Production resource group with prod-only resources.',
    useCase: '🏢 Use Case: A company has separate development, staging, and production environments for their web application. They create separate resource groups for each environment, making it easy to manage permissions (developers access dev RG, only ops access prod RG), apply policies, and delete entire environments when no longer needed.',
    mnemonic: '🧠 RG = Related Group - like organizing your desk drawers where similar items go in the same drawer for easy management.',
    visual: `🎨 Visual: Resource Groups Organization
    ┌─────────────────────────────────────────┐
    │         AZURE SUBSCRIPTION              │
    │  ┌─────────────┐  ┌─────────────┐      │
    │  │Production RG│  │Development RG│      │
    │  │ 🌐 Web App  │  │ 🌐 Web App   │      │
    │  │ 💾 Database │  │ 💾 Database  │      │
    │  │ ⚖️ Load Bal │  │ 🖥️ Test VMs  │      │
    │  │ 📊 Monitor  │  │ 📝 Logs      │      │
    │  └─────────────┘  └─────────────┘      │
    └─────────────────────────────────────────┘
    Same lifecycle = Same resource group`
  },
  'azure-resource-manager': {
    title: 'Azure Resource Manager (ARM)',
    explanation: '📚 The deployment and management service for Azure that provides a consistent management layer for creating, updating, and deleting resources in your Azure account. ARM enables infrastructure as code through templates and provides unified management through various interfaces.',
    examples: '💡 Examples: ARM templates for infrastructure as code, deploying entire environments consistently, managing resource lifecycles, role-based access control, resource tagging and policies.',
    useCase: '🏢 Use Case: A DevOps team needs to deploy identical web application environments across development, staging, and production. They create ARM templates that define the entire infrastructure (VMs, databases, networks) as code, ensuring consistent deployments and making it easy to replicate or update environments.',
    mnemonic: '🧠 ARM = All Resource Management - like having a universal remote control for all your Azure resources.',
    visual: `🎨 Visual: ARM Management Layer
    ┌─────────────────────────────────────────┐
    │    MANAGEMENT INTERFACES                │
    │  🌐 Portal  💻 CLI  📟 PowerShell      │
    │  📱 Mobile  🔧 REST API  📊 SDK        │
    └─────────────┬───────────────────────────┘
                  │
    ┌─────────────▼───────────────────────────┐
    │        AZURE RESOURCE MANAGER           │
    │   🎯 Templates  🔐 RBAC  🏷️ Tags       │
    └─────────────┬───────────────────────────┘
                  │
    ┌─────────────▼───────────────────────────┐
    │          AZURE RESOURCES                │
    │  🖥️ VMs  💾 Storage  🌐 Networks       │
    └─────────────────────────────────────────┘`
  },

  // Compute Services
  'virtual-machines': {
    title: 'Azure Virtual Machines',
    explanation: '📚 On-demand, scalable computing resources that provide the flexibility of virtualization without having to buy and maintain physical hardware. VMs give you complete control over the operating system and applications.',
    examples: '💡 Examples: Windows Server VMs for legacy applications, Linux VMs for web servers, GPU VMs for machine learning, development and testing environments.',
    useCase: '🏢 Use Case: A company needs to migrate their legacy Windows-based ERP system to the cloud. They create Azure VMs with the same Windows Server version, install their ERP software, and migrate data. This "lift-and-shift" approach gets them to cloud quickly while maintaining full control over the environment.',
    mnemonic: '🧠 VM = Virtual Machine - like having a computer inside a computer, you control everything from the OS up.',
    visual: `🎨 Visual: Virtual Machine Structure
    ┌─────────────────────────────────────────┐
    │              AZURE VM                  │
    │  ┌───────────────────────────────────┐  │
    │  │        Your Applications          │  │
    │  │     🗺️ Web App  📊 Database       │  │
    │  ├───────────────────────────────────┤  │
    │  │    Operating System (Windows/Linux) │  │
    │  └───────────────────────────────────┘  │
    └─────────────────────────────────────────┘
              ↕️ Hypervisor Layer
    ┌─────────────────────────────────────────┐
    │          Physical Hardware            │
    │      💻 CPU  💾 RAM  💾 SSD        │
    └─────────────────────────────────────────┘`
  },
  'app-service': {
    title: 'Azure App Service',
    explanation: '📚 A fully managed platform for building, deploying, and scaling web apps and APIs without managing the underlying infrastructure. Azure handles the operating system, patching, load balancing, and auto-scaling automatically.',
    examples: '💡 Examples: Web applications (ASP.NET, Node.js, Python), mobile app backends, RESTful APIs, static websites, progressive web apps.',
    useCase: '🏢 Use Case: A startup builds a social media web app using React frontend and Node.js backend. They deploy to Azure App Service which automatically handles SSL certificates, custom domains, auto-scaling during viral content spikes, and security patching, letting developers focus on features instead of infrastructure.',
    mnemonic: '🧠 APP SERVICE = Applications Perfectly Provided as a Service - just upload your code and go live.',
    visual: `🎨 Visual: App Service Features
    ┌─────────────────────────────────────────┐
    │           AZURE APP SERVICE             │
    │  ┌───────────────────────────────────┐  │
    │  │         Your Web App            │  │
    │  │    🌐 React + 💻 Node.js      │  │
    │  └───────────────────────────────────┘  │
    │  Azure Managed Features:                │
    │  ✅ Auto-scaling  ✅ SSL certificates   │
    │  ✅ Custom domains ✅ CI/CD integration  │
    │  ✅ Load balancing ✅ Security patching │
    │  ✅ Backup & monitoring              │
    └─────────────────────────────────────────┘
              Just upload code! 🚀`
  },
  'container-instances': {
    title: 'Azure Container Instances',
    explanation: '📚 The fastest and simplest way to run containers in Azure without managing virtual machines or adopting a higher-level service. Perfect for isolated containers, simple applications, task automation, and development scenarios.',
    examples: '💡 Examples: Running Docker containers, batch processing jobs, microservices, CI/CD build agents, quick prototyping, burst capacity for AKS.',
    useCase: '🏢 Use Case: A data science team needs to run batch processing jobs that analyze customer data nightly. They package their Python analysis code in a Docker container and use Azure Container Instances to run it on-demand, paying only for the compute time used during processing.',
    mnemonic: '🧠 ACI = Applications in Containers Instantly - like having takeout containers for your apps, quick and portable.',
    visual: `🎨 Visual: Container Instances Simplicity
    ┌─────────────────────────────────────────┐
    │         AZURE CONTAINER INSTANCES       │
    ├─────────────────────────────────────────┤
    │  ┌───────────┐ ┌───────────┐        │
    │  │📦 Container│ │📦 Container│        │
    │  │ Web API   │ │ Database │        │
    │  │ (Node.js) │ │ (MongoDB)│        │
    │  └───────────┘ └───────────┘        │
    │                                      │
    │  ✅ No VM management                 │
    │  ✅ Per-second billing              │
    │  ✅ Fast startup                   │
    └─────────────────────────────────────────┘`
  },
  'kubernetes-service': {
    title: 'Azure Kubernetes Service (AKS)',
    explanation: '📚 A managed Kubernetes container orchestration service that simplifies deploying, managing, and scaling containerized applications using Kubernetes without the complexity of managing the Kubernetes infrastructure.',
    examples: '💡 Examples: Orchestrating microservices architectures, auto-scaling containerized applications, CI/CD pipelines, running multiple containers that work together.',
    useCase: '🏢 Use Case: A large e-commerce company has dozens of microservices (user service, payment service, inventory service, etc.) running in containers. AKS automatically manages container deployment, scaling, networking, and health monitoring across the entire application ecosystem, ensuring high availability and efficient resource usage.',
    mnemonic: '🧠 AKS = Advanced Kubernetes Service - like having an orchestra conductor managing all your container musicians.',
    visual: `🎨 Visual: AKS Container Orchestration
    ┌─────────────────────────────────────────┐
    │            AKS CLUSTER                 │
    │  ┌───────────────────────────────────┐  │
    │  │        Node Pool 1              │  │
    │  │  📦 API   📦 User  📦 Order   │  │
    │  │  Service  Service Service     │  │
    │  └───────────────────────────────────┘  │
    │  ┌───────────────────────────────────┐  │
    │  │        Node Pool 2              │  │
    │  │  📦 Payment 📦 Inventory     │  │
    │  │  Service    Service         │  │
    │  └───────────────────────────────────┘  │
    │  Kubernetes manages: Scaling, Health,   │
    │  Networking, Load Balancing, Updates    │
    └─────────────────────────────────────────┘`
  },
  'azure-functions': {
    title: 'Azure Functions',
    explanation: '📚 A serverless computing service that lets you run code on-demand without managing infrastructure. You write functions that respond to events and Azure automatically handles scaling, server management, and resource allocation.',
    examples: '💡 Examples: HTTP API endpoints, timer-based processing, responding to file uploads, database change triggers, IoT device data processing, image resizing.',
    useCase: '🏢 Use Case: A photo sharing app needs to automatically create thumbnails when users upload images. An Azure Function triggers whenever an image is uploaded to blob storage, processes the image to create thumbnails, and saves them back to storage. The function only runs when needed and scales automatically during high upload periods.',
    mnemonic: '🧠 FUNCTIONS = Code Functions without owning servers - like having a personal assistant who only works when you call them.',
    visual: `🎨 Visual: Serverless Functions
    ┌─────────────────────────────────────────┐
    │          EVENT-DRIVEN FLOW            │
    ├─────────────────────────────────────────┤
    │ 📷 File Upload → ⚡ Trigger → 💻 Function  │
    │ 🕰️ Timer Event → ⚡ Trigger → 💻 Function  │
    │ 🌐 HTTP Request → ⚡ Trigger → 💻 Function │
    │ 📨 Queue Msg  → ⚡ Trigger → 💻 Function  │
    ├─────────────────────────────────────────┤
    │           AZURE FUNCTIONS              │
    │  ✅ Auto-scaling  ✅ Pay-per-execution │
    │  ✅ No servers    ✅ Multiple languages │
    └─────────────────────────────────────────┘`
  },

  // Storage Services
  'blob-storage': {
    title: 'Azure Blob Storage',
    explanation: '📚 A service for storing large amounts of unstructured data, such as text or binary data. Blobs (Binary Large Objects) can be accessed from anywhere via HTTP/HTTPS and are ideal for serving content directly to users or applications.',
    examples: '💡 Examples: Website images and videos, document storage, application data backups, data archives, media files for streaming, static website hosting.',
    useCase: '🏢 Use Case: A media company stores millions of photos and videos in blob storage. Content is served directly to users via CDN, with hot tier for recent popular content, cool tier for older archives, and archive tier for long-term legal compliance storage. The company saves 70% on storage costs through intelligent tiering.',
    mnemonic: '🧠 BLOB = Big Lumps of Binary data - like a giant digital warehouse for any type of file.',
    visual: `🎨 Visual: Blob Storage Structure
    ┌─────────────────────────────────────────┐
    │         STORAGE ACCOUNT                │
    │  ┌───────────┐  ┌───────────┐      │
    │  │ Container1 │  │ Container2 │      │
    │  │📷 image1.jpg│  │🎥 video1.mp4│      │
    │  │📷 image2.jpg│  │🎥 video2.mp4│      │
    │  │📝 backup.zip│  │📄 docs.pdf  │      │
    │  └───────────┘  └───────────┘      │
    └─────────────────────────────────────────┘
           ↕️ Direct HTTP/HTTPS Access
    ┌─────────────────────────────────────────┐
    │ 🌐 Web Apps  📱 Mobile  📊 Analytics │
    └─────────────────────────────────────────┘`
  },
  'disk-storage': {
    title: 'Azure Disk Storage',
    explanation: '📚 High-performance, durable block storage designed for Azure Virtual Machines and applications that need persistent, low-latency disk access. Managed disks handle replication, availability, and scaling automatically.',
    examples: '💡 Examples: OS disks for VMs, data disks for databases, temporary disks for caching, ultra disks for IO-intensive workloads, disk snapshots for backup.',
    useCase: '🏢 Use Case: A financial trading company runs high-frequency trading algorithms on Azure VMs. They use Ultra Disk storage for millisecond-level latency requirements, managed disks for automatic backup and replication, and premium SSDs for their SQL Server databases to handle thousands of transactions per second.',
    mnemonic: '🧠 DISK = Dedicated Infrastructure Storage for Konstant access - like having a personal hard drive attached to your VM.',
    visual: `🎨 Visual: VM Disk Configuration
    ┌─────────────────────────────────────────┐
    │              AZURE VM                  │
    │  ┌───────────────────────────────────┐  │
    │  │        Applications              │  │
    │  │         📊 Database                │  │
    │  └───────────────────────────────────┘  │
    └─────────────────┬───────────────────────┘
                      │
    ┌─────────────────▼───────────────────────┐
    │            DISK STORAGE               │
    │  💾 OS Disk     💾 Data Disk        │
    │  (Premium SSD) (Ultra Disk)         │
    │  ✅ Managed     ✅ High IOPS          │
    │  ✅ Encrypted   ✅ Low Latency       │
    └─────────────────────────────────────────┘`
  },
  'file-storage': {
    title: 'Azure File Storage',
    explanation: '📚 Fully managed file shares in the cloud accessible via industry-standard SMB (Server Message Block) and NFS protocols. Multiple VMs and applications can mount the same file share simultaneously for shared access to files.',
    examples: '💡 Examples: Shared application configuration files, content management systems, development tools and scripts, lift-and-shift scenarios, shared logs across multiple servers.',
    useCase: '🏢 Use Case: A software development company has multiple development servers that need access to shared project files, templates, and build artifacts. Azure File Storage provides a central location that all servers can access simultaneously, making collaboration seamless and ensuring all developers work with the same versions.',
    mnemonic: '🧠 FILES = Fully Integrated Linked Exchange Storage - like having a shared network drive that everyone can access.',
    visual: `🎨 Visual: Shared File Storage Access
    ┌─────────────────────────────────────────┐
    │          AZURE FILE SHARE              │
    │  ┌───────────────────────────────────┐  │
    │  │     Shared Files (SMB/NFS)       │  │
    │  │  📁 Project Files                │  │
    │  │  ⚙️  Config Files                │  │
    │  │  📈 Shared Documents             │  │
    │  │  📝 Application Logs             │  │
    │  └───────────────────────────────────┘  │
    └────────────────┬───────────────────────┘
                      │ Simultaneous Access
    ┌─────────┐ ┌─────────┐ ┌─────────┐
    │  VM 1   │ │  VM 2   │ │  VM 3   │
    │🖥️ Dev Srv│ │🖥️ Web Srv│ │🖥️ DB Srv │
    └─────────┘ └─────────┘ └─────────┘`
  },
  'storage-tiers': {
    title: 'Azure Storage Tiers',
    explanation: '📚 Different access tiers for blob storage optimized for different data access patterns and costs. The tiers balance between storage cost and access cost - frequent access costs more to store but less to access.',
    examples: '💡 Examples: Hot tier for active website content, Cool tier for monthly reports, Archive tier for compliance data, Premium for high-performance applications.',
    useCase: '🏢 Use Case: A healthcare organization stores patient records with different access patterns: current patient files in Hot tier for immediate access, previous year records in Cool tier for occasional access, and 10+ year old records in Archive tier for legal compliance, saving 80% on storage costs.',
    mnemonic: '🧠 TIERS = Temperature Impacts Expense and Retrieval Speed - Hot = expensive storage, cheap access; Cold = cheap storage, expensive access.',
    visual: `🎨 Visual: Storage Tier Comparison
    ┌─────────────────────────────────────────┐
    │           STORAGE TIERS                 │
    ├───────────────┬─────────┬─────────┬────────┤
    │   HOT 🔥    │  COOL ❄️   │ ARCHIVE 🧊│PREMIUM│
    ├───────────────┼─────────┼─────────┼────────┤
    │ Active data  │Monthly   │Long-term │   SSD  │
    │ Daily access │backups   │compliance│  ⚡ Fast│
    │ High storage │Medium    │Low storage│ Highest│
    │ Low access  │costs     │Rehydrate │  cost  │
    │   costs     │          │required  │        │
    └───────────────┴─────────┴─────────┴────────┘
    ←─────── Storage Cost Decreases ───────→
    ←──────── Access Speed Decreases ───────→`
  },

  // Identity and Security Services
  'microsoft-entra-id': {
    title: 'Microsoft Entra ID',
    explanation: '📚 Microsoft Entra ID (formerly Azure Active Directory) is Microsoft\'s cloud-based identity and access management service that helps employees sign in and access resources.',
    examples: '💡 Examples: Single sign-on to Microsoft 365, managing user identities across cloud applications, multi-factor authentication, conditional access policies.',
    useCase: '🏢 Use Case: A company with 500 employees needs to manage access to various cloud applications like Microsoft 365, Salesforce, and custom web apps. They use Microsoft Entra ID to provide single sign-on, enforce multi-factor authentication, and automatically provision/deprovision user accounts when employees join or leave.',
    mnemonic: '🧠 ENTRA = Entry point for all your Azure access\nThink of it as the "front door" to your cloud - everyone must show their ID card to enter.',
    visual: `🎨 Visual:
    ┌─────────────────────────────────────┐
    │        Microsoft Entra ID 🔐        │
    │  ┌─────────────────────────────────┐ │
    │  │        Identity Hub             │ │
    │  │  👤 Users  👥 Groups  🏢 Apps   │ │
    │  └─────────────────────────────────┘ │
    └─────────────────────────────────────┘
              ↓ Authentication
    ┌─────────────────────────────────────┐
    │       Azure Services Access        │
    │  📧 M365  💾 Storage  🖥️ VMs      │
    └─────────────────────────────────────┘`
  },
  'multi-factor-authentication': {
    title: 'Multi-Factor Authentication (MFA)',
    explanation: '📚 Multi-factor authentication requires users to provide two or more verification factors to gain access to a resource, application, or online account.',
    examples: '💡 Examples: Password + SMS code, biometric + app notification, smart card + PIN, Microsoft Authenticator app approval.',
    useCase: '🏢 Use Case: A financial services company requires all employees accessing sensitive customer data to use MFA. Users enter their password and then approve a notification on their mobile device through Microsoft Authenticator before gaining access to banking applications.',
    mnemonic: '🧠 MFA = Multiple Factors Authentication\nThink "something you know + something you have + something you are" - like needing both a key and fingerprint for a safe.',
    visual: `🎨 Visual:
    Step 1: 🔑 Password (Something you know)
           ↓
    Step 2: 📱 Phone/App (Something you have)  
           ↓
    Step 3: 👆 Fingerprint (Something you are)
           ↓
    ✅ Access Granted to Azure Resources`
  },
  'zero-trust-model': {
    title: 'Zero Trust Security Model',
    explanation: '📚 Zero Trust is a security model that assumes no user, device, or network can be trusted by default, requiring verification from everyone trying to access resources.',
    examples: '💡 Examples: Verifying every login attempt, checking device compliance before access, monitoring all network traffic, least privilege access principles.',
    useCase: '🏢 Use Case: A healthcare organization implements Zero Trust by requiring all doctors and staff to authenticate every time they access patient records, regardless of their location. Each access request is verified against user identity, device health, and location before granting access to medical applications.',
    mnemonic: '🧠 ZERO TRUST = Never trust, always verify\nThink "Trust No One" - even your grandmother needs to show ID at the building entrance.',
    visual: `🎨 Visual:
    🚫 Traditional: Trust but Verify
    ✅ Zero Trust: Verify then Trust
    
    Every Access Request:
    🔍 Verify Identity → 🔒 Check Device → 📍 Validate Location → ✅ Grant Minimal Access`
  },

  // Additional Compute Services
  'azure-virtual-desktop': {
    title: 'Azure Virtual Desktop',
    explanation: '📚 Azure Virtual Desktop is a desktop and app virtualization service that runs in the cloud, providing users with a full Windows desktop experience from anywhere.',
    examples: '💡 Examples: Remote work access to Windows 10/11 desktops, accessing legacy applications from modern devices, providing contractors with secure desktop environments.',
    useCase: '🏢 Use Case: A consulting firm needs to provide secure access to specialized software for remote contractors. They deploy Azure Virtual Desktop to give contractors access to a fully configured Windows environment with the required applications, without exposing internal networks.',
    mnemonic: '🧠 AVD = Azure Virtual Desktop - your Windows desktop in the cloud\nThink of it as your office computer that you can access from anywhere with internet.',
    visual: `🎨 Visual:
    ┌─────────────────────────────────────┐
    │       Azure Virtual Desktop        │
    │  🖥️ Windows 10/11 in the Cloud     │
    │  📱💻🖥️ Access from any device     │
    └─────────────────────────────────────┘
                    ↕️
    ┌─────────────────────────────────────┐
    │     Users Anywhere 🌍              │
    │  🏠 Home  ☕ Cafe  ✈️ Travel       │
    └─────────────────────────────────────┘`
  },

  // Networking Services  
  'vpn-gateway': {
    title: 'Azure VPN Gateway',
    explanation: '📚 Azure VPN Gateway is a service that uses an encrypted tunnel to send network traffic between an Azure virtual network and on-premises locations over the public Internet.',
    examples: '💡 Examples: Connecting branch offices to Azure, secure remote access for employees, hybrid cloud connectivity, site-to-site VPN connections.',
    useCase: '🏢 Use Case: A manufacturing company has their main office connected to Azure via ExpressRoute but needs to connect 5 smaller branch offices. They use VPN Gateway to create secure site-to-site connections, allowing branch offices to access Azure resources securely over the internet.',
    mnemonic: '🧠 VPN Gateway = Virtual Private Network Gateway - your secure tunnel to Azure\nThink of it as a private tunnel under the public highway (internet).',
    visual: `🎨 Visual:
    🏢 On-Premises ←→ 🔒 VPN Tunnel 🔒 ←→ ☁️ Azure
    
    ┌─────────────┐    🌐 Internet    ┌─────────────┐
    │ Your Office │ ←→ 🔐 Encrypted ←→ │ Azure VNet  │
    │   Network   │       Tunnel       │  Resources  │
    └─────────────┘                   └─────────────┘`
  },
  'expressroute': {
    title: 'Azure ExpressRoute',
    explanation: '📚 ExpressRoute creates private connections between Azure datacenters and infrastructure on premises or in a colocation environment, offering higher security, reliability, and speeds with lower latencies.',
    examples: '💡 Examples: Dedicated 1Gbps or 10Gbps connections, hybrid cloud architectures, mission-critical workloads requiring consistent performance.',
    useCase: '🏢 Use Case: A financial trading firm requires ultra-low latency and high bandwidth for real-time trading applications. They use ExpressRoute to establish a dedicated 10Gbps connection between their trading floor and Azure, ensuring consistent performance without internet variability.',
    mnemonic: '🧠 ExpressRoute = Express highway directly to Azure (no traffic lights)\nThink of it as having your own private highway instead of taking public roads.',
    visual: `🎨 Visual:
    🏢 Your Datacenter ←→ 🛤️ Dedicated Line ←→ ☁️ Azure
    
    ┌─────────────┐     Private      ┌─────────────┐
    │    Your     │ ←→ Connection ←→ │   Azure     │
    │ Infrastructure│    (No Internet) │ Datacenter  │
    └─────────────┘                  └─────────────┘
    ✅ High Speed ✅ Low Latency ✅ High Security`
  },

  // Monitoring and Management Tools
  'azure-advisor': {
    title: 'Azure Advisor',
    explanation: '📚 Azure Advisor is a personalized cloud consultant that analyzes your resource configuration and usage telemetry to recommend solutions that can improve performance, security, reliability, and reduce costs.',
    examples: '💡 Examples: Cost optimization recommendations, security vulnerability alerts, performance improvement suggestions, high availability configuration advice.',
    useCase: '🏢 Use Case: A startup has been running Azure resources for 6 months and wants to optimize costs. Azure Advisor recommends rightsizing underutilized VMs, suggests Reserved Instances for consistent workloads, and identifies unattached storage disks, potentially saving $2,000/month.',
    mnemonic: '🧠 ADVISOR = Your Azure consultant giving free advice\nThink of it as having a free personal Azure expert reviewing your setup 24/7.',
    visual: `🎨 Visual:
    ┌─────────────────────────────────────┐
    │          Azure Advisor 👨‍💼          │
    │  💰 Cost  🔒 Security  📈 Performance │
    │           🏗️ Reliability            │
    └─────────────────────────────────────┘
                    ↓ Recommendations
    ┌─────────────────────────────────────┐
    │        Your Azure Resources         │
    │  💾 VMs  📦 Storage  🌐 Networks    │
    └─────────────────────────────────────┘`
  },
  'azure-monitor': {
    title: 'Azure Monitor',
    explanation: '📚 Azure Monitor collects, analyzes, and acts on telemetry data from your cloud and on-premises environments to help you understand how your applications are performing.',
    examples: '💡 Examples: Application performance monitoring, infrastructure metrics, log analytics, alerting on system issues, custom dashboards.',
    useCase: '🏢 Use Case: An e-commerce company monitors their web application performance during Black Friday sales. Azure Monitor tracks response times, error rates, and resource utilization, sending alerts when performance degrades and triggering auto-scaling to handle increased traffic.',
    mnemonic: '🧠 MONITOR = Watching everything like a security guard\nThink of it as having cameras and sensors monitoring your entire Azure environment.',
    visual: `🎨 Visual:
    ┌─────────────────────────────────────┐
    │         Azure Monitor 📊            │
    │  📈 Metrics  📝 Logs  🚨 Alerts    │
    └─────────────────────────────────────┘
                    ↑ Collects data
    ┌─────────────────────────────────────┐
    │      Azure Resources 📡             │
    │  💻 Apps  🖥️ VMs  🌐 Networks      │
    └─────────────────────────────────────┘`
  },
  'azure-service-health': {
    title: 'Azure Service Health',
    explanation: '📚 Azure Service Health provides personalized alerts and guidance when Azure service issues affect you, helping you monitor service health and understand the impact on your resources.',
    examples: '💡 Examples: Notifications about Azure service outages, planned maintenance alerts, health advisories for security issues, service retirement announcements.',
    useCase: '🏢 Use Case: A SaaS company depends on Azure App Service for their customer-facing application. Azure Service Health notifies them 2 hours before planned maintenance in their region, allowing them to inform customers and schedule the maintenance window to minimize business impact.',
    mnemonic: '🧠 SERVICE HEALTH = Doctor checkup for Azure services\nThink of it as having a health monitor that tells you when Azure services are sick or need maintenance.',
    visual: `🎨 Visual:
    ┌─────────────────────────────────────┐
    │       Azure Service Health 🏥       │
    │  ✅ Healthy  ⚠️ Advisory  🚨 Issue  │
    └─────────────────────────────────────┘
                    ↓ Status Updates
    ┌─────────────────────────────────────┐
    │        Your Applications            │
    │  🌐 Web Apps  📊 Databases         │
    └─────────────────────────────────────┘`
  },

  // Domain 3: Management and Governance
  'azure-cost-management': {
    title: 'Azure Cost Management',
    explanation: '📚 A comprehensive suite of tools to help monitor, allocate, and optimize cloud costs across your Azure environment. It provides detailed cost analysis, budget management, and actionable recommendations to reduce spending while maintaining performance.',
    examples: '💡 Examples: Cost analysis dashboards, spending budgets with alerts, resource optimization recommendations, cost allocation by department, usage trending and forecasting.',
    useCase: '🏢 Use Case: A growing startup notices their Azure bill increasing rapidly. Using Cost Management, they discover unused VMs running 24/7, oversized databases, and unattached storage disks. They set budgets with alerts, rightsize resources, and implement auto-shutdown schedules, reducing costs by 40% while improving resource efficiency.',
    mnemonic: '🧠 COST MANAGEMENT = Control Operations Spending Through Management - like having a financial advisor for your cloud resources.',
    visual: `🎨 Visual: Cost Management Dashboard
    ┌─────────────────────────────────────────┐
    │        AZURE COST MANAGEMENT           │
    ├─────────────────────────────────────────┤
    │  📊 Cost Analysis: $3,245/month       │
    │  🏷️  Breakdown by Service:              │
    │    🖥️ VMs: $1,200 (37%)               │
    │    💾 Storage: $800 (25%)            │
    │    🌐 Networking: $500 (15%)          │
    ├─────────────────────────────────────────┤
    │  🚨 Budget Alerts:                   │
    │    ✅ Current: 75% of $4,000 budget   │
    │    ⚠️ Alert at 80%, 90%, 100%         │
    ├─────────────────────────────────────────┤
    │  💡 Recommendations:                │
    │    Rightsize VM: Save $300/month    │
    │    Delete unused disks: Save $150   │
    └─────────────────────────────────────────┘`
  },
  'pricing-calculator': {
    title: 'Azure Pricing Calculator',
    explanation: '📚 A comprehensive online tool that helps estimate costs for Azure services before deployment. You can configure various Azure services, specify requirements, and get detailed pricing estimates including different payment options and regional variations.',
    examples: '💡 Examples: Estimating VM costs by size and region, calculating storage pricing for different tiers, bandwidth and networking charges, SQL Database pricing, App Service plans.',
    useCase: '🏢 Use Case: An enterprise is planning to migrate 50 applications to Azure. The solution architect uses the pricing calculator to model different scenarios: IaaS vs PaaS options, different VM sizes, storage requirements, and networking costs. This helps build accurate budget proposals and choose the most cost-effective architecture before deployment.',
    mnemonic: '🧠 PRICING CALCULATOR = Predict Resource Investment Costs Intelligently - like getting a quote before buying a car.',
    visual: `🎨 Visual: Pricing Calculator Interface
    ┌─────────────────────────────────────────┐
    │       AZURE PRICING CALCULATOR         │
    ├─────────────────────────────────────────┤
    │  ┌───────────────────────────────────┐  │
    │  │        SERVICE SELECTION        │  │
    │  │  🖥️ Virtual Machines             │  │
    │  │    Region: East US             │  │
    │  │    Size: Standard_D2s_v3       │  │
    │  │    OS: Windows                 │  │
    │  │    Hours: 730 (24/7)           │  │
    │  └───────────────────────────────────┘  │
    ├─────────────────────────────────────────┤
    │  💰 ESTIMATED MONTHLY COST:         │
    │    Virtual Machine: $146.00        │
    │    Storage (OS Disk): $19.95       │
    │    Bandwidth: $8.50                │
    │    ──────────────────────────── │
    │    TOTAL: $174.45/month            │
    └─────────────────────────────────────────┘`
  },
  'total-cost-ownership': {
    title: 'Total Cost of Ownership (TCO)',
    explanation: '📚 The complete cost of owning and operating a system over its entire lifecycle, including initial purchase, ongoing operational costs, maintenance, upgrades, and end-of-life disposal. TCO analysis helps compare on-premises vs cloud solutions fairly.',
    examples: '💡 Examples: Hardware costs, software licensing, power and cooling, IT staff salaries, facility costs, security measures, backup systems, disaster recovery infrastructure.',
    useCase: '🏢 Use Case: A manufacturing company evaluates migrating their email system to Microsoft 365. TCO analysis includes their current costs (server hardware, Exchange licenses, IT staff time, electricity, facility space) vs Azure costs (M365 subscriptions, reduced IT management). The analysis shows 35% savings over 5 years plus improved reliability.',
    mnemonic: '🧠 TCO = True Cost Overview - like calculating the real cost of owning a car (not just purchase price, but gas, insurance, maintenance, etc.).',
    visual: `🎨 Visual: TCO Comparison Analysis
    ┌─────────────────────────────────────────┐
    │           TCO COMPARISON                │
    ├────────────────────┬────────────────────┤
    │   ON-PREMISES      │      AZURE CLOUD      │
    ├────────────────────┼────────────────────┤
    │ 💰 Hardware: $50K    │ 💰 Subscription:     │
    │ ⚙️  Software: $20K    │    $30K/year        │
    │ 👨‍💻 Staff: $80K/yr    │ 👨‍💻 Reduced staff:    │
    │ ⚡ Power: $8K/yr     │    $20K/yr          │
    │ 🏢 Space: $12K/yr    │ 🏢 No facility cost  │
    │ 🔧 Maint: $15K/yr    │ 🔧 Included in price │
    ├────────────────────┼────────────────────┤
    │ 5-yr Total: $645K  │ 5-yr Total: $250K  │
    │                   │ 💰 60% SAVINGS       │
    └────────────────────┴────────────────────┘`
  },
  'azure-policy': {
    title: 'Azure Policy',
    explanation: '📚 A service that allows you to create, assign, and manage policies to enforce organizational standards and assess compliance at scale. Azure Policy evaluates resources and highlights those that don\'t comply with policies you\'ve created.',
    examples: '💡 Examples: Requiring storage encryption, restricting VM sizes to control costs, enforcing resource naming conventions, mandating backup policies, preventing creation of resources in certain regions.',
    useCase: '🏢 Use Case: A financial company must ensure all storage accounts are encrypted and VMs only use approved sizes for cost control. They create Azure Policies that automatically deny creation of non-encrypted storage and oversized VMs, ensuring compliance across all departments without manual oversight.',
    mnemonic: '🧠 POLICY = Proactive Organizational Limits Implementing Compliance Yearly - like company rules that are automatically enforced.',
    visual: `🎨 Visual: Policy Enforcement Flow
    ┌─────────────────────────────────────────┐
    │           AZURE POLICY SYSTEM          │
    ├─────────────────────────────────────────┤
    │  📋 Policy Definition:              │
    │    "Storage accounts must be encrypted"│
    │                ↓                      │
    │  🏷️ Assignment: Production RG        │
    │                ↓                      │
    │  🔍 Evaluation: Check resources      │
    │                ↓                      │
    │  ⚠️ Effect Options:                  │
    │    ❌ Deny - Block creation           │
    │    ⚠️ Audit - Report non-compliance   │
    │    🔧 Modify - Auto-fix issues        │
    │                ↓                      │
    │  📈 Compliance Report: 95% compliant │
    └─────────────────────────────────────────┘`
  },
  'role-based-access-control': {
    title: 'Role-Based Access Control (RBAC)',
    explanation: '📚 A system that provides fine-grained access management of Azure resources based on user roles and responsibilities. RBAC enables you to grant the minimum level of access that users need to perform their jobs, following the principle of least privilege.',
    examples: '💡 Examples: Owner (full access), Contributor (manage but not assign permissions), Reader (view only), Virtual Machine Contributor (manage VMs only), custom roles for specific needs.',
    useCase: '🏢 Use Case: A large organization has developers, testers, and managers accessing different Azure resources. Developers get Contributor access to development resource groups, testers get Reader access to production for monitoring, and managers get cost management access for budget oversight. Each person gets exactly the access they need.',
    mnemonic: '🧠 RBAC = Right person, Right access, Based on their role And Control - like different key cards for different areas of a building.',
    visual: `🎨 Visual: RBAC Permission Matrix
    ┌─────────────────────────────────────────┐
    │              RBAC ROLES                 │
    ├───────────┬──────┬──────┬──────┬────────┤
    │           │ Owner│Contrib│Reader│ Custom │
    ├───────────┼──────┼──────┼──────┼────────┤
    │ 👥 User: Alice │  ✅   │  ❌   │  ❌   │   ❌   │
    │ 👨‍💻 Dev: Bob    │  ❌   │  ✅   │  ❌   │   ❌   │
    │ 👩‍💼 Manager: Carol│  ❌   │  ❌   │  ✅   │   ✅   │
    ├───────────┼──────┼──────┼──────┼────────┤
    │Permissions:│      │       │       │        │
    │ Create/Del  │  ✅   │  ✅   │  ❌   │ Varies │
    │ Modify      │  ✅   │  ✅   │  ❌   │ Varies │
    │ View        │  ✅   │  ✅   │  ✅   │ Varies │
    │ Assign RBAC │  ✅   │  ❌   │  ❌   │   ❌   │
    └───────────┴──────┴──────┴──────┴────────┘`
  },
  'resource-locks': {
    title: 'Resource Locks',
    explanation: '📚 A feature that prevents accidental deletion or modification of critical Azure resources by placing locks at the subscription, resource group, or resource level. Locks provide an extra layer of protection against human error.',
    examples: '💡 Examples: Delete locks on production databases, ReadOnly locks on shared storage accounts, preventing accidental deletion of virtual networks, protecting critical VMs from modifications.',
    useCase: '🏢 Use Case: A company\'s production database was accidentally deleted by a new team member with Contributor access. To prevent this, they implement Delete locks on all production databases and ReadOnly locks on critical shared resources, ensuring even users with high-level permissions cannot accidentally cause damage.',
    mnemonic: '🧠 LOCKS = Limiting Operations to prevent Critical Knockout Scenarios - like putting a protective cover over important buttons.',
    visual: `🎨 Visual: Resource Lock Protection
    ┌─────────────────────────────────────────┐
    │           RESOURCE LOCKS               │
    ├─────────────────────────────────────────┤
    │                                      │
    │  📊 Production Database 🔒 DELETE LOCK│
    │  ┌──────────────────────────────┐  │
    │  │        SQL Database         │  │
    │  │   Customer Records        │  │
    │  │   ✅ Can modify data       │  │
    │  │   ❌ Cannot delete DB      │  │
    │  └──────────────────────────────┘  │
    │                                      │
    │  💾 Shared Storage 🔐 READONLY LOCK │
    │  ┌──────────────────────────────┐  │
    │  │      Config Files          │  │
    │  │   ✅ Can read/download     │  │
    │  │   ❌ Cannot modify        │  │
    │  │   ❌ Cannot delete        │  │
    │  └──────────────────────────────┘  │
    └─────────────────────────────────────────┘`
  },
  'azure-blueprints': {
    title: 'Azure Blueprints',
    explanation: '📚 A service that enables cloud architects to define a repeatable set of Azure resources that implement and adhere to organizational standards, patterns, and requirements. Blueprints package ARM templates, policies, RBAC assignments, and resource groups together.',
    examples: '💡 Examples: ISO 27001 compliance templates, GDPR compliance blueprints, PCI-DSS frameworks, government security baselines, corporate governance standards.',
    useCase: '🏢 Use Case: A multinational corporation needs to ensure all new Azure subscriptions comply with security standards and regulatory requirements. They create a blueprint that automatically deploys required policies, RBAC roles, security monitoring, and compliance configurations, ensuring consistent governance across all business units.',
    mnemonic: '🧠 BLUEPRINTS = Building Level Uniform Environment Patterns Repeatable In New Territory Setup - like architectural blueprints for building consistent structures.',
    visual: `🎨 Visual: Blueprint Components
    ┌─────────────────────────────────────────┐
    │          AZURE BLUEPRINT               │
    │     "Corporate Security Standard"      │
    ├─────────────────────────────────────────┤
    │  ┌───────────────────────────────────┐  │
    │  │    BLUEPRINT ARTIFACTS        │  │
    │  ├───────────────────────────────────┤  │
    │  │ 📄 ARM Templates:             │  │
    │  │   • Virtual Network            │  │
    │  │   • Key Vault                 │  │
    │  │   • Log Analytics             │  │
    │  ├───────────────────────────────────┤  │
    │  │ 📋 Azure Policies:           │  │
    │  │   • Require encryption        │  │
    │  │   • Allowed VM sizes          │  │
    │  ├───────────────────────────────────┤  │
    │  │ 👥 RBAC Assignments:          │  │
    │  │   • Security team roles       │  │
    │  │   • Audit permissions         │  │
    │  └───────────────────────────────────┘  │
    │               ↓                        │
    │    🏢 Deploy to New Subscription     │
    └─────────────────────────────────────────┘`
  }
};

export const getConceptById = (key: string): ConceptExplanation | undefined => {
  return conceptExplanations[key];
};