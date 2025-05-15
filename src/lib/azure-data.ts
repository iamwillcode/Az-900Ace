
import type { LucideIcon } from 'lucide-react';
import { Cloud, Layers, ShieldCheck, DollarSign, BrainCircuit, Zap, Server, Database, Network, ListTree, KeyRound, Settings, ClipboardList, Users, Palette } from 'lucide-react';

export interface Question {
  id: string;
  text: string;
  options: string[];
  correctAnswerIndex: number;
  feedback: string; // Explanation for the answer
}

export interface SubTopic {
  id: string;
  name: string;
  studyGuide: string;
  mnemonic: string; // Actual structured mnemonic
}

export interface Topic {
  id: string;
  name: string;
  description: string;
  icon?: LucideIcon;
  studyGuide: string; // Concise breakdown for quick understanding for the main topic
  mnemonic: string; // Actual structured mnemonic for the main topic
  subTopics?: SubTopic[];
  questions: Question[]; // Target: 25 questions
}

export const topics: Topic[] = [
  {
    id: 'cloud-concepts',
    name: 'Cloud Concepts (25-30%)',
    description: 'Understand core cloud computing concepts, models, benefits, and service types.',
    icon: Cloud,
    studyGuide: `
This section covers the fundamental ideas behind cloud computing. You'll learn what the cloud is, why it's beneficial, the different ways services are offered (IaaS, PaaS, SaaS), and how cloud resources can be deployed (public, private, hybrid). Understanding these basics is crucial for grasping more advanced Azure topics.
Key areas include:
*   Defining cloud computing and its core characteristics.
*   The shared responsibility model: who manages what.
*   Cloud models (Public, Private, Hybrid) and their use cases.
*   The consumption-based model and cloud pricing.
*   Benefits like high availability, scalability, reliability, security, and manageability.
*   Cloud service types (IaaS, PaaS, SaaS) and their appropriate use cases.
`,
    mnemonic: `☁️ Cloud Concepts
├── 💡 What is Cloud? (On-demand IT)
├── 🤝 Shared Responsibility (Provider vs. You)
├── 🏗️ Models: Public | Private | Hybrid
├── 💰 Consumption-Based (Pay-as-you-go)
├── ✨ Benefits (HA, Scale, Secure)
└── 📦 Service Types: IaaS | PaaS | SaaS`,
    subTopics: [
      {
        id: 'cc-define-cloud-computing',
        name: 'Define cloud computing',
        studyGuide: `
**Definition:** Cloud computing is the on-demand delivery of IT resources over the Internet with pay-as-you-go pricing. Instead of buying, owning, and maintaining physical data centers and servers, you can access technology services, such as computing power, storage, and databases, on an as-needed basis from a cloud provider like Microsoft Azure.

**Key Characteristics:**
*   **On-demand self-service:** Provision resources automatically without human intervention.
*   **Broad network access:** Services are available over the network and accessed through standard mechanisms.
*   **Resource pooling:** Provider's resources are pooled to serve multiple consumers, with resources dynamically assigned.
*   **Rapid elasticity/scalability:** Resources can be elastically provisioned and released, in some cases automatically, to scale rapidly outward and inward commensurate with demand.
*   **Measured service:** Resource usage is monitored, controlled, and reported, providing transparency.

**Use Case Scenario:** A retail company experiences huge traffic spikes during holiday seasons. Instead of overprovisioning physical servers year-round (CapEx), they use cloud computing. They can dynamically scale their web servers and databases in the cloud to handle the peak load and scale back down afterwards, paying only for the resources consumed during the spike (OpEx).
        `,
        mnemonic: `☁️ Define Cloud Computing
├── 🚚 On-Demand Delivery (IT resources via Internet)
├── 💳 Pay-As-You-Go Pricing
├── 🚫 No Need to Own/Maintain Physical Hardware
└── ✨ Key Characteristics:
    ├── 🙋‍♂️ On-demand self-service
    ├── 🌐 Broad network access
    ├── 🏊 Resource pooling
    ├── 🤸 Rapid elasticity/scalability
    └── 📏 Measured service`
      },
      {
        id: 'cc-shared-responsibility',
        name: 'Describe the shared responsibility model',
        studyGuide: `
**Concept:** The shared responsibility model defines the division of security responsibilities between the cloud provider (e.g., Microsoft Azure) and you, the customer. The level of responsibility varies depending on the cloud service model (IaaS, PaaS, SaaS).

*   **Provider's Responsibility (Security *of* the Cloud):** Physical security of datacenters, network infrastructure, and the hypervisor layer that runs virtual machines.
*   **Customer's Responsibility (Security *in* the Cloud):** Data, endpoints, account management, access management, application security, network controls configured by the customer.

**Breakdown by Service Model:**
*   **IaaS:** Provider manages physical infrastructure. Customer manages OS, networking, applications, data, identity & access. (Most customer responsibility)
*   **PaaS:** Provider manages OS, middleware, runtime. Customer manages applications, data, identity & access.
*   **SaaS:** Provider manages almost everything. Customer manages data (often), user access, and specific application configurations. (Least customer responsibility)

**Use Case Scenario:** A company uses Azure VMs (IaaS) to host a custom application. Azure is responsible for the physical servers, storage, and networking hardware, and the hypervisor. The company is responsible for patching the VM's operating system, installing antivirus, configuring network security groups (NSGs), securing the application code, and managing user access to the VM and application.
        `,
        mnemonic: `🤝 Shared Responsibility
├── 🛡️ Provider: Security OF the Cloud (Physical, Network Hardware, Hypervisor)
└── 💻 Customer: Security IN the Cloud (Data, OS*, Apps, Access)
    ├── IaaS: You manage OS, Apps, Data
    ├── PaaS: You manage Apps, Data
    └── SaaS: You manage mostly Data & Access Config`
      },
      {
        id: 'cc-cloud-models',
        name: 'Define cloud models, including public, private, and hybrid',
        studyGuide: `
**Public Cloud:**
*   **Definition:** Computing services offered by third-party providers over the public Internet, making them available to anyone who wants to use or purchase them. Resources are owned and operated by the cloud provider (e.g., Microsoft Azure, AWS, GCP).
*   **Benefits:** Scalability, pay-as-you-go, no CapEx for hardware, high reliability.
*   **Use Case Scenario:** A startup developing a new web application wants to reach a global audience quickly without investing in physical infrastructure. They deploy their app on a public cloud like Azure, leveraging its scalability and global presence.

**Private Cloud:**
*   **Definition:** Computing resources used exclusively by a single business or organization. A private cloud can be physically located on the company’s on-premises datacenter, or it can be hosted by a third-party service provider.
*   **Benefits:** Enhanced security, more control, compliance with specific regulations.
*   **Use Case Scenario:** A government agency with highly sensitive data and strict regulatory requirements builds a private cloud in its own datacenter to maintain full control over the infrastructure and data.

**Hybrid Cloud:**
*   **Definition:** Combines public and private clouds, bound together by technology that allows data and applications to be shared between them. This gives businesses greater flexibility and more data deployment options.
*   **Benefits:** Flexibility, leverage existing investments, scalability of public cloud for non-sensitive workloads.
*   **Use Case Scenario:** A large enterprise has an on-premises private cloud for its core, sensitive applications. They use a public cloud like Azure for development/testing environments, disaster recovery, or to handle seasonal bursts in web traffic for their public-facing website, connecting it securely to their private cloud.
        `,
        mnemonic: `🏗️ Cloud Models
├── 🏞️ Public (Park - Shared, Scalable, Pay-as-you-go)
├── 🏡 Private (Your House - Control, Security, Exclusive)
└── 🏘️ Hybrid (House + Park Access - Flexibility, Best of Both)`
      },
      {
        id: 'cc-usecases-cloud-models',
        name: 'Identify appropriate use cases for each cloud model',
        studyGuide: `
**Public Cloud Use Cases:**
*   Websites and web applications with variable traffic.
*   Development and test environments.
*   Disaster recovery for on-premises workloads.
*   Big data analytics and batch processing.
*   Applications requiring global reach.
*   *Scenario Example:* A media streaming service uses the public cloud to host its video content and scale its streaming servers globally to handle millions of concurrent users during peak events.

**Private Cloud Use Cases:**
*   Applications with strict security and data privacy requirements (e.g., healthcare, finance).
*   Workloads with specific regulatory compliance needs.
*   Organizations with significant existing infrastructure investments they want to leverage.
*   Business-critical applications requiring maximum control and customization.
*   *Scenario Example:* A financial institution processes sensitive customer transactions in its private cloud to meet stringent regulatory demands and maintain tight control over data security.

**Hybrid Cloud Use Cases:**
*   Gradual cloud migration: Moving workloads to the cloud in phases.
*   Disaster recovery: Using the public cloud as a DR site for on-premises applications.
*   Cloud bursting: Scaling on-premises applications to the public cloud during peak demand.
*   Development and testing in the public cloud while keeping production on-premises.
*   Applications with components in both public and private clouds (e.g., web front-end in public, database in private).
*   *Scenario Example:* A retail company runs its core inventory system in a private cloud but uses the public cloud to host its e-commerce website, scaling it out during holiday sales and connecting it securely to the inventory system.
        `,
        mnemonic: `🎯 Model Use Cases
├── 🏞️ Public: Web apps, Dev/Test, DR, Big Data
├── 🏡 Private: Sensitive data, Compliance, Max control
└── 🏘️ Hybrid: Phased migration, DR, Cloud bursting`
      },
      {
        id: 'cc-consumption-based',
        name: 'Describe the consumption-based model',
        studyGuide: `
**Concept:** A pricing model where you only pay for the IT resources you actually use. There are no upfront costs for hardware or software licenses in many cases; instead, you are billed based on your consumption, similar to how you pay for utilities like electricity or water.

**Benefits:**
*   **No upfront costs:** Avoid large capital expenditures (CapEx).
*   **Pay for what you use:** Reduces waste from overprovisioning.
*   **Scalability matched with cost:** Costs scale up or down with your usage.
*   **Improved budgeting:** Better predictability for operational expenses (OpEx).

**Use Case Scenario:** A small e-commerce business uses Azure App Service to host its online store. During a flash sale, traffic increases tenfold. With the consumption-based model, their App Service plan automatically scales out to handle the load, and they only pay for the increased compute resources during the sale period. After the sale, resources scale back down, and so do their costs.
        `,
        mnemonic: `💰 Consumption Model
├── 💸 Pay Only For Use (Like utilities)
├── 🚫 No Upfront Cost (OpEx not CapEx)
├── 📈 Scales With Cost
└── 👍 Benefits: Efficient, Flexible`
      },
      {
        id: 'cc-cloud-pricing-models',
        name: 'Compare cloud pricing models',
        studyGuide: `
Cloud pricing is generally consumption-based, but Azure offers various models to optimize costs:

*   **Pay-as-you-go:** Default model. Pay for what you use, billed per second/minute/hour. Maximum flexibility, no long-term commitment.
    *   *Use Case:* Unpredictable workloads, short-term projects, initial development.
*   **Reservations (Reserved Instances/Capacity):** Commit to using specific services (like VMs, SQL Database) for a 1-year or 3-year term in exchange for significant discounts (up to 72%) compared to pay-as-you-go.
    *   *Use Case:* Stable, predictable workloads where you know your long-term resource needs.
*   **Spot Pricing (Spot VMs):** Access unused Azure compute capacity at very deep discounts (up to 90%). Workloads can be interrupted if Azure needs the capacity back.
    *   *Use Case:* Fault-tolerant, interruptible workloads like batch processing, rendering, or dev/test environments where interruptions are acceptable.
*   **Azure Hybrid Benefit:** Use existing on-premises Windows Server and SQL Server licenses with Software Assurance to get discounted rates for Azure VMs and Azure SQL.
    *   *Use Case:* Organizations with existing Microsoft licenses looking to migrate to Azure cost-effectively.
*   **Dev/Test Pricing:** Discounted rates on Azure services for development and testing purposes, often available with Visual Studio subscriptions.
    *   *Use Case:* Non-production environments, individual developer experimentation.

**Use Case Scenario:** A company has a core application server that runs 24/7 with consistent load. They purchase an Azure Reserved VM Instance for 3 years to significantly reduce its running cost. For their nightly data processing jobs, which can be restarted if interrupted, they use Spot VMs to save money. Their development team uses Dev/Test pricing for their sandbox environments.
        `,
        mnemonic: `💲 Pricing Models
├── 🚕 Pay-As-You-Go (Taxi - Flexible)
├── 🚗 Reservations (Lease - Cheaper for long term)
├── ✈️ Spot VMs (Standby flight - Big discount, risk of bump)
├── 🔄 Hybrid Benefit (BYO License discount)
└── 🧪 Dev/Test (Cheaper for non-prod)`
      },
      {
        id: 'cc-serverless',
        name: 'Describe serverless',
        studyGuide: `
**Concept:** Serverless computing is a cloud execution model where the cloud provider dynamically manages the allocation and provisioning of servers. You write and deploy code, and the cloud provider runs the server and manages the infrastructure for you. You don't need to worry about server maintenance, patching, or scaling the underlying infrastructure.

**Key Characteristics:**
*   **No server management:** Abstracted away from the developer.
*   **Event-driven:** Code typically runs in response to events or triggers (e.g., HTTP request, new file in storage, message in a queue).
*   **Pay-per-execution/duration:** Only pay when your code is running.
*   **Automatic scaling:** Scales automatically based on demand.

**Azure Serverless Offerings:**
*   **Azure Functions:** Event-driven code (FaaS - Function as a Service).
*   **Azure Logic Apps:** Workflow automation service with visual designer and connectors.
*   **Azure Event Grid:** Event routing service.

**Use Case Scenario:** A company wants to process images uploaded by users to their website (e.g., create thumbnails). They use Azure Functions. An Azure Function is triggered whenever a new image is uploaded to Azure Blob Storage. The function code resizes the image and saves the thumbnail back to Blob Storage. They only pay for the function execution time when an image is processed, and it scales automatically if many users upload images simultaneously.
        `,
        mnemonic: `👻 Serverless
├── 🚫 No Server Management (by you)
├── ⚡ Event-Driven (Code runs on triggers)
├── 💸 Pay Per Use (Only when code runs)
└── 🚀 Auto-Scaling
    ├── Az Functions (Code snippets)
    └── Az Logic Apps (Workflows)`
      },
      {
        id: 'cc-benefits-ha-scalability',
        name: 'Describe the benefits of high availability and scalability in the cloud',
        studyGuide: `
**High Availability (HA):**
*   **Definition:** The ability of a system to remain operational and accessible for a high percentage of time, minimizing downtime. Achieved through redundancy and failover mechanisms.
*   **Benefits:**
    *   **Increased Uptime:** Applications and services are more consistently available to users.
    *   **Improved User Experience:** Less frustration from service interruptions.
    *   **Business Continuity:** Critical operations can continue even if some components fail.
    *   **Reduced Revenue Loss:** Minimized financial impact from downtime.
*   **Use Case Scenario:** An online banking application needs to be available 24/7. By deploying it across multiple Azure Availability Zones (HA), if one datacenter has an issue, traffic automatically fails over to another, ensuring customers can always access their accounts.

**Scalability:**
*   **Definition:** The ability of a system to handle increasing amounts of load by adding resources (scale-out/horizontal scaling) or by increasing the capacity of existing resources (scale-up/vertical scaling). Cloud platforms offer *elasticity*, which is the ability to scale automatically.
*   **Benefits:**
    *   **Performance:** Maintain good performance even under heavy load.
    *   **Cost Efficiency:** Pay only for resources needed; scale down when load decreases.
    *   **Adaptability:** Quickly respond to changing business demands or traffic patterns.
*   **Use Case Scenario:** An e-learning platform experiences low traffic during nights and high traffic during exam periods. Cloud scalability allows them to automatically add more web server instances during peak exam times to ensure smooth performance for students and then scale back down during off-peak hours to save costs.
        `,
        mnemonic: `✨ Cloud Benefits (Part 1)
├──  uptime High Availability (Always On 🏪)
│   └── 🔄 Redundancy, Failover
└── ⚖️ Scalability (Grows with Demand 💪↔️🤏)
    ├── ↔️ Scale Out/In (More/Less servers)
    └── ↕️ Scale Up/Down (Bigger/Smaller servers)`
      },
      {
        id: 'cc-benefits-reliability-predictability',
        name: 'Describe the benefits of reliability and predictability in the cloud',
        studyGuide: `
**Reliability:**
*   **Definition:** The ability of a system to perform its intended function correctly and consistently over a specified period, recovering from failures and ensuring data integrity.
*   **Benefits:**
    *   **Data Integrity:** Reduced risk of data loss or corruption.
    *   **Consistent Performance:** Services operate as expected without frequent errors.
    *   **Trust and Confidence:** Users and businesses trust the system to work correctly.
    *   **Reduced Maintenance:** Cloud providers handle much of the infrastructure maintenance that contributes to reliability.
*   **Use Case Scenario:** A healthcare application stores patient records. Cloud reliability, through features like redundant storage and automated backups, ensures that patient data is safe, accurate, and consistently accessible to authorized medical staff.

**Predictability:**
*   **Definition:** Refers to the consistency in performance and cost of cloud services.
*   **Performance Predictability:** Services perform consistently within defined SLAs, allowing businesses to plan application performance.
*   **Cost Predictability:** While consumption-based, tools like budgets, cost alerts, and reserved instances help in forecasting and managing cloud spending.
*   **Benefits:**
    *   **Better Planning:** Easier to forecast resource needs and budgets.
    *   **Consistent User Experience:** Users experience stable application performance.
    *   **Reduced Surprises:** Fewer unexpected cost overruns or performance bottlenecks.
    *   **SLAs:** Service Level Agreements provide formal commitments on performance and availability.
*   **Use Case Scenario:** A financial analytics company runs complex simulations. Performance predictability from Azure's high-performance computing (HPC) instances allows them to estimate job completion times accurately. Cost predictability, using Azure Reservations for their baseline compute needs, helps them manage their budget effectively.
        `,
        mnemonic: `✨ Cloud Benefits (Part 2)
├──  dependable Reliability (Works Correctly ✅)
│   └── 💾 Data Integrity, Consistent Ops
└── 🔮 Predictability (No Surprises!)
    ├── 🚀 Performance (Steady Speed)
    └── 📊 Cost (Manageable Budget)`
      },
      {
        id: 'cc-benefits-security-governance',
        name: 'Describe the benefits of security and governance in the cloud',
        studyGuide: `
**Security:**
*   **Definition:** Protecting data, applications, and infrastructure from unauthorized access, use, disclosure, alteration, or destruction. Cloud providers invest heavily in security.
*   **Benefits:**
    *   **Advanced Security Tools:** Access to sophisticated tools (e.g., threat detection, identity management, encryption) often beyond the reach of individual organizations.
    *   **Compliance Certifications:** Providers adhere to numerous global and industry-specific compliance standards (e.g., ISO 27001, HIPAA, GDPR).
    *   **Physical Security:** Secure datacenters with restricted access.
    *   **Expertise:** Access to a large pool of security professionals employed by the cloud provider.
    *   **Shared Responsibility Model:** Clearly defined security roles.
*   **Use Case Scenario:** A retail company stores customer credit card data. By using Azure, they benefit from Azure's PCI DSS compliance, advanced threat protection services like Microsoft Defender for Cloud, and tools like Azure Key Vault to securely manage encryption keys, helping them protect sensitive data and meet regulatory requirements.

**Governance:**
*   **Definition:** Establishing policies, processes, and controls to manage and monitor cloud resources effectively, ensuring compliance, cost control, and operational consistency.
*   **Benefits:**
    *   **Compliance Adherence:** Enforce policies to meet internal and external regulatory requirements.
    *   **Cost Management:** Control spending through budgets, tagging, and cost allocation.
    *   **Resource Consistency:** Standardize deployments and configurations using templates and policies.
    *   **Risk Management:** Identify and mitigate risks associated with cloud usage.
    *   **Accountability:** Clearly define roles and responsibilities for managing cloud resources.
*   **Use Case Scenario:** A large enterprise with multiple departments using Azure wants to ensure all new virtual machines are tagged with a 'CostCenter' and 'Environment' tag, and that no VMs are deployed outside of approved regions. They use Azure Policy to enforce these rules automatically and Azure Management Groups to organize subscriptions and apply policies hierarchically.
        `,
        mnemonic: `✨ Cloud Benefits (Part 3)
├── 🛡️ Security (Safe & Sound 🔒)
│   └── 🛠️ Advanced Tools, Compliance, Expertise
└── 📜 Governance (Rules & Order ⚖️)
    └── 📝 Policy, Cost Control, Consistency`
      },
      {
        id: 'cc-benefits-manageability',
        name: 'Describe the benefits of manageability in the cloud',
        studyGuide: `
**Manageability:**
*   **Definition:** The ease with which cloud resources can be provisioned, monitored, maintained, and controlled. Cloud platforms provide tools and services to simplify management tasks.
*   **Benefits:**
    *   **Simplified Provisioning:** Quickly deploy and configure resources using portals, CLI, or Infrastructure as Code.
    *   **Centralized Control:** Manage resources across different services and regions from a single interface (e.g., Azure portal).
    *   **Automation:** Automate routine tasks like patching, backups, and scaling.
    *   **Monitoring and Diagnostics:** Tools to monitor performance, health, and usage of resources, and to diagnose issues.
    *   **Reduced Operational Overhead:** Cloud provider handles underlying infrastructure maintenance, freeing up IT staff to focus on strategic initiatives.
*   **Use Case Scenario:** An IT team manages hundreds of web applications for different clients. Using Azure App Service (PaaS), they can easily deploy new apps, configure auto-scaling, set up automated backups, and monitor application performance through Azure Monitor, all from the Azure portal. This significantly reduces the manual effort compared to managing individual servers for each app.
        `,
        mnemonic: `✨ Cloud Benefits (Part 4)
└── ⚙️ Manageability (Easy Control 🎮)
    ├── 🚀 Simplified Provisioning
    ├── 🕹️ Centralized Control
    └── 🤖 Automation`
      },
      {
        id: 'cc-iaas',
        name: 'Describe infrastructure as a service (IaaS)',
        studyGuide: `
**IaaS (Infrastructure as a Service):**
*   **Definition:** Provides the basic building blocks for cloud IT. It typically includes access to networking features, computers (virtual or on dedicated hardware), and data storage space. IaaS gives you the highest level of flexibility and management control over your IT resources, most similar to existing IT resources.
*   **You Manage:** Operating System, Middleware, Applications, Data, Runtime, Identity & Access.
*   **Provider Manages:** Physical Servers, Storage Hardware, Networking Hardware, Virtualization Layer (Hypervisor).
*   **Azure Examples:** Azure Virtual Machines, Azure Storage (Blob, Disk, Files), Azure Virtual Network.
*   **Analogy:** Renting the land and raw building materials. You decide what kind of house to build and how to furnish it.
*   **Use Case Scenario:** A company wants to migrate an existing on-premises application that requires a specific operating system version and custom software installations. They use Azure Virtual Machines (IaaS) to create VMs with the exact OS and configurations they need, giving them full control similar to their on-premises environment but with cloud benefits like scalability and pay-as-you-go.
        `,
        mnemonic: `📦 IaaS (Infrastructure)
├── 🧱 Basic Building Blocks (VMs, Storage, Network)
├── 💪 Most Control (You manage OS & up)
├──  एग्जांपल Azure VMs, VNet
└── 🏡 Analogy: Renting empty land & tools`
      },
      {
        id: 'cc-paas',
        name: 'Describe platform as a service (PaaS)',
        studyGuide: `
**PaaS (Platform as a Service):**
*   **Definition:** Removes the need for organizations to manage the underlying infrastructure (usually hardware and operating systems) and allows you to focus on the deployment and management of your applications. PaaS provides an environment for building, testing, deploying, managing, and updating software applications.
*   **You Manage:** Applications, Data, Identity & Access.
*   **Provider Manages:** Operating System, Middleware, Runtime, Physical Servers, Storage Hardware, Networking Hardware, Virtualization.
*   **Azure Examples:** Azure App Service (Web Apps, API Apps), Azure SQL Database, Azure Functions (can also be FaaS), Azure Cosmos DB.
*   **Analogy:** Renting a workshop with all the tools and machinery provided. You bring your raw materials (code/data) and build your product.
*   **Use Case Scenario:** A development team wants to rapidly build and deploy a new web application without worrying about server patching, OS updates, or load balancer configuration. They use Azure App Service (PaaS). They simply deploy their code, and Azure handles the infrastructure, auto-scaling, and maintenance, allowing them to focus on features.
        `,
        mnemonic: `🛠️ PaaS (Platform)
├── 🖼️ Environment for Apps (Build, Deploy, Manage)
├── 👩‍💻 Focus on Code (Provider manages OS, servers)
├── EXAMPLE Azure App Service, Azure SQL DB
└── 🏭 Analogy: Renting a fully equipped workshop`
      },
      {
        id: 'cc-saas',
        name: 'Describe software as a service (SaaS)',
        studyGuide: `
**SaaS (Software as a Service):**
*   **Definition:** Provides you with a completed product that is run and managed by the service provider. In most cases, people referring to SaaS are referring to end-user applications. With a SaaS offering, you do not have to think about how the service is maintained or how the underlying infrastructure is managed; you only need to think about how you will use that particular piece of software.
*   **You Manage:** Typically just user access and specific application configurations/data (varies by service).
*   **Provider Manages:** Everything else (Applications, Data (mostly), Runtime, Middleware, OS, Servers, Storage, Networking, Virtualization).
*   **Azure Examples (Microsoft SaaS):** Microsoft 365 (Outlook, SharePoint, Teams), Dynamics 365, GitHub. (Azure itself is a platform, but Microsoft offers SaaS solutions often built on Azure).
*   **Analogy:** Renting a fully furnished and serviced apartment. You just move in and use it; all maintenance and utilities are handled.
*   **Use Case Scenario:** A company needs an email and collaboration solution for its employees. Instead of setting up and managing their own email servers and document sharing platforms, they subscribe to Microsoft 365 (SaaS). Employees can access email, calendars, and file storage online, and Microsoft handles all the backend infrastructure, software updates, and maintenance.
        `,
        mnemonic: `🛋️ SaaS (Software)
├── ✅ Ready-to-Use Apps (Email, CRM)
├── 🧘‍♂️ Least Management (Provider handles almost everything)
├── EXAMPLE Microsoft 365, Dynamics 365
└── 🏢 Analogy: Renting a fully furnished apartment`
      },
      {
        id: 'cc-use-cases-iaas-paas-saas',
        name: 'Identify appropriate use cases for each cloud service type (IaaS, PaaS, and SaaS)',
        studyGuide: `
**IaaS Use Cases:**
*   **Lift-and-shift migrations:** Moving existing on-premises applications to the cloud with minimal changes.
*   **Testing and development:** Quickly setting up and tearing down dev/test environments.
*   **Storage, backup, and recovery:** Storing large datasets, implementing backup solutions.
*   **High-performance computing (HPC):** Running computationally intensive workloads.
*   **Workloads requiring full control:** When you need specific OS versions or custom configurations.
*   *Scenario Example:* A company wants to migrate a legacy application running on an older version of Windows Server to Azure without rewriting it. They choose Azure VMs (IaaS) to replicate the environment.

**PaaS Use Cases:**
*   **Application development and deployment:** Streamlining the development lifecycle for web and mobile apps.
*   **Analytics or business intelligence:** Using tools to analyze data without managing the underlying infrastructure.
*   **APIs and microservices:** Building and hosting APIs.
*   **Serverless architectures:** Building event-driven applications with services like Azure Functions.
*   **Databases:** Using managed database services without worrying about patching or backups.
*   *Scenario Example:* A startup is building a new mobile app backend. They use Azure App Service (PaaS) for the API and Azure SQL Database (PaaS) for data storage to accelerate development and reduce operational overhead.

**SaaS Use Cases:**
*   **Email and calendaring:** Solutions like Microsoft Outlook (part of Microsoft 365).
*   **Customer Relationship Management (CRM):** Systems like Dynamics 365 Sales.
*   **Enterprise Resource Planning (ERP):** Systems like Dynamics 365 Finance.
*   **Collaboration and file sharing:** Tools like Microsoft Teams and SharePoint.
*   **Productivity applications:** Office suites like Microsoft 365 Apps.
*   *Scenario Example:* A small business needs a professional email system and document collaboration tools. They subscribe to Microsoft 365 (SaaS) to get these features without needing to manage any servers.
        `,
        mnemonic: `🎯 Service Type Use Cases
├── 📦 IaaS: Lift & Shift, Full Control, HPC
├── 🛠️ PaaS: App Dev, APIs, Serverless, Managed DBs
└── 🛋️ SaaS: Email, CRM, ERP, Collaboration`
      }
    ],
    questions: [
      {
        id: 'cc-q1',
        text: 'Which cloud benefit ensures that applications remain operational even if some components fail?',
        options: ['Scalability', 'High Availability', 'Elasticity', 'Agility'],
        correctAnswerIndex: 1,
        feedback: 'High Availability is the ability of a system to remain operational and accessible for a high percentage of time, minimizing downtime, often through redundancy and failover mechanisms.',
      },
      {
        id: 'cc-q2',
        text: 'In the shared responsibility model, for IaaS, who is responsible for patching the Operating System?',
        options: ['The Cloud Provider', 'The Customer', 'Both', 'Neither'],
        correctAnswerIndex: 1,
        feedback: 'For IaaS (Infrastructure as a Service), the customer is responsible for managing and patching the operating system, middleware, applications, and data.',
      },
      {
        id: 'cc-q3',
        text: 'Which cloud service model typically offers the most control over the underlying infrastructure?',
        options: ['SaaS', 'PaaS', 'IaaS', 'FaaS'],
        correctAnswerIndex: 2,
        feedback: 'IaaS (Infrastructure as a Service) provides the highest level of flexibility and management control over IT resources, including virtual machines, storage, and networking.',
      },
      {
        id: 'cc-q4',
        text: 'What is the primary advantage of the consumption-based model in cloud computing?',
        options: ['Fixed monthly costs', 'Paying only for what you use', 'Free access to all services', 'Long-term contracts with discounts'],
        correctAnswerIndex: 1,
        feedback: 'The consumption-based model, also known as pay-as-you-go, means you only pay for the IT resources you actually consume, leading to cost efficiency.',
      },
      {
        id: 'cc-q5',
        text: 'Which cloud model involves resources being used exclusively by a single business or organization?',
        options: ['Public Cloud', 'Private Cloud', 'Hybrid Cloud', 'Community Cloud'],
        correctAnswerIndex: 1,
        feedback: 'A Private Cloud provides computing resources that are used exclusively by one business or organization, offering more control and security.',
      },
      {
        id: 'cc-q6',
        text: 'Microsoft 365 (formerly Office 365) is an example of which cloud service type?',
        options: ['IaaS', 'PaaS', 'SaaS', 'FaaS'],
        correctAnswerIndex: 2,
        feedback: 'Microsoft 365 is a Software as a Service (SaaS) offering, providing ready-to-use applications like Outlook, Word, and SharePoint over the internet.',
      },
      {
        id: 'cc-q7',
        text: 'What does "scalability" in the cloud primarily refer to?',
        options: ['The ability to recover quickly from failures', 'The ability to adjust resources to meet demand', 'The ability to access resources from anywhere', 'The ability to secure data effectively'],
        correctAnswerIndex: 1,
        feedback: 'Scalability refers to the ability of a system to handle increasing (or decreasing) amounts of load by adding or removing resources as needed.',
      },
      {
        id: 'cc-q8',
        text: 'Which of the following is a key characteristic of serverless computing?',
        options: ['Requires manual server provisioning', 'Long-running dedicated servers', 'Abstracts server management from the developer', 'Billed per server instance per hour'],
        correctAnswerIndex: 2,
        feedback: 'Serverless computing abstracts the server infrastructure away from the developer, allowing them to focus on code. The cloud provider manages the servers.',
      },
      {
        id: 'cc-q9',
        text: 'A company wants to migrate an existing on-premises application to Azure with minimal changes, requiring full control over the operating system. Which cloud service model is most appropriate?',
        options: ['SaaS', 'PaaS', 'IaaS', 'FaaS'],
        correctAnswerIndex: 2,
        feedback: 'IaaS is most appropriate for "lift-and-shift" migrations where full control over the OS and environment is needed, mirroring an on-premises setup.',
      },
      {
        id: 'cc-q10',
        text: 'What is a common use case for a public cloud model?',
        options: ['Hosting highly sensitive government data requiring maximum control', 'Applications with very stable and predictable workloads not needing scalability', 'Development and test environments', 'Organizations with heavy existing on-premises investments they want to exclusively use'],
        correctAnswerIndex: 2,
        feedback: 'Public clouds are often used for development and test environments due to their flexibility, scalability, and pay-as-you-go pricing, allowing quick setup and teardown.',
      },
      // Add 15 more questions to reach 25
    ],
  },
  {
    id: 'azure-architecture-services',
    name: 'Azure Architecture and Services (35-40%)',
    description: 'Understand Azure\'s core architectural components, compute, networking, and storage services.',
    icon: ListTree,
    studyGuide: `
This section dives into the building blocks of Azure. You'll learn about how Azure is structured globally (regions, availability zones), how resources are organized (resource groups, subscriptions, management groups), and explore key services for running your applications (compute), connecting them (networking), and storing data (storage). This includes understanding migration tools and options.
Key areas include:
*   Azure's global infrastructure: regions, availability zones, datacenters.
*   Resource organization: resource groups, subscriptions, management groups.
*   Compute services: VMs, Scale Sets, App Service, Containers, Functions.
*   Networking services: VNets, Subnets, DNS, VPN Gateway, ExpressRoute, Load Balancers.
*   Storage services: Blob, Disk, Files, Tables, Queues; tiers, redundancy, migration.
`,
    mnemonic: `🏛️ Azure Architecture & Services
├── 🌍 Global Infrastructure (Regions, AZs)
├── 📂 Resource Organization (MGs, Subs, RGs)
├── 💻 Compute Services (VMs, Containers, Functions)
├── 🌐 Networking Services (VNets, DNS, VPN)
└── 💾 Storage Services (Blob, Files, Disks)`,
    subTopics: [
      {
        id: 'aas-regions-pairs-sovereign',
        name: 'Describe Azure regions, region pairs, and sovereign regions',
        studyGuide: `
**Azure Regions:**
*   **Definition:** A geographical area on the planet containing at least one, but potentially multiple, datacenters that are networked together with a low-latency network. Azure has a vast global network of regions.
*   **Purpose:** Allows you to deploy resources closer to your users to reduce latency, meet data residency requirements, and provide disaster recovery options.
*   **Use Case Scenario:** A company based in Germany wants to host an application for its European customers. They choose the "Germany West Central" Azure region to ensure low latency for local users and comply with EU data residency laws.

**Region Pairs:**
*   **Definition:** Each Azure region is paired with another region within the same geography (e.g., US, Europe, Asia) but typically at least 300 miles away. This pairing facilitates disaster recovery.
*   **Benefits:**
    *   **Sequential Updates:** Azure systematically updates one region in each pair at a time, minimizing the risk of both regions being down during maintenance.
    *   **Data Residency:** For most services that support region pairs, data replication for disaster recovery stays within the same geopolitical boundary (except for Brazil South).
    *   **Prioritized Recovery:** In the event of a broad outage, one region out of every pair is prioritized for recovery.
*   **Use Case Scenario:** A business deploys its critical database in the "East US 2" region. They configure geo-replication to its paired region, "Central US," for disaster recovery. If a major disaster hits East US 2, they can fail over to Central US.

**Sovereign Regions (e.g., Azure Government, Azure China):**
*   **Definition:** Instances of Azure that are physically and logically isolated from the public Azure cloud, designed to meet specific compliance, security, and data residency requirements for governments or specific countries.
*   **Characteristics:** Operated by local partners or government-cleared personnel, adhere to strict regulatory frameworks.
*   **Use Case Scenario:** A U.S. federal agency needs to store sensitive government data. They use "Azure Government," a sovereign region that meets U.S. government compliance standards like FedRAMP High and is operated by screened U.S. persons.
        `,
        mnemonic: `🌍 Azure Regions & Pairs
├── 📍 Regions (Datacenter clusters worldwide)
├── 🔗 Region Pairs (Linked for DR, >300 miles apart)
│   ├── Sequential updates
│   └── Prioritized recovery
└── 👑 Sovereign Regions (Gov/China - Isolated, Special rules)`
      },
      {
        id: 'aas-availability-zones',
        name: 'Describe availability zones',
        studyGuide: `
**Availability Zones (AZs):**
*   **Definition:** Physically separate datacenters within an Azure region. Each AZ has independent power, cooling, and networking. They are close enough for low-latency replication but far enough apart to be isolated from localized failures.
*   **Purpose:** Provide high availability and fault tolerance for applications and data within a region. If one zone goes down, resources in other zones remain unaffected.
*   **Resiliency:** Protects applications from datacenter-level failures.
*   **SLAs:** Using AZs for services like VMs can provide higher SLAs (e.g., 99.99% for VMs spread across AZs).
*   **Not all regions have AZs**, but support is expanding.
*   **Use Case Scenario:** An e-commerce company wants to ensure its critical online store remains operational even if one Azure datacenter in their chosen region fails. They deploy their web servers and databases across three Availability Zones within that region. If one zone experiences an outage, the other two zones continue to serve traffic, ensuring high availability.
        `,
        mnemonic: `🏢 Availability Zones (AZs)
├── 🏙️ Within a Region (Physically separate datacenters)
├── ⚡ Independent Power, Cooling, Network
├── 🔥 Protects from Datacenter Failure
└── ✅ Higher SLA (e.g., 99.99% for VMs)`
      },
      {
        id: 'aas-datacenters',
        name: 'Describe Azure datacenters',
        studyGuide: `
**Azure Datacenters:**
*   **Definition:** Physical facilities that house thousands of servers, networking equipment, and storage systems. These are the core buildings where Azure cloud services run.
*   **Global Infrastructure:** Microsoft has a massive global network of datacenters, grouped into Azure regions and Availability Zones.
*   **Security:** Datacenters have extensive physical security measures, including multi-layered access controls, surveillance, and 24/7 security personnel.
*   **Resiliency:** Designed with redundant power, cooling, and networking to ensure high availability.
*   **Sustainability:** Microsoft is committed to powering its datacenters with renewable energy and improving efficiency.
*   **Customer Access:** Customers do not typically have physical access to Azure datacenters; management is done remotely via Azure portal or APIs.
*   **Use Case Scenario:** When a user provisions an Azure Virtual Machine, that VM is physically running on servers within one of Microsoft's secure datacenters located in the Azure region selected by the user. The datacenter provides the necessary power, cooling, and network connectivity for that VM to operate.
        `,
        mnemonic: `🏭 Azure Datacenters
├── 🏗️ Physical Buildings (Housing servers, network, storage)
├── 🔒 Highly Secure (Physical & logical)
├── 💡 Redundant Power, Cooling, Network
└── 🌍 Foundation of Azure Regions & AZs`
      },
      {
        id: 'aas-resources-groups',
        name: 'Describe Azure resources and resource groups',
        studyGuide: `
**Azure Resources:**
*   **Definition:** A manageable item that is available through Azure. Examples include virtual machines, storage accounts, web apps, databases, and virtual networks. Resources are instances of Azure services that you create.
*   **Characteristics:** Each resource has a type, location, and unique ID. They are deployed and managed within resource groups.
*   **Use Case Scenario:** To host a website, you might create several Azure resources: an Azure App Service Plan (resource), an Azure App Service Web App (resource), and an Azure SQL Database (resource).

**Resource Groups:**
*   **Definition:** A container that holds related resources for an Azure solution. The resource group can include all the resources for the solution, or only those resources that you want to manage as a group.
*   **Key Features:**
    *   **Lifecycle Management:** Resources in a group share the same lifecycle; deploying, updating, and deleting a resource group will affect all resources within it.
    *   **Organization:** Group related resources for a project, application, or environment (e.g., "WebApp-Prod-RG", "Database-Dev-RG").
    *   **Deployment Scope:** Often used as a scope for deployments using ARM templates.
    *   **Access Control:** Apply Azure Role-Based Access Control (RBAC) at the resource group level to manage permissions.
    *   **Billing/Tagging:** Group resources for cost tracking and apply tags.
    *   **Location:** A resource group has a location, which is where its metadata is stored. Resources within a group can be in different regions.
*   **Use Case Scenario:** A development team is building a new application consisting of a web app, a database, and a storage account. They create a resource group named "ProjectAlpha-Dev-RG". All these related resources are created within this resource group. When the development phase is over, they can easily delete the entire resource group to remove all associated resources.
        `,
        mnemonic: `🧩 Azure Resources & Groups
├── 🔧 Resources (Manageable items: VMs, DBs, Web Apps)
└── 📦 Resource Groups (Containers for related resources)
    ├── ♻️ Shared Lifecycle (Deploy, Update, Delete together)
    ├── 🏷️ Organization, Access Control, Billing
    └── 📍 RG has location (metadata), resources can be elsewhere`
      },
      {
        id: 'aas-subscriptions',
        name: 'Describe subscriptions',
        studyGuide: `
**Azure Subscriptions:**
*   **Definition:** An Azure subscription is a logical container that provides access to Azure products and services. It's linked to an Azure account and serves as a billing unit and an access control boundary.
*   **Purpose:**
    *   **Billing Boundary:** Each subscription has its own billing report and invoice. Costs incurred by resources within a subscription are billed to that subscription.
    *   **Access Control Boundary:** You can apply access policies (RBAC) at the subscription level to control who can create and manage resources.
    *   **Scale Limits:** Subscriptions have some default limits (quotas) on the number of resources that can be created (e.g., number of VMs per region). These can often be increased.
*   **Types:** Common types include Free, Pay-As-You-Go, Enterprise Agreement, CSP (Cloud Solution Provider).
*   **Multiple Subscriptions:** Organizations often use multiple subscriptions to separate environments (dev, test, prod), departments, projects, or billing responsibilities.
*   **Use Case Scenario:** A company decides to separate its production environment from its development and testing environments for better cost tracking and access control. They create three Azure subscriptions: "ProdSubscription," "DevSubscription," and "TestSubscription." Each department or project might also get its own subscription under an Enterprise Agreement for chargeback purposes.
        `,
        mnemonic: `💳 Azure Subscriptions
├── 🔑 Logical Container (Access to Azure services)
├── 💲 Billing Boundary (Separate invoices)
├── 🔒 Access Control Boundary (RBAC scope)
└── 📊 Scale Limits (Quotas per sub)`
      },
      {
        id: 'aas-management-groups',
        name: 'Describe management groups',
        studyGuide: `
**Azure Management Groups:**
*   **Definition:** Containers that help you manage access, policy, and compliance across multiple Azure subscriptions. Management groups provide a level of scope above subscriptions.
*   **Hierarchy:** You can create a hierarchy of management groups to organize your subscriptions effectively, reflecting your organization's structure. The root management group is at the top.
*   **Purpose:**
    *   **Policy Application:** Apply Azure Policies at a management group level, and those policies will be inherited by all subscriptions within that group.
    *   **Access Management:** Assign Azure Roles (RBAC) at the management group level, granting permissions across multiple subscriptions.
    *   **Cost Management:** View aggregated costs across subscriptions within a management group.
    *   **Organizational Alignment:** Structure your Azure environment to match your company's departmental or geographical layout.
*   **Use Case Scenario:** A multinational corporation has numerous Azure subscriptions for different departments (HR, Finance, IT) and geographical regions (North America, Europe, Asia). They create management groups for "North America," "Europe," and "Asia." Under "North America," they might have further management groups for "US-HR" and "US-Finance." They apply a corporate-wide security policy at the root management group, which automatically applies to all subscriptions, ensuring consistent governance.
        `,
        mnemonic: `📁 Azure Management Groups
├── 👑 Scope Above Subscriptions (Organize subs)
├── 🏢 Hierarchy (Reflects org structure)
├── 📜 Apply Policy & RBAC to multiple subs
└── 💰 Aggregated Cost Viewing`
      },
      {
        id: 'aas-hierarchy-rg-subs-mg',
        name: 'Describe the hierarchy of resource groups, subscriptions, and management groups',
        studyGuide: `
The Azure resource hierarchy provides a structured way to organize, manage, and govern resources:

1.  **Management Groups (Top Level):**
    *   Provide a scope for applying governance controls (policies, RBAC) across multiple subscriptions.
    *   Can be nested to create a hierarchy reflecting an organization's structure.
    *   A single root management group exists for each Azure AD tenant.

2.  **Subscriptions (Middle Level):**
    *   Contained within management groups (or directly under the root if no custom MGs are used).
    *   Act as a unit of billing and access control.
    *   Resources are deployed into subscriptions.
    *   Subject to policies and RBAC inherited from parent management groups.

3.  **Resource Groups (Bottom Level):**
    *   Contained within subscriptions.
    *   Hold related resources for an application or project.
    *   Resources within a resource group share a lifecycle.
    *   Subject to policies and RBAC inherited from parent subscriptions and management groups.
    *   RBAC and policies can also be applied directly at the resource group level.

4.  **Resources (Individual Items):**
    *   Deployed within resource groups.
    *   The actual instances of Azure services (VMs, storage accounts, etc.).
    *   Inherit policies and RBAC from their parent resource group, subscription, and management group.
    *   RBAC can also be applied directly at the resource level for granular control.

**Flow of Governance:**
Management Groups -> Subscriptions -> Resource Groups -> Resources

**Use Case Scenario:**
*   **Root Management Group:** ACME Corp applies a global policy that all resources must have a 'CostCenter' tag.
*   **Management Group "Production":** All production subscriptions are under this MG. It has stricter access controls.
*   **Subscription "Prod-WebApp-Sub":** A subscription for production web applications.
*   **Resource Group "Prod-ECommerce-RG":** Contains all resources (App Service, SQL DB, Storage) for the e-commerce platform. This RG gets a specific budget alert.
*   **Resource (e.g., SQL Database):** Inherits tagging policy from root MG, access controls from "Production" MG and "Prod-WebApp-Sub", and budget scope from "Prod-ECommerce-RG".

        `,
        mnemonic: `📊 Hierarchy
🏢 Management Groups (Top - Org Level)
└── 💳 Subscriptions (Mid - Billing/Access Unit)
    └── 📦 Resource Groups (Low - Project/App Container)
        └── 🔧 Resources (Individual Services)`
      },
      {
        id: 'aas-compare-compute-types',
        name: 'Compare compute types, including containers, virtual machines, and functions',
        studyGuide: `
**Virtual Machines (VMs) - IaaS:**
*   **Definition:** Emulate a physical computer, providing an operating system, storage, and networking capabilities that you manage.
*   **Control:** Highest level of control over the OS and software stack.
*   **Use Cases:** Lift-and-shift migrations, applications requiring specific OS configurations, stateful applications, traditional N-tier apps.
*   **Management:** You manage OS patching, security, software installation.
*   *Analogy:* Renting an empty house; you furnish and maintain everything inside.

**Containers (e.g., Docker on Azure Kubernetes Service (AKS), Azure Container Instances (ACI)) - PaaS/IaaS features:**
*   **Definition:** Package an application and its dependencies together in an isolated unit. Containers run on a shared OS kernel but are isolated from each other.
*   **Control:** Control over application dependencies and runtime environment, less OS management than VMs.
*   **Use Cases:** Microservices, web applications, consistent environments across dev/test/prod, CI/CD pipelines, applications needing portability.
*   **Management:** Orchestrators like AKS manage container deployment, scaling, and networking. ACI is for simpler, single container deployments.
*   *Analogy:* Renting a pre-fabricated room (container) that you can easily move between different buildings (hosts/clusters).

**Functions (Serverless/FaaS - e.g., Azure Functions) - PaaS:**
*   **Definition:** Event-driven, short-lived pieces of code that run in response to triggers (HTTP, queue, timer, etc.).
*   **Control:** Least infrastructure control; focus solely on code. Provider manages servers and scaling.
*   **Use Cases:** Simple APIs, background tasks, data processing, IoT event handling, micro-billing tasks.
*   **Management:** No server management; auto-scaling; pay-per-execution.
*   *Analogy:* Using a specific tool from a shared workshop (e.g., a specialized saw) only when you need it, and only paying for the time you use that tool.

**Comparison Table:**

| Feature        | Virtual Machines (VMs) | Containers               | Functions (Serverless)   |
|----------------|------------------------|--------------------------|--------------------------|
| Abstraction    | Hardware               | Operating System         | Code/Function            |
| Control        | High                   | Medium                   | Low                      |
| Management     | OS, Apps, Middleware   | Apps, Dependencies       | Code only                |
| Startup Time   | Minutes                | Seconds                  | Milliseconds             |
| Scalability    | Manual/Auto (Scale Sets)| Auto (Orchestrator)    | Auto (Provider-managed)  |
| Cost Model     | Per hour/second        | Per hour/second (host)   | Per execution/duration   |
| State          | Stateful/Stateless     | Typically Stateless      | Typically Stateless      |

**Use Case Scenario:** A company is building a new application suite.
*   A legacy database server is migrated to an **Azure VM** for maximum compatibility.
*   The new microservices for the application backend are developed as **containers** and deployed on **AKS** for scalability and resilience.
*   A small task to send a welcome email when a new user signs up is implemented as an **Azure Function**, triggered by a database event.
        `,
        mnemonic: `💻 Compare Compute
├── 🖥️ VMs (IaaS - Full OS control, like physical server)
├── 📦 Containers (App + Deps, portable, less OS mgmt)
└── ⚙️ Functions (FaaS - Code snippets, event-driven, no server mgmt)`
      },
      {
        id: 'aas-vm-options',
        name: 'Describe virtual machine options, including Azure virtual machines, Azure Virtual Machine Scale Sets, availability sets, and Azure Virtual Desktop',
        studyGuide: `
**Azure Virtual Machines (VMs):**
*   **Definition:** IaaS offering that provides on-demand, scalable computing resources with usage-based pricing. You can choose various OS (Windows, Linux), sizes (CPU, RAM, Storage), and series (general purpose, compute-optimized, memory-optimized, etc.).
*   **Use Case Scenario:** Hosting a traditional web server, running a line-of-business application, or creating a development/test environment.

**Azure Virtual Machine Scale Sets (VMSS):**
*   **Definition:** Allows you to create and manage a group of load-balanced VMs. The number of VM instances can automatically increase or decrease in response to demand or a defined schedule.
*   **Benefits:** High availability, application resiliency, large-scale services, simplified management of multiple VMs.
*   **Use Case Scenario:** An e-commerce website needs to handle fluctuating traffic. VMSS automatically scales out the number of web server VMs during peak shopping hours and scales them in during off-peak times to save costs while maintaining performance.

**Availability Sets:**
*   **Definition:** A logical grouping capability to ensure that the VM resources you place within it are isolated from each other when they are deployed within an Azure datacenter. Protects against hardware failures and software updates within a single datacenter.
*   **How it works:** Spreads your VMs across multiple fault domains (share common power source and network switch) and update domains (can be rebooted at the same time).
*   **SLA:** Provides a 99.95% SLA if you have two or more VMs in an Availability Set.
*   **Limitation:** Protects within a single datacenter, not against entire datacenter/region failure (for that, use Availability Zones).
*   **Use Case Scenario:** A company deploys two domain controller VMs for redundancy within a single Azure region. Placing them in an Availability Set ensures that if one fault domain has a hardware failure or one update domain is rebooted, the other domain controller remains available.

**Azure Virtual Desktop (AVD):**
*   **Definition:** A desktop and application virtualization service that runs on the cloud. It delivers a complete Windows 10/11 or Windows Server desktop experience, or individual applications, to users on virtually any device.
*   **Benefits:** Centralized management, security, remote access, multi-session Windows, cost savings (pooled resources).
*   **Use Case Scenario:** A company needs to provide secure remote access to corporate applications and desktops for its employees working from home or using personal devices. AVD allows them to deliver a managed Windows environment without needing VPNs for each app or managing individual physical desktops.
        `,
        mnemonic: `🖥️ VM Options
├── 🤖 Azure VMs (Single server instances)
├── ➕ VM Scale Sets (VMSS - Auto-scaling group of VMs)
├── 🛡️ Availability Sets (Protects VMs within 1 DC - Fault/Update Domains)
└── 💻 Azure Virtual Desktop (AVD - Desktops/Apps from cloud)`
      },
      {
        id: 'aas-vm-resources-required',
        name: 'Describe the resources required for virtual machines',
        studyGuide: `
When you create an Azure Virtual Machine, several associated resources are typically created or required:

*   **Compute Resources:**
    *   **VM itself:** The compute instance with a specific size (CPU, memory, temporary storage).
*   **Storage Resources:**
    *   **OS Disk:** A managed disk that stores the operating system.
    *   **Data Disk(s) (Optional):** Managed disks for persistent application data.
    *   **Temporary Disk:** Local, non-persistent storage on the physical host, good for temporary files, page files. Data is lost on reboot/migration.
    *   **Storage Account (for diagnostics - optional):** To store boot diagnostics logs and screenshots.
*   **Networking Resources:**
    *   **Virtual Network (VNet):** The VM must be deployed into a VNet.
    *   **Subnet:** The VM is placed within a specific subnet of the VNet.
    *   **Network Interface Card (NIC):** Enables the VM to communicate with the VNet. A VM has at least one NIC.
    *   **Public IP Address (Optional):** To allow inbound internet traffic to the VM (e.g., for RDP/SSH or web server).
    *   **Network Security Group (NSG):** Filters inbound and outbound network traffic to/from the VM's NIC or subnet.
*   **Other Resources (often implicitly created or associated):**
    *   **Resource Group:** The VM and its related resources are contained within a resource group.
    *   **(If using Availability Sets/Zones):** The Availability Set or Zone configuration.

**Use Case Scenario:** You want to create a Windows Server VM to host a small database.
1.  You select a **VM size** (e.g., Standard_DS2_v2).
2.  An **OS disk** is automatically created.
3.  You add a **Data Disk** for database files.
4.  The VM is placed in a **Resource Group**.
5.  It requires a **VNet** and **Subnet**.
6.  A **NIC** is created and attached.
7.  You assign a **Public IP** to access it remotely.
8.  An **NSG** is configured to allow RDP and SQL traffic.
        `,
        mnemonic: `🛠️ VM Resources
├── Compute (CPU, RAM)
├── Storage (OS Disk, Data Disks, Temp Disk)
└── Networking
    ├── VNet & Subnet
    ├── NIC (Network Interface)
    ├── Public IP (Optional)
    └── NSG (Firewall rules)`
      },
      {
        id: 'aas-app-hosting-options',
        name: 'Describe application hosting options, including web apps, containers, and virtual machines',
        studyGuide: `
Azure offers various ways to host your applications, each suited for different needs:

**Azure Virtual Machines (VMs) - IaaS:**
*   **Description:** Full control over the OS and environment.
*   **Best for:**
    *   Migrating existing on-premises applications ("lift-and-shift") with minimal changes.
    *   Applications requiring specific OS configurations or custom software installations.
    *   Applications that need direct access to underlying hardware features.
    *   Stateful applications that are difficult to containerize.
*   **Management:** You manage the OS, patching, scaling (can use VMSS), load balancing, security configurations.
*   **Use Case Scenario:** Hosting a legacy Windows application that cannot be easily refactored for PaaS or containers.

**Containers (Azure Kubernetes Service - AKS, Azure Container Instances - ACI, Azure App Service for Containers) - PaaS features:**
*   **Description:** Package applications and dependencies for consistency and portability.
*   **Best for:**
    *   Microservices architectures.
    *   Applications requiring consistent dev/test/prod environments.
    *   CI/CD and DevOps practices.
    *   Scalable web applications and APIs.
    *   Workloads needing rapid deployment and scaling.
*   **Management:** AKS for orchestration (complex), ACI for single containers (simple), App Service for easy web app container hosting. Less OS management than VMs.
*   **Use Case Scenario:** A team developing a new set of microservices for an e-commerce platform uses AKS to deploy, manage, and scale their containerized services.

**Azure App Service (Web Apps, API Apps) - PaaS:**
*   **Description:** Fully managed platform for building, deploying, and scaling web apps, mobile backends, and RESTful APIs.
*   **Best for:**
    *   Rapid development and deployment of web applications and APIs.
    *   Applications built with common frameworks (.NET, Java, Node.js, Python, PHP).
    *   Integrating with other Azure services easily.
    *   Automated scaling, patching, and CI/CD integration.
    *   When you want to focus on code, not infrastructure.
*   **Management:** Azure manages the OS, web servers, load balancers, and patching. You manage your code and data.
*   **Use Case Scenario:** A startup builds a new SaaS web application. They use Azure App Service to quickly deploy their .NET Core application, enabling auto-scaling and integrated deployment slots for testing new features.

**Comparison:**
*   **Control:** VMs (Most) > Containers > App Service (Least infrastructure control)
*   **Management Overhead:** VMs (Most) > Containers > App Service (Least)
*   **Speed of Deployment:** App Service (Fastest) > Containers > VMs (Slowest)

        `,
        mnemonic: `🏠 App Hosting Options
├── 🖥️ VMs (Max control, legacy apps)
├── 📦 Containers (AKS/ACI - Portable, microservices)
└── 🌐 App Service (Web Apps - PaaS, fast dev, less mgmt)`
      },
      {
        id: 'aas-virtual-networking',
        name: 'Describe virtual networking, including the purpose of Azure virtual networks, Azure virtual subnets, peering, Azure DNS, Azure VPN Gateway, and ExpressRoute',
        studyGuide: `
**Azure Virtual Network (VNet):**
*   **Purpose:** Your own isolated network in Azure. Enables Azure resources (like VMs) to securely communicate with each other, the internet, and on-premises networks.
*   **Key Features:** IP address space, subnets, routing, network security.
*   **Use Case Scenario:** Creating a private network space in Azure to deploy your application servers and databases, isolating them from public internet traffic by default.

**Azure Virtual Subnets:**
*   **Purpose:** Segments a VNet's IP address range into smaller, manageable parts. Allows you to group related resources within a VNet (e.g., web tier, app tier, data tier).
*   **Key Features:** Apply NSGs to subnets, define route tables.
*   **Use Case Scenario:** In a VNet for a 3-tier application, you create a "WebSubnet" for web servers, an "AppSubnet" for application servers, and a "DataSubnet" for database servers, applying different NSG rules to each.

**Peering (VNet Peering):**
*   **Purpose:** Connects two Azure VNets seamlessly, allowing resources in either VNet to communicate with each other as if they were in the same network. Traffic between peered VNets uses the Microsoft backbone network (private).
*   **Types:** Regional Peering (VNets in same region), Global Peering (VNets in different regions).
*   **Use Case Scenario:** A company has one VNet for shared services (like domain controllers) and another VNet for a specific project. VNet peering allows the project VNet to access the shared services securely and privately.

**Azure DNS:**
*   **Purpose:** A hosting service for DNS domains, providing name resolution using Microsoft Azure infrastructure. You can manage your DNS records for your domains (e.g., \`www.contoso.com\`).
*   **Types:**
    *   **Public DNS Zones:** For internet-facing domain resolution.
    *   **Private DNS Zones:** For name resolution within a VNet (or across peered VNets) without needing custom DNS servers.
*   **Use Case Scenario:** Hosting the DNS records for your company's public website (\`yourcompany.com\`). Or, using Azure Private DNS to resolve names of VMs within your VNet by their hostname (e.g., \`webvm1.internal.contoso.com\`).

**Azure VPN Gateway:**
*   **Purpose:** Sends encrypted traffic between an Azure VNet and an on-premises location over the public internet (Site-to-Site VPN), or between a VNet and individual client computers (Point-to-Site VPN).
*   **Use Case Scenario:** Securely connecting your company's on-premises office network to your Azure VNet so that on-premises users can access Azure resources, effectively extending your on-premises network to the cloud.

**Azure ExpressRoute:**
*   **Purpose:** Extends your on-premises networks into the Microsoft cloud over a private, dedicated connection facilitated by a connectivity provider. Does NOT go over the public internet.
*   **Benefits:** Higher bandwidth, lower latency, more reliability, and better security compared to VPN Gateway. More expensive.
*   **Use Case Scenario:** A large enterprise needs a high-speed, reliable, and private connection between its on-premises datacenter and Azure for migrating large databases, frequent large data transfers, or latency-sensitive hybrid applications.
        `,
        mnemonic: `🌐 Virtual Networking
├── 🛡️ VNet (Your private Azure network)
├──  subdivide Subnets (Segments within VNet)
├── 🤝 Peering (Connects VNets privately)
├── 🗺️ Azure DNS (Public/Private name resolution)
├── 🔒 VPN Gateway (Encrypted tunnel over Internet)
└── 🚀 ExpressRoute (Private, dedicated highway to Azure)`
      },
      {
        id: 'aas-public-private-endpoints',
        name: 'Define public and private endpoints',
        studyGuide: `
**Public Endpoints (Public IP Addresses):**
*   **Definition:** An IP address that is accessible from the public internet. When an Azure service (like a VM, Load Balancer, or PaaS service) is assigned a public IP address, it can be reached from anywhere on the internet (subject to NSGs/firewalls).
*   **Purpose:** To make services available to external users or systems over the internet.
*   **Use Case Scenario:**
    *   A web server VM needs a public IP so users can access the website.
    *   An Azure SQL Database configured with a public endpoint can be accessed from an on-premises application development tool (with firewall rules allowing the connection).

**Private Endpoints (using Azure Private Link):**
*   **Definition:** A network interface that uses a private IP address from your Virtual Network (VNet) to connect privately and securely to Azure PaaS services (like Azure Storage, Azure SQL Database, Azure Cosmos DB) or to your own services powered by Azure Private Link.
*   **Purpose:**
    *   Access PaaS services without exposing them to the public internet.
    *   Eliminate data exfiltration risks by ensuring traffic to PaaS services stays within your VNet and the Microsoft backbone.
    *   Simplify network architecture by avoiding complex firewall rules for PaaS services.
*   **How it works:** The PaaS service effectively gets an IP address within your VNet, making it appear as if it's part of your private network.
*   **Use Case Scenario:** A company has an Azure SQL Database. Instead of accessing it over its public endpoint, they create a private endpoint for it within their VNet. Applications running on VMs within that VNet can now connect to the SQL Database using its private IP address, and all traffic remains on the Microsoft private network, enhancing security. This also means they can block all public access to the SQL Database.
        `,
        mnemonic: `🔌 Endpoints
├── 🚪 Public Endpoint (Internet accessible IP for services)
└── 🤫 Private Endpoint (Private IP in your VNet for PaaS services via Private Link)`
      },
      {
        id: 'aas-compare-storage-services',
        name: 'Compare Azure Storage services',
        studyGuide: `
Azure Storage offers several types of services for different data needs:

*   **Azure Blob Storage:**
    *   **Type:** Object storage (unstructured data).
    *   **Use Cases:** Storing documents, images, videos, backups, data lakes, static website hosting.
    *   **Structure:** Containers hold blobs (files).
    *   **Access Tiers:** Hot, Cool, Cold, Archive (for cost optimization).
*   **Azure Disk Storage:**
    *   **Type:** Block storage (persistent disks for VMs).
    *   **Use Cases:** OS disks and data disks for Azure Virtual Machines.
    *   **Performance Tiers:** Standard HDD, Standard SSD, Premium SSD, Ultra Disk.
*   **Azure Files:**
    *   **Type:** Managed file shares in the cloud.
    *   **Access Protocols:** SMB (Server Message Block), NFS (Network File System).
    *   **Use Cases:** Replacing on-premises file servers, "lift and shift" applications needing file shares, shared application settings, diagnostics data.
    *   **Synchronization:** Can be synced with on-premises Windows Servers using Azure File Sync.
*   **Azure Queue Storage:**
    *   **Type:** Message queuing service.
    *   **Use Cases:** Decoupling application components, asynchronous message processing, scheduling background tasks.
    *   **Structure:** Stores large numbers of messages.
*   **Azure Table Storage:**
    *   **Type:** NoSQL key-attribute store (schemaless).
    *   **Use Cases:** Storing structured NoSQL data like user data for web applications, address books, device information.
    *   **Scalability:** Highly scalable for simple datasets.

**Comparison Table:**

| Service         | Type            | Primary Use                               | Key Features                        |
|-----------------|-----------------|-------------------------------------------|-------------------------------------|
| Blob Storage    | Object          | Unstructured data, backups, data lakes    | Tiers, static web hosting           |
| Disk Storage    | Block           | VM OS and data disks                      | Performance tiers, managed/unmanaged|
| Files           | File Share      | Replacing file servers, shared access     | SMB/NFS, Azure File Sync          |
| Queue Storage   | Message Queue   | Asynchronous tasks, decoupling apps       | Scalable messaging                  |
| Table Storage   | NoSQL Key-Value | Structured NoSQL data, simple datasets    | Schemaless, fast key-based access   |

**Use Case Scenario:** A company develops a web application.
*   User profile pictures and uploaded documents are stored in **Azure Blob Storage**.
*   The application's web servers run on VMs using **Azure Disk Storage** for their OS and application files.
*   Shared configuration files used by multiple instances of the web app are stored on **Azure Files**.
*   Order processing tasks are sent to **Azure Queue Storage** to be handled by backend workers asynchronously.
*   User session data (non-relational) is stored in **Azure Table Storage** for quick lookups.
        `,
        mnemonic: `💾 Compare Storage
├── 🧱 Blobs (Objects - images, docs, backups)
├── 💿 Disks (For VMs - OS & data)
├── 📁 Files (SMB/NFS shares - like network drive)
├── 📬 Queues (Messages for async tasks)
└── 🍽️ Tables (NoSQL key-value - simple structured data)`
      },
      {
        id: 'aas-storage-tiers',
        name: 'Describe storage tiers',
        studyGuide: `
Azure Blob Storage and Azure Files (Premium tier) offer different access tiers to help optimize storage costs based on how frequently data is accessed:

**Azure Blob Storage Tiers:**

*   **Hot Tier:**
    *   **Purpose:** For frequently accessed data.
    *   **Cost:** Highest storage cost, lowest access cost.
    *   **Latency:** Low (milliseconds).
    *   **Use Case Scenario:** Actively used application data, images and videos frequently served by a website.

*   **Cool Tier:**
    *   **Purpose:** For infrequently accessed data that needs to be stored for at least 30 days.
    *   **Cost:** Lower storage cost than Hot, higher access cost than Hot.
    *   **Latency:** Low (milliseconds), same as Hot.
    *   **Use Case Scenario:** Short-term backups, older project files, disaster recovery datasets that are rarely accessed but need to be readily available.

*   **Cold Tier (Preview for Blob Storage):**
    *   **Purpose:** For rarely accessed data stored for at least 90 days, where slightly higher retrieval times are acceptable.
    *   **Cost:** Lower storage costs than Cool, higher access costs than Cool.
    *   **Latency:** Can be slightly higher than Hot/Cool.
    *   **Use Case Scenario:** Long-term document archives, older media content not frequently viewed.

*   **Archive Tier:**
    *   **Purpose:** For rarely accessed data that can tolerate several hours of retrieval latency, stored for at least 180 days.
    *   **Cost:** Lowest storage cost, highest access cost.
    *   **Latency:** High (can take hours to "rehydrate" data to Hot or Cool tier before access).
    *   **Use Case Scenario:** Long-term backups, raw data that must be kept for compliance reasons but is almost never accessed (e.g., medical records after many years, financial audit logs).

**Azure Files Tiers (for Premium file shares - SSD based):**
*   While Azure Files Standard uses HDD and doesn't have explicit "Hot/Cool" tiers like Blob, Premium Files (SSD) are optimized for performance. The concept of tiering is more pronounced in Blob Storage for cost optimization based on access frequency. Lifecycle management policies can move Blob data between tiers automatically.

**Use Case Scenario:** A company stores video surveillance footage.
*   The most recent 7 days of footage (frequently reviewed) are stored in the **Hot tier**.
*   Footage from 8 to 90 days old (infrequently reviewed) is moved to the **Cool tier**.
*   Footage older than 90 days (rarely reviewed, kept for compliance) is moved to the **Archive tier**. This significantly reduces storage costs.
        `,
        mnemonic: `♨️❄️🧊 Storage Tiers (Blob)
├── 🔥 Hot (Frequent access - high storage cost, low access cost)
├── 🆒 Cool (Infrequent access, >=30 days - lower storage, higher access)
├── 🥶 Cold (Rare access, >=90 days - even lower storage, higher access)
└── 🗄️ Archive (Very rare access, slow retrieval - cheapest storage, highest access)`
      },
      {
        id: 'aas-redundancy-options',
        name: 'Describe redundancy options',
        studyGuide: `
Azure Storage offers several redundancy options to protect your data from hardware failures, and regional or zonal outages:

**Replication within a Primary Region:**

*   **Locally-Redundant Storage (LRS):**
    *   **How it works:** Replicates your data three times synchronously within a single physical location (datacenter) in the primary region.
    *   **Protection:** Protects against server rack and drive failures.
    *   **Availability:** Lowest cost option, but does not protect against a datacenter-level outage.
    *   **Use Case Scenario:** Non-critical data, dev/test data, or data that can be easily reconstructed.

*   **Zone-Redundant Storage (ZRS):**
    *   **How it works:** Replicates your data synchronously across three Azure Availability Zones within the primary region.
    *   **Protection:** Protects against datacenter-level (zone) failures within a region.
    *   **Availability:** Higher availability than LRS within a region.
    *   **Use Case Scenario:** Mission-critical applications requiring high availability within a region, where data residency within the region is important.

**Replication to a Secondary Region (Geo-Redundancy):**

*   **Geo-Redundant Storage (GRS):**
    *   **How it works:** Replicates your data synchronously three times within a single physical location in the primary region (like LRS), and then asynchronously replicates your data to a secondary region (region pair) hundreds of miles away. In the secondary region, data is replicated three times using LRS.
    *   **Protection:** Protects against regional outages.
    *   **Access:** Data in the secondary region is not directly readable unless a failover to the secondary region occurs.
    *   **Use Case Scenario:** Critical data requiring protection against regional disasters.

*   **Read-Access Geo-Redundant Storage (RA-GRS):**
    *   **How it works:** Same as GRS (data replicated to a secondary region), but provides read-only access to the data in the secondary region, even if the primary region is operational.
    *   **Protection:** Protects against regional outages.
    *   **Access:** Allows read access from the secondary region for higher application availability or for read-heavy workloads.
    *   **Use Case Scenario:** Applications that need to continue serving read requests from a secondary region if the primary region becomes unavailable, or for offloading read traffic.

*   **Geo-Zone-Redundant Storage (GZRS):**
    *   **How it works:** Combines ZRS in the primary region (synchronous replication across 3 AZs) with asynchronous replication to a secondary region (where data is LRS replicated).
    *   **Protection:** Provides high availability within the primary region (protection against zone failures) AND protection against regional outages.
    *   **Use Case Scenario:** Highest level of durability and availability for critical data requiring both zonal and regional protection.

*   **Read-Access Geo-Zone-Redundant Storage (RA-GZRS):**
    *   **How it works:** Same as GZRS, but provides read-only access to data in the secondary region.
    *   **Use Case Scenario:** Maximum availability and durability, with the ability to read from the secondary region.

**Use Case Scenario:** A financial institution stores critical transaction logs. They choose **GZRS** to ensure the data is protected against individual datacenter failures within their primary region and also against a complete regional disaster, providing the highest level of durability.
        `,
        mnemonic: `🔄 Storage Redundancy
├── LRS (Locally - 3x copies, 1 DC)
├── ZRS (Zonally - 3x copies, 3 AZs in 1 Region)
├── GRS (Geo - LRS + Async copy to 2nd Region)
├── RA-GRS (Geo + Read Access to 2nd Region)
├── GZRS (Geo-Zone - ZRS + Async copy to 2nd Region)
└── RA-GZRS (Geo-Zone + Read Access to 2nd Region)`
      },
      {
        id: 'aas-storage-account-options',
        name: 'Describe storage account options and storage types',
        studyGuide: `
**Azure Storage Account:**
*   **Definition:** A container that groups a set of Azure Storage services (Blob, File, Queue, Table, Disk). It provides a unique namespace for your Azure Storage data that's accessible from anywhere in the world over HTTP or HTTPS.
*   **Key Settings When Creating a Storage Account:**
    *   **Subscription:** The subscription it belongs to.
    *   **Resource Group:** The resource group it's part of.
    *   **Account Name:** Globally unique name (forms part of the service URL).
    *   **Location (Region):** Where the account will be created.
    *   **Performance Tier:**
        *   **Standard:** Backed by magnetic drives (HDD). Suitable for bulk storage, infrequently accessed data. Lower cost. Supports Blob, File, Queue, Table.
        *   **Premium:** Backed by solid-state drives (SSD). For I/O-intensive applications requiring low latency. Higher cost. Supports Block Blobs, Page Blobs (used for Disks), and Files (Azure Files Premium).
    *   **Account Kind (Type):**
        *   **General-purpose v2 (GPv2):** Most common. Supports all storage services (Blob, File, Queue, Table, Disk). Recommended for most scenarios.
        *   **General-purpose v1 (GPv1):** Older type, supports all services. Consider upgrading to GPv2.
        *   **BlockBlobStorage:** Premium performance for block blobs and append blobs. High transaction rates, low latency. (Only supports Block Blobs and Append Blobs).
        *   **FileStorage:** Premium performance for Azure Files shares only.
        *   **BlobStorage:** Legacy account type for blobs only (Hot/Cool tiers). Use GPv2 instead.
    *   **Redundancy:** LRS, ZRS, GRS, RA-GRS, GZRS, RA-GZRS (as discussed previously).
    *   **Access Tier (for GPv2 and BlobStorage accounts):** Default tier (Hot or Cool) for new blobs.

**Storage Types within a Storage Account (primarily for GPv2):**
*   **Blob Storage:** For unstructured data.
    *   *Block Blobs:* Optimized for streaming and storing text/binary data (documents, images, videos).
    *   *Append Blobs:* Optimized for append operations (logging).
    *   *Page Blobs:* Optimized for random read/write operations (used for Azure VM disks).
*   **Azure Files:** For managed file shares.
*   **Azure Queues:** For messaging.
*   **Azure Tables:** For NoSQL key-value data.
*   **(Azure Disks are managed separately but conceptually use page blobs in storage accounts or more often, are unmanaged/managed disks directly.)**

**Use Case Scenario:** A company needs to store application backups (infrequently accessed but need to be durable) and also host small, frequently accessed configuration files via SMB. They create a **General-purpose v2 (GPv2)** storage account in the "East US" region with **Standard performance** and **GRS redundancy**. Within this account, they create a Blob container for backups (setting blobs to Cool tier) and an Azure Files share for configuration files.
        `,
        mnemonic: `🗃️ Storage Accounts
├── 🏷️ Unique Name, Region, RG, Sub
├── ⚙️ Performance: Standard (HDD) | Premium (SSD)
├── 📦 Kind: GPv2 (Recommended), BlockBlob, FileStorage
├── 🔄 Redundancy (LRS, ZRS, GRS, etc.)
└── 🔥 Access Tier (Hot/Cool default for blobs)`
      },
      {
        id: 'aas-moving-files-options',
        name: 'Identify options for moving files, including AzCopy, Azure Storage Explorer, and Azure File Sync',
        studyGuide: `
Azure provides several tools and services for moving files to and from Azure Storage:

*   **AzCopy:**
    *   **Definition:** A command-line utility designed for copying data to/from Azure Blob, File, and Table storage with optimal performance.
    *   **Features:** High-performance parallel uploads/downloads, resumable operations, synchronization capabilities.
    *   **Use Cases:** Transferring large files or large numbers of files, scripting data transfers, migrating data from on-premises to Azure Storage, backup/restore.
    *   **Scenario Example:** An administrator needs to upload 1TB of historical archive data from an on-premises server to Azure Blob Storage. They use AzCopy for its speed and ability to resume if the transfer is interrupted.

*   **Azure Storage Explorer:**
    *   **Definition:** A standalone desktop application (Windows, macOS, Linux) that provides a graphical user interface (GUI) for managing Azure Storage resources.
    *   **Features:** Browse, upload, download, delete, and manage blobs, files, queues, tables, and Cosmos DB entities. Connect to multiple subscriptions and storage accounts.
    *   **Use Cases:** Ad-hoc file management, visually inspecting storage contents, uploading/downloading smaller sets of files, managing access permissions.
    *   **Scenario Example:** A developer needs to quickly upload a few configuration files to an Azure Files share and then verify their contents. They use Azure Storage Explorer for its easy-to-use graphical interface.

*   **Azure File Sync:**
    *   **Definition:** A service that centralizes your organization's file shares in Azure Files, while keeping the flexibility, performance, and compatibility of an on-premises file server. It transforms Windows Server into a quick cache of your Azure file share.
    *   **Features:** Cloud tiering (cache frequently accessed files locally, tier less used files to Azure), multi-site sync, fast disaster recovery.
    *   **Use Cases:** Hybrid cloud file sharing, replacing or extending on-premises file servers, consolidating distributed file shares, enabling remote access to on-premises file data via Azure Files.
    *   **Scenario Example:** A company has multiple branch offices, each with its own Windows file server. They implement Azure File Sync to synchronize all branch office file servers with a central Azure Files share. This allows users in any branch to access the same set of files, and infrequently accessed files are tiered to the cloud to save local storage space.

**Other methods:**
*   **Azure portal:** For simple, ad-hoc uploads/downloads of individual files.
*   **SDKs and REST APIs:** For programmatic data transfer within applications.
*   **Azure Data Factory:** For complex data movement and transformation pipelines.

        `,
        mnemonic: `🚚 Moving Files to Azure
├── 💨 AzCopy (CLI - Fast, large files, scripting)
├── 🖼️ Storage Explorer (GUI - Visual management, smaller files)
└── 🔄 Azure File Sync (Hybrid - Sync on-prem server with Azure Files)`
      },
      {
        id: 'aas-migration-options',
        name: 'Describe migration options, including Azure Migrate and Azure Data Box',
        studyGuide: `
Azure provides tools and services to help migrate on-premises workloads and data to Azure:

*   **Azure Migrate:**
    *   **Definition:** A centralized hub of tools and services for discovering, assessing, and migrating on-premises servers, infrastructure, applications, and data to Azure.
    *   **Key Features:**
        *   **Discovery and Assessment:** Identifies on-premises VMs (Hyper-V, VMware), physical servers, databases, and web apps. Assesses their suitability for Azure and provides cost estimates.
        *   **Migration Tools Integration:** Integrates with various migration tools:
            *   **Azure Migrate: Server Migration:** For migrating VMs and physical servers.
            *   **Azure Database Migration Service (DMS):** For migrating on-premises databases to Azure database services.
            *   **Web App Migration Assistant:** For migrating .NET and PHP web apps to Azure App Service.
            *   **Data Migration Assistant (DMA):** For assessing database compatibility and migrating schema/data.
    *   **Use Cases:** Planning and executing migrations of various on-premises workloads to Azure, from individual servers to entire datacenters.
    *   **Scenario Example:** A company plans to migrate its on-premises VMware environment to Azure. They use Azure Migrate to discover all their VMs, assess their Azure readiness, get sizing recommendations for Azure VMs, and then use the integrated Server Migration tool to perform the actual migration with minimal downtime.

*   **Azure Data Box family:**
    *   **Definition:** A family of physical devices that Microsoft ships to you to enable fast, easy, and reliable offline transfer of large amounts of data to Azure when online transfer over the network is too slow, unreliable, or expensive.
    *   **Devices:**
        *   **Data Box Disk:** SSD disks (up to ~35TB usable) for small to medium datasets.
        *   **Data Box:** Ruggedized, server-sized appliance (up to ~80TB usable) for medium to large datasets.
        *   **Data Box Heavy:** Large, ruggedized appliance on wheels (up to ~800TB usable) for very large datasets (petabyte scale).
        *   **Data Box Gateway (Online):** A virtual appliance for online data transfer with local caching.
    *   **Process:** Order device -> Microsoft ships it -> Load data onto device -> Ship device back to Microsoft -> Microsoft uploads data to your Azure Storage account.
    *   **Use Cases:** Migrating terabytes or petabytes of data to Azure, initial bulk data transfer for backups or archives, situations with limited network bandwidth.
    *   **Scenario Example:** A media company has 100TB of video archive data stored on-premises that they want to move to Azure Blob Storage for long-term archiving. Uploading this over their internet connection would take weeks. They order an Azure Data Box, load the video files onto it, and ship it back to Microsoft for quick ingestion into Azure.

**Choosing between Online (Azure Migrate tools) and Offline (Data Box):**
*   Consider data size, available network bandwidth, time constraints, and cost.
*   For smaller datasets or good bandwidth, online migration is often suitable.
*   For very large datasets or poor bandwidth, offline migration with Data Box is more efficient.
        `,
        mnemonic: `✈️ Migration Options
├── ✨ Azure Migrate (Online - Discover, Assess, Migrate VMs, DBs, Web Apps)
└── 📦 Azure Data Box (Offline - Physical devices for large data transfer)
    ├── Disk (Small-Medium TBs)
    ├── Data Box (Medium-Large TBs)
    └── Heavy (Petabyte Scale)`
      }
    ],
    questions: [
       {
        id: 'aas-q1', // Corrected ID prefix
        text: 'Which Azure service provides a managed environment for running containerized applications with orchestration capabilities?',
        options: ['Azure Container Instances (ACI)', 'Azure Virtual Machines', 'Azure Kubernetes Service (AKS)', 'Azure App Service'],
        correctAnswerIndex: 2,
        feedback: 'Azure Kubernetes Service (AKS) is a managed container orchestration service based on the open-source Kubernetes system, ideal for complex, scalable containerized applications.',
      },
      {
        id: 'aas-q2', // Corrected ID prefix
        text: 'What is the primary purpose of Azure Availability Zones?',
        options: [
          'To provide data backup across regions',
          'To protect applications from datacenter-level failures within a region',
          'To offer lower latency to users in different countries',
          'To group resources for billing purposes',
        ],
        correctAnswerIndex: 1,
        feedback: 'Availability Zones are physically separate locations within an Azure region, each with independent power, cooling, and networking, protecting applications from datacenter-level failures.',
      },
       {
        id: 'aas-q3',
        text: 'Which Azure storage service is best suited for storing unstructured data such as images, videos, and documents?',
        options: ['Azure Files', 'Azure Disk Storage', 'Azure Blob Storage', 'Azure Table Storage'],
        correctAnswerIndex: 2,
        feedback: 'Azure Blob Storage is designed for storing massive amounts of unstructured data like text or binary data (objects), including images, videos, and documents.',
      },
      {
        id: 'aas-q4',
        text: 'What is the function of an Azure Resource Group?',
        options: ['To provide a bill for Azure services', 'A container that holds related resources for an Azure solution', 'A geographical area containing datacenters', 'A tool for migrating on-premises servers'],
        correctAnswerIndex: 1,
        feedback: 'An Azure Resource Group is a container that holds related resources for an Azure solution, allowing them to be managed as a single unit.',
      },
      {
        id: 'aas-q5',
        text: 'Which Azure networking service provides a private, dedicated connection between your on-premises network and Azure?',
        options: ['Azure VPN Gateway', 'Azure Virtual Network Peering', 'Azure ExpressRoute', 'Azure DNS'],
        correctAnswerIndex: 2,
        feedback: 'Azure ExpressRoute allows you to extend your on-premises networks into the Microsoft cloud over a private connection facilitated by a connectivity provider, not over the public internet.',
      },
      {
        id: 'aas-q6',
        text: 'Which Azure compute option is best for running a large number of identical, stateless virtual machines that can scale automatically?',
        options: ['Azure Virtual Machines', 'Azure Container Instances', 'Azure Functions', 'Azure Virtual Machine Scale Sets'],
        correctAnswerIndex: 3,
        feedback: 'Azure Virtual Machine Scale Sets (VMSS) allow you to create and manage a group of load-balanced VMs that can automatically increase or decrease in response to demand.',
      },
      {
        id: 'aas-q7',
        text: 'What is the main difference between Azure Blob Storage Hot tier and Archive tier?',
        options: ['Hot tier is for smaller files, Archive is for larger files.', 'Hot tier has higher storage costs and lower access costs; Archive has the lowest storage costs but high retrieval costs and latency.', 'Hot tier is for structured data, Archive is for unstructured data.', 'Hot tier data is replicated across regions, Archive tier is not.'],
        correctAnswerIndex: 1,
        feedback: 'The Hot tier is optimized for frequently accessed data with lower access costs, while the Archive tier is for rarely accessed data with the lowest storage cost but potentially hours of retrieval latency and higher retrieval costs.',
      },
      {
        id: 'aas-q8',
        text: 'Which Azure service provides managed file shares accessible via SMB and NFS protocols?',
        options: ['Azure Blob Storage', 'Azure Disk Storage', 'Azure Files', 'Azure Queue Storage'],
        correctAnswerIndex: 2,
        feedback: 'Azure Files provides fully managed file shares in the cloud that are accessible via the Server Message Block (SMB) protocol and Network File System (NFS) protocol.',
      },
       {
        id: 'aas-q9',
        text: 'What is the purpose of an Azure Private Endpoint?',
        options: ['To assign a public IP address to a PaaS service for internet access.', 'To enable secure communication between two Azure Virtual Networks.', 'To connect to Azure PaaS services using a private IP address from your VNet, keeping traffic off the public internet.', 'To filter network traffic to and from Azure resources.'],
        correctAnswerIndex: 2,
        feedback: 'Azure Private Endpoint uses a private IP address from your VNet to connect to Azure PaaS services (like Azure Storage or SQL Database) privately and securely, ensuring traffic does not traverse the public internet.',
      },
      {
        id: 'aas-q10',
        text: 'If you want to ensure that VMs are spread across different hardware racks and network switches within a single Azure datacenter to protect against localized hardware failures, what should you use?',
        options: ['Availability Zones', 'Region Pairs', 'Availability Sets', 'Resource Groups'],
        correctAnswerIndex: 2,
        feedback: 'Availability Sets spread your VMs across multiple fault domains (different hardware, power, network) and update domains within a single datacenter, protecting against localized hardware failures or planned maintenance.',
      },
      // Add 15 more questions to reach 25
    ],
  },
  {
    id: 'azure-identity-access-security',
    name: 'Azure Identity, Access, and Security (25-30%)',
    description: 'Learn about directory services, authentication, external identities, access control, and security models in Azure.',
    icon: ShieldCheck,
    studyGuide: `
This section focuses on how Azure manages identities, controls access to resources, and implements security. You'll explore Microsoft Entra ID (formerly Azure AD), different authentication methods, how to manage external user access, role-based access control (RBAC), and key security concepts like Zero Trust and defense-in-depth. Understanding these is vital for securing your Azure environment.
Key areas include:
*   Microsoft Entra ID and its features.
*   Authentication methods: SSO, MFA, passwordless.
*   External identities: B2B, B2C.
*   Conditional Access policies.
*   Azure RBAC for granular permissions.
*   Security principles: Zero Trust, Defense-in-Depth.
*   Microsoft Defender for Cloud.
`,
    mnemonic: `🔐 Azure Identity, Access & Security
├── 🆔 Directory Services (Entra ID, Entra Domain Services)
├── 🔑 Authentication (SSO, MFA, Passwordless)
├── 🤝 External Identities (B2B, B2C)
├──🚦Conditional Access (If-Then rules)
├── 📜 RBAC (Role-Based Access Control)
├──🛡️ Zero Trust & Defense-in-Depth
└── ☁️ Microsoft Defender for Cloud`,
    subTopics: [
      {
        id: 'aias-directory-services',
        name: 'Describe directory services in Azure, including Microsoft Entra ID and Microsoft Entra Domain Services',
        studyGuide: `
**Microsoft Entra ID (formerly Azure Active Directory / Azure AD):**
*   **Definition:** Microsoft’s cloud-based identity and access management (IAM) service. It helps employees sign in and access resources in:
    *   External resources, such as Microsoft 365, the Azure portal, and thousands of other SaaS applications.
    *   Internal resources, such as apps on your corporate network and intranet, along with any cloud apps developed by your own organization.
*   **Key Features:** User and group management, Single Sign-On (SSO), Multi-Factor Authentication (MFA), Conditional Access, application integration, B2B and B2C identity services.
*   **Primary Use:** Identity management for cloud applications and users. It is NOT a replacement for on-premises Active Directory Domain Services (AD DS) for domain joining traditional servers.
*   **Use Case Scenario:** A company uses Microsoft 365 for email and collaboration. Microsoft Entra ID manages the user identities, allowing employees to log in once (SSO) to access Outlook, SharePoint, Teams, and other integrated SaaS apps like Salesforce, all with MFA enforced for better security.

**Microsoft Entra Domain Services (formerly Azure AD Domain Services):**
*   **Definition:** Provides managed domain services such as domain join, Group Policy, LDAP, and Kerberos/NTLM authentication that is fully compatible with Windows Server Active Directory. You use these domain services without deploying, managing, and patching domain controllers (DCs) in the cloud.
*   **Key Features:** Managed domain controllers, domain join for Azure VMs, Group Policy support (limited), LDAP/Kerberos/NTLM.
*   **Primary Use:** "Lift-and-shift" scenarios for applications that rely on traditional domain services (like domain join, LDAP bind, Kerberos authentication) but you want to run them on Azure VMs without managing your own DCs in Azure. It synchronizes identities from a Microsoft Entra ID tenant (which can itself be synchronized from on-premises AD DS).
*   **Use Case Scenario:** A company migrates an old on-premises application to Azure VMs. This application requires VMs to be domain-joined for Kerberos authentication. Instead of deploying and managing their own Domain Controller VMs in Azure, they use Microsoft Entra Domain Services. This provides the necessary domain services, and user identities can be synchronized from their existing Microsoft Entra ID.

**Key Difference:**
*   **Microsoft Entra ID:** Identity for the cloud (SaaS apps, Azure resources).
*   **Microsoft Entra Domain Services:** Traditional domain services (domain join, Kerberos) for Azure VMs, managed by Azure.
        `,
        mnemonic: `🆔 Directory Services
├── ☁️ Microsoft Entra ID (Cloud IAM - Users, SSO, MFA for M365, Azure, SaaS)
└── 🖥️ Microsoft Entra Domain Services (Managed AD DS - Domain join, GPO, LDAP for Azure VMs)`
      },
      {
        id: 'aias-authentication-methods',
        name: 'Describe authentication methods in Azure, including single sign-on (SSO), multi-factor authentication (MFA), and passwordless',
        studyGuide: `
Authentication is the process of verifying a user's identity. Microsoft Entra ID supports several methods:

**Single Sign-On (SSO):**
*   **Definition:** Allows users to sign in once with a single set of credentials and gain access to multiple applications and services without needing to re-enter credentials for each one.
*   **Benefits:** Improved user experience (fewer passwords to remember), enhanced security (reduces password fatigue and risky password practices), simplified administration.
*   **How it works (with Entra ID):** Entra ID acts as the central identity provider. When a user tries to access an integrated application, the application redirects the user to Entra ID for authentication. If already signed in, access is granted; otherwise, the user authenticates with Entra ID.
*   **Use Case Scenario:** An employee logs into their Windows computer joined to Microsoft Entra ID. They can then open Outlook, SharePoint, and a custom company web app (all integrated with Entra ID) without being prompted for credentials again.

**Multi-Factor Authentication (MFA):**
*   **Definition:** A security process that requires users to provide two or more verification factors to gain access to a resource. It adds an extra layer of security beyond just a username and password.
*   **Factors (Something you know, something you have, something you are):**
    *   Knowledge factor: Password, PIN.
    *   Possession factor: Authenticator app (e.g., Microsoft Authenticator) on a phone, hardware token, smart card.
    *   Inherence factor: Biometrics (fingerprint, facial recognition).
*   **Benefits:** Significantly increases security by making it much harder for attackers to compromise accounts even if they have the password.
*   **Use Case Scenario:** When logging into the Azure portal or Microsoft 365, after entering their password, a user is prompted to approve a notification on their Microsoft Authenticator app or enter a code from the app. This ensures that even if an attacker has the user's password, they cannot log in without access to the user's phone.

**Passwordless Authentication:**
*   **Definition:** Methods that allow users to sign in without using a traditional password.
*   **Examples with Entra ID:**
    *   **Microsoft Authenticator app (phone sign-in):** User enters username, gets a notification on their phone, matches a number, and then uses biometrics or PIN on the phone.
    *   **FIDO2 Security Keys:** Hardware security keys (USB, NFC) that provide strong, phishing-resistant authentication.
    *   **Windows Hello for Business:** Biometric (face, fingerprint) or PIN sign-in on Windows devices.
*   **Benefits:** Enhanced security (phishing resistant, eliminates weak/stolen passwords), improved user experience (easier than remembering complex passwords).
*   **Use Case Scenario:** A company implements passwordless sign-in using the Microsoft Authenticator app. Employees use their username and then biometrics on their phone to access company resources, eliminating the need for passwords entirely for many scenarios.
        `,
        mnemonic: `🔑 Authentication Methods
├── ☝️ SSO (Single Sign-On - One login, many apps)
├── ✌️ MFA (Multi-Factor Auth - Password + Phone/Fingerprint)
└── 🚫 Passwordless (No password - Phone Sign-in, FIDO2, Windows Hello)`
      },
      {
        id: 'aias-external-identities',
        name: 'Describe external identities in Azure, including business-to-business (B2B) and business-to-customer (B2C)',
        studyGuide: `
Microsoft Entra External Identities allow organizations to securely interact with users outside their organization.

**Microsoft Entra B2B (Business-to-Business) collaboration:**
*   **Definition:** Enables you to invite guest users (partners, vendors, contractors) from other organizations to collaborate on your Azure resources, Microsoft 365 services, or other enterprise applications without creating new accounts for them in your directory.
*   **How it works:** Guest users use their own existing work, school, or social identities (like Outlook.com, Gmail) to sign in. Your Entra ID manages their access to your resources.
*   **Benefits:** Simplified collaboration, guest users manage their own credentials, centralized access control for guests.
*   **Use Case Scenario:** Your company is working on a project with an external consulting firm. You use Entra B2B to invite the consultants (using their own company email addresses) to access a specific SharePoint site and an Azure DevOps project related to the engagement. The consultants authenticate with their own credentials, and you control their access level within your environment.

**Azure AD B2C (Business-to-Consumer):**
*   **Definition:** A customer identity and access management (CIAM) solution that enables you to build customer-facing applications where users can sign up, sign in, and manage their profiles using social identities (Facebook, Google, etc.), enterprise identities, or local accounts (email/username and password specific to your app).
*   **Key Features:** Customizable user interface, user self-service (sign-up, password reset), integration with various identity providers, scales to millions of users.
*   **Purpose:** To manage identities for consumer-facing applications, not for internal employee access or collaboration with partners. It's a separate service from your employee Microsoft Entra ID tenant.
*   **Use Case Scenario:** A retail company develops a new e-commerce mobile app. They use Azure AD B2C to allow customers to sign up using their Facebook or Google accounts, or by creating a new account with an email and password. B2C handles the user registration, login, and profile management, allowing the company to focus on the app's core functionality.

**Key Difference:**
*   **B2B:** For collaboration with external partners/vendors using *their* existing identities to access *your* corporate resources.
*   **B2C:** For managing customer identities for *your* public-facing applications, allowing customers to use social/local accounts.
        `,
        mnemonic: `👥 External Identities
├── 👔 B2B (Business-to-Business - Invite guests like partners, vendors)
│   └── Guest uses OWN credentials for YOUR resources
└── 🛍️ B2C (Business-to-Consumer - Customer login for YOUR apps)
    └── Customers use Social (FB, Google) or Local accounts`
      },
      {
        id: 'aias-conditional-access',
        name: 'Describe Microsoft Entra Conditional Access',
        studyGuide: `
**Microsoft Entra Conditional Access:**
*   **Definition:** A feature of Microsoft Entra ID (typically Premium P1 or P2) that acts as a policy engine. It brings signals together, to make decisions, and enforce organizational policies. Conditional Access policies are "if-then" statements: if a user wants to access a resource, then they must complete an action.
*   **Signals (Conditions - "If"):**
    *   **User or group membership:** Specific users, groups, or roles.
    *   **Location:** IP address ranges (e.g., trusted corporate network, specific countries).
    *   **Device:** Device platform (Windows, iOS, Android), compliance status (is it managed and healthy?).
    *   **Application:** The cloud app being accessed (e.g., SharePoint, Salesforce).
    *   **Real-time and calculated risk detection:** Identity protection signals (e.g., leaked credentials, sign-in from anonymous IP).
*   **Decisions (Access Controls - "Then"):**
    *   **Grant access:**
        *   Require Multi-Factor Authentication (MFA).
        *   Require device to be marked as compliant.
        *   Require Hybrid Azure AD joined device.
        *   Require approved client app.
        *   Require app protection policy (for mobile apps).
    *   **Block access.**
*   **Purpose:** To enforce the right access controls under the right conditions, enhancing security and enabling Zero Trust principles.
*   **Use Case Scenario:** A company wants to enhance security for accessing Microsoft SharePoint Online. They create a Conditional Access policy:
    *   **IF** a user is trying to access SharePoint Online
    *   **AND** they are signing in from an untrusted network (outside the corporate office IP range)
    *   **THEN** grant access only if they complete Multi-Factor Authentication.
    *   Additionally, **IF** a user is identified as "high risk" by Identity Protection, **THEN** block access or force a password reset.
        `,
        mnemonic: `🚦 Conditional Access (IF-THEN rules for access)
├── 🤔 IF (User, Location, Device, App, Risk)
└── ✅ THEN (Grant, Block, Require MFA, Compliant Device)`
      },
      {
        id: 'aias-rbac',
        name: 'Describe Azure role-based access control (RBAC)',
        studyGuide: `
**Azure Role-Based Access Control (RBAC):**
*   **Definition:** A system that provides fine-grained access management for Azure resources. Using RBAC, you grant users, groups, service principals, or managed identities only the permissions they need to perform their jobs (principle of least privilege).
*   **Core Components:**
    *   **Security Principal:** An object that represents a user, group, service principal (application identity), or managed identity that is requesting access to Azure resources.
    *   **Role Definition (Role):** A collection of permissions. It lists the operations that can be performed, such as read, write, and delete. Azure has many built-in roles (e.g., Owner, Contributor, Reader, Virtual Machine Contributor) and you can create custom roles.
    *   **Scope:** The set of resources that the access applies to. Scopes can be defined at different levels: Management Group, Subscription, Resource Group, or individual Resource.
*   **Role Assignment:** The process of attaching a role definition to a security principal at a particular scope to grant access.
*   **Inheritance:** Permissions are inherited. If you assign a role at a parent scope (e.g., Subscription), those permissions are inherited by child scopes (e.g., Resource Groups and Resources within that subscription).
*   **Use Case Scenario:** A company has a development team that needs to create and manage Virtual Machines in a specific resource group ("Dev-VM-RG") but should not have access to other resources or billing information.
    *   **Security Principal:** The "DevTeam" Microsoft Entra group.
    *   **Role Definition:** The built-in "Virtual Machine Contributor" role (allows managing VMs but not the VNet or storage account access keys).
    *   **Scope:** The "Dev-VM-RG" resource group.
    *   By assigning the "Virtual Machine Contributor" role to the "DevTeam" group at the "Dev-VM-RG" scope, developers can manage VMs within that RG only, adhering to the principle of least privilege.
        `,
        mnemonic: `📜 Azure RBAC (Who gets what on which resources)
├── 👤 Security Principal (User, Group, App)
├── 🎩 Role Definition (Permissions - Owner, Reader, Contributor)
├── 🎯 Scope (MG, Sub, RG, Resource)
└── 🔗 Role Assignment (Principal + Role + Scope)`
      },
      {
        id: 'aias-zero-trust',
        name: 'Describe the concept of Zero Trust',
        studyGuide: `
**Zero Trust:**
*   **Definition:** A security model based on the principle of "never trust, always verify." It assumes that breaches are inevitable and that attackers may already be present within the network perimeter. Instead of assuming everything behind the corporate firewall is safe, Zero Trust requires verification for every access request, regardless of where it originates.
*   **Core Pillars/Principles:**
    1.  **Verify Explicitly:** Always authenticate and authorize based on all available data points, including user identity, location, device health, service or workload, data classification, and anomalies.
    2.  **Use Least Privileged Access:** Limit user access with just-in-time and just-enough-access (JIT/JEA), risk-based adaptive policies, and data protection to help secure both data and productivity.
    3.  **Assume Breach:** Minimize blast radius and segment access. Verify end-to-end encryption and use analytics to get visibility, drive threat detection, and improve defenses.
*   **Implementation in Azure:** Achieved through a combination of services and strategies:
    *   **Identities:** Strong authentication (MFA, passwordless), Conditional Access.
    *   **Endpoints (Devices):** Device compliance, endpoint detection and response (EDR).
    *   **Applications:** Secure access gateways, app protection policies.
    *   **Network:** Network segmentation (VNets, subnets, NSGs, Azure Firewall), microsegmentation.
    *   **Infrastructure:** JIT VM access, policy enforcement.
    *   **Data:** Data classification, encryption, access controls.
*   **Use Case Scenario:** An employee tries to access a sensitive internal application from their personal laptop while connected to a public Wi-Fi.
    *   **Verify Explicitly:** Microsoft Entra ID checks their identity, requires MFA. Conditional Access policies evaluate device compliance (personal laptop might be non-compliant or require specific checks) and network location.
    *   **Least Privilege:** Even if authenticated, their access to the application might be limited (e.g., read-only) or require additional approvals if the device is deemed risky.
    *   **Assume Breach:** The application itself is microsegmented, and network traffic is monitored for anomalies. Data accessed might be encrypted.
        `,
        mnemonic: `🛡️ Zero Trust ("Never Trust, Always Verify")
├── ✅ Verify Explicitly (Auth & Authorize everything)
├── 🤏 Use Least Privilege (Just enough access)
└── 💥 Assume Breach (Minimize impact, segment access)`
      },
      {
        id: 'aias-defense-in-depth',
        name: 'Describe the purpose of the defense-in-depth model',
        studyGuide: `
**Defense-in-Depth:**
*   **Definition:** A security strategy that employs multiple layers of security controls to protect assets. The idea is that if one layer of security is breached, subsequent layers are in place to prevent further exposure and stop or slow down an attack. It's a layered approach to security.
*   **Purpose:** To provide redundancy in security. No single security measure is foolproof, so by layering defenses, you increase the overall security posture and reduce the likelihood of a successful attack.
*   **Layers can include (examples):**
    1.  **Data:** Encryption at rest and in transit, data classification, access controls.
    2.  **Applications:** Secure coding practices, web application firewalls (WAF), vulnerability scanning.
    3.  **Compute (Hosts):** Endpoint protection, patching, JIT VM access, host-based firewalls.
    4.  **Network:** Network segmentation (VNets, subnets), Network Security Groups (NSGs), Azure Firewall, DDoS protection, intrusion detection/prevention systems (IDS/IPS).
    5.  **Perimeter:** Firewalls, VPNs. (In cloud, this is often about network boundaries and identity).
    6.  **Identity and Access:** Strong authentication (MFA), Conditional Access, RBAC, privileged identity management (PIM).
    7.  **Physical Security:** Secure datacenters, access controls, surveillance (handled by Azure for its infrastructure).
*   **Use Case Scenario:** Securing a web application hosted in Azure:
    *   **Data:** Customer database is encrypted using Transparent Data Encryption (TDE).
    *   **Application:** A Web Application Firewall (WAF) protects against common web exploits.
    *   **Compute:** VMs hosting the app are regularly patched, have endpoint security, and NSGs restrict traffic.
    *   **Network:** The VMs are in a VNet with specific subnets. Azure Firewall inspects traffic.
    *   **Identity:** Administrators use MFA and Conditional Access to manage resources. RBAC limits developer access.
    If an attacker bypasses the WAF (one layer), the NSG on the VM (another layer) might still block them. If they compromise a VM, strong identity controls (another layer) might prevent lateral movement.
        `,
        mnemonic: `🏰 Defense-in-Depth (Layered Security)
├── Data (Encryption)
├── Applications (WAF)
├── Compute (Endpoint Protection)
├── Network (NSG, Firewall)
├── Perimeter (Identity as perimeter)
├── Identity & Access (MFA, RBAC)
└── Physical (Datacenter security - by Azure)`
      },
      {
        id: 'aias-defender-for-cloud',
        name: 'Describe the purpose of Microsoft Defender for Cloud',
        studyGuide: `
**Microsoft Defender for Cloud (formerly Azure Security Center and Azure Defender):**
*   **Definition:** A cloud security posture management (CSPM) and cloud workload protection platform (CWPP) for all your Azure, on-premises, and multi-cloud (AWS, GCP) resources.
*   **Purpose:**
    1.  **Strengthen Security Posture (CSPM):**
        *   Provides visibility into your security state.
        *   Identifies misconfigurations and vulnerabilities.
        *   Offers security recommendations based on industry standards and benchmarks (like Azure Security Benchmark).
        *   Tracks compliance with regulatory standards.
        *   Secure Score: A quantifiable measure of your security posture.
    2.  **Protect Workloads (CWPP):**
        *   Provides advanced threat detection and protection for various resource types, including:
            *   Servers (VMs, on-premises servers)
            *   Storage accounts
            *   Databases (SQL, open-source DBs, Cosmos DB)
            *   Containers (AKS, ACR)
            *   App Service
            *   Key Vault
            *   And more...
        *   Uses machine learning and behavioral analytics to detect threats.
        *   Provides security alerts and incident investigation capabilities.
*   **Tiers:**
    *   **Free tier (Foundational CSPM):** Basic security recommendations, Secure Score, continuous assessment. Available by default.
    *   **Paid Defender plans (Enable specific workload protections):** Adds advanced threat detection, vulnerability assessment for VMs, just-in-time VM access, adaptive application controls, and much more for specific resource types.
*   **Use Case Scenario:** A company uses Azure for various workloads.
    *   **CSPM:** Defender for Cloud continuously assesses their Azure environment, highlighting that some Network Security Groups are overly permissive and some VMs are missing security patches. It provides a Secure Score and actionable recommendations to fix these issues.
    *   **CWPP:** They enable Microsoft Defender for Servers on their VMs. Defender for Cloud then monitors these VMs for suspicious activities like brute-force RDP attempts or malware execution, generating alerts if threats are detected. They also use Defender for SQL to detect anomalous database access patterns.
        `,
        mnemonic: `🛡️ Microsoft Defender for Cloud
├── CSPM (Cloud Security Posture Mgmt)
│   ├── 🔍 Visibility & Recommendations
│   └── 💯 Secure Score, Compliance
└── CWPP (Cloud Workload Protection Platform)
    ├── ⚔️ Threat Detection & Protection (Servers, DBs, Storage, etc.)
    └── 🚨 Security Alerts`
      }
    ],
    questions: [
      {
        id: 'aias-q1', // Corrected ID prefix
        text: 'Which Azure service provides cloud-based identity and access management for users, applications, and services?',
        options: ['Azure Firewall', 'Microsoft Entra ID', 'Azure Key Vault', 'Azure Policy'],
        correctAnswerIndex: 1,
        feedback: 'Microsoft Entra ID (formerly Azure Active Directory) is Microsoft’s cloud-based identity and access management (IAM) service.',
      },
      {
        id: 'aias-q2', // Corrected ID prefix
        text: 'What security principle advocates for granting users only the permissions essential to perform their job duties?',
        options: ['Defense in Depth', 'Zero Trust', 'Principle of Least Privilege', 'Shared Responsibility'],
        correctAnswerIndex: 2,
        feedback: 'The Principle of Least Privilege is a security concept in which a user is given only the minimum levels of access – or permissions – needed to perform their job tasks. Azure RBAC helps implement this.',
      },
      {
        id: 'aias-q3',
        text: 'Which Microsoft Entra ID feature allows you to define policies that evaluate sign-in conditions (like user location, device health) and enforce controls (like requiring MFA)?',
        options: ['Azure RBAC', 'Microsoft Entra B2B', 'Microsoft Entra Conditional Access', 'Microsoft Entra Domain Services'],
        correctAnswerIndex: 2,
        feedback: 'Microsoft Entra Conditional Access uses "if-then" statements (signals and decisions) to enforce organizational policies and control access to applications and resources.',
      },
      {
        id: 'aias-q4',
        text: 'In Azure RBAC, what defines the set of resources that a role assignment applies to?',
        options: ['Security Principal', 'Role Definition', 'Scope', 'Condition'],
        correctAnswerIndex: 2,
        feedback: 'Scope in Azure RBAC defines the set of resources (e.g., Management Group, Subscription, Resource Group, or individual Resource) to which the permissions in a role assignment apply.',
      },
      {
        id: 'aias-q5',
        text: 'What is the primary purpose of Microsoft Entra B2B collaboration?',
        options: ['To allow customers to sign up for your applications using social identities.', 'To enable guest users from other organizations to collaborate on your Azure resources.', 'To provide managed domain services like domain join for Azure VMs.', 'To enforce multi-factor authentication for all users.'],
        correctAnswerIndex: 1,
        feedback: 'Microsoft Entra B2B (Business-to-Business) collaboration allows you to securely share your company\'s applications and services with guest users from any other organization, while they maintain control over their own credentials.',
      },
      {
        id: 'aias-q6',
        text: 'Which security model is based on the principle of "never trust, always verify"?',
        options: ['Defense in Depth', 'Shared Responsibility', 'Zero Trust', 'Least Privilege'],
        correctAnswerIndex: 2,
        feedback: 'The Zero Trust security model operates on the principle of "never trust, always verify," requiring verification for every access request, regardless of its origin.',
      },
      {
        id: 'aias-q7',
        text: 'What functionality does Microsoft Defender for Cloud provide as a Cloud Security Posture Management (CSPM) tool?',
        options: ['Advanced threat detection for specific workloads.', 'Automated deployment of security agents.', 'Security recommendations, vulnerability assessments, and Secure Score.', 'Network traffic filtering and DDoS protection.'],
        correctAnswerIndex: 2,
        feedback: 'As a CSPM tool, Microsoft Defender for Cloud helps strengthen your security posture by providing security recommendations, identifying misconfigurations, assessing vulnerabilities, and offering a Secure Score.',
      },
      {
        id: 'aias-q8',
        text: 'What is one of the core principles of the Defense in Depth security strategy?',
        options: ['Relying on a single strong security control.', 'Employing multiple layers of security controls.', 'Granting full access by default.', 'Trusting all traffic within the network perimeter.'],
        correctAnswerIndex: 1,
        feedback: 'Defense in Depth is a strategy that employs multiple layers of security controls. If one layer is breached, other layers are in place to protect assets.',
      },
      {
        id: 'aias-q9',
        text: 'Which Microsoft Entra service is designed to help you manage customer identities for your public-facing applications?',
        options: ['Microsoft Entra ID P1', 'Microsoft Entra B2B', 'Microsoft Entra Domain Services', 'Azure AD B2C'],
        correctAnswerIndex: 3,
        feedback: 'Azure AD B2C (Business-to-Consumer) is a customer identity and access management (CIAM) solution for building customer-facing applications.',
      },
      {
        id: 'aias-q10',
        text: 'Which of these is an example of a "possession factor" in Multi-Factor Authentication (MFA)?',
        options: ['A password', 'A fingerprint scan', 'A code from an authenticator app on a phone', 'A security question'],
        correctAnswerIndex: 2,
        feedback: 'A possession factor in MFA is something you have, like a physical token or an authenticator app on a trusted device (e.g., your phone) that generates one-time codes or receives push notifications.',
      },
      // Add 15 more questions to reach 25
    ],
  },
  {
    id: 'azure-management-governance',
    name: 'Azure Management and Governance (30-35%)',
    description: 'Learn about cost management, governance tools, resource deployment, and monitoring in Azure.',
    icon: ClipboardList,
    studyGuide: `
This section covers how to effectively manage and govern your Azure environment. You'll learn about tools for understanding and controlling costs, features for ensuring compliance and consistent configurations (like Azure Policy and resource locks), methods for deploying and managing resources (portal, CLI, IaC), and services for monitoring the health and performance of your Azure solutions.
Key areas include:
*   Azure cost factors and management tools (Pricing Calculator, Cost Management).
*   Governance tools: Microsoft Purview, Azure Policy, Resource Locks.
*   Resource management: Azure portal, Cloud Shell (CLI/PowerShell), Azure Arc, IaC (ARM templates).
*   Monitoring tools: Azure Advisor, Service Health, Azure Monitor (Log Analytics, Alerts, Application Insights).
`,
    mnemonic: `📋 Azure Management & Governance
├── 💲 Cost Management (Factors, Tools)
├── 📜 Governance & Compliance (Purview, Policy, Locks)
├── 🛠️ Resource Management & Deployment (Portal, CLI, IaC, Arc)
└── 📊 Monitoring Tools (Advisor, Service Health, Monitor)`,
    subTopics: [
      {
        id: 'amg-factors-affect-costs',
        name: 'Describe factors that can affect costs in Azure',
        studyGuide: `
Several factors influence the cost of your Azure services:

*   **Resource Type:** Different services have different pricing structures (e.g., a high-performance VM costs more than a basic storage account).
*   **Service Tier / Performance Level:** Many services offer different tiers (e.g., Standard vs. Premium SSDs, Basic vs. Standard vs. Premium App Service plans). Higher tiers with more features or better performance generally cost more.
*   **Usage Meters (Consumption):** How much you use a service.
    *   *Compute:* Billed per second/minute/hour of VM uptime.
    *   *Storage:* Billed per GB of data stored, plus transaction costs.
    *   *Networking:* Data egress (outbound data transfer from Azure regions) is often a significant cost factor. Inbound data is usually free. Data transfer within the same region or between Availability Zones can also have costs.
*   **Location (Azure Region):** Prices for the same service can vary between Azure regions due to differences in local infrastructure costs, energy prices, and taxes.
*   **Instance Size/Capacity:** For services like VMs or databases, larger sizes with more CPU, RAM, or IOPS cost more.
*   **Number of Instances:** Running multiple instances of a service (e.g., for scalability or high availability) increases costs.
*   **Software Licensing:** Some VM images include software licenses (e.g., Windows Server, SQL Server) which add to the cost. Azure Hybrid Benefit can reduce this.
*   **Reserved Instances/Capacity:** Committing to 1-year or 3-year terms for certain services can significantly reduce costs compared to pay-as-you-go.
*   **Azure Support Plan:** Different support plans (Basic, Developer, Standard, ProDirect) have different monthly costs.
*   **Data Transfer (Bandwidth):**
    *   **Inbound:** Generally free.
    *   **Outbound (Egress):** Data leaving Azure datacenters to the internet or other regions is typically charged per GB. This can be a major cost.
    *   **Within AZs/Regions:** Some inter-AZ or inter-region traffic might incur costs.
*   **Billing Zones:** Data transfer costs can vary based on billing zones (geographic areas used for billing data transfer).

**Use Case Scenario:** A company deploys a web application using Azure VMs.
*   Choosing a **larger VM size** (more CPU/RAM) increases cost.
*   Storing large amounts of images in **Azure Blob Storage** adds to cost based on GB stored.
*   If the website serves many large file downloads to users globally, **outbound data transfer** costs will be significant.
*   Deploying VMs in a more expensive **Azure region** will increase costs.
*   Opting for **Premium SSDs** instead of Standard HDDs for VM disks increases storage costs but improves performance.
        `,
        mnemonic: `💸 Cost Factors
├── Resource Type (VM vs Storage)
├── Service Tier (Basic vs Premium)
├── Usage (Compute hours, GB stored)
├── Location (Region A vs Region B)
├── Instance Size (Small vs Large VM)
├── Data Transfer (Outbound costs!)
└── Licenses & Reservations`
      },
      {
        id: 'amg-pricing-tco-calculators',
        name: 'Compare the pricing calculator and the Total Cost of Ownership (TCO) Calculator',
        studyGuide: `
Azure provides two key tools for estimating costs:

**Azure Pricing Calculator:**
*   **Purpose:** To estimate the **future costs** of specific Azure services you plan to deploy. It helps you configure and estimate costs for individual Azure products or a combination of products to build a solution.
*   **How it works:** You select desired Azure services (VMs, storage, databases, etc.), configure their options (size, region, tier, quantity), and the calculator provides an estimated monthly or annual cost.
*   **Output:** Provides an itemized cost breakdown for the selected Azure services.
*   **Use Cases:**
    *   Estimating costs for a new application before deployment.
    *   Comparing costs of different Azure service configurations.
    *   Budgeting for upcoming Azure projects.
*   **Scenario Example:** A developer wants to estimate the monthly cost of running a D2s_v3 VM, a 100GB Premium SSD, and an Azure SQL Database (S0 tier) in the East US region. They use the Pricing Calculator to select these services, configure them, and get an estimated monthly bill.

**Total Cost of Ownership (TCO) Calculator:**
*   **Purpose:** To help you estimate the cost savings you can achieve by **migrating your existing on-premises workloads to Azure**. It compares the costs of running your workloads on-premises versus running them on Azure.
*   **How it works:** You input details about your current on-premises infrastructure (servers, storage, networking, software licenses) and operational costs (electricity, IT labor, datacenter space). The TCO Calculator then estimates the equivalent costs in Azure and highlights potential savings over a period (e.g., 3 or 5 years).
*   **Output:** Provides a detailed report comparing on-premises costs with Azure costs, showing potential savings in areas like hardware, software, electricity, IT labor, etc.
*   **Use Cases:**
    *   Building a business case for cloud migration.
    *   Understanding the financial benefits of moving from CapEx (on-premises) to OpEx (cloud).
    *   Identifying areas where Azure can reduce overall IT operational costs.
*   **Scenario Example:** A company is considering migrating its on-premises datacenter (with 50 physical servers, SAN storage, and networking gear) to Azure. They use the TCO Calculator, inputting their current hardware costs, software licenses, electricity bills, and IT staff salaries. The calculator provides an estimate of what it would cost to run equivalent workloads in Azure, showing them potential savings over 5 years by avoiding hardware refreshes and reducing operational overhead.

**Key Difference:**
*   **Pricing Calculator:** Estimates costs *of Azure services*. Focuses on new deployments or specific Azure configurations.
*   **TCO Calculator:** Estimates *savings by migrating to Azure*. Compares on-premises costs with Azure costs.
        `,
        mnemonic: `🧮 Cost Calculators
├── 🛒 Pricing Calculator (Estimates Azure service costs - "Shopping Cart")
└── ⚖️ TCO Calculator (Compares On-Prem vs Azure costs - "Migration Savings")`
      },
      {
        id: 'amg-cost-management-capabilities',
        name: 'Describe cost management capabilities in Azure',
        studyGuide: `
**Azure Cost Management + Billing:**
*   **Definition:** A suite of tools within the Azure portal that helps you understand, monitor, control, and optimize your Azure spending.
*   **Key Capabilities:**
    *   **Cost Analysis:** Analyze your Azure costs with various filters (by subscription, resource group, resource type, tag, location, etc.). View spending trends, identify top cost drivers.
    *   **Budgets:** Create budgets for subscriptions, resource groups, or specific filters. Set thresholds and receive alerts when spending approaches or exceeds the budget.
    *   **Alerts:** Configure cost alerts based on actual spending or forecasted spending against budgets, or when specific cost anomalies are detected.
    *   **Recommendations (from Azure Advisor):** Integrates with Azure Advisor to provide cost optimization recommendations (e.g., right-sizing VMs, deleting idle resources, purchasing reservations).
    *   **Exports:** Schedule regular exports of cost and usage data to an Azure Storage account for further analysis with tools like Power BI or for chargeback purposes.
    *   **Cost Allocation (using Tags):** Use tags to categorize resources and then filter cost analysis by tags to track spending for specific projects, departments, or environments.
    *   **Invoices and Payment:** View and download invoices, manage payment methods.
    *   **APIs:** Programmatically access cost and usage data.
*   **Purpose:** To provide visibility into Azure spending, enable proactive cost control, and help optimize cloud expenditure.
*   **Use Case Scenario:** A company uses Azure Cost Management to:
    *   Review its monthly Azure bill and understand which services are consuming the most budget using **Cost Analysis**.
    *   Set a **Budget** for their development team's subscription and receive an **Alert** if spending exceeds 80% of the budget.
    *   Implement **Tags** like "Project:Phoenix" and "Environment:Production" on all resources, then use these tags in Cost Analysis to track the specific costs of Project Phoenix in the production environment.
    *   Follow **Recommendations** from Azure Advisor (via Cost Management) to resize underutilized VMs, saving money.
        `,
        mnemonic: `💰 Azure Cost Management
├── 📊 Cost Analysis (See where money goes)
├── 🎯 Budgets (Set spending limits)
├── 🔔 Alerts (Get notified on spending)
├──💡Recommendations (From Advisor for savings)
└── 🏷️ Tags (Allocate costs)`
      },
      {
        id: 'amg-purpose-of-tags',
        name: 'Describe the purpose of tags',
        studyGuide: `
**Tags:**
*   **Definition:** Metadata elements that you apply to your Azure resources. A tag consists of a name-value pair (e.g., \`Environment:Production\`, \`CostCenter:Marketing\`, \`Owner:JohnDoe\`).
*   **Purpose:**
    1.  **Resource Organization:** Logically organize resources across subscriptions, especially in complex environments.
    2.  **Cost Management and Billing:** Track Azure costs by filtering and grouping resources based on tags. This is crucial for departmental chargebacks or project-based cost accounting.
    3.  **Automation:** Use tags in automation scripts (e.g., to shut down all VMs tagged with \`Environment:Dev\` outside of business hours).
    4.  **Security:** Identify resources based on their sensitivity level or compliance requirements (e.g., \`Compliance:PCI\`).
    5.  **Operational Management:** Group resources for operational tasks, like identifying all resources related to a specific application for monitoring or patching.
    6.  **Policy Enforcement:** Azure Policy can enforce tagging requirements (e.g., requiring all resources to have an \`Owner\` tag).
*   **Characteristics:**
    *   Applied to resource groups or individual resources.
    *   Resources inherit tags from their resource group at creation time, but these can be overridden or added to.
    *   A resource can have up to 50 tags.
    *   Tag names are case-insensitive, but tag values are case-sensitive.
*   **Use Case Scenario:** An enterprise uses tags extensively:
    *   \`CostCenter:HR\`, \`CostCenter:Finance\` for billing.
    *   \`Environment:Production\`, \`Environment:Development\`, \`Environment:Test\` to differentiate workloads and apply different policies or automation scripts.
    *   \`ApplicationName:ERP_System\`, \`ApplicationName:CRM_Portal\` to group resources belonging to specific applications.
    *   \`Owner:user@company.com\` to identify who is responsible for a resource.
    *   \`ProjectID:AlphaUpgrade\` for temporary project resource tracking.
    When the finance team reviews the Azure bill, they can use Azure Cost Management to filter costs by the \`CostCenter\` tag to see how much each department is spending.
        `,
        mnemonic: `🏷️ Tags (Name:Value labels for resources)
├── 📂 Organization
├── 💲 Cost Tracking & Billing
├── 🤖 Automation
├── 🛡️ Security Identification
└── ⚙️ Operational Management`
      },
      {
        id: 'amg-purview',
        name: 'Describe the purpose of Microsoft Purview in Azure',
        studyGuide: `
**Microsoft Purview (formerly Azure Purview):**
*   **Definition:** A unified data governance service that helps you manage and govern your on-premises, multicloud, and software-as-a-service (SaaS) data. It helps you discover, understand, and manage your data estate.
*   **Purpose:**
    1.  **Data Discovery and Classification:** Automatically scan and classify data across your entire data estate (Azure, on-premises, other clouds). Identify sensitive data (e.g., PII, financial data) using built-in and custom classifiers.
    2.  **Data Catalog:** Create a business glossary and a searchable catalog of data assets, making it easier for data consumers (analysts, data scientists) to find and understand relevant data.
    3.  **Data Lineage:** Visualize the lineage of data as it moves through various processes and systems (e.g., from source database, through ETL processes, to Power BI reports).
    4.  **Data Governance Insights:** Provides an overview of your data estate, including sensitive data distribution, data duplication, and access patterns, helping to identify risks and improve governance.
    5.  **Access Management (for data plane in some sources):** Can integrate to manage access to data.
*   **Key Components:**
    *   **Data Map:** The foundational platform that captures metadata about enterprise data.
    *   **Data Catalog:** Enables users to search and browse for data assets.
    *   **Data Estate Insights:** Provides reports on data governance posture.
*   **Use Case Scenario:** A large financial institution has data stored in various Azure services (SQL Database, Blob Storage, Data Lake), on-premises servers, and some third-party cloud services.
    *   They use Microsoft Purview to scan all these data sources, automatically **discover** what data they have, and **classify** sensitive information like credit card numbers and social security numbers.
    *   Data analysts can use the Purview **Data Catalog** to search for relevant datasets for their reports, understand the data's meaning through the business glossary, and see its **lineage** to ensure they are using trusted data.
    *   Compliance officers use Purview **Insights** to monitor where sensitive data resides and ensure appropriate controls are in place.
        `,
        mnemonic: `🔍 Microsoft Purview (Data Governance)
├── 🗺️ Data Discovery & Classification (Find & Label data)
├── 📚 Data Catalog (Searchable inventory of data)
├── 🧬 Data Lineage (Track data movement)
└── 📊 Data Estate Insights (Understand your data landscape)`
      },
      {
        id: 'amg-azure-policy',
        name: 'Describe the purpose of Azure Policy',
        studyGuide: `
**Azure Policy:**
*   **Definition:** A service in Azure that you use to create, assign, and manage policies. These policies enforce different rules and effects over your resources, so those resources stay compliant with your corporate standards and service level agreements (SLAs).
*   **Purpose:**
    *   **Enforce Standards:** Ensure resource configurations meet organizational requirements (e.g., requiring specific tags, restricting VM SKUs, ensuring encryption is enabled).
    *   **Compliance:** Assess and maintain compliance with internal policies and external regulations.
    *   **Cost Control:** Restrict deployment of expensive resource types or resources in non-approved regions.
    *   **Security:** Enforce security best practices (e.g., ensuring NSGs are applied, disallowing public IPs on certain VMs).
    *   **Remediation:** Can automatically remediate non-compliant resources or deploy resources to achieve compliance (e.g., automatically adding a required tag).
*   **How it works:**
    *   **Policy Definition:** Defines the conditions under which a policy is enforced and the effect that takes place (e.g., Deny, Audit, Append, DeployIfNotExists, Modify). Azure provides many built-in definitions.
    *   **Initiative Definition (Policy Set):** A collection of policy definitions grouped together to achieve a larger goal (e.g., "Enable Monitoring in Azure Security Center").
    *   **Assignment:** Policies or initiatives are assigned to a specific scope (Management Group, Subscription, or Resource Group).
    *   **Evaluation:** Azure Policy evaluates resources at creation time and on an ongoing basis for compliance.
*   **Use Case Scenario:** A company wants to ensure that all newly created Azure Storage accounts have "Secure transfer required" (HTTPS) enabled and are restricted to deployment only in the "North Europe" region.
    *   They assign a built-in **policy definition** that audits storage accounts without secure transfer enabled.
    *   They create a custom **policy definition** with a "Deny" effect to prevent storage account creation outside "North Europe."
    *   These policies are assigned at the **Subscription scope**. If a user tries to create a storage account in "East US," the deployment will be denied. Existing storage accounts without secure transfer will be flagged as non-compliant.
        `,
        mnemonic: `📜 Azure Policy (Enforce Rules & Compliance)
├── 📏 Define Rules (Policy Definitions - e.g., Allowed regions, Required tags)
├── 묶음 Initiative (Group of policies)
├── 🎯 Assign to Scope (MG, Sub, RG)
└── ✅ Effects: Deny, Audit, Append, DeployIfNotExists`
      },
      {
        id: 'amg-resource-locks',
        name: 'Describe the purpose of resource locks',
        studyGuide: `
**Resource Locks:**
*   **Definition:** A feature in Azure that helps prevent accidental deletion or modification of critical Azure resources. Locks can be applied to subscriptions, resource groups, or individual resources.
*   **Purpose:** To protect important resources from inadvertent changes or deletion by users, even those with Owner permissions (though Owners can still remove locks).
*   **Types of Locks:**
    1.  **CanNotDelete (Delete Lock):** Authorized users can still read and modify a resource, but they can't delete it.
    2.  **ReadOnly Lock:** Authorized users can read a resource, but they can't delete or update it. Applying a ReadOnly lock is similar to restricting all authorized users to the permissions granted by the "Reader" role.
*   **Inheritance:** Locks applied at a parent scope (e.g., Subscription or Resource Group) are inherited by child resources.
*   **Management:** Locks must be removed before the locked resource can be deleted or modified (in the case of ReadOnly locks).
*   **Use Case Scenario:** A company has a critical production database server hosted on an Azure VM within the "Prod-DB-RG" resource group. To prevent accidental deletion:
    *   They apply a **CanNotDelete** lock to the "Prod-DB-RG" resource group. This prevents anyone from accidentally deleting the entire resource group and its contents.
    *   They might also apply a **CanNotDelete** lock directly to the VM resource itself for an extra layer of protection.
    *   For a very stable resource that should not change at all, like a historical data archive storage account, they might apply a **ReadOnly** lock.
        `,
        mnemonic: `🔒 Resource Locks (Prevent Accidental Changes)
├── 🚫 CanNotDelete (Prevents deletion, allows modification)
└── 👁️ ReadOnly (Prevents deletion AND modification)
    └── Applied at Sub, RG, or Resource level`
      },
      {
        id: 'amg-azure-portal',
        name: 'Describe the Azure portal',
        studyGuide: `
**Azure Portal (portal.azure.com):**
*   **Definition:** A web-based, unified console that provides an alternative to command-line tools for building, managing, and monitoring everything from simple web apps to complex cloud deployments in Azure.
*   **Key Features:**
    *   **Graphical User Interface (GUI):** Allows users to interact with Azure services visually.
    *   **Resource Management:** Create, configure, monitor, and delete Azure resources.
    *   **Dashboards:** Customizable dashboards to display key information and metrics about your resources.
    *   **Cost Management and Billing:** Access to Azure Cost Management + Billing tools.
    *   **Monitoring and Diagnostics:** View performance metrics, logs, and alerts.
    *   **Marketplace:** Discover and deploy solutions from Microsoft and third-party vendors.
    *   **Access Control (IAM):** Manage users, groups, and role assignments (RBAC).
    *   **Settings and Personalization:** Customize the portal experience.
    *   **Integrated Cloud Shell:** Provides quick access to Azure CLI and PowerShell within the browser.
*   **Purpose:** To provide a comprehensive and user-friendly interface for managing Azure resources, especially for users who prefer a visual approach or for tasks that are easier to perform through a GUI.
*   **Use Case Scenario:**
    *   A new Azure user wants to create their first Virtual Machine. They use the Azure portal's guided wizard to select the OS, size, region, and networking options.
    *   An administrator wants to quickly check the status of their web applications and view recent alerts. They log into the Azure portal and view their customized dashboard.
    *   A manager needs to review the monthly Azure spending. They navigate to the Cost Management + Billing section in the portal.
        `,
        mnemonic: `🖼️ Azure Portal (Web-based Management Console)
├── 🖱️ GUI for managing Azure resources
├── 📊 Dashboards, Cost Management, Monitoring
├── 🛒 Marketplace
└── ☁️ Includes Cloud Shell access`
      },
      {
        id: 'amg-cloud-shell-cli-powershell',
        name: 'Describe Azure Cloud Shell, including Azure Command-Line Interface (CLI) and Azure PowerShell',
        studyGuide: `
**Azure Cloud Shell:**
*   **Definition:** An interactive, authenticated, browser-accessible shell for managing Azure resources. It provides the flexibility of choosing the shell experience that best suits the way you work, either Bash (with Azure CLI) or PowerShell (with Azure PowerShell module).
*   **Key Features:**
    *   **Browser-based:** Accessible from anywhere via the Azure portal or directly (shell.azure.com).
    *   **Pre-configured:** Comes with popular command-line tools and language support pre-installed (Azure CLI, Azure PowerShell, Git, text editors like \`code\`, \`vim\`, \`nano\`).
    *   **Authenticated:** Automatically authenticates with your Azure account.
    *   **Persistent Storage:** Uses an Azure Files share in your subscription to persist files across sessions (your \`$HOME\` directory).
    *   **Choice of Shell:** Switch between Bash and PowerShell environments.
*   **Purpose:** To provide a convenient, ready-to-use command-line environment for managing Azure resources without needing to install tools locally.
*   **Use Case Scenario:** An administrator needs to quickly run a script to create multiple storage accounts. They open Azure Cloud Shell from the Azure portal, choose their preferred shell (e.g., Bash with Azure CLI), and execute the script directly in the browser. Any scripts or files they create are saved to their linked Azure Files share for future use.

**Azure Command-Line Interface (CLI):**
*   **Definition:** A cross-platform (Windows, Linux, macOS) command-line tool for managing Azure resources. It uses a \`az\` command structure.
*   **Key Features:** Scriptable, designed for automation, output often in JSON (good for querying with \`jq\`).
*   **Shell Environment:** Primarily used in Bash or similar command-line shells.
*   **Use Case Scenario:** A DevOps engineer wants to automate the deployment of an entire application environment (VMs, VNets, storage). They write a Bash script using Azure CLI commands to create and configure all the necessary resources.

**Azure PowerShell:**
*   **Definition:** A set of cmdlets for managing Azure resources directly from PowerShell. It uses a Verb-Noun command structure (e.g., \`Get-AzVM\`, \`New-AzResourceGroup\`).
*   **Key Features:** Object-based (PowerShell cmdlets return objects), integrates well with existing PowerShell scripting and Windows environments.
*   **Shell Environment:** Runs in PowerShell.
*   **Use Case Scenario:** A Windows administrator who is proficient in PowerShell needs to manage Azure VMs and automate tasks like retrieving VM status or applying configurations. They use Azure PowerShell cmdlets within their PowerShell scripts.

**Cloud Shell provides both Azure CLI (in Bash) and Azure PowerShell.** You can also install Azure CLI and Azure PowerShell locally on your computer.
        `,
        mnemonic: `⌨️ Command-Line Tools
├── ☁️ Azure Cloud Shell (Browser-based Bash/PowerShell)
│   ├── Pre-configured, Authenticated, Persistent Storage
├── 🐍 Azure CLI (\`az ...\` commands, cross-platform, for Bash)
└── 🅿️ Azure PowerShell (\`Verb-AzNoun\` cmdlets, for PowerShell)`
      },
      {
        id: 'amg-azure-arc',
        name: 'Describe the purpose of Azure Arc',
        studyGuide: `
**Azure Arc:**
*   **Definition:** A bridge that extends Azure management and services to any infrastructure, enabling you to manage resources located outside of Azure (on-premises, other clouds like AWS/GCP, or at the edge) as if they were running in Azure.
*   **Purpose:** To provide a consistent management plane, governance, and Azure services for hybrid and multicloud environments.
*   **Key Capabilities (Azure Arc-enabled...):**
    *   **Servers:** Manage Windows and Linux servers hosted outside of Azure using Azure management tools like Azure Policy, Azure Monitor, Microsoft Defender for Cloud, Update Management.
    *   **Kubernetes:** Connect and configure Kubernetes clusters (running anywhere) to Azure for GitOps-based configuration management, Azure Policy, Azure Monitor for containers.
    *   **Data Services:** Run Azure data services like Azure SQL Managed Instance and Azure PostgreSQL Hyperscale on any Kubernetes infrastructure outside of Azure, providing Azure innovation and cloud benefits on your own hardware.
    *   **VMware vSphere (Preview):** Manage VMware vSphere environments through Azure.
    *   **System Center Virtual Machine Manager (SCVMM) (Preview):** Extend Azure management to SCVMM environments.
*   **How it works:** You install an Azure Arc agent on your non-Azure machines or connect your Kubernetes clusters. These resources then project as Azure resources in the Azure portal, allowing you to use familiar Azure management tools.
*   **Use Case Scenario:** A company has a hybrid environment with some servers running on-premises and others in Azure. They also have a Kubernetes cluster running in a different public cloud.
    *   They use **Azure Arc-enabled servers** to manage their on-premises Windows and Linux servers through Azure. This allows them to apply Azure Policies for configuration consistency, monitor them with Azure Monitor, and secure them with Microsoft Defender for Cloud, all from the Azure portal.
    *   They use **Azure Arc-enabled Kubernetes** to connect their Kubernetes cluster (running on AWS) to Azure, enabling them to deploy applications using GitOps and apply Azure Policy for Kubernetes to enforce cluster configurations.
        `,
        mnemonic: `🌉 Azure Arc (Extend Azure Management Anywhere)
├── 🖥️ Arc-enabled Servers (Manage on-prem/other cloud servers via Azure)
├── ☸️ Arc-enabled Kubernetes (Manage K8s clusters anywhere)
└── 💾 Arc-enabled Data Services (Run Azure data services on-prem/other clouds)`
      },
      {
        id: 'amg-iac',
        name: 'Describe infrastructure as code (IaC)',
        studyGuide: `
**Infrastructure as Code (IaC):**
*   **Definition:** The practice of managing and provisioning IT infrastructure (networks, virtual machines, load balancers, connection topology) through machine-readable definition files (code), rather than through physical hardware configuration or interactive configuration tools.
*   **Core Principles:**
    *   **Declarative or Imperative:**
        *   *Declarative:* Define the desired end state, and the IaC tool figures out how to achieve it (e.g., ARM templates, Terraform).
        *   *Imperative:* Define the specific sequence of commands to achieve the desired state (e.g., scripts using Azure CLI/PowerShell).
    *   **Idempotency:** Applying the same configuration multiple times results in the same state (no unintended side effects).
    *   **Version Control:** Infrastructure code is stored in version control systems (like Git), enabling history tracking, collaboration, and rollback.
    *   **Automation:** Enables automated provisioning and management of infrastructure.
*   **Benefits:**
    *   **Speed and Agility:** Rapidly deploy and update infrastructure.
    *   **Consistency and Standardization:** Reduces errors and configuration drift by defining infrastructure in a repeatable way.
    *   **Version Control and Auditing:** Track changes, collaborate, and revert to previous states.
    *   **Cost Savings:** Automate deployments, reduce manual effort, and optimize resource usage.
    *   **Disaster Recovery:** Quickly redeploy infrastructure in a new region from code.
    *   **Scalability:** Easily scale infrastructure up or down by modifying code.
*   **Tools for Azure IaC:**
    *   **Azure Resource Manager (ARM) templates:** Native Azure IaC, declarative JSON.
    *   **Bicep:** A domain-specific language (DSL) that uses declarative syntax to deploy Azure resources. It transpiles to ARM JSON. Easier to read/write than ARM JSON.
    *   **Terraform:** Popular open-source IaC tool, supports multiple cloud providers including Azure.
    *   **Azure CLI / Azure PowerShell scripts:** Can be used for imperative IaC.
*   **Use Case Scenario:** A DevOps team needs to deploy identical development, staging, and production environments for their application. They write an ARM template (or Bicep file) that defines all the necessary Azure resources (VMs, VNet, Load Balancer, Storage). They store this template in Git. When a new environment is needed, they deploy the template, ensuring each environment is configured identically and consistently. Updates to the infrastructure are made by modifying the template and redeploying.
        `,
        mnemonic: `🏗️ Infrastructure as Code (IaC - Manage infra with code)
├── 📜 Definition Files (ARM/Bicep, Terraform)
├── 🔄 Idempotent, Version Controlled, Automated
└── ✨ Benefits: Speed, Consistency, Scalability, DR`
      },
      {
        id: 'amg-arm-templates',
        name: 'Describe Azure Resource Manager (ARM) and ARM templates',
        studyGuide: `
**Azure Resource Manager (ARM):**
*   **Definition:** The deployment and management service for Azure. It provides a consistent management layer that enables you to create, update, and delete resources in your Azure subscription. All Azure interactions (portal, CLI, PowerShell, SDKs) go through ARM.
*   **Key Features:**
    *   **Declarative Syntax (via ARM templates):** You define the desired state of your resources.
    *   **Idempotent Operations:** Re-deploying the same template results in the same state.
    *   **Resource Grouping:** Manages resources as a group (Resource Groups).
    *   **Role-Based Access Control (RBAC):** Integrated for secure access management.
    *   **Tagging:** Supports tagging for organization and billing.
    *   **Dependency Management:** Handles dependencies between resources during deployment.
    *   **Extensibility:** Supports deploying a wide range of Azure services.
*   **Purpose:** To provide a unified way to deploy, manage, and organize Azure resources.

**ARM Templates:**
*   **Definition:** JavaScript Object Notation (JSON) files that define the infrastructure and configuration for your Azure solution. They use a declarative syntax, meaning you describe what you want to deploy, not how to deploy it.
*   **Key Sections in an ARM Template:**
    *   \`$schema\`: Specifies the location of the JSON schema file that describes the version of the template language.
    *   \`contentVersion\`: Version of the template (e.g., 1.0.0.0).
    *   \`parameters\`: Values that are provided when deployment is executed to customize resource deployment (e.g., VM name, region).
    *   \`variables\`: Values that are used as JSON fragments in the template to simplify template language expressions.
    *   \`resources\`: Specifies the Azure resources to be deployed or updated (e.g., VMs, storage accounts, VNets).
    *   \`outputs\`: Values that are returned after deployment (e.g., public IP address of a VM).
*   **Benefits (as part of IaC):** Automation, consistency, repeatability, versioning, modularity (linked templates).
*   **Bicep as an alternative:** Bicep is a domain-specific language (DSL) that provides a more concise and easier-to-read syntax for authoring Azure deployments. Bicep files are transpiled into ARM JSON templates.
*   **Use Case Scenario:** A company wants to standardize the deployment of a 3-tier web application (web server, app server, database server VMs with specific network configurations). They create an ARM template that defines all these resources, their properties, and dependencies. This template can then be repeatedly deployed to create identical environments for development, testing, and production, ensuring consistency and reducing manual errors. Parameters are used to specify environment-specific names or sizes.
        `,
        mnemonic: `⚙️ Azure Resource Manager (ARM - Deployment Service)
└── 📄 ARM Templates (JSON/Bicep files defining resources)
    ├── Parameters, Variables, Resources, Outputs
    └── Declarative, Idempotent`
      },
      {
        id: 'amg-azure-advisor',
        name: 'Describe the purpose of Azure Advisor',
        studyGuide: `
**Azure Advisor:**
*   **Definition:** A personalized cloud consultant that helps you follow best practices to optimize your Azure deployments. It analyzes your resource configuration and usage telemetry and then recommends solutions that can help you improve the cost effectiveness, performance, reliability (formerly high availability), and security of your Azure resources.
*   **Purpose:** To provide proactive, actionable, and personalized recommendations to optimize your Azure environment.
*   **Recommendation Categories:**
    1.  **Cost:** Identify opportunities to reduce Azure spending (e.g., right-size or shut down underutilized VMs, purchase reserved instances, delete idle resources).
    2.  **Security (integrated with Microsoft Defender for Cloud):** Improve your security posture by implementing security recommendations (e.g., enable MFA, remediate vulnerabilities, apply NSGs).
    3.  **Reliability (formerly High Availability):** Enhance the business continuity of your applications (e.g., configure backup for VMs, use Availability Zones, set up disaster recovery).
    4.  **Performance:** Improve the speed and responsiveness of your applications (e.g., improve SQL Database performance, reduce network latency, use Premium Storage for I/O intensive workloads).
    5.  **Operational Excellence:** Help you achieve process and workflow efficiency, resource manageability, and deployment best practices (e.g., use Azure Policy, implement tagging, use ARM templates).
*   **Features:**
    *   Personalized recommendations based on your specific Azure usage.
    *   Actionable steps to implement recommendations.
    *   Ability to postpone or dismiss recommendations.
    *   Download recommendations as CSV or PDF.
*   **Access:** Available in the Azure portal.
*   **Use Case Scenario:** An Azure administrator regularly reviews Azure Advisor.
    *   Advisor **Cost** recommendations suggest that two of their VMs are consistently underutilized and could be resized to a smaller, cheaper SKU, saving $50/month.
    *   Advisor **Security** recommendations highlight that MFA is not enabled for some subscription owners.
    *   Advisor **Reliability** recommendations point out that a critical VM does not have backup configured.
    *   Advisor **Performance** recommendations suggest enabling caching for an App Service to improve load times.
    The administrator can then take action on these recommendations to optimize their environment.
        `,
        mnemonic: `💡 Azure Advisor (Personalized Cloud Consultant)
├── 💰 Cost (Save money)
├── 🛡️ Security (Improve posture)
├── 💪 Reliability (Increase uptime)
├── 🚀 Performance (Boost speed)
└── ✨ Operational Excellence (Better processes)`
      },
      {
        id: 'amg-service-health',
        name: 'Describe Azure Service Health',
        studyGuide: `
**Azure Service Health:**
*   **Definition:** A service in Azure that provides personalized information about how Azure service issues, planned maintenance, or other events might affect your specific Azure resources and subscriptions.
*   **Purpose:** To keep you informed about the health of the Azure services and regions you use, so you can understand the impact of any Azure-side issues on your applications and plan accordingly.
*   **Key Components/Information Provided:**
    1.  **Azure status (Service Issues):** Informs you about Azure service outages or platform issues that are currently affecting or may affect your resources. Provides details on the issue, affected regions/services, impact, and Microsoft's mitigation efforts and ETAs.
    2.  **Planned maintenance:** Notifies you in advance about upcoming maintenance activities that might impact the availability of your resources. Allows you to prepare or schedule your own maintenance.
    3.  **Health advisories:** Provides information about issues that require your action to avoid service interruption (e.g., service retirements, breaking changes, quota issues).
    4.  **Security advisories:** Notifies you about security-related events or vulnerabilities that may impact your services.
    5.  **Health history:** A record of past health events.
*   **Personalization:** Shows information relevant to the specific services and regions you are using.
*   **Alerting:** You can configure Service Health alerts to be notified via email, SMS, webhook, or ITSM tools when your resources are affected by an Azure health event.
*   **Access:** Available in the Azure portal.
*   **Difference from Azure Monitor:** Service Health informs about Azure platform issues. Azure Monitor helps you understand the health and performance of *your own applications and resources* running on Azure.
*   **Use Case Scenario:** An administrator receives an Azure Service Health alert indicating that there's an ongoing storage issue in the "West Europe" region where some of their VMs are located. They check Service Health in the Azure portal to get more details about the impact and Microsoft's progress in resolving it. This helps them communicate potential disruptions to their users and decide if they need to activate any disaster recovery plans. They also see a "Planned Maintenance" notification for a network upgrade in another region, allowing them to inform relevant teams.
        `,
        mnemonic: `🩺 Azure Service Health (Azure Platform Status for YOU)
├── ❗ Service Issues (Outages impacting your resources)
├── 🛠️ Planned Maintenance (Upcoming Azure maintenance)
├── 📢 Health Advisories (Actions you need to take)
└── 🛡️ Security Advisories (Security events)`
      },
      {
        id: 'amg-azure-monitor',
        name: 'Describe Azure Monitor, including Log Analytics, Azure Monitor alerts, and Application Insights',
        studyGuide: `
**Azure Monitor:**
*   **Definition:** A comprehensive monitoring service in Azure that provides a full-stack solution for collecting, analyzing, and acting on telemetry from your cloud and on-premises environments.
*   **Purpose:** To help you understand how your applications are performing, identify issues affecting them, and proactively respond to critical situations.
*   **Data Sources:** Collects data from various sources: Azure resources (VMs, App Service, Storage, etc.), applications, operating systems, custom sources.
*   **Core Capabilities:**
    *   **Metrics:** Numerical values collected at regular intervals that describe some aspect of a system at a particular time (e.g., CPU percentage, request latency).
    *   **Logs:** Event logs, performance logs, application traces, security logs. Stored and queried in Log Analytics workspaces.
    *   **Visualization:** Dashboards, workbooks, charts, Power BI.
    *   **Alerting:** Proactively notify you or trigger automated actions when specific conditions are met in your telemetry data.
    *   **Insights:** Provides curated monitoring experiences for specific services (e.g., VM Insights, Container Insights, Application Insights).

**Log Analytics (part of Azure Monitor Logs):**
*   **Definition:** A tool in the Azure portal used to edit and run log queries against data collected by Azure Monitor Logs, typically stored in a Log Analytics workspace.
*   **Query Language:** Uses Kusto Query Language (KQL).
*   **Purpose:** To perform complex analysis, identify trends, correlate data from different sources, and troubleshoot issues by querying log data.
*   **Use Case Scenario:** An administrator suspects an application is failing due to errors. They use Log Analytics to query application logs and system event logs from the affected VMs to find error messages, correlate events, and pinpoint the root cause.

**Azure Monitor Alerts:**
*   **Definition:** Automatically notify you or trigger actions when Azure Monitor detects that metrics, logs, or activity log events meet specified conditions.
*   **Types of Alerts:** Metric alerts, log alerts, activity log alerts, smart detection alerts (from Application Insights).
*   **Actions:** Send notifications (email, SMS, voice call), trigger Azure Functions, Logic Apps, webhooks, ITSM integration (Action Groups define these actions).
*   **Use Case Scenario:** A company wants to be notified if the average CPU utilization of their production VMs exceeds 90% for 5 minutes. They create a **metric alert** in Azure Monitor. If the condition is met, an Action Group sends an email to the operations team and triggers an Azure Function to attempt a predefined remediation script.

**Application Insights (an Azure Monitor feature):**
*   **Definition:** An extensible Application Performance Management (APM) service for developers and DevOps professionals. It helps you monitor live web applications, automatically detect performance anomalies, and diagnose issues.
*   **Key Features:** Request rates, response times, failure rates, dependency tracking (calls to external services), page view and user telemetry, exception tracking, distributed tracing, availability tests.
*   **Integration:** Works with various platforms (.NET, Java, Node.js, Python, etc.) by installing an SDK or agent.
*   **Use Case Scenario:** A development team uses Application Insights for their e-commerce web application. They can see real-time telemetry on how many users are on the site, average page load times, if any server requests are failing, and pinpoint slow database queries that are impacting performance. If an unhandled exception occurs in their code, Application Insights captures the details for debugging.
        `,
        mnemonic: `📊 Azure Monitor (Monitor YOUR Apps & Infra)
├── 📈 Metrics & Logs (Collect data)
├── 🔍 Log Analytics (Query logs with KQL)
├── 🚨 Alerts (Notify on conditions)
└── 🚀 Application Insights (APM - Deep app monitoring)`
      }
    ],
    questions: [
      {
        id: 'amg-q1', // Corrected ID prefix
        text: 'Which Azure tool helps you estimate the future costs of services you plan to deploy?',
        options: ['Azure Cost Management', 'TCO Calculator', 'Azure Pricing Calculator', 'Azure Advisor'],
        correctAnswerIndex: 2,
        feedback: 'The Azure Pricing Calculator is used to estimate the costs of Azure services you intend to use for new solutions.',
      },
      {
        id: 'amg-q2', // Corrected ID prefix
        text: 'What is the primary purpose of applying tags to Azure resources?',
        options: ['To increase resource performance', 'To organize resources and track costs', 'To automatically secure resources', 'To provide network isolation'],
        correctAnswerIndex: 1,
        feedback: 'Tags are metadata elements (name-value pairs) primarily used for organizing resources, managing costs, automation, and operational management.',
      },
      {
        id: 'amg-q3',
        text: 'Which Azure service is used to create, assign, and manage policies that enforce rules and effects over your resources to ensure compliance?',
        options: ['Azure Monitor', 'Azure Advisor', 'Azure Policy', 'Resource Locks'],
        correctAnswerIndex: 2,
        feedback: 'Azure Policy helps enforce organizational standards and assess compliance at-scale by applying rules and effects to your Azure resources.',
      },
      {
        id: 'amg-q4',
        text: 'Which Azure service provides personalized recommendations to optimize your Azure resources for cost, security, reliability, performance, and operational excellence?',
        options: ['Azure Monitor', 'Azure Service Health', 'Azure Advisor', 'Microsoft Purview'],
        correctAnswerIndex: 2,
        feedback: 'Azure Advisor acts as a personalized cloud consultant, analyzing your resource configuration and usage to provide actionable recommendations across multiple categories.',
      },
      {
        id: 'amg-q5',
        text: 'What type of resource lock prevents authorized users from deleting or updating a resource?',
        options: ['CanNotDelete lock', 'ReadOnly lock', 'Modify lock', 'Audit lock'],
        correctAnswerIndex: 1,
        feedback: 'A ReadOnly lock prevents authorized users from deleting or updating a resource. They can only read it.',
      },
      {
        id: 'amg-q6',
        text: 'What is the primary purpose of Azure Arc?',
        options: ['To provide a backup solution for Azure resources.', 'To extend Azure management and services to hybrid and multicloud environments.', 'To analyze and optimize Azure costs.', 'To automate the deployment of ARM templates.'],
        correctAnswerIndex: 1,
        feedback: 'Azure Arc extends Azure management capabilities to servers, Kubernetes clusters, and data services located on-premises, at the edge, or in other clouds.',
      },
      {
        id: 'amg-q7',
        text: 'Which Azure tool allows you to interactively manage Azure resources using Bash or PowerShell from within a browser?',
        options: ['Azure portal', 'Azure CLI (local install)', 'Azure PowerShell (local install)', 'Azure Cloud Shell'],
        correctAnswerIndex: 3,
        feedback: 'Azure Cloud Shell is a browser-accessible shell with pre-configured Azure CLI and Azure PowerShell for managing Azure resources.',
      },
      {
        id: 'amg-q8',
        text: 'What is the main benefit of using Infrastructure as Code (IaC)?',
        options: ['It eliminates the need for monitoring.', 'It provides a graphical interface for resource management.', 'It enables consistent, repeatable, and automated infrastructure deployments.', 'It is only applicable to on-premises environments.'],
        correctAnswerIndex: 2,
        feedback: 'Infrastructure as Code (IaC) allows you to define and manage your infrastructure through code, leading to consistent, repeatable, and automated deployments, reducing manual errors and configuration drift.',
      },
      {
        id: 'amg-q9',
        text: 'Which component of Azure Monitor is specifically designed for collecting, analyzing, and acting on telemetry from web applications?',
        options: ['Log Analytics', 'Azure Monitor Alerts', 'Application Insights', 'Azure Service Health'],
        correctAnswerIndex: 2,
        feedback: 'Application Insights is an Application Performance Management (APM) service within Azure Monitor that helps you monitor live web applications, detect performance anomalies, and diagnose issues.',
      },
      {
        id: 'amg-q10',
        text: 'If you want to be notified about Azure platform outages or planned maintenance that might affect your specific resources, which service should you use?',
        options: ['Azure Advisor', 'Azure Monitor', 'Azure Policy', 'Azure Service Health'],
        correctAnswerIndex: 3,
        feedback: 'Azure Service Health provides personalized alerts and guidance when Azure service issues, planned maintenance, or health advisories affect your resources.',
      },
      // Add 15 more questions to reach 25
    ],
  },
];

export const getTopicById = (id: string): Topic | undefined => {
  return topics.find((topic) => topic.id === id);
};

export const getSubTopicById = (topic: Topic, subTopicId: string): SubTopic | undefined => {
  return topic.subTopics?.find(subtopic => subtopic.id === subTopicId);
}
