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

  // Financial Models
  'opex-vs-capex': {
    title: 'OpEx vs CapEx',
    explanation: '📚 OpEx (Operational Expenditure) are ongoing operational costs for running a business, while CapEx (Capital Expenditure) are upfront investments in long-term assets. Cloud computing shifts IT spending from CapEx (buying servers) to OpEx (paying for cloud services monthly).',
    examples: '💡 Examples: OpEx - Azure monthly subscription, electricity bills, staff salaries; CapEx - purchasing servers, data center construction, software licenses with perpetual terms.',
    useCase: '🏢 Use Case: A startup avoids $100K upfront server purchase (CapEx) and instead pays $2K/month for Azure services (OpEx). This preserves cash flow for business growth, provides tax advantages as operating expenses, and eliminates depreciation concerns.',
    mnemonic: '🧠 OpEx = Operating Expenses (monthly bills), CapEx = Capital Expenses (big purchases) - Like renting an apartment (OpEx) vs buying a house (CapEx).',
    visual: `🎨 Visual: OpEx vs CapEx Comparison
    ┌─────────────────────────────────────────┐
    │              CAPEX MODEL                │
    │  💰 Year 0: Pay $100,000 upfront       │
    │  📈 Years 1-5: Depreciation $20K/year  │
    │  ⚡ Ongoing: Power, maintenance, staff   │
    │  📊 Total 5-year cost: $200,000        │
    └─────────────────────────────────────────┘
                      ↕️ VS
    ┌─────────────────────────────────────────┐
    │              OPEX MODEL                 │
    │  💳 Monthly: Pay $2,000/month           │
    │  📊 Annual: $24,000 per year           │
    │  ✅ Benefits: Tax deductible, scalable  │
    │  📈 Total 5-year cost: $120,000        │
    │  💰 Savings: $80,000 + better cash flow │
    └─────────────────────────────────────────┘`
  },
  'pay-as-you-go': {
    title: 'Pay-as-You-Go Pricing',
    explanation: '📚 A cloud pricing model where you pay only for the resources you consume, with no upfront costs or long-term commitments. Billing is typically done per hour, per transaction, or per GB depending on the service.',
    examples: '💡 Examples: Azure VMs charged per hour they run, storage charged per GB used, bandwidth charged per GB transferred, Azure Functions charged per execution.',
    useCase: '🏢 Use Case: A seasonal e-commerce business scales up VMs during holiday shopping seasons and scales down during quiet periods. They pay for high capacity only when needed, saving 60% compared to maintaining year-round infrastructure for peak capacity.',
    mnemonic: '🧠 PAY-AS-YOU-GO = Pay Amount You Generate Operations - Like a taxi meter that charges based on distance traveled.',
    visual: `🎨 Visual: Pay-as-You-Go Benefits
    ┌─────────────────────────────────────────┐
    │         TRADITIONAL IT COSTS            │
    │  💰 Fixed costs regardless of usage     │
    │  ████████████████████████████████████  │
    │  $10K/month even with low usage        │
    └─────────────────────────────────────────┘
                      ↕️ VS
    ┌─────────────────────────────────────────┐
    │        PAY-AS-YOU-GO COSTS             │
    │  💳 Variable costs match usage         │
    │  Jan: ████ $2K (low season)           │
    │  Nov: ████████████████ $8K (peak)     │
    │  Dec: ████████████████████ $10K       │
    │  ✅ Pay only for what you use          │
    └─────────────────────────────────────────┘`
  },
  'agility': {
    title: 'Cloud Agility',
    explanation: '📚 The ability to rapidly develop, test, and launch software applications in a cloud environment. Cloud agility enables organizations to quickly respond to changing business requirements and market demands through fast provisioning of resources.',
    examples: '💡 Examples: Spinning up new environments in minutes, rapidly scaling applications, quickly testing new features, fast deployment of updates, immediate access to latest technologies.',
    useCase: '🏢 Use Case: A fintech startup needs to launch a new mobile payment feature within 2 weeks to compete with rivals. Using Azure, they provision development environments instantly, deploy to multiple regions simultaneously, and scale automatically based on user adoption.',
    mnemonic: '🧠 AGILITY = Accelerated Growth through Instant Launch and Iteration - Like having a race car vs a truck for business speed.',
    visual: `🎨 Visual: Cloud Agility Timeline
    ┌─────────────────────────────────────────┐
    │         TRADITIONAL IT TIMELINE         │
    │  📋 Planning: 2-4 weeks                │
    │  💰 Procurement: 4-8 weeks             │
    │  🔧 Setup: 2-4 weeks                   │
    │  🚀 Development: 8-12 weeks            │
    │  ⏱️  Total: 16-28 weeks                │
    └─────────────────────────────────────────┘
                      ↕️ VS
    ┌─────────────────────────────────────────┐
    │           CLOUD AGILITY                │
    │  ⚡ Provision: Minutes                  │
    │  🔧 Configure: Hours                   │
    │  🚀 Development: 2-4 weeks             │
    │  📈 Scale & Deploy: Minutes            │
    │  ⏱️  Total: 2-4 weeks                  │
    │  🎯 85% faster time-to-market          │
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

  // Database Services
  'azure-sql-database': {
    title: 'Azure SQL Database',
    explanation: '📚 A fully managed Platform as a Service (PaaS) database engine that handles most database management functions such as upgrading, patching, backups, and monitoring without user involvement. Based on Microsoft SQL Server engine with built-in intelligence and security.',
    examples: '💡 Examples: Web application databases, data warehousing, business intelligence workloads, mission-critical applications, multi-tenant SaaS applications.',
    useCase: '🏢 Use Case: A financial services company migrates their customer database to Azure SQL Database, gaining automatic backups, 99.99% availability SLA, built-in security features, and intelligent performance optimization without managing database servers or maintenance windows.',
    mnemonic: '🧠 AZURE SQL = Azure Structured Query Language database - Fully managed SQL Server in the cloud.',
    visual: `🎨 Visual: Azure SQL Database Features
    ┌─────────────────────────────────────────┐
    │         AZURE SQL DATABASE             │
    │  ┌───────────────────────────────────┐  │
    │  │        Your Applications          │  │
    │  │   🌐 Web Apps  📱 Mobile Apps     │  │
    │  └───────────────────────────────────┘  │
    │               ↕️ SQL Queries            │
    │  ┌───────────────────────────────────┐  │
    │  │     Managed SQL Database         │  │
    │  │  💾 Customer Data  📊 Analytics   │  │
    │  └───────────────────────────────────┘  │
    │  Azure Managed Features:               │
    │  ✅ Auto-backup  ✅ Auto-patching      │
    │  ✅ High availability ✅ Built-in security │
    │  ✅ Performance tuning ✅ Scaling      │
    └─────────────────────────────────────────┘`
  },
  'azure-database-postgresql': {
    title: 'Azure Database for PostgreSQL',
    explanation: '📚 A fully managed database service based on the community PostgreSQL database engine. Azure handles infrastructure management, allowing developers to focus on application development while ensuring high availability, security, and performance.',
    examples: '💡 Examples: Web applications, geospatial applications, financial applications, content management systems, applications requiring JSON data types and advanced indexing.',
    useCase: '🏢 Use Case: A GIS mapping company uses Azure Database for PostgreSQL for its geospatial applications, leveraging PostgreSQL\'s advanced geographic features while Azure provides automatic scaling, security, and 99.99% uptime for their location-based services.',
    mnemonic: '🧠 POSTGRESQL = Postgres Query Language - Open source database with advanced features, fully managed by Azure.',
    visual: `🎨 Visual: PostgreSQL Specialized Features
    ┌─────────────────────────────────────────┐
    │    AZURE DATABASE FOR POSTGRESQL       │
    │  ┌───────────────────────────────────┐  │
    │  │      PostgreSQL Engine           │  │
    │  │  🗺️ Geospatial data (PostGIS)     │  │
    │  │  📝 JSON/JSONB support           │  │
    │  │  🔍 Advanced indexing            │  │
    │  │  📊 Complex queries              │  │
    │  └───────────────────────────────────┘  │
    │  Azure Managed Benefits:               │
    │  ✅ Community PostgreSQL compatible    │
    │  ✅ High availability across zones     │
    │  ✅ Automatic backup & recovery        │
    │  ✅ Built-in monitoring & security     │
    └─────────────────────────────────────────┘`
  },
  'azure-database-mysql': {
    title: 'Azure Database for MySQL',
    explanation: '📚 A fully managed database service based on the MySQL Community Edition. Provides built-in high availability, security, and performance optimization while maintaining compatibility with existing MySQL applications and tools.',
    examples: '💡 Examples: Web applications (WordPress, Drupal), e-commerce platforms, content management systems, LAMP stack applications, mobile app backends.',
    useCase: '🏢 Use Case: An e-commerce startup running WordPress chooses Azure Database for MySQL to power their online store, getting MySQL compatibility for their existing plugins while Azure provides automatic scaling during traffic spikes and built-in security features.',
    mnemonic: '🧠 MYSQL = My Structured Query Language - Popular open source database, Azure managed.',
    visual: `🎨 Visual: MySQL Web Application Stack
    ┌─────────────────────────────────────────┐
    │      LAMP STACK ON AZURE               │
    │  ┌───────────────────────────────────┐  │
    │  │  🌐 Web Application (PHP)         │  │
    │  │     WordPress/Drupal/Custom      │  │
    │  └───────────────────────────────────┘  │
    │               ↕️ MySQL Queries          │
    │  ┌───────────────────────────────────┐  │
    │  │   Azure Database for MySQL       │  │
    │  │  📄 Content  🛒 Products 👤 Users │  │
    │  └───────────────────────────────────┘  │
    │  Benefits:                             │
    │  ✅ MySQL Community Edition compatible │
    │  ✅ 99.99% availability SLA           │
    │  ✅ Auto-scaling compute & storage     │
    │  ✅ Point-in-time restore             │
    └─────────────────────────────────────────┘`
  },
  'azure-cosmos-db': {
    title: 'Azure Cosmos DB',
    explanation: '📚 A globally distributed, multi-model database service designed for mission-critical applications. Provides guaranteed single-digit millisecond latencies, 99.999% availability, and supports multiple data models including SQL, MongoDB, Cassandra, Gremlin, and Table APIs.',
    examples: '💡 Examples: IoT data ingestion, real-time personalization, gaming leaderboards, chat applications, product catalogs, session stores, globally distributed applications.',
    useCase: '🏢 Use Case: A global gaming company uses Cosmos DB to store player profiles and game state across multiple regions. Players experience sub-10ms response times worldwide, with automatic failover ensuring 99.999% availability during regional outages.',
    mnemonic: '🧠 COSMOS DB = Comprehensive Operations for Scale, Multi-model, Omnipresent Storage Database - The universe of databases in one service.',
    visual: `🎨 Visual: Cosmos DB Global Distribution
    ┌─────────────────────────────────────────┐
    │           AZURE COSMOS DB              │
    │         🌍 GLOBAL DISTRIBUTION          │
    ├─────────────────────────────────────────┤
    │  🌎 Americas    🌍 Europe    🌏 Asia    │
    │  ┌─────────┐   ┌─────────┐  ┌─────────┐ │
    │  │Region 1 │◄──┤Region 2 │──┤Region 3 │ │
    │  │<10ms    │   │<10ms    │  │<10ms    │ │
    │  │99.999%  │   │99.999%  │  │99.999%  │ │
    │  └─────────┘   └─────────┘  └─────────┘ │
    ├─────────────────────────────────────────┤
    │        MULTI-MODEL SUPPORT             │
    │  📄 SQL  🍃 MongoDB  🔗 Cassandra      │
    │  🕸️ Gremlin  📊 Table  🔑 Key-Value    │
    └─────────────────────────────────────────┘`
  },

  // Advanced Azure Services
  'azure-iot-hub': {
    title: 'Azure IoT Hub',
    explanation: '📚 A managed service that provides reliable and secure bidirectional communications between IoT devices and the cloud. IoT Hub enables monitoring, managing, and controlling billions of IoT devices at scale.',
    examples: '💡 Examples: Smart city sensors, industrial equipment monitoring, connected vehicles, smart home devices, environmental monitoring, asset tracking.',
    useCase: '🏢 Use Case: A manufacturing company connects 10,000 production machines to IoT Hub to monitor temperature, vibration, and performance in real-time. The system triggers alerts for maintenance needs, prevents downtime, and optimizes production efficiency.',
    mnemonic: '🧠 IoT HUB = Internet of Things HUB - Central command center for all your connected devices.',
    visual: `🎨 Visual: IoT Hub Device Management
    ┌─────────────────────────────────────────┐
    │             AZURE IoT HUB              │
    │        🌐 Device Management             │
    ├─────────────────────────────────────────┤
    │  📊 Analytics  🔧 Device Control       │
    │  📈 Monitoring 🚨 Alerts & Rules       │
    └─────────────┬───────────────────────────┘
                  │ Bidirectional Communication
    ┌─────────────▼───────────────────────────┐
    │           IoT DEVICES                  │
    │  🏭 Sensors    🚗 Vehicles            │
    │  📱 Smart Home 🏢 Building Systems     │
    │  ⚡ Energy Meters 🌡️ Weather Stations │
    └─────────────────────────────────────────┘`
  },
  'azure-synapse-analytics': {
    title: 'Azure Synapse Analytics',
    explanation: '📚 An enterprise analytics service that brings together big data and data warehousing. It gives you the freedom to query data on your terms, using serverless or dedicated compute resources at scale.',
    examples: '💡 Examples: Data warehousing, big data analytics, business intelligence, real-time analytics, data lake exploration, machine learning integration.',
    useCase: '🏢 Use Case: A retail chain analyzes petabytes of customer transaction data, inventory levels, and market trends using Synapse Analytics. They combine structured sales data with unstructured social media data to predict demand and optimize inventory across 1000+ stores.',
    mnemonic: '🧠 SYNAPSE = Synaptic Network Analyzing Petabytes of Structured Enterprise data - Brain of your data operations.',
    visual: `🎨 Visual: Synapse Analytics Architecture
    ┌─────────────────────────────────────────┐
    │        AZURE SYNAPSE ANALYTICS         │
    ├─────────────────────────────────────────┤
    │  ┌─────────────┐  ┌─────────────────┐   │
    │  │ SQL Pools   │  │ Spark Pools     │   │
    │  │ Data        │  │ Big Data        │   │
    │  │ Warehouse   │  │ Processing      │   │
    │  └─────────────┘  └─────────────────┘   │
    │  ┌─────────────────────────────────────┐ │
    │  │      Data Lake Storage Gen2        │ │
    │  │  📊 Structured  📝 Semi-structured  │ │
    │  │  📄 Unstructured 🎬 Multimedia     │ │
    │  └─────────────────────────────────────┘ │
    │  📈 Power BI  🤖 ML  📊 Pipelines      │
    └─────────────────────────────────────────┘`
  },
  'azure-machine-learning': {
    title: 'Azure Machine Learning',
    explanation: '📚 A cloud service for accelerating and managing the machine learning project lifecycle. It provides tools for data scientists and developers to build, train, and deploy machine learning models faster and with confidence.',
    examples: '💡 Examples: Predictive analytics, image recognition, natural language processing, fraud detection, recommendation systems, demand forecasting.',
    useCase: '🏢 Use Case: A bank uses Azure ML to detect fraudulent credit card transactions in real-time. The service trains models on historical transaction data, deploys them as web services, and processes millions of transactions daily with 99.7% accuracy.',
    mnemonic: '🧠 AZURE ML = Machine Learning made easy - From data to deployed AI models in the cloud.',
    visual: `🎨 Visual: ML Lifecycle Management
    ┌─────────────────────────────────────────┐
    │       AZURE MACHINE LEARNING           │
    ├─────────────────────────────────────────┤
    │  1. 📊 DATA PREPARATION                │
    │     Clean, transform, feature engineer  │
    │                ↓                       │
    │  2. 🏗️ MODEL TRAINING                  │
    │     AutoML, custom algorithms, tuning   │
    │                ↓                       │
    │  3. ✅ MODEL VALIDATION                 │
    │     Testing, metrics, comparison        │
    │                ↓                       │
    │  4. 🚀 MODEL DEPLOYMENT                 │
    │     Real-time/batch inference endpoints │
    │                ↓                       │
    │  5. 📈 MONITORING & MANAGEMENT         │
    │     Performance tracking, drift detection│
    └─────────────────────────────────────────┘`
  },

  // Development and Integration Services
  'azure-devops': {
    title: 'Azure DevOps',
    explanation: '📚 A comprehensive suite of development collaboration tools including version control, build automation, testing, project management, and deployment services. It supports both cloud-hosted and on-premises deployments.',
    examples: '💡 Examples: Git repositories, CI/CD pipelines, Agile project management, automated testing, code review workflows, artifact management, deployment to multiple environments.',
    useCase: '🏢 Use Case: A software development team uses Azure DevOps to manage their entire development lifecycle: storing code in Git repos, tracking work items in Boards, building and testing code automatically with Pipelines, and deploying to Azure through release pipelines.',
    mnemonic: '🧠 DEVOPS = Development Operations Platform - Complete toolkit for software development teams.',
    visual: `🎨 Visual: DevOps Lifecycle
    ┌─────────────────────────────────────────┐
    │            AZURE DEVOPS                │
    ├─────────────────────────────────────────┤
    │  📋 Boards     📊 Analytics           │
    │  (Work Items)  (Insights)             │
    │        ↓                ↑             │
    │  📂 Repos   →  🔧 Pipelines          │
    │  (Git Code)    (CI/CD)               │
    │        ↓                ↓             │
    │  🧪 Test Plans → 📦 Artifacts         │
    │  (Quality)     (Packages)             │
    ├─────────────────────────────────────────┤
    │  ⚡ CONTINUOUS INTEGRATION             │
    │  🚀 CONTINUOUS DEPLOYMENT              │
    │  🔄 Full Development Lifecycle         │
    └─────────────────────────────────────────┘`
  },
  'azure-logic-apps': {
    title: 'Azure Logic Apps',
    explanation: '📚 A cloud platform where you can create and run automated workflows with little to no code. Logic Apps helps you automate and orchestrate tasks, business processes, and workflows when you need to integrate apps, data, systems, and services.',
    examples: '💡 Examples: Email notifications when files are uploaded, data synchronization between systems, approval workflows, social media monitoring, scheduled batch processing.',
    useCase: '🏢 Use Case: An HR department automates their onboarding process: when a new employee record is created in their HR system, Logic Apps automatically creates accounts in Office 365, sends welcome emails, assigns security groups, and creates a task list for IT setup.',
    mnemonic: '🧠 LOGIC APPS = Logical Application Process flows - Visual workflow automation without complex coding.',
    visual: `🎨 Visual: Logic Apps Workflow
    ┌─────────────────────────────────────────┐
    │           AZURE LOGIC APPS             │
    │          Workflow Automation           │
    ├─────────────────────────────────────────┤
    │                                        │
    │  🔄 TRIGGER: New Employee Created      │
    │                ↓                       │
    │  📧 ACTION: Send Welcome Email         │
    │                ↓                       │
    │  👤 ACTION: Create Office 365 Account  │
    │                ↓                       │
    │  🔐 ACTION: Assign Security Groups     │
    │                ↓                       │
    │  📋 ACTION: Create IT Task List        │
    │                ↓                       │
    │  ✅ COMPLETE: Onboarding Done          │
    │                                        │
    │  🎯 No Code Required - Visual Designer │
    └─────────────────────────────────────────┘`
  },

  // Management Tools
  'azure-portal': {
    title: 'Azure Portal',
    explanation: '📚 A web-based, unified console that provides an alternative to command-line tools. With the Azure portal, you can manage your Azure subscription using a graphical user interface with dashboards, monitoring, and configuration capabilities.',
    examples: '💡 Examples: Creating virtual machines through GUI, monitoring resource performance with charts, configuring security settings, managing billing and subscriptions, creating custom dashboards.',
    useCase: '🏢 Use Case: A system administrator uses Azure Portal to monitor their company\'s cloud resources through custom dashboards, quickly responds to alerts, provisions new resources for development teams, and manages user access permissions all from a single web interface.',
    mnemonic: '🧠 AZURE PORTAL = Your gateway to Azure - Graphical interface for all Azure management tasks.',
    visual: `🎨 Visual: Azure Portal Interface
    ┌─────────────────────────────────────────┐
    │           AZURE PORTAL 🌐              │
    ├─────────────────────────────────────────┤
    │  🏠 Dashboard  📊 Monitoring           │
    │  ┌─────────┐  ┌─────────┐  ┌─────────┐ │
    │  │VM Status│  │Cost     │  │Alerts   │ │
    │  │Running ✅│  │$1,245   │  │2 Active │ │
    │  └─────────┘  └─────────┘  └─────────┘ │
    │                                        │
    │  🗂️ Resource Groups  🔧 Create Resource │
    │  👥 Access Control   📈 Cost Analysis  │
    │                                        │
    │  ✅ Point & Click Interface            │
    │  ✅ No Command Line Required           │
    └─────────────────────────────────────────┘`
  },
  'azure-powershell': {
    title: 'Azure PowerShell',
    explanation: '📚 A set of cmdlets for managing Azure resources directly from PowerShell. Azure PowerShell is designed for developers and administrators who want to automate Azure management tasks using scripts and command-line tools.',
    examples: '💡 Examples: Creating VMs with scripts, automating deployments, bulk resource management, scheduled maintenance tasks, backup automation, infrastructure as code.',
    useCase: '🏢 Use Case: A DevOps engineer writes PowerShell scripts to automatically provision identical development environments for 20 developers, including VMs, databases, and networking configurations, reducing setup time from hours to minutes.',
    mnemonic: '🧠 AZURE POWERSHELL = Powerful Azure Shell - Command line automation for Azure management.',
    visual: `🎨 Visual: PowerShell Azure Management
    ┌─────────────────────────────────────────┐
    │         AZURE POWERSHELL 💻            │
    ├─────────────────────────────────────────┤
    │  PS C:\\> Connect-AzAccount              │
    │  ✅ Successfully logged in              │
    │                                        │
    │  PS C:\\> New-AzVM -Name "WebServer"    │
    │           -ResourceGroupName "MyRG"    │
    │           -Image "Windows2019"         │
    │  ⏳ Creating virtual machine...         │
    │  ✅ VM created successfully            │
    │                                        │
    │  PS C:\\> Get-AzVM | Where Status      │
    │  📊 WebServer01: Running              │
    │  📊 WebServer02: Stopped              │
    │                                        │
    │  🔧 Scriptable & Automatable          │
    └─────────────────────────────────────────┘`
  },
  'azure-cli': {
    title: 'Azure CLI',
    explanation: '📚 A cross-platform command-line tool that provides a set of commands used to create and manage Azure resources. The Azure CLI is available across Azure services and is designed to get you working quickly with Azure.',
    examples: '💡 Examples: Creating resource groups, deploying applications, managing storage accounts, configuring virtual networks, automating CI/CD pipelines, cross-platform scripting.',
    useCase: '🏢 Use Case: A developer uses Azure CLI on their Mac to deploy a web application to Azure App Service, create a SQL database, and configure networking - all from terminal commands that work identically on Windows, Mac, and Linux.',
    mnemonic: '🧠 AZURE CLI = Command Line Interface - Cross-platform terminal tool for Azure.',
    visual: `🎨 Visual: Cross-Platform Azure CLI
    ┌─────────────────────────────────────────┐
    │           AZURE CLI ⚡                 │
    ├─────────────────────────────────────────┤
    │  🐧 Linux    🍎 macOS    🪟 Windows     │
    │                                        │
    │  $ az login                           │
    │  ✅ Login successful                   │
    │                                        │
    │  $ az group create --name MyRG        │
    │    --location eastus                  │
    │  ✅ Resource group created             │
    │                                        │
    │  $ az webapp create --name MyApp      │
    │    --resource-group MyRG              │
    │  ⏳ Creating web app...                │
    │  ✅ Web app deployed                   │
    │                                        │
    │  🌐 Same commands, any platform        │
    └─────────────────────────────────────────┘`
  },
  'arm-templates': {
    title: 'Azure Resource Manager (ARM) Templates',
    explanation: '📚 JSON files that define the infrastructure and configuration for your project using declarative syntax. ARM templates enable you to deploy, manage, and monitor resources as a group rather than handling them individually.',
    examples: '💡 Examples: Infrastructure as Code, repeatable deployments, multi-environment consistency, complex resource dependencies, automated provisioning, configuration management.',
    useCase: '🏢 Use Case: A company creates ARM templates for their three-tier web application (web servers, application servers, database) and deploys identical environments for development, testing, and production, ensuring consistency and reducing deployment errors.',
    mnemonic: '🧠 ARM TEMPLATES = Automated Resource Management templates - Blueprint for Azure infrastructure deployment.',
    visual: `🎨 Visual: ARM Template Deployment
    ┌─────────────────────────────────────────┐
    │          ARM TEMPLATE 📄               │
    │      Infrastructure as Code            │
    ├─────────────────────────────────────────┤
    │  {                                     │
    │    "resources": [                      │
    │      {                                 │
    │        "type": "Microsoft.Web/sites",  │
    │        "name": "myWebApp"             │
    │      },                               │
    │      {                                 │
    │        "type": "Microsoft.Sql/servers"│
    │        "name": "myDatabase"           │
    │      }                                │
    │    ]                                  │
    │  }                                    │
    │                ↓                      │
    │  🚀 Deploy to Azure                   │
    │                ↓                      │
    │  🌐 Web App + 💾 Database Created     │
    │  ✅ Repeatable & Consistent           │
    └─────────────────────────────────────────┘`
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

  // Security Services
  'azure-key-vault': {
    title: 'Azure Key Vault',
    explanation: '📚 A cloud service for securely storing and accessing secrets, keys, and certificates. Key Vault provides centralized storage for application secrets with strict access control and audit logging.',
    examples: '💡 Examples: API keys, database connection strings, SSL certificates, encryption keys, authentication tokens, passwords, service principal credentials.',
    useCase: '🏢 Use Case: A financial application stores database passwords, API keys, and SSL certificates in Key Vault instead of hardcoding them. Developers access secrets through managed identities, audit logs track all access, and keys are automatically rotated for enhanced security.',
    mnemonic: '🧠 KEY VAULT = Secure storage for Keys, Encryption, and Yearlong protection - Your digital safe in the cloud.',
    visual: `🎨 Visual: Key Vault Security Model
    ┌─────────────────────────────────────────┐
    │            AZURE KEY VAULT 🔐          │
    │         Secure Secret Storage          │
    ├─────────────────────────────────────────┤
    │  🔑 Secrets                           │
    │    • API Keys                         │
    │    • Connection Strings               │
    │    • Passwords                        │
    │                                        │
    │  🛡️ Encryption Keys                   │
    │    • Data Encryption                   │
    │    • Key Rotation                     │
    │                                        │
    │  📜 Certificates                      │
    │    • SSL/TLS Certificates             │
    │    • Auto-renewal                     │
    │                                        │
    │  ✅ Access Control & Audit Logging    │
    └─────────────────────────────────────────┘`
  },
  'network-security-groups': {
    title: 'Network Security Groups (NSGs)',
    explanation: '📚 A security layer that acts as a virtual firewall for controlling network traffic to and from Azure resources. NSGs contain security rules that allow or deny inbound and outbound network traffic based on source/destination, port, and protocol.',
    examples: '💡 Examples: Allowing HTTP/HTTPS traffic to web servers, blocking direct RDP access from internet, permitting database connections only from app servers, creating DMZ segments.',
    useCase: '🏢 Use Case: A three-tier application uses NSGs to allow internet traffic only to the web tier on ports 80/443, permit web tier to communicate with app tier on port 8080, and allow app tier to access database tier on port 1433, blocking all other traffic.',
    mnemonic: '🧠 NSG = Network Security Guard - Virtual bouncer controlling who can enter your network.',
    visual: `🎨 Visual: NSG Traffic Control
    ┌─────────────────────────────────────────┐
    │       NETWORK SECURITY GROUP           │
    │            (Virtual Firewall)          │
    ├─────────────────────────────────────────┤
    │  🌐 INTERNET                           │
    │           ↓ Port 80/443 ✅            │
    │  ┌─────────────────────────────────────┐ │
    │  │         WEB TIER                   │ │
    │  └─────────────────────────────────────┘ │
    │           ↓ Port 8080 ✅              │
    │  ┌─────────────────────────────────────┐ │
    │  │         APP TIER                   │ │
    │  └─────────────────────────────────────┘ │
    │           ↓ Port 1433 ✅              │
    │  ┌─────────────────────────────────────┐ │
    │  │       DATABASE TIER                │ │
    │  └─────────────────────────────────────┘ │
    │  🚫 All other traffic blocked          │
    └─────────────────────────────────────────┘`
  },
  'azure-firewall': {
    title: 'Azure Firewall',
    explanation: '📚 A managed, cloud-based network security service that protects your Azure Virtual Network resources. Azure Firewall is a fully stateful firewall-as-a-service with built-in high availability and unrestricted cloud scalability.',
    examples: '💡 Examples: Outbound filtering for VMs, application-level filtering, threat intelligence, DNS proxy, forced tunneling, integration with Azure Monitor.',
    useCase: '🏢 Use Case: A company deploys Azure Firewall as a central security checkpoint for all outbound traffic from their virtual networks, blocking access to malicious websites, controlling which applications can communicate externally, and logging all network activity for compliance.',
    mnemonic: '🧠 AZURE FIREWALL = Advanced Zero-trust Universal Firewall - Enterprise-grade network protection service.',
    visual: `🎨 Visual: Azure Firewall Protection
    ┌─────────────────────────────────────────┐
    │           AZURE FIREWALL 🔥            │
    │     Managed Network Security           │
    ├─────────────────────────────────────────┤
    │              🌐 Internet                │
    │                  ↕️                     │
    │  ┌─────────────────────────────────────┐ │
    │  │        AZURE FIREWALL              │ │
    │  │  🔍 Application Rules              │ │
    │  │  🌐 Network Rules                  │ │
    │  │  🛡️ Threat Intelligence            │ │
    │  │  📝 Logging & Analytics            │ │
    │  └─────────────────────────────────────┘ │
    │                  ↕️                     │
    │  🏢 Virtual Networks & Resources       │
    │  💻 VMs  💾 Databases  🌐 Web Apps    │
    │                                        │
    │  ✅ Centralized Security Control       │
    └─────────────────────────────────────────┘`
  },
  'azure-ddos-protection': {
    title: 'Azure DDoS Protection',
    explanation: '📚 A service that provides enhanced DDoS mitigation features to defend against distributed denial-of-service attacks. It combines traffic monitoring, machine learning, and adaptive tuning to protect Azure applications.',
    examples: '💡 Examples: Volumetric attacks mitigation, protocol attacks blocking, resource layer attacks prevention, always-on monitoring, attack analytics and reporting.',
    useCase: '🏢 Use Case: An e-commerce website experiences a massive DDoS attack during Black Friday sales. Azure DDoS Protection automatically detects the attack, mitigates malicious traffic while allowing legitimate customers through, and provides real-time analytics on the attack patterns.',
    mnemonic: '🧠 DDOS PROTECTION = Distributed Denial of Service Protection - Shield against traffic flood attacks.',
    visual: `🎨 Visual: DDoS Protection Defense
    ┌─────────────────────────────────────────┐
    │        AZURE DDOS PROTECTION 🛡️        │
    │         Attack Mitigation              │
    ├─────────────────────────────────────────┤
    │                                        │
    │  💥 ATTACK TRAFFIC (Malicious)         │
    │  ████████████████████████████ 🚫       │
    │                                        │
    │  ┌─────────────────────────────────────┐ │
    │  │         DDOS PROTECTION            │ │
    │  │  🔍 Always-on monitoring           │ │
    │  │  🤖 Machine learning detection     │ │
    │  │  ⚡ Automatic mitigation           │ │
    │  │  📊 Real-time analytics            │ │
    │  └─────────────────────────────────────┘ │
    │                                        │
    │  👥 LEGITIMATE TRAFFIC ✅              │
    │  ████ Normal users pass through        │
    │                ↓                       │
    │  🌐 Your Azure Applications Protected  │
    └─────────────────────────────────────────┘`
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
  },

  // Compliance and Privacy
  'microsoft-privacy-statement': {
    title: 'Microsoft Privacy Statement',
    explanation: '📚 Microsoft\'s comprehensive privacy statement that describes how Microsoft collects, uses, and shares customer data across all Microsoft products and services, including Azure. It outlines data processing practices, user rights, and privacy controls.',
    examples: '💡 Examples: Data collection transparency, user consent mechanisms, data retention policies, third-party sharing limitations, user access and deletion rights.',
    useCase: '🏢 Use Case: A healthcare organization reviews the Microsoft Privacy Statement to understand how their patient data will be handled in Azure, ensuring it meets HIPAA requirements and provides the necessary privacy protections for sensitive medical information.',
    mnemonic: '🧠 PRIVACY STATEMENT = Policy Regarding Information Viewed And Collected by Microsoft - Microsoft\'s promise about your data.',
    visual: `🎨 Visual: Privacy Statement Coverage
    ┌─────────────────────────────────────────┐
    │      MICROSOFT PRIVACY STATEMENT       │
    │         Data Protection Promise        │
    ├─────────────────────────────────────────┤
    │  🔍 What Data is Collected:            │
    │    • Usage information                 │
    │    • Diagnostic data                   │
    │    • Service data                      │
    │                                        │
    │  🛡️ How Data is Protected:             │
    │    • Encryption in transit & at rest   │
    │    • Access controls                   │
    │    • Audit logging                     │
    │                                        │
    │  👤 Your Rights:                       │
    │    • Access your data                  │
    │    • Correct inaccuracies              │
    │    • Delete personal data              │
    │    • Data portability                  │
    └─────────────────────────────────────────┘`
  },
  'microsoft-trust-center': {
    title: 'Microsoft Trust Center',
    explanation: '📚 A comprehensive resource that provides information about Microsoft\'s approach to security, privacy, compliance, and transparency across all cloud services. It serves as a central hub for trust-related information and compliance resources.',
    examples: '💡 Examples: Compliance certifications (ISO 27001, SOC 2), security white papers, privacy documentation, audit reports, regulatory compliance guides.',
    useCase: '🏢 Use Case: A financial services company uses the Trust Center to download SOC 2 audit reports, review ISO 27001 certifications, and access compliance documentation needed to demonstrate to regulators that their Azure deployment meets industry security standards.',
    mnemonic: '🧠 TRUST CENTER = Trusted Resource for Understanding Security and Transparency - One-stop shop for Microsoft trust information.',
    visual: `🎨 Visual: Trust Center Resources
    ┌─────────────────────────────────────────┐
    │          MICROSOFT TRUST CENTER        │
    │        Your Security & Compliance Hub  │
    ├─────────────────────────────────────────┤
    │  🏆 Compliance Certifications:         │
    │    • ISO 27001 • SOC 1/2 • PCI DSS    │
    │    • HIPAA • FedRAMP • GDPR           │
    │                                        │
    │  📊 Audit Reports & Documentation:     │
    │    • Third-party audits               │
    │    • Security white papers            │
    │    • Privacy impact assessments       │
    │                                        │
    │  🔍 Transparency Reports:              │
    │    • Government requests              │
    │    • Service availability            │
    │    • Security incident responses      │
    │                                        │
    │  📚 Implementation Guides:             │
    │    • Compliance blueprints            │
    │    • Best practices                   │
    └─────────────────────────────────────────┘`
  },
  'azure-compliance-documentation': {
    title: 'Azure Compliance Documentation',
    explanation: '📚 Comprehensive documentation that provides detailed information about Azure\'s compliance with various industry standards, regulations, and certifications. It includes compliance offerings, shared responsibility guidance, and implementation resources.',
    examples: '💡 Examples: GDPR compliance guides, HIPAA implementation guidance, PCI DSS requirements mapping, SOX compliance frameworks, regional compliance documentation.',
    useCase: '🏢 Use Case: A multinational retailer uses Azure Compliance Documentation to understand PCI DSS requirements for processing credit card data, implements recommended controls, and provides auditors with Microsoft\'s compliance attestations to demonstrate secure payment processing.',
    mnemonic: '🧠 COMPLIANCE DOCS = Complete Compliance Documentation - Your guide to meeting regulatory requirements.',
    visual: `🎨 Visual: Compliance Documentation Structure
    ┌─────────────────────────────────────────┐
    │      AZURE COMPLIANCE DOCUMENTATION    │
    │         Regulatory Guidance            │
    ├─────────────────────────────────────────┤
    │  🌍 Global Standards:                  │
    │    • ISO 27001/27002 • SOC 1/2/3      │
    │    • CSA STAR • ISAE 3402             │
    │                                        │
    │  🏛️ Government & Regional:              │
    │    • FedRAMP • FISMA • UK G-Cloud     │
    │    • Australia IRAP • Japan CS Mark   │
    │                                        │
    │  🏥 Industry-Specific:                 │
    │    • HIPAA (Healthcare)               │
    │    • PCI DSS (Payment)                │
    │    • FERPA (Education)                │
    │                                        │
    │  📋 Implementation Resources:          │
    │    • Compliance blueprints            │
    │    • Control mapping                  │
    │    • Assessment tools                 │
    └─────────────────────────────────────────┘`
  },

  // Service Level Agreements
  'azure-sla': {
    title: 'Azure Service Level Agreement (SLA)',
    explanation: '📚 A formal commitment between Microsoft and customers that defines the expected level of service availability and performance. SLAs specify uptime guarantees, performance targets, and service credits for when commitments are not met.',
    examples: '💡 Examples: 99.95% uptime for Virtual Machines, 99.9% for Azure App Service, 99.99% for Azure SQL Database, response time commitments, service credit calculations.',
    useCase: '🏢 Use Case: An e-commerce company selects Azure services based on SLA requirements: they choose Premium VMs with 99.95% uptime SLA for critical workloads and receive service credits when availability falls below the guaranteed level during a recent outage.',
    mnemonic: '🧠 SLA = Service Level Agreement - Microsoft\'s promise of service availability and your compensation if they don\'t deliver.',
    visual: `🎨 Visual: Azure SLA Guarantees
    ┌─────────────────────────────────────────┐
    │             AZURE SLA                  │
    │        Service Availability Promise    │
    ├─────────────────────────────────────────┤
    │  📊 Uptime Guarantees:                │
    │    • Virtual Machines: 99.95%          │
    │    • App Service: 99.9%               │
    │    • SQL Database: 99.99%             │
    │    • Storage: 99.9%                   │
    │                                        │
    │  💰 Service Credits (if SLA missed):   │
    │    • <99.9%: 10% credit               │
    │    • <99%: 25% credit                 │
    │    • <95%: 100% credit                │
    │                                        │
    │  📈 Monthly Uptime Calculation:        │
    │    (Total Minutes - Downtime) / Total  │
    │    99.95% = 21.6 minutes max downtime  │
    │                                        │
    │  ✅ Your protection against outages    │
    └─────────────────────────────────────────┘`
  },
  'sla-factors': {
    title: 'SLA Factors',
    explanation: '📚 Various factors that can affect Service Level Agreement guarantees including service tier selection, multi-region deployment, availability zones usage, and architecture design choices. Understanding these factors helps optimize both availability and costs.',
    examples: '💡 Examples: Single vs multi-instance deployments, availability zone distribution, service tier selection, regional vs global deployment, backup and redundancy strategies.',
    useCase: '🏢 Use Case: A SaaS company improves their application SLA from 99.9% to 99.99% by deploying across multiple availability zones, using Premium storage tier, implementing load balancers, and adding automated failover, resulting in higher customer satisfaction.',
    mnemonic: '🧠 SLA FACTORS = Service Level Agreement depends on Architecture Choices and Technical Options - Design affects your guarantees.',
    visual: `🎨 Visual: SLA Improvement Factors
    ┌─────────────────────────────────────────┐
    │             SLA FACTORS                │
    │        Design for Higher Availability   │
    ├─────────────────────────────────────────┤
    │  🏢 Architecture Choices:              │
    │    • Single Instance: 99.9%           │
    │    • Multiple AZs: 99.95%             │
    │    • Multi-Region: 99.99%             │
    │                                        │
    │  ⚡ Service Tiers:                     │
    │    • Basic: Lower SLA                 │
    │    • Standard: Standard SLA           │
    │    • Premium: Highest SLA             │
    │                                        │
    │  🔧 Configuration Impact:              │
    │    • Load Balancers: +Availability    │
    │    • Auto-scaling: +Reliability       │
    │    • Backup Strategy: +Recovery       │
    │                                        │
    │  📈 Combined SLA Calculation:          │
    │    Web App (99.95%) × Database (99.99%) │
    │    = 99.94% combined availability      │
    └─────────────────────────────────────────┘`
  },
  'azure-preview-ga': {
    title: 'Azure Preview and General Availability',
    explanation: '📚 Azure services progress through different release stages: Private Preview (limited customers), Public Preview (open beta), and General Availability (GA - fully supported). Each stage has different SLA commitments, support levels, and pricing models.',
    examples: '💡 Examples: New AI services in Preview, beta features in public preview, GA services with full SLA support, preview feature limitations, production readiness indicators.',
    useCase: '🏢 Use Case: A development team wants to use a new Azure AI service. They test it in Public Preview for development environments (no SLA), wait for General Availability before using it in production to ensure full support and SLA coverage.',
    mnemonic: '🧠 PREVIEW TO GA = Preview Releases Eventually View Increasing maturity through Evolving Warranties - Services mature from beta to production ready.',
    visual: `🎨 Visual: Azure Service Maturity Stages
    ┌─────────────────────────────────────────┐
    │        AZURE SERVICE LIFECYCLE         │
    │         From Preview to Production     │
    ├─────────────────────────────────────────┤
    │  🔒 PRIVATE PREVIEW:                   │
    │    • Invitation only                   │
    │    • Limited features                  │
    │    • No SLA • No support              │
    │                                        │
    │  🌐 PUBLIC PREVIEW:                    │
    │    • Open to all customers            │
    │    • Most features available          │
    │    • Limited SLA • Basic support      │
    │    • May have breaking changes        │
    │                                        │
    │  ✅ GENERAL AVAILABILITY (GA):         │
    │    • Production ready                 │
    │    • Full feature set                 │
    │    • Full SLA • Complete support      │
    │    • Enterprise ready                 │
    │                                        │
    │  📋 Use GA for production workloads    │
    └─────────────────────────────────────────┘`
  },

  // Additional Cloud Concepts - Section Headers
  'cloud-models': {
    title: 'Cloud Models',
    explanation: '📚 Cloud deployment models define where and how cloud resources are deployed. The three primary models are Public, Private, and Hybrid clouds, each offering different levels of control, flexibility, and cost considerations based on business requirements.',
    examples: '💡 Examples: Microsoft Azure (Public), On-premises data centers (Private), Azure Arc enabling hybrid scenarios, AWS GovCloud for regulated industries, VMware Cloud on Azure for hybrid workloads.',
    useCase: '🏢 Use Case: A financial institution uses a hybrid cloud model - keeping sensitive customer data in their private on-premises servers for regulatory compliance while leveraging public cloud services like Azure AI for fraud detection and analytics.',
    mnemonic: '🧠 Think PPH = Public (everyone), Private (personal), Hybrid (half and half) - like choosing between a public pool, private pool, or both.',
    visual: `🎨 Visual: Cloud Deployment Models
┌─────────────────────────────────────────────────┐
│                PUBLIC CLOUD ☁️                  │
│  ┌─────────────────────────────────────────────┐│
│  │ Microsoft Azure │ AWS │ Google Cloud       ││
│  │ Shared Resources │ Multi-tenant           ││
│  │ Cost Effective   │ High Scalability       ││
│  └─────────────────────────────────────────────┘│
└─────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────┐
│               PRIVATE CLOUD 🏢                  │
│  ┌─────────────────────────────────────────────┐│
│  │ On-Premises DC  │ Single Tenant            ││
│  │ Full Control    │ High Security            ││
│  │ Higher Cost     │ Limited Scalability      ││
│  └─────────────────────────────────────────────┘│
└─────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────┐
│               HYBRID CLOUD 🔗                   │
│  ┌─────────────┐        ┌─────────────────────┐│
│  │ Private DC  │◄────►  │ Public Cloud        ││
│  │ Sensitive   │        │ Scalable Resources  ││
│  │ Data        │        │ Cost Optimization   ││
│  └─────────────┘        └─────────────────────┘│
└─────────────────────────────────────────────────┘`
  },

  'shared-responsibility': {
    title: 'Shared Responsibility Model',
    explanation: '📚 The shared responsibility model defines the security and operational responsibilities split between the cloud provider (Microsoft) and the customer. The responsibility division changes based on the service type (IaaS, PaaS, SaaS), with the provider always responsible for the physical infrastructure and the customer always responsible for their data and identities.',
    examples: '💡 Examples: Microsoft secures Azure data centers, you secure your passwords; Microsoft patches the hypervisor, you patch your VM OS; Microsoft protects network infrastructure, you configure network security groups.',
    useCase: '🏢 Use Case: A company migrating to Azure needs to understand that while Microsoft handles physical security of data centers and keeps Azure services updated, the company must still manage user access, encrypt sensitive data, and configure security policies for their resources.',
    mnemonic: '🧠 "Microsoft manages the HOUSE (infrastructure), You manage your STUFF (data, users, configs)" - shared responsibility is like renting an apartment.',
    visual: `🎨 Visual: Shared Responsibility Model
┌─────────────────────────────────────────────────┐
│        CUSTOMER RESPONSIBILITIES 👥             │
│  ┌─────────────────────────────────────────────┐│
│  │ • Data & Content    • Identities & Access  ││
│  │ • Applications      • Operating System      ││
│  │ • Network Controls  • Client-side Security  ││
│  └─────────────────────────────────────────────┘│
└─────────────────────────────────────────────────┘
                        │
                    🤝 SHARED
                        │
┌─────────────────────────────────────────────────┐
│       MICROSOFT RESPONSIBILITIES 🏢             │
│  ┌─────────────────────────────────────────────┐│
│  │ • Physical Security • Network Infrastructure││
│  │ • Hypervisor       • Service Availability   ││
│  │ • Data Centers     • Platform Security      ││
│  └─────────────────────────────────────────────┘│
└─────────────────────────────────────────────────┘`
  },

  'consumption-based-model': {
    title: 'Consumption-based Model',
    explanation: '📚 The consumption-based pricing model means you pay only for the resources you actually use, when you use them. This operational expenditure (OpEx) approach eliminates upfront capital costs and allows for cost optimization through auto-scaling and resource management.',
    examples: '💡 Examples: Azure Functions charging per execution, Virtual Machines billed per minute of usage, Storage accounts charging per GB stored and accessed, bandwidth charges based on actual data transfer.',
    useCase: '🏢 Use Case: An e-commerce website experiences traffic spikes during Black Friday. With consumption-based pricing, they automatically scale up during high traffic (paying more temporarily) and scale down during quiet periods (paying less), optimizing costs year-round.',
    mnemonic: '🧠 PAYG = Pay As You Go - like a taxi meter, you only pay for the distance traveled, not for owning the car.',
    visual: `🎨 Visual: Consumption-based Pricing
┌─────────────────────────────────────────────────┐
│             TRADITIONAL MODEL 🏛️                │
│  ┌─────────────────────────────────────────────┐│
│  │ HIGH UPFRONT COST 💰💰💰                    ││
│  │ ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐            ││
│  │ │ BUY │ │ OWN │ │MAINT│ │UPGR │            ││
│  │ └─────┘ └─────┘ └─────┘ └─────┘            ││
│  └─────────────────────────────────────────────┘│
└─────────────────────────────────────────────────┘
                        VS
┌─────────────────────────────────────────────────┐
│            CONSUMPTION MODEL ☁️                 │
│  ┌─────────────────────────────────────────────┐│
│  │ PAY ONLY FOR USAGE 💳                       ││
│  │ Time: ⏱️ → 💰  Data: 💾 → 💰               ││
│  │ Scale Up: 📈💰+  Scale Down: 📉💰-          ││
│  │ No waste, optimal cost 🎯                   ││
│  └─────────────────────────────────────────────┘│
└─────────────────────────────────────────────────┘`
  },

  'benefits-of-cloud-services': {
    title: 'Benefits of Cloud Services',
    explanation: '📚 Cloud services provide numerous advantages including cost savings, scalability, reliability, security, and global reach. Organizations benefit from reduced infrastructure management overhead, faster time to market, and the ability to focus on their core business rather than IT infrastructure.',
    examples: '💡 Examples: Netflix scales globally without building data centers, startups launch without hardware investments, enterprises reduce IT staff overhead, automatic backups prevent data loss, global CDN improves user experience.',
    useCase: '🏢 Use Case: A healthcare startup needs to launch a telemedicine app quickly. Using cloud services, they deploy globally in weeks instead of months, ensure HIPAA compliance with built-in security features, and scale automatically as patient demand grows without hiring additional IT staff.',
    mnemonic: '🧠 SCALE = Speed, Cost-effective, Available, Location-flexible, Elastic - cloud gives you superhero powers for your business.',
    visual: `🎨 Visual: Cloud Benefits
┌─────────────────────────────────────────────────┐
│                CLOUD BENEFITS 🌟               │
│  ┌─────────────┐  ┌─────────────┐              │
│  │ 💰 COST     │  │ ⚡ SPEED     │              │
│  │ • No CapEx  │  │ • Quick     │              │
│  │ • Pay usage │  │ • Deploy    │              │
│  └─────────────┘  └─────────────┘              │
│  ┌─────────────┐  ┌─────────────┐              │
│  │ 🌍 GLOBAL   │  │ 📈 SCALE    │              │
│  │ • Anywhere  │  │ • Up/Down   │              │
│  │ • Always on │  │ • Automatic │              │
│  └─────────────┘  └─────────────┘              │
│  ┌─────────────┐  ┌─────────────┐              │
│  │ 🔒 SECURE   │  │ 🔧 MANAGED  │              │
│  │ • Expert    │  │ • Microsoft │              │
│  │ • Compliant │  │ • Maintains │              │
│  └─────────────┘  └─────────────┘              │
└─────────────────────────────────────────────────┘`
  },

  'cloud-service-types': {
    title: 'Cloud Service Types',
    explanation: '📚 The three main cloud service models are Infrastructure as a Service (IaaS), Platform as a Service (PaaS), and Software as a Service (SaaS). Each provides different levels of abstraction and management, from full control with IaaS to complete abstraction with SaaS.',
    examples: '💡 Examples: IaaS - Azure Virtual Machines; PaaS - Azure App Service, Azure SQL Database; SaaS - Microsoft 365, Dynamics 365, Salesforce, Gmail.',
    useCase: '🏢 Use Case: A company uses SaaS for email (Office 365), PaaS for their web application (App Service), and IaaS for their legacy system that needs custom OS configuration (Virtual Machine) - choosing the right abstraction level for each workload.',
    mnemonic: '🧠 Think of Pizza: IaaS = grocery ingredients (you cook), PaaS = pizza kit (you assemble), SaaS = delivered pizza (ready to eat).',
    visual: `🎨 Visual: Cloud Service Types
┌─────────────────────────────────────────────────┐
│               SaaS - SOFTWARE 📱                │
│  ┌─────────────────────────────────────────────┐│
│  │ Office 365 │ Gmail │ Salesforce            ││
│  │ Ready to use │ No management needed        ││
│  └─────────────────────────────────────────────┘│
└─────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────┐
│               PaaS - PLATFORM 🛠️               │
│  ┌─────────────────────────────────────────────┐│
│  │ App Service │ SQL Database │ Functions      ││
│  │ Deploy code │ Microsoft manages runtime    ││
│  └─────────────────────────────────────────────┘│
└─────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────┐
│             IaaS - INFRASTRUCTURE 🖥️           │
│  ┌─────────────────────────────────────────────┐│
│  │ Virtual Machines │ Storage │ Networking     ││
│  │ Full control │ You manage OS & apps        ││
│  └─────────────────────────────────────────────┘│
└─────────────────────────────────────────────────┘`
  },

  // Shared Responsibility Sub-items
  'responsibilities-cloud-provider': {
    title: 'Cloud Provider Responsibilities',
    explanation: '📚 Microsoft Azure is responsible for the physical infrastructure, host operating system, hypervisor, network controls, and service availability. This includes data center security, hardware maintenance, network infrastructure, and ensuring the underlying platform is secure and available.',
    examples: '💡 Examples: Physical security guards, server hardware maintenance, network firewalls, hypervisor updates, data center cooling, power redundancy, DDoS protection at infrastructure level.',
    useCase: '🏢 Use Case: When a hardware failure occurs in an Azure data center, Microsoft automatically moves your VM to healthy hardware without any action needed from you. You benefit from enterprise-grade physical security and infrastructure that would be impossible to replicate on-premises.',
    mnemonic: '🧠 Microsoft = "The Building Owner" - they secure the building, maintain the utilities, and ensure the infrastructure works, but they don\'t manage what you put in your apartment.',
    visual: `🎨 Visual: Microsoft Responsibilities
┌─────────────────────────────────────────────────┐
│          MICROSOFT AZURE MANAGES 🏢             │
│  ┌─────────────────────────────────────────────┐│
│  │ 🏛️ PHYSICAL INFRASTRUCTURE:                 ││
│  │   • Data centers & facilities               ││
│  │   • Server hardware & storage               ││
│  │   • Network equipment & cables              ││
│  │                                             ││
│  │ 🔒 SECURITY & COMPLIANCE:                   ││
│  │   • Physical access controls               ││
│  │   • Environmental security                 ││
│  │   • Infrastructure monitoring              ││
│  │                                             ││
│  │ ⚡ PLATFORM SERVICES:                       ││
│  │   • Hypervisor management                  ││
│  │   • Service availability & SLAs            ││
│  │   • Platform patching & updates            ││
│  └─────────────────────────────────────────────┘│
└─────────────────────────────────────────────────┘`
  },

  'responsibilities-customer': {
    title: 'Customer Responsibilities',
    explanation: '📚 Customers are always responsible for their data, identities, access management, and client-side security regardless of the service type. Additional responsibilities vary by service model - more responsibilities in IaaS (OS, network), fewer in SaaS (just data and users).',
    examples: '💡 Examples: User passwords and multi-factor authentication, data encryption at rest and in transit, network security group configurations, application-level security, backup strategies, compliance requirements.',
    useCase: '🏢 Use Case: A company using Azure must ensure their employee passwords are strong, enable MFA for admin accounts, classify and encrypt sensitive data, configure firewall rules, and train users on security best practices - Microsoft provides the tools, but the customer must use them correctly.',
    mnemonic: '🧠 Customer = "The Tenant" - you control who enters your space, what you store there, and how you organize your belongings, even though you don\'t own the building.',
    visual: `🎨 Visual: Customer Responsibilities
┌─────────────────────────────────────────────────┐
│              YOU MUST MANAGE 👥                 │
│  ┌─────────────────────────────────────────────┐│
│  │ 📊 DATA & CONTENT:                          ││
│  │   • Data classification                     ││
│  │   • Content security & encryption           ││
│  │   • Data sovereignty requirements           ││
│  │                                             ││
│  │ 👤 IDENTITY & ACCESS:                       ││
│  │   • User accounts & passwords               ││
│  │   • Multi-factor authentication             ││
│  │   • Privileged access management            ││
│  │                                             ││
│  │ ⚙️ APPLICATIONS & CONFIGURATION:             ││
│  │   • Application security                   ││
│  │   • Network security groups                ││
│  │   • Operating system (IaaS)                ││
│  └─────────────────────────────────────────────┘│
└─────────────────────────────────────────────────┘`
  },

  // Azure Architecture Components
  'regional-availability': {
    title: 'Regional Availability',
    explanation: '📚 Azure services are not available in every region simultaneously. New services typically launch in major regions first, then gradually expand to other regions. Regional availability affects service selection, compliance requirements, and disaster recovery planning.',
    examples: '💡 Examples: Azure OpenAI initially launched in select regions like East US and West Europe; some preview services only available in specific regions; government cloud regions have different service availability.',
    useCase: '🏢 Use Case: A European company needs to use Azure Cognitive Services but finds the specific AI model they need is only available in US regions. They must balance data sovereignty requirements with service availability, possibly using available alternatives or waiting for regional expansion.',
    mnemonic: '🧠 Think "Regional Menu" - not every restaurant (region) serves every dish (service) at the same time. Popular items appear first at flagship locations.',
    visual: `🎨 Visual: Regional Service Availability
┌─────────────────────────────────────────────────┐
│            AZURE SERVICE ROLLOUT 🌍             │
│  ┌─────────────────────────────────────────────┐│
│  │ Phase 1: 🌟 MAJOR REGIONS                   ││
│  │ East US │ West Europe │ Southeast Asia      ││
│  │ ✅ New Services Launch Here First           ││
│  │                                             ││
│  │ Phase 2: 🌐 ADDITIONAL REGIONS              ││
│  │ Central US │ North Europe │ Japan East      ││
│  │ ⏳ Services Expand Here                     ││
│  │                                             ││
│  │ Phase 3: 🗺️ ALL REGIONS                     ││
│  │ Generally Available Everywhere              ││
│  │ ✅ Full Feature Parity                      ││
│  │                                             ││
│  │ ⚠️ Always check service availability        ││
│  │ for your specific region and requirements   ││
│  └─────────────────────────────────────────────┘│
└─────────────────────────────────────────────────┘`
  },

  'region-pairs': {
    title: 'Region Pairs',
    explanation: '📚 Azure regions are paired with another region within the same geography for disaster recovery and business continuity. Region pairs are at least 300 miles apart, receive platform updates sequentially (not simultaneously), and enable cross-region replication for certain services.',
    examples: '💡 Examples: East US paired with West US, North Europe paired with West Europe, East Asia paired with Southeast Asia, Brazil South paired with South Central US.',
    useCase: '🏢 Use Case: A financial services company deploys their primary application in East US with automatic backup replication to West US (paired region). During a regional disaster, they can failover to the paired region, ensuring business continuity with minimal data loss.',
    mnemonic: '🧠 Think "Buddy System" - each region has a buddy for backup, like having a study partner in case one gets sick during exam time.',
    visual: `🎨 Visual: Azure Region Pairs
┌─────────────────────────────────────────────────┐
│              REGION PAIR EXAMPLE 🤝             │
│                                                 │
│  ┌─────────────────┐    ┌─────────────────────┐ │
│  │   EAST US 🏢    │    │    WEST US 🏢       │ │
│  │  Primary Site   │◄──►│  Disaster Recovery  │ │
│  │  • Active App   │    │  • Standby Ready    │ │
│  │  • Live Data    │    │  • Replicated Data  │ │
│  └─────────────────┘    └─────────────────────┘ │
│         │                         │             │
│  ┌──────▼─────────────────────────▼──────────┐  │
│  │        🛡️ BENEFITS OF PAIRING:           │  │
│  │  • 300+ miles apart                      │  │
│  │  • Sequential updates (not simultaneous) │  │
│  │  • Cross-region replication supported    │  │
│  │  • Same compliance boundaries            │  │
│  │  • Planned maintenance coordination      │  │
│  └───────────────────────────────────────────┘  │
└─────────────────────────────────────────────────┘`
  },

  'subscriptions': {
    title: 'Azure Subscriptions',
    explanation: '📚 An Azure subscription is a logical container for your resources and serves as a billing boundary. Each subscription is associated with an Azure AD tenant and can contain multiple resource groups. Subscriptions provide isolation for billing, access management, and policy enforcement.',
    examples: '💡 Examples: Development subscription for testing, Production subscription for live applications, separate subscriptions per department, subscription per project for cost tracking.',
    useCase: '🏢 Use Case: A company creates separate subscriptions for Development, Testing, and Production environments. This provides cost isolation (separate bills), access control (dev team can\'t access production), and policy enforcement (production requires additional approvals).',
    mnemonic: '🧠 Subscription = "Credit Card Account" - each subscription gets its own bill, spending limits, and payment method, organizing your cloud spending.',
    visual: `🎨 Visual: Azure Subscription Hierarchy
┌─────────────────────────────────────────────────┐
│              SUBSCRIPTION MODEL 🏢              │
│  ┌─────────────────────────────────────────────┐│
│  │         AZURE AD TENANT                     ││
│  │  ┌─────────────┐ ┌─────────────┐           ││
│  │  │SUBSCRIPTION │ │SUBSCRIPTION │           ││
│  │  │    DEV      │ │    PROD     │           ││
│  │  │ ┌─────────┐ │ │ ┌─────────┐ │           ││
│  │  │ │Resource │ │ │ │Resource │ │           ││
│  │  │ │ Group A │ │ │ │ Group X │ │           ││
│  │  │ └─────────┘ │ │ └─────────┘ │           ││
│  │  │ ┌─────────┐ │ │ ┌─────────┐ │           ││
│  │  │ │Resource │ │ │ │Resource │ │           ││
│  │  │ │ Group B │ │ │ │ Group Y │ │           ││
│  │  │ └─────────┘ │ │ └─────────┘ │           ││
│  │  └─────────────┘ └─────────────┘           ││
│  │       │               │                   ││
│  │   💰 Bill A       💰 Bill B               ││
│  └─────────────────────────────────────────────┘│
└─────────────────────────────────────────────────┘`
  },

  'management-groups': {
    title: 'Management Groups',
    explanation: '📚 Management groups provide a level of scope above subscriptions to efficiently manage access, policies, and compliance across multiple Azure subscriptions. They enable enterprise-scale governance by applying policies and access controls at an organizational level.',
    examples: '💡 Examples: Corporate management group containing all subscriptions, Department groups (HR, Finance, IT), Environment groups (Production, Development), Geographic groups (US, Europe, Asia).',
    useCase: '🏢 Use Case: A multinational corporation uses management groups to enforce company-wide security policies across 50+ subscriptions. The root management group enforces baseline security, while regional management groups add location-specific compliance requirements.',
    mnemonic: '🧠 Think "Family Tree" - Management groups are parents/grandparents that pass rules down to their children (subscriptions), creating a hierarchy of governance.',
    visual: `🎨 Visual: Management Group Hierarchy
┌─────────────────────────────────────────────────┐
│           MANAGEMENT GROUP HIERARCHY 📊         │
│                                                 │
│  ┌─────────────────────────────────────────────┐│
│  │         ROOT MANAGEMENT GROUP 🌳            ││
│  │         (Tenant-wide policies)              ││
│  └─────────────┬───────────────────────────────┘│
│                │                                │
│  ┌─────────────▼─────────┐ ┌─────────────────┐  │
│  │    PRODUCTION 🏢       │ │  DEVELOPMENT 🛠️ │  │
│  │  (Prod policies)       │ │ (Dev policies)  │  │
│  └─────────┬──────────────┘ └─────────┬───────┘  │
│            │                          │          │
│  ┌─────────▼────────┐        ┌───────▼────────┐ │
│  │ SUBSCRIPTION A   │        │ SUBSCRIPTION C │ │
│  │ (Web Apps)       │        │ (Test Apps)    │ │
│  └──────────────────┘        └────────────────┘ │
│  ┌──────────────────┐                           │
│  │ SUBSCRIPTION B   │         Policy & Access   │
│  │ (Databases)      │         Inheritance ⬇️     │
│  └──────────────────┘                           │
└─────────────────────────────────────────────────┘`
  },

  // Networking Services
  'virtual-networks': {
    title: 'Virtual Networks (VNet)',
    explanation: '📚 Azure Virtual Networks provide isolated and secure communication for Azure resources. VNets enable resources to communicate with each other, the internet, and on-premises networks. They support network segmentation, security controls, and hybrid connectivity.',
    examples: '💡 Examples: Web applications in frontend subnet, databases in backend subnet, VPN gateway for site-to-site connectivity, network security groups for traffic filtering, peering between VNets.',
    useCase: '🏢 Use Case: A company creates a VNet with separate subnets for web servers (public) and database servers (private). Only web servers can accept internet traffic, while databases are isolated and only accessible from the web tier, improving security architecture.',
    mnemonic: '🧠 VNet = "Private Neighborhood" - like a gated community with different areas (subnets) for different purposes, connected by secure roads (routing).',
    visual: `🎨 Visual: Azure Virtual Network
┌─────────────────────────────────────────────────┐
│            AZURE VIRTUAL NETWORK 🌐             │
│  ┌─────────────────────────────────────────────┐│
│  │           VNET: 10.0.0.0/16                 ││
│  │  ┌─────────────────┐ ┌─────────────────────┐││
│  │  │  PUBLIC SUBNET  │ │   PRIVATE SUBNET    │││
│  │  │   10.0.1.0/24   │ │    10.0.2.0/24      │││
│  │  │  ┌─────┐ ┌─────┐│ │  ┌─────┐ ┌─────────┐│││
│  │  │  │ VM1 │ │ VM2 ││ │  │ DB1 │ │  App    │││
│  │  │  │Web  │ │Load ││ │  │     │ │ Server  │││
│  │  │  │Srvr │ │Balr ││ │  │     │ │         │││
│  │  │  └─────┘ └─────┘│ │  └─────┘ └─────────┘│││
│  │  └─────────────────┘ └─────────────────────┘││
│  │           │                    │             ││
│  │      ┌────▼────┐         ┌────▼─────┐       ││
│  │      │Internet │         │Internal  │       ││
│  │      │Gateway  │         │Traffic   │       ││
│  │      └─────────┘         │Only      │       ││
│  │                          └──────────┘       ││
│  └─────────────────────────────────────────────┘│
└─────────────────────────────────────────────────┘`
  },

  'load-balancer': {
    title: 'Azure Load Balancer',
    explanation: '📚 Azure Load Balancer distributes incoming network traffic across multiple healthy instances of services, ensuring no single server becomes overwhelmed. It operates at Layer 4 (transport layer) and provides high availability and scalability for applications.',
    examples: '💡 Examples: Distributing web traffic across multiple VMs, load balancing database connections, internal load balancing for microservices, health probe monitoring for automatic failover.',
    useCase: '🏢 Use Case: An e-commerce website uses Azure Load Balancer to distribute customer traffic across 5 web servers. During peak shopping periods, traffic is evenly distributed, and if one server fails, the load balancer automatically routes traffic to healthy servers.',
    mnemonic: '🧠 Load Balancer = "Traffic Director" - like a mall security guard directing shoppers to different checkout lines to prevent overcrowding.',
    visual: `🎨 Visual: Azure Load Balancer
┌─────────────────────────────────────────────────┐
│             AZURE LOAD BALANCER ⚖️              │
│                                                 │
│         🌐 Internet Traffic                     │
│                    │                            │
│           ┌────────▼────────┐                   │
│           │  LOAD BALANCER  │                   │
│           │   Public IP     │                   │
│           │ ┌─────────────┐ │                   │
│           │ │Health Probes│ │                   │
│           │ │& Rules      │ │                   │
│           │ └─────────────┘ │                   │
│           └────┬──────┬─────┘                   │
│                │      │                         │
│      ┌─────────▼─┐  ┌─▼─────────┐  ┌────────────┐│
│      │   VM 1    │  │   VM 2    │  │    VM 3    ││
│      │ Web App   │  │ Web App   │  │  Web App   ││
│      │ ✅ Healthy│  │ ✅ Healthy│  │ ❌ Unhealthy││
│      │           │  │           │  │  (No traffic)││
│      └───────────┘  └───────────┘  └────────────┘│
│                                                 │
│    🔄 Traffic Distribution: Round Robin         │
│    🏥 Health Monitoring: Every 30 seconds       │
└─────────────────────────────────────────────────┘`
  },

  'azure-dns': {
    title: 'Azure DNS',
    explanation: '📚 Azure DNS provides name resolution using Microsoft Azure infrastructure. It allows you to host your DNS domains in Azure and manage DNS records using the same credentials, APIs, tools, and billing as your other Azure services, with global availability and high performance.',
    examples: '💡 Examples: Hosting company.com domain in Azure DNS, creating A records for web applications, CNAME records for CDN endpoints, MX records for email routing, managing subdomain delegation.',
    useCase: '🏢 Use Case: A company migrates their website to Azure and uses Azure DNS to manage their domain records. They create A records pointing to their Azure Load Balancer IP, ensuring fast DNS resolution globally and integration with their Azure management workflow.',
    mnemonic: '🧠 DNS = "Phone Book of Internet" - Azure DNS is like having Microsoft operate your phone book, making name-to-address lookups fast and reliable worldwide.',
    visual: `🎨 Visual: Azure DNS Resolution
┌─────────────────────────────────────────────────┐
│                AZURE DNS 🌐                     │
│                                                 │
│  1. User types: www.company.com                 │
│                    │                            │
│  2. DNS Query      ▼                            │
│     ┌─────────────────────────────────────────┐ │
│     │         AZURE DNS SERVICE               │ │
│     │  ┌─────────────────────────────────────┐│ │
│     │  │     company.com DNS Zone            ││ │
│     │  │  ┌─────────┐  ┌─────────────────┐  ││ │
│     │  │  │A Record │  │ www.company.com │  ││ │
│     │  │  │   →     │  │   → 20.1.2.3    │  ││ │
│     │  │  └─────────┘  └─────────────────┘  ││ │
│     │  └─────────────────────────────────────┘│ │
│     └─────────────────────────────────────────┘ │
│  3. Returns IP: 20.1.2.3     │                 │
│                               ▼                 │
│  4. Connect to Azure Load Balancer              │
│     ┌─────────────────────────────────────────┐ │
│     │    Azure Web Application                │ │
│     │         20.1.2.3                       │ │
│     └─────────────────────────────────────────┘ │
└─────────────────────────────────────────────────┘`
  },

  'cdn': {
    title: 'Content Delivery Network (CDN)',
    explanation: '📚 Azure CDN delivers high-bandwidth content to users by caching content at strategically placed physical nodes across the world. This reduces latency, improves user experience, and reduces load on origin servers by serving content from the nearest edge location.',
    examples: '💡 Examples: Caching website images and videos at edge locations, delivering software downloads globally, streaming media content, accelerating API responses, caching static website content.',
    useCase: '🏢 Use Case: A media company uses Azure CDN to deliver video content globally. Users in Tokyo receive content from Asian edge servers, while users in London receive the same content from European servers, reducing buffering and improving viewer experience.',
    mnemonic: '🧠 CDN = "Content Copies Nearby" - like having copies of popular books in every neighborhood library so people don\'t have to travel to the main library.',
    visual: `🎨 Visual: Azure CDN Global Distribution
┌─────────────────────────────────────────────────┐
│              AZURE CDN NETWORK 🌍               │
│                                                 │
│   ┌─────────────────────────────────────────┐   │
│   │         ORIGIN SERVER (Azure)           │   │
│   │    🏢 Your Website/Application          │   │
│   │       content.company.com               │   │
│   └─────────────┬───────────────────────────┘   │
│                 │ Content sync                  │
│   ┌─────────────▼───────────────────────────┐   │
│   │          CDN EDGE LOCATIONS             │   │
│   │  🌏 Asia    🌍 Europe    🌎 Americas    │   │
│   │ ┌───────┐  ┌───────┐    ┌───────┐      │   │
│   │ │ Tokyo │  │London │    │  NYC  │      │   │
│   │ │ Cache │  │ Cache │    │ Cache │      │   │
│   │ └───────┘  └───────┘    └───────┘      │   │
│   └─────────────────────────────────────────┘   │
│                                                 │
│   👥 Users get content from nearest edge:       │
│   • Tokyo user → Tokyo cache (5ms)             │
│   • London user → London cache (8ms)           │
│   • NYC user → NYC cache (12ms)                │
└─────────────────────────────────────────────────┘`
  },

  // Storage Services
  'archive-storage': {
    title: 'Archive Storage',
    explanation: '📚 Azure Archive Storage is the lowest-cost storage tier designed for data that is rarely accessed and stored for at least 180 days. It provides the same durability as other Azure storage tiers but with longer access times and lower storage costs, ideal for long-term backup and compliance.',
    examples: '💡 Examples: Legal document retention, regulatory compliance backups, historical data archiving, disaster recovery copies, old application logs, medical records retention.',
    useCase: '🏢 Use Case: A financial institution needs to retain transaction records for 7 years for regulatory compliance. They use Archive Storage to store older records at minimal cost, accepting the few hours needed to retrieve data if required for audit purposes.',
    mnemonic: '🧠 Archive = "Deep Freeze Storage" - like storing items in a basement storage unit - very cheap but takes time to retrieve when needed.',
    visual: `🎨 Visual: Azure Storage Tiers
┌─────────────────────────────────────────────────┐
│            AZURE STORAGE TIERS 📊               │
│                                                 │
│  ┌─────────────────────────────────────────────┐│
│  │  HOT TIER 🔥           (Most Expensive)     ││
│  │  • Frequently accessed • Low access cost   ││
│  │  • Immediate availability                  ││
│  └─────────────────────────────────────────────┘│
│  ┌─────────────────────────────────────────────┐│
│  │  COOL TIER ❄️          (Moderate Cost)      ││
│  │  • Infrequently accessed • 30+ day storage ││
│  │  • Slightly longer access time             ││
│  └─────────────────────────────────────────────┘│
│  ┌─────────────────────────────────────────────┐│
│  │  ARCHIVE TIER 🗃️       (Lowest Cost)       ││
│  │  • Rarely accessed • 180+ day storage      ││
│  │  • Hours to retrieve • Compliance/Backup   ││
│  └─────────────────────────────────────────────┘│
│                                                 │
│  💰 Cost comparison (per GB/month):             │
│  Hot: $0.05 → Cool: $0.01 → Archive: $0.002    │
└─────────────────────────────────────────────────┘`
  },

  // Azure Solutions - IoT
  'iot-central': {
    title: 'Azure IoT Central',
    explanation: '📚 Azure IoT Central is a fully managed IoT application platform that reduces the burden and cost of developing, managing, and maintaining enterprise-grade IoT solutions. It provides pre-built templates, device management, and analytics without requiring cloud solution expertise.',
    examples: '💡 Examples: Smart building monitoring, retail analytics with sensors, agricultural monitoring systems, predictive maintenance for manufacturing, remote patient monitoring, environmental monitoring.',
    useCase: '🏢 Use Case: A manufacturing company wants to monitor equipment temperature and vibration to predict failures. Using IoT Central, they quickly deploy sensors, create dashboards, and set up alerts without building a custom IoT infrastructure.',
    mnemonic: '🧠 IoT Central = "IoT Made Easy" - like having a ready-made smart home system instead of building one from scratch with individual components.',
    visual: `🎨 Visual: Azure IoT Central Architecture
┌─────────────────────────────────────────────────┐
│              AZURE IOT CENTRAL 🏭               │
│                                                 │
│  ┌─────────────────────────────────────────────┐│
│  │           IOT DEVICES 📡                    ││
│  │  🌡️ Temp    📳 Vibration   💨 Humidity     ││
│  │  Sensors      Sensors       Sensors        ││
│  └─────────────┬───────────────────────────────┘│
│                │ Telemetry data                 │
│  ┌─────────────▼───────────────────────────────┐│
│  │          IOT CENTRAL PLATFORM               ││
│  │  ┌─────────────────────────────────────────┐││
│  │  │  📊 DASHBOARDS & ANALYTICS              │││
│  │  │  • Real-time monitoring                │││
│  │  │  • Historical trends                   │││
│  │  │  • Alert notifications                 │││
│  │  └─────────────────────────────────────────┘││
│  │  ┌─────────────────────────────────────────┐││
│  │  │  🔧 DEVICE MANAGEMENT                   │││
│  │  │  • Remote configuration                │││
│  │  │  • Firmware updates                    │││
│  │  │  • Device provisioning                 │││
│  │  └─────────────────────────────────────────┘││
│  └─────────────────────────────────────────────┘│
│                         │                       │
│  🚨 Automated Actions: Alerts, APIs, Power BI   │
└─────────────────────────────────────────────────┘`
  },

  // Big Data & Analytics
  'azure-hdinsight': {
    title: 'Azure HDInsight',
    explanation: '📚 Azure HDInsight is a cloud distribution of Hadoop components that makes it easy to process large amounts of data. It supports open-source frameworks like Spark, Hive, LLAP, Kafka, Storm, and R, providing big data analytics capabilities without infrastructure management.',
    examples: '💡 Examples: Processing web logs with Spark, real-time stream processing with Kafka, data warehouse queries with Hive, machine learning with Spark MLlib, ETL operations on large datasets.',
    useCase: '🏢 Use Case: A retail company analyzes customer behavior by processing terabytes of transaction logs, clickstream data, and social media mentions using HDInsight Spark clusters to identify purchasing patterns and optimize marketing campaigns.',
    mnemonic: '🧠 HDInsight = "Hadoop Delivered" - like having a team of big data experts and infrastructure ready-to-use without hiring specialists or buying servers.',
    visual: `🎨 Visual: Azure HDInsight Ecosystem
┌─────────────────────────────────────────────────┐
│             AZURE HDINSIGHT 🐘                  │
│                                                 │
│  ┌─────────────────────────────────────────────┐│
│  │         BIG DATA SOURCES 📊                 ││
│  │  📁 Files   🌐 Web Logs   📱 IoT Data      ││
│  └─────────────┬───────────────────────────────┘│
│                │ Ingestion                      │
│  ┌─────────────▼───────────────────────────────┐│
│  │        HDINSIGHT CLUSTERS                   ││
│  │  ┌───────┐ ┌─────────┐ ┌─────────────────┐ ││
│  │  │ SPARK │ │  HADOOP │ │     KAFKA       │ ││
│  │  │🔥 Fast│ │🐘 Batch │ │ 🌊 Streaming   │ ││
│  │  │Analytics│ │Process │ │ Data           │ ││
│  │  └───────┘ └─────────┘ └─────────────────┘ ││
│  │  ┌───────┐ ┌─────────┐ ┌─────────────────┐ ││
│  │  │ HIVE  │ │ STORM   │ │       R         │ ││
│  │  │📊 SQL │ │⚡ Real  │ │ 📈 Statistical │ ││
│  │  │on Big │ │Time     │ │ Analysis       │ ││
│  │  │Data   │ │Events   │ │                │ ││
│  │  └───────┘ └─────────┘ └─────────────────┘ ││
│  └─────────────────────────────────────────────┘│
│                         │                       │
│  📈 Output: Insights, Reports, Processed Data   │
└─────────────────────────────────────────────────┘`
  },

  'azure-databricks': {
    title: 'Azure Databricks',
    explanation: '📚 Azure Databricks is an Apache Spark-based analytics platform optimized for Microsoft Azure. It provides collaborative workspace for data scientists, engineers, and analysts to work together on big data analytics and machine learning projects with enterprise security and scalability.',
    examples: '💡 Examples: Machine learning model training, ETL data pipelines, real-time analytics, collaborative data science notebooks, streaming analytics, advanced analytics on data lakes.',
    useCase: '🏢 Use Case: A healthcare organization uses Azure Databricks to analyze patient data, train predictive models for disease outcomes, and collaborate between data scientists and clinicians using shared notebooks while maintaining HIPAA compliance.',
    mnemonic: '🧠 Databricks = "Data + Analytics Bricks" - building blocks that data scientists stack together to create powerful analytics solutions, with Spark as the foundation.',
    visual: `🎨 Visual: Azure Databricks Platform
┌─────────────────────────────────────────────────┐
│            AZURE DATABRICKS 🧱                  │
│                                                 │
│  ┌─────────────────────────────────────────────┐│
│  │         COLLABORATIVE WORKSPACE             ││
│  │  👩‍💻 Data Scientists  👨‍💼 Analysts          ││
│  │  ┌─────────────┐ ┌─────────────────────┐   ││
│  │  │ NOTEBOOKS   │ │   ML WORKFLOWS      │   ││
│  │  │ • Python    │ │ • Model Training    │   ││
│  │  │ • R         │ │ • Feature Store     │   ││
│  │  │ • SQL       │ │ • MLflow            │   ││
│  │  │ • Scala     │ │ • Experiments       │   ││
│  │  └─────────────┘ └─────────────────────┘   ││
│  └─────────────────────────────────────────────┘│
│  ┌─────────────────────────────────────────────┐│
│  │        APACHE SPARK ENGINE 🔥               ││
│  │  • Distributed Processing                  ││
│  │  • Auto-scaling clusters                   ││
│  │  • Optimized for Azure                     ││
│  └─────────────────────────────────────────────┘│
│  ┌─────────────────────────────────────────────┐│
│  │         DATA SOURCES & TARGETS              ││
│  │  📊 Azure SQL  💾 Data Lake  🗄️ CosmosDB   ││
│  └─────────────────────────────────────────────┘│
└─────────────────────────────────────────────────┘`
  },

  // Serverless Computing
  'serverless-computing': {
    title: 'Serverless Computing',
    explanation: '📚 Serverless computing allows developers to build and run applications without managing servers. Azure handles infrastructure provisioning, scaling, and management automatically. You pay only for actual compute time used, with automatic scaling from zero to handle demand spikes.',
    examples: '💡 Examples: Azure Functions for event processing, Logic Apps for workflow automation, serverless web APIs, image processing triggers, scheduled tasks, IoT data processing, webhook handlers.',
    useCase: '🏢 Use Case: A photo sharing app uses serverless functions to automatically resize images when uploaded to storage, send notification emails when photos are shared, and generate thumbnails - scaling automatically from zero users to millions without server management.',
    mnemonic: '🧠 Serverless = "Hotel Room Service" - you call when you need something, they provide the service instantly, and you only pay for what you consume, no need to hire staff.',
    visual: `🎨 Visual: Serverless Computing Model
┌─────────────────────────────────────────────────┐
│           SERVERLESS COMPUTING ⚡               │
│                                                 │
│  ┌─────────────────────────────────────────────┐│
│  │          TRADITIONAL MODEL 🏢               ││
│  │  • Provision servers                       ││
│  │  • Manage infrastructure                   ││
│  │  • Pay for idle time                       ││
│  │  • Handle scaling manually                 ││
│  │  💰 Fixed cost even when unused             ││
│  └─────────────────────────────────────────────┘│
│                        VS                       │
│  ┌─────────────────────────────────────────────┐│
│  │          SERVERLESS MODEL ⚡                ││
│  │  📋 Event Triggers:                         ││
│  │  • HTTP requests → Function executes        ││
│  │  • Timer schedule → Function runs           ││
│  │  • File upload → Processing starts         ││
│  │  • Message queue → Handler activates       ││
│  │                                             ││
│  │  💰 Pay per execution (millisecond billing) ││
│  │  📈 Auto-scales from 0 to millions          ││
│  │  🚫 No server management needed             ││
│  └─────────────────────────────────────────────┘│
└─────────────────────────────────────────────────┘`
  },

  'event-grid': {
    title: 'Azure Event Grid',
    explanation: '📚 Azure Event Grid is a highly scalable, fully managed event routing service that enables event-driven architectures. It simplifies building applications with event-based architectures by providing reliable event delivery at massive scale with built-in filtering and routing capabilities.',
    examples: '💡 Examples: Triggering functions when files are uploaded to storage, sending notifications when VMs are created, automating workflows when database changes occur, integrating with third-party services via webhooks.',
    useCase: '🏢 Use Case: An e-commerce platform uses Event Grid to coordinate order processing - when an order is placed, it automatically triggers inventory updates, payment processing, shipping notifications, and customer emails through different microservices.',
    mnemonic: '🧠 Event Grid = "Event Traffic Controller" - like an air traffic control system that routes events (planes) to the right destinations (handlers) efficiently and reliably.',
    visual: `🎨 Visual: Azure Event Grid Architecture
┌─────────────────────────────────────────────────┐
│              AZURE EVENT GRID 📡                │
│                                                 │
│  ┌─────────────────────────────────────────────┐│
│  │           EVENT SOURCES 📤                  ││
│  │  💾 Storage  🗄️ Database  🖥️ Custom App    ││
│  │    Account     Changes      Events          ││
│  └─────────────┬───────────────────────────────┘│
│                │ Events published               │
│  ┌─────────────▼───────────────────────────────┐│
│  │            EVENT GRID HUB                   ││
│  │  ┌─────────────────────────────────────────┐││
│  │  │ 🔄 EVENT ROUTING & FILTERING            │││
│  │  │ • Topic-based routing                  │││
│  │  │ • Event type filtering                 │││
│  │  │ • Advanced filtering                   │││
│  │  │ • Retry logic & dead letter            │││
│  │  └─────────────────────────────────────────┘││
│  └─────────────┬───────────────────────────────┘│
│                │ Events delivered               │
│  ┌─────────────▼───────────────────────────────┐│
│  │          EVENT HANDLERS 📥                  ││
│  │  ⚡ Functions  📧 Logic Apps  🌐 Webhooks   ││
│  │  🔄 Service Bus  📱 Mobile Push            ││
│  └─────────────────────────────────────────────┘│
└─────────────────────────────────────────────────┘`
  },

  // DevOps and Management
  'github-actions': {
    title: 'GitHub Actions with Azure',
    explanation: '📚 GitHub Actions integrates seamlessly with Azure to provide CI/CD pipelines for Azure deployments. It enables automated building, testing, and deployment of applications to Azure services directly from GitHub repositories with built-in Azure integration and authentication.',
    examples: '💡 Examples: Auto-deploy web apps to Azure App Service on code push, deploy ARM templates to create infrastructure, run automated tests before deployment, deploy container images to Azure Container Registry.',
    useCase: '🏢 Use Case: A development team sets up GitHub Actions to automatically deploy their web application to Azure App Service whenever they merge code to the main branch, including automated testing, security scanning, and blue-green deployment strategies.',
    mnemonic: '🧠 GitHub Actions = "Assembly Line for Code" - like an automated factory that takes raw code, processes it through quality checks, and delivers finished applications to Azure.',
    visual: `🎨 Visual: GitHub Actions + Azure CI/CD
┌─────────────────────────────────────────────────┐
│           GITHUB ACTIONS + AZURE 🚀             │
│                                                 │
│  ┌─────────────────────────────────────────────┐│
│  │         GITHUB REPOSITORY 💾                ││
│  │  👨‍💻 Developer pushes code                  ││
│  │  ┌─────────────┐                           ││
│  │  │   main      │ ──trigger──► 🔄           ││
│  │  │   branch    │               │           ││
│  │  └─────────────┘               │           ││
│  └─────────────────────────────────┼───────────┘│
│                                   │            │
│  ┌─────────────────────────────────▼───────────┐│
│  │         GITHUB ACTIONS WORKFLOW             ││
│  │  ┌─────────┐ ┌─────────┐ ┌─────────────┐   ││
│  │  │  BUILD  │→│  TEST   │→│   DEPLOY    │   ││
│  │  │ • npm   │ │ • Unit  │ │ • Azure CLI │   ││
│  │  │ • Docker│ │ • E2E   │ │ • ARM       │   ││
│  │  └─────────┘ └─────────┘ └─────────────┘   ││
│  └─────────────────────────────────────────────┘│
│                         │                       │
│  ┌─────────────────────▼───────────────────────┐│
│  │              AZURE SERVICES 🌐              ││
│  │  🌐 App Service  📦 Container Registry      ││
│  │  🗄️ SQL Database  ☁️ Storage Account        ││
│  └─────────────────────────────────────────────┘│
└─────────────────────────────────────────────────┘`
  },

  // Management Tools
  'azure-cloud-shell': {
    title: 'Azure Cloud Shell',
    explanation: '📚 Azure Cloud Shell is an interactive, authenticated, browser-accessible shell for managing Azure resources. It provides both Bash and PowerShell experiences with pre-installed tools, persistent storage, and automatic authentication to Azure services.',
    examples: '💡 Examples: Running Azure CLI commands from any browser, managing resources without local tool installation, executing ARM templates, running PowerShell scripts, accessing files from persistent storage.',
    useCase: '🏢 Use Case: A system administrator traveling without their laptop needs to quickly restart a virtual machine and check deployment status. They use Cloud Shell from any browser to authenticate and manage Azure resources without installing local tools.',
    mnemonic: '🧠 Cloud Shell = "Azure Command Center in Browser" - like having a fully equipped IT workstation available anywhere you have internet access.',
    visual: `🎨 Visual: Azure Cloud Shell
┌─────────────────────────────────────────────────┐
│              AZURE CLOUD SHELL 💻               │
│                                                 │
│  ┌─────────────────────────────────────────────┐│
│  │         ANY WEB BROWSER 🌐                  ││
│  │  📱 Mobile  💻 Laptop  🖥️ Desktop           ││
│  └─────────────┬───────────────────────────────┘│
│                │ HTTPS connection               │
│  ┌─────────────▼───────────────────────────────┐│
│  │          CLOUD SHELL ENVIRONMENT            ││
│  │  ┌─────────────────────────────────────────┐││
│  │  │ 🐧 BASH        │ 🪟 POWERSHELL         │││
│  │  │ • Azure CLI    │ • Azure PowerShell    │││
│  │  │ • kubectl      │ • .NET Core           │││
│  │  │ • terraform    │ • Git tools           │││
│  │  │ • vim/nano     │ • Docker (preview)    │││
│  │  └─────────────────────────────────────────┘││
│  │  ┌─────────────────────────────────────────┐││
│  │  │         PERSISTENT STORAGE 💾           │││
│  │  │ • 5GB Azure Files share                │││
│  │  │ • Home directory persistence           │││
│  │  │ • Scripts and configuration files      │││
│  │  └─────────────────────────────────────────┘││
│  └─────────────────────────────────────────────┘│
│  ✅ Pre-authenticated to your Azure account     │
└─────────────────────────────────────────────────┘`
  },

  'azure-mobile-app': {
    title: 'Azure Mobile App',
    explanation: '📚 The Azure mobile app enables you to manage Azure resources on-the-go from your smartphone or tablet. It provides access to key Azure services, monitoring capabilities, and the ability to perform administrative tasks from anywhere, with push notifications for important alerts.',
    examples: '💡 Examples: Restarting VMs during outages, checking service health status, responding to monitoring alerts, viewing billing information, managing resource groups, accessing Cloud Shell from mobile.',
    useCase: '🏢 Use Case: An IT manager receives a critical alert about high CPU usage on production servers while attending a conference. They use the Azure mobile app to quickly scale up resources and notify the team, resolving the issue without needing a laptop.',
    mnemonic: '🧠 Azure Mobile = "Azure Remote Control" - like having the TV remote for your entire Azure infrastructure in your pocket.',
    visual: `🎨 Visual: Azure Mobile App
┌─────────────────────────────────────────────────┐
│              AZURE MOBILE APP 📱                │
│                                                 │
│  ┌─────────────────────────────────────────────┐│
│  │            MOBILE DEVICE                    ││
│  │  ┌─────────────────────────────────────────┐││
│  │  │         🔔 NOTIFICATIONS               │││
│  │  │  • Service health alerts              │││
│  │  │  • Billing threshold warnings         │││
│  │  │  • Resource status changes            │││
│  │  └─────────────────────────────────────────┘││
│  │  ┌─────────────────────────────────────────┐││
│  │  │         📊 QUICK ACTIONS               │││
│  │  │  [Start VM] [Stop VM] [Restart VM]    │││
│  │  │  [Scale Up] [Check Health] [View Logs]│││
│  │  │  [Open Portal] [Cloud Shell] [Billing]│││
│  │  └─────────────────────────────────────────┘││
│  │  ┌─────────────────────────────────────────┐││
│  │  │         🎛️ RESOURCE MANAGEMENT         │││
│  │  │  📈 Monitoring dashboards             │││
│  │  │  💰 Cost analysis                     │││
│  │  │  🔍 Resource browser                  │││
│  │  │  ⚡ Performance metrics               │││
│  │  └─────────────────────────────────────────┘││
│  └─────────────────────────────────────────────┘│
│  🔐 Secure authentication with Azure AD         │
└─────────────────────────────────────────────────┘`
  },

  // Security Services
  'azure-information-protection': {
    title: 'Azure Information Protection',
    explanation: '📚 Azure Information Protection (AIP) is a cloud-based solution that helps organizations classify, label, and protect documents and emails. It provides persistent protection that travels with data, ensuring sensitive information remains secure regardless of where it\'s stored or shared.',
    examples: '💡 Examples: Automatically labeling financial documents as "Confidential", preventing screenshots of sensitive emails, encrypting documents based on content, tracking document access and usage, applying watermarks to protected content.',
    useCase: '🏢 Use Case: A law firm uses Azure Information Protection to automatically classify legal documents, apply encryption based on client confidentiality levels, and track when sensitive documents are accessed or shared with external parties.',
    mnemonic: '🧠 AIP = "Data Bodyguard" - like having a personal security detail that follows your documents everywhere and decides who can see what based on classification rules.',
    visual: `🎨 Visual: Azure Information Protection
┌─────────────────────────────────────────────────┐
│        AZURE INFORMATION PROTECTION 🛡️          │
│                                                 │
│  ┌─────────────────────────────────────────────┐│
│  │           CLASSIFICATION & LABELING         ││
│  │  📄 Document scanning & analysis            ││
│  │  🏷️ Automatic label application             ││
│  │  ┌─────────┐ ┌─────────┐ ┌─────────────────┐││
│  │  │ PUBLIC  │ │INTERNAL │ │   CONFIDENTIAL  │││
│  │  │   🌐    │ │   🏢    │ │      🔒        │││
│  │  └─────────┘ └─────────┘ └─────────────────┘││
│  └─────────────────────────────────────────────┘│
│  ┌─────────────────────────────────────────────┐│
│  │              PROTECTION APPLIED             ││
│  │  📧 Email encryption                        ││
│  │  📑 Document watermarking                   ││
│  │  🚫 Access restrictions                     ││
│  │  👁️ Usage tracking & auditing               ││
│  │                                             ││
│  │  🔐 Protection travels with data:           ││
│  │     Cloud ☁️ → On-premises 🏢 → Mobile 📱  ││
│  └─────────────────────────────────────────────┘│
│  ┌─────────────────────────────────────────────┐│
│  │             POLICY ENFORCEMENT              ││
│  │  • Rights Management Services               ││
│  │  • Data Loss Prevention integration         ││
│  │  • Compliance reporting                     ││
│  └─────────────────────────────────────────────┘│
└─────────────────────────────────────────────────┘`
  },

  'azure-bastion': {
    title: 'Azure Bastion',
    explanation: '📚 Azure Bastion is a fully managed PaaS service that provides secure RDP and SSH connectivity to virtual machines directly from the Azure portal without exposing VMs to public internet. It eliminates the need for public IP addresses on VMs while providing secure remote access.',
    examples: '💡 Examples: Connecting to Windows VMs via RDP through browser, SSH access to Linux VMs without public IPs, secure administrative access to jump boxes, maintenance access to private network resources.',
    useCase: '🏢 Use Case: A company needs to provide secure access to production servers for system administrators. Azure Bastion allows admins to connect securely through the Azure portal without exposing servers to the internet or managing VPN connections.',
    mnemonic: '🧠 Bastion = "Secure Castle Gate" - like a heavily fortified entrance that allows authorized people to safely enter the castle (private network) without exposing the inner walls to attackers.',
    visual: `🎨 Visual: Azure Bastion Architecture
┌─────────────────────────────────────────────────┐
│              AZURE BASTION 🏰                   │
│                                                 │
│  ┌─────────────────────────────────────────────┐│
│  │         ADMIN ACCESS 👨‍💼                     ││
│  │  🌐 Web Browser → Azure Portal               ││
│  │  No VPN or client software needed           ││
│  └─────────────┬───────────────────────────────┘│
│                │ HTTPS (443)                    │
│  ┌─────────────▼───────────────────────────────┐│
│  │          AZURE BASTION SERVICE              ││
│  │  ┌─────────────────────────────────────────┐││
│  │  │ 🛡️ BASTION HOST                         │││
│  │  │ • Fully managed PaaS                   │││
│  │  │ • SSL/TLS encryption                   │││
│  │  │ • No public IP exposure                │││
│  │  │ • Built-in DDoS protection             │││
│  │  └─────────────────────────────────────────┘││
│  └─────────────┬───────────────────────────────┘│
│                │ RDP/SSH over private network   │
│  ┌─────────────▼───────────────────────────────┐│
│  │            VIRTUAL NETWORK                  ││
│  │  ┌─────────┐ ┌─────────┐ ┌─────────────────┐││
│  │  │Windows  │ │Linux    │ │   Database      │││
│  │  │VM (RDP) │ │VM (SSH) │ │   Server        │││
│  │  │🚫 No    │ │🚫 No    │ │ 🚫 No public   │││
│  │  │public IP│ │public IP│ │    access       │││
│  │  └─────────┘ └─────────┘ └─────────────────┘││
│  └─────────────────────────────────────────────┘│
└─────────────────────────────────────────────────┘`
  },

  // Governance & Management
  'tags': {
    title: 'Azure Tags',
    explanation: '📚 Azure tags are name-value pairs that enable you to categorize resources and view consolidated billing by applying the same tag to multiple resources and resource groups. Tags help organize resources for management, billing, security, and operational purposes.',
    examples: '💡 Examples: Environment tags (Production, Development, Testing), Department tags (Finance, HR, IT), Project tags (ProjectA, Migration2024), Cost center tags, Owner tags (john.smith@company.com).',
    useCase: '🏢 Use Case: A company uses tags to track costs by department and project. They tag all resources with "Department:Finance" and "Project:TaxSystem", enabling them to generate detailed cost reports showing exactly how much each department and project spends on Azure services.',
    mnemonic: '🧠 Tags = "Digital Sticky Notes" - like putting labeled stickers on your belongings to organize them by category, owner, or purpose for easy sorting and billing.',
    visual: `🎨 Visual: Azure Resource Tagging
┌─────────────────────────────────────────────────┐
│                AZURE TAGS 🏷️                   │
│                                                 │
│  ┌─────────────────────────────────────────────┐│
│  │              RESOURCE TAGGING               ││
│  │  ┌─────────────────┐ ┌─────────────────────┐││
│  │  │   WEB SERVER    │ │    DATABASE         │││
│  │  │  🏷️ Environment:  │ │ 🏷️ Environment:     │││
│  │  │    Production   │ │   Production        │││
│  │  │  🏷️ Department:  │ │ 🏷️ Department:      │││
│  │  │    Marketing    │ │   Marketing         │││
│  │  │  🏷️ Owner:       │ │ 🏷️ Owner:           │││
│  │  │    jane.doe     │ │   jane.doe          │││
│  │  │  🏷️ Project:     │ │ 🏷️ Project:         │││
│  │  │    Website2024  │ │   Website2024       │││
│  │  └─────────────────┘ └─────────────────────┘││
│  └─────────────────────────────────────────────┘│
│  ┌─────────────────────────────────────────────┐│
│  │             TAG-BASED REPORTING             ││
│  │  💰 COST BY DEPARTMENT:                     ││
│  │     Marketing: $1,250/month                 ││
│  │     Finance:   $850/month                   ││
│  │     IT:        $2,100/month                 ││
│  │  📊 RESOURCES BY ENVIRONMENT:               ││
│  │     Production: 15 resources                ││
│  │     Testing: 8 resources                    ││
│  │     Development: 12 resources               ││
│  └─────────────────────────────────────────────┘│
└─────────────────────────────────────────────────┘`
  },

  'cost-factors': {
    title: 'Azure Cost Factors',
    explanation: '📚 Multiple factors influence Azure costs including resource type, usage patterns, location, instance size, storage type, data transfer, and reserved capacity. Understanding these factors helps optimize spending and predict costs accurately for budgeting and planning.',
    examples: '💡 Examples: Larger VM sizes cost more, storage in premium regions costs more, outbound data transfer charges, peak-hour pricing for some services, reserved instances providing discounts, dev/test pricing for non-production workloads.',
    useCase: '🏢 Use Case: A company analyzes their Azure bill and discovers high data transfer costs from hosting media files in expensive regions. They optimize by using CDN, moving storage to cost-effective regions, and implementing data lifecycle management policies.',
    mnemonic: '🧠 Cost Factors = "RESTAURANT BILL" - like dining costs depend on location (region), what you order (services), how much you eat (usage), and meal deals (reserved instances).',
    visual: `🎨 Visual: Azure Cost Factors
┌─────────────────────────────────────────────────┐
│             AZURE COST FACTORS 💰               │
│                                                 │
│  ┌─────────────────────────────────────────────┐│
│  │         PRIMARY COST DRIVERS                ││
│  │  🖥️ COMPUTE:                                │
│  │     • VM size & type                       ││
│  │     • Running time                         ││
│  │     • Reserved vs Pay-as-you-go            ││
│  │                                             ││
│  │  💾 STORAGE:                               ││
│  │     • Storage type (Standard/Premium)      ││
│  │     • Access frequency (Hot/Cool/Archive)  ││
│  │     • Data volume                          ││
│  │                                             ││
│  │  🌐 NETWORKING:                            ││
│  │     • Data transfer out                    ││
│  │     • VPN Gateway hours                    ││
│  │     • Load Balancer usage                  ││
│  └─────────────────────────────────────────────┘│
│  ┌─────────────────────────────────────────────┐│
│  │         COST OPTIMIZATION OPTIONS           ││
│  │  💡 SAVINGS OPPORTUNITIES:                  ││
│  │     • Azure Reserved Instances (up to 72%) ││
│  │     • Azure Hybrid Benefit (licensing)     ││
│  │     • Auto-shutdown for dev/test           ││
│  │     • Right-sizing underutilized resources ││
│  │     • Archive unused data                  ││
│  │     • Choose cost-effective regions        ││
│  └─────────────────────────────────────────────┘│
└─────────────────────────────────────────────────┘`
  },

  'sovereign-regions': {
    title: 'Azure Sovereign Regions',
    explanation: '📚 Azure sovereign regions are physically and logically isolated instances of Azure designed to meet specific compliance, regulatory, and sovereignty requirements for government and regulated industries. These regions operate independently with restricted access and enhanced security controls.',
    examples: '💡 Examples: Azure Government (US federal, state, local), Azure China (operated by 21Vianet), Azure Germany (data residency), Azure Stack (on-premises sovereign cloud), specialized defense regions.',
    useCase: '🏢 Use Case: A US federal agency needs to store classified data in compliance with FedRAMP High requirements. They use Azure Government cloud which provides ITAR compliance, screened personnel, and isolated infrastructure meeting government security standards.',
    mnemonic: '🧠 Sovereign Regions = "VIP Country Clubs" - exclusive, restricted-access cloud environments with special rules and enhanced security for government and highly regulated organizations.',
    visual: `🎨 Visual: Azure Sovereign Regions
┌─────────────────────────────────────────────────┐
│           AZURE SOVEREIGN REGIONS 🏛️            │
│                                                 │
│  ┌─────────────────────────────────────────────┐│
│  │         COMMERCIAL AZURE 🌐                 ││
│  │  • Global availability                     ││
│  │  • Standard compliance                     ││
│  │  • Open access                             ││
│  └─────────────────────────────────────────────┘│
│                        VS                       │
│  ┌─────────────────────────────────────────────┐│
│  │        SOVEREIGN REGIONS 🛡️                 ││
│  │  ┌─────────────┐  ┌─────────────────────┐  ││
│  │  │   US GOV    │  │    CHINA REGION     │  ││
│  │  │ 🇺🇸 FedRAMP │  │ 🇨🇳 21Vianet       │  ││
│  │  │ • Isolated  │  │ • Data residency    │  ││
│  │  │ • Screened  │  │ • Local operator    │  ││
│  │  │   personnel │  │ • Compliance        │  ││
│  │  │ • ITAR      │  │   requirements      │  ││
│  │  │   compliant │  │                     │  ││
│  │  └─────────────┘  └─────────────────────┘  ││
│  │  ┌─────────────────────────────────────────┐││
│  │  │        🔐 KEY FEATURES:                 │││
│  │  │  • Physical isolation                  │││
│  │  │  • Enhanced security controls          │││
│  │  │  • Regulatory compliance               │││
│  │  │  • Restricted personnel access         │││
│  │  │  • Independent operations              │││
│  │  └─────────────────────────────────────────┘││
│  └─────────────────────────────────────────────┘│
└─────────────────────────────────────────────────┘`
  }
};

export const getConceptById = (key: string): ConceptExplanation | undefined => {
  return conceptExplanations[key];
};