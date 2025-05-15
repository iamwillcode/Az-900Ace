
import type { Question } from './azure-data'; // Reusing the Question type

export interface Exam {
  id: string;
  name: string;
  description: string;
  questions: Question[]; // Target: 50 questions per exam
}

export const exams: Exam[] = [
  {
    id: 'cloud-concepts-exam',
    name: 'Cloud Concepts Exam',
    description: 'Test your understanding of fundamental cloud computing concepts. Covers topics like shared responsibility, cloud models (public, private, hybrid), consumption-based models, and cloud service types (IaaS, PaaS, SaaS). Target: 50 questions.',
    questions: [
      // Placeholder questions for Cloud Concepts - User to add 40 more
      {
        id: 'cc-exam-q1',
        text: 'What are the three main cloud service models?',
        options: ['Public, Private, Hybrid', 'IaaS, PaaS, SaaS', 'CapEx, OpEx, HybridEx', 'Regions, Availability Zones, Datacenters'],
        correctAnswerIndex: 1,
        feedback: 'The three main cloud service models are Infrastructure as a Service (IaaS), Platform as a Service (PaaS), and Software as a Service (SaaS).',
      },
      {
        id: 'cc-exam-q2',
        text: 'In the shared responsibility model for IaaS, which of the following is the customer responsible for?',
        options: ['Physical datacenter security', 'Operating system patching', 'Network infrastructure', 'Virtualization hypervisor'],
        correctAnswerIndex: 1,
        feedback: 'In an IaaS model, the customer is responsible for the operating system, applications, data, and identity & access management. The cloud provider manages the physical infrastructure.',
      },
      {
        id: 'cc-exam-q3',
        text: 'Which cloud deployment model offers the highest level of control and security for an organization that wants exclusive use of resources?',
        options: ['Public Cloud', 'Private Cloud', 'Hybrid Cloud', 'Community Cloud'],
        correctAnswerIndex: 1,
        feedback: 'A Private Cloud is dedicated to a single organization, offering maximum control and security, though often at a higher cost and with more management overhead for the organization.',
      },
      {
        id: 'cc-exam-q4',
        text: 'What does "elasticity" in cloud computing primarily refer to?',
        options: ['The ability to pay only for what you use.', 'The ability of a service to remain available during failures.', 'The ability to automatically scale resources up or down based on demand.', 'The ability to access services over a broad network.'],
        correctAnswerIndex: 2,
        feedback: 'Elasticity is the cloud\'s ability to rapidly provision and de-provision resources to match demand, often automatically.',
      },
      {
        id: 'cc-exam-q5',
        text: 'Microsoft Office 365 is an example of which cloud service type?',
        options: ['IaaS', 'PaaS', 'SaaS', 'FaaS'],
        correctAnswerIndex: 2,
        feedback: 'Microsoft Office 365 (now Microsoft 365) is a typical example of Software as a Service (SaaS), where the software is provided over the internet, managed by Microsoft.',
      },
      {
        id: 'cc-exam-q6',
        text: 'Which pricing model allows cloud customers to avoid large upfront investments in hardware?',
        options: ['Capital Expenditure (CapEx)', 'Operational Expenditure (OpEx)', 'Fixed Pricing', 'Annual Subscription'],
        correctAnswerIndex: 1,
        feedback: 'The consumption-based model of cloud computing shifts IT spending from Capital Expenditure (CapEx) for physical hardware to Operational Expenditure (OpEx) for services used.',
      },
      {
        id: 'cc-exam-q7',
        text: 'What is a key benefit of high availability in the cloud?',
        options: ['Reduced software licensing costs.', 'Minimized downtime and continuous operation.', 'Faster processing speeds for all applications.', 'Simplified network configuration.'],
        correctAnswerIndex: 1,
        feedback: 'High availability ensures that applications and services have minimal downtime, providing continuous operation even if some components fail.',
      },
      {
        id: 'cc-exam-q8',
        text: 'Serverless computing, like Azure Functions, typically means the customer does not manage:',
        options: ['The application code.', 'The underlying server infrastructure.', 'The data stored by the function.', 'The triggers for the function.'],
        correctAnswerIndex: 1,
        feedback: 'In serverless computing, the cloud provider manages the underlying server infrastructure, allowing developers to focus on writing code that responds to events.',
      },
      {
        id: 'cc-exam-q9',
        text: 'A hybrid cloud typically connects which two environments?',
        options: ['Two different public clouds.', 'An on-premises environment and a public cloud.', 'Two different private clouds.', 'A development environment and a testing environment.'],
        correctAnswerIndex: 1,
        feedback: 'A hybrid cloud architecture integrates an organization\'s on-premises infrastructure (private cloud) with resources in a public cloud.',
      },
      {
        id: 'cc-exam-q10',
        text: 'What is the primary advantage of "scalability" in the cloud?',
        options: ['It guarantees data security.', 'It allows resources to be adjusted to meet changing demands.', 'It provides a fixed monthly cost for services.', 'It ensures all services are automatically patched.'],
        correctAnswerIndex: 1,
        feedback: 'Scalability in the cloud allows businesses to easily increase or decrease their IT resources as needed to meet fluctuating demand, ensuring performance and cost-efficiency.',
      },
      // TODO: Add 40 more questions for Cloud Concepts Exam
    ],
  },
  {
    id: 'azure-architecture-services-exam',
    name: 'Azure Architecture and Services Exam',
    description: 'Assess your knowledge of Azure\'s core architectural components, compute, networking, and storage services. Target: 50 questions.',
    questions: [
      // Placeholder questions for Azure Architecture and Services - User to add 40 more
      {
        id: 'aas-exam-q1',
        text: 'What is an Azure Region Pair?',
        options: ['Two regions in different continents used for load balancing.', 'A specific region designated for government workloads only.', 'Two regions within the same geography, paired for disaster recovery purposes.', 'A set of Availability Zones within a single region.'],
        correctAnswerIndex: 2,
        feedback: 'Each Azure region is paired with another region within the same geography (at least 300 miles away, where possible) to provide replication and disaster recovery capabilities.',
      },
      {
        id: 'aas-exam-q2',
        text: 'Which Azure component is used to group related resources for an application or project, sharing the same lifecycle?',
        options: ['Subscription', 'Management Group', 'Resource Group', 'Availability Set'],
        correctAnswerIndex: 2,
        feedback: 'A Resource Group is a container that holds related resources for an Azure solution. Resources in a group are typically managed together.',
      },
      {
        id: 'aas-exam-q3',
        text: 'Which Azure compute service is best suited for running containerized applications with complex orchestration needs?',
        options: ['Azure Virtual Machines', 'Azure App Service', 'Azure Container Instances (ACI)', 'Azure Kubernetes Service (AKS)'],
        correctAnswerIndex: 3,
        feedback: 'Azure Kubernetes Service (AKS) is a managed container orchestration service based on Kubernetes, ideal for deploying, managing, and scaling containerized applications.',
      },
      {
        id: 'aas-exam-q4',
        text: 'What is the primary purpose of Azure Virtual Network (VNet) peering?',
        options: ['To connect an on-premises network to an Azure VNet.', 'To allow resources in different VNets to communicate privately as if they were in the same network.', 'To filter network traffic between subnets within a VNet.', 'To provide public IP addresses to Azure resources.'],
        correctAnswerIndex: 1,
        feedback: 'VNet peering enables you to seamlessly connect two Azure Virtual Networks. Once peered, the virtual networks appear as one for connectivity purposes.',
      },
      {
        id: 'aas-exam-q5',
        text: 'Which Azure Storage service is optimized for storing massive amounts of unstructured data, such as images, videos, and documents?',
        options: ['Azure Files', 'Azure Disk Storage', 'Azure Blob Storage', 'Azure Table Storage'],
        correctAnswerIndex: 2,
        feedback: 'Azure Blob Storage is Microsoft\'s object storage solution for the cloud, ideal for storing unstructured data.',
      },
      {
        id: 'aas-exam-q6',
        text: 'Which Azure service provides a physical device for offline transfer of large datasets to Azure?',
        options: ['Azure Migrate', 'AzCopy', 'Azure Data Box', 'Azure File Sync'],
        correctAnswerIndex: 2,
        feedback: 'Azure Data Box is a family of physical devices that Microsoft ships to customers for offline transfer of large amounts of data to Azure when online transfer is not feasible.',
      },
      {
        id: 'aas-exam-q7',
        text: 'What are Availability Zones designed to protect against within an Azure region?',
        options: ['Regional outages', 'Subscription-level failures', 'Datacenter-level failures', 'Resource group deletions'],
        correctAnswerIndex: 2,
        feedback: 'Availability Zones are physically separate datacenters within an Azure region, each with independent power, cooling, and networking, protecting applications from failures affecting a single datacenter.',
      },
      {
        id: 'aas-exam-q8',
        text: 'Which of the following is a key characteristic of Azure Virtual Machine Scale Sets (VMSS)?',
        options: ['They are primarily used for serverless computing.', 'They allow for automatic scaling of virtual machines based on demand.', 'They provide managed domain services for Azure VMs.', 'They offer a graphical interface for managing individual VMs.'],
        correctAnswerIndex: 1,
        feedback: 'Azure Virtual Machine Scale Sets let you create and manage a group of load-balanced VMs. The number of VM instances can automatically increase or decrease in response to demand or a defined schedule.',
      },
      {
        id: 'aas-exam-q9',
        text: 'What is Azure DNS used for?',
        options: ['To encrypt network traffic between Azure resources.', 'To provide a dedicated private connection to Azure.', 'To host DNS domains and manage DNS records.', 'To filter incoming internet traffic to web applications.'],
        correctAnswerIndex: 2,
        feedback: 'Azure DNS is a hosting service for DNS domains that provides name resolution by using Microsoft Azure infrastructure. You can manage your DNS records for your domains like `yourcompany.com`.',
      },
      {
        id: 'aas-exam-q10',
        text: 'If you need to store persistent disks for Azure Virtual Machines, which storage type would you typically use?',
        options: ['Azure Blob Storage (Hot tier)', 'Azure Files', 'Azure Disk Storage', 'Azure Queue Storage'],
        correctAnswerIndex: 2,
        feedback: 'Azure Disk Storage provides persistent block storage (managed disks) that are used as OS disks and data disks for Azure Virtual Machines.',
      },
      // TODO: Add 40 more questions for Azure Architecture and Services Exam
    ],
  },
  {
    id: 'azure-identity-access-security-exam',
    name: 'Azure Identity, Access, and Security Exam',
    description: 'Challenge your knowledge on directory services, authentication, external identities, access control, and security models in Azure. Target: 50 questions.',
    questions: [
      // Placeholder questions for Azure Identity, Access, and Security - User to add 40 more
      {
        id: 'aias-exam-q1',
        text: 'Which Azure service is Microsoft\'s cloud-based identity and access management solution?',
        options: ['Azure Key Vault', 'Microsoft Defender for Cloud', 'Microsoft Entra ID', 'Azure Information Protection'],
        correctAnswerIndex: 2,
        feedback: 'Microsoft Entra ID (formerly Azure Active Directory) is Microsoft’s comprehensive cloud-based identity and access management service.',
      },
      {
        id: 'aias-exam-q2',
        text: 'What does Multi-Factor Authentication (MFA) add to the sign-in process?',
        options: ['Faster login times.', 'A single password for all applications.', 'An additional layer of security requiring two or more verification methods.', 'Automatic password resets.'],
        correctAnswerIndex: 2,
        feedback: 'MFA enhances security by requiring users to provide multiple forms of verification (e.g., password + code from an app) before granting access.',
      },
      {
        id: 'aias-exam-q3',
        text: 'Which Microsoft Entra feature allows you to invite users from other organizations to collaborate on your resources using their own credentials?',
        options: ['Azure AD B2C', 'Microsoft Entra Domain Services', 'Microsoft Entra B2B', 'Conditional Access'],
        correctAnswerIndex: 2,
        feedback: 'Microsoft Entra B2B (Business-to-Business) collaboration enables organizations to securely share applications and services with guest users from other organizations.',
      },
      {
        id: 'aias-exam-q4',
        text: 'What is the primary purpose of Azure Role-Based Access Control (RBAC)?',
        options: ['To manage network traffic rules.', 'To encrypt data stored in Azure.', 'To provide fine-grained access management to Azure resources.', 'To monitor application performance.'],
        correctAnswerIndex: 2,
        feedback: 'Azure RBAC allows you to control access to Azure resources by assigning roles (collections of permissions) to users, groups, or service principals at specific scopes.',
      },
      {
        id: 'aias-exam-q5',
        text: 'The Zero Trust security model is based on which core principle?',
        options: ['Trust but verify.', 'Trust everything within the corporate network.', 'Never trust, always verify.', 'Only verify external users.'],
        correctAnswerIndex: 2,
        feedback: 'The Zero Trust model operates on the principle of "never trust, always verify," assuming that breaches are possible and requiring verification for every access request.',
      },
      {
        id: 'aias-exam-q6',
        text: 'What is the function of Microsoft Defender for Cloud\'s Cloud Security Posture Management (CSPM) capabilities?',
        options: ['To detect and block malware on virtual machines.', 'To provide security recommendations and identify misconfigurations in Azure resources.', 'To manage SSL/TLS certificates for web applications.', 'To offer secure key storage.'],
        correctAnswerIndex: 1,
        feedback: 'Microsoft Defender for Cloud, through its CSPM capabilities, provides insights and recommendations to help you strengthen your security posture by identifying misconfigurations and vulnerabilities.',
      },
      {
        id: 'aias-exam-q7',
        text: 'Microsoft Entra Conditional Access policies are best described as:',
        options: ['Firewall rules for virtual networks.', 'Backup policies for Azure Storage.', '"If-then" statements that enforce organizational access policies.', 'Encryption settings for databases.'],
        correctAnswerIndex: 2,
        feedback: 'Conditional Access policies use "if-then" logic: if a user meets certain conditions (signals like location, device), then specific access controls (like requiring MFA) are enforced.',
      },
      {
        id: 'aias-exam-q8',
        text: 'Which Azure service provides managed domain services like domain join and Group Policy for Azure VMs without needing to manage domain controllers?',
        options: ['Microsoft Entra ID', 'Azure Virtual Network', 'Microsoft Entra Domain Services', 'Azure DNS'],
        correctAnswerIndex: 2,
        feedback: 'Microsoft Entra Domain Services provides managed domain services (like domain join, Group Policy, LDAP) that are compatible with traditional Active Directory, for use with Azure VMs.',
      },
      {
        id: 'aias-exam-q9',
        text: 'The defense-in-depth strategy involves:',
        options: ['Using only one very strong security control.', 'Relying solely on network firewalls.', 'Employing multiple layers of security controls.', 'Focusing security efforts only on data encryption.'],
        correctAnswerIndex: 2,
        feedback: 'Defense-in-depth is a layered approach to security, where multiple security controls are implemented so that if one layer fails, others are in place to protect assets.',
      },
      {
        id: 'aias-exam-q10',
        text: 'Passwordless authentication methods, like using the Microsoft Authenticator app for phone sign-in, aim to improve:',
        options: ['Network performance and reduce software costs.', 'Security by eliminating password-related risks and improve user experience.', 'Data storage capacity and simplify server management.', 'Compliance reporting and reduce audit times.'],
        correctAnswerIndex: 1,
        feedback: 'Passwordless authentication enhances security by reducing risks associated with passwords (phishing, weak passwords) and typically offers a more convenient user experience.',
      },
      // TODO: Add 40 more questions for Azure Identity, Access, and Security Exam
    ],
  },
  {
    id: 'azure-management-governance-exam',
    name: 'Azure Management and Governance Exam',
    description: 'Test your skills in cost management, governance tools (Policy, Purview), resource deployment, and monitoring in Azure. Target: 50 questions.',
    questions: [
      // Placeholder questions for Azure Management and Governance - User to add 40 more
      {
        id: 'amg-exam-q1',
        text: 'Which Azure tool helps you estimate the potential cost savings of migrating your on-premises workloads to Azure?',
        options: ['Azure Pricing Calculator', 'Total Cost of Ownership (TCO) Calculator', 'Azure Cost Management', 'Azure Advisor'],
        correctAnswerIndex: 1,
        feedback: 'The Total Cost of Ownership (TCO) Calculator is designed to help you compare the costs of running your workloads on-premises versus running them on Azure, highlighting potential savings.',
      },
      {
        id: 'amg-exam-q2',
        text: 'What is the primary purpose of using tags on Azure resources?',
        options: ['To encrypt resource data.', 'To increase the performance of resources.', 'To logically organize resources and track costs.', 'To automatically apply security patches.'],
        correctAnswerIndex: 2,
        feedback: 'Tags (name-value pairs) are used to organize Azure resources, which is essential for cost management, billing, automation, and operational grouping.',
      },
      {
        id: 'amg-exam-q3',
        text: 'Which Azure service allows you to create, assign, and manage policies to enforce rules and compliance across your Azure resources?',
        options: ['Azure Monitor', 'Microsoft Purview', 'Azure Policy', 'Resource Locks'],
        correctAnswerIndex: 2,
        feedback: 'Azure Policy is used to enforce organizational standards and assess compliance at scale by defining and assigning policies that evaluate your resources.',
      },
      {
        id: 'amg-exam-q4',
        text: 'What type of resource lock in Azure prevents users from accidentally deleting a resource but still allows modifications?',
        options: ['ReadOnly lock', 'CanNotDelete lock', 'WriteProtect lock', 'Archive lock'],
        correctAnswerIndex: 1,
        feedback: 'A CanNotDelete lock means authorized users can read and modify a resource, but they cannot delete it, protecting it from accidental deletion.',
      },
      {
        id: 'amg-exam-q5',
        text: 'What is the main function of Azure Arc?',
        options: ['To archive old Azure resources automatically.', 'To provide a unified data governance service.', 'To extend Azure management and services to hybrid and multicloud environments.', 'To monitor network traffic within Azure.'],
        correctAnswerIndex: 2,
        feedback: 'Azure Arc extends Azure management capabilities to servers, Kubernetes clusters, and data services located on-premises, at the edge, or in other clouds.',
      },
      {
        id: 'amg-exam-q6',
        text: 'Which of the following best describes Infrastructure as Code (IaC)?',
        options: ['A graphical tool for deploying Azure resources.', 'Manually configuring servers one by one.', 'Managing and provisioning IT infrastructure through machine-readable definition files.', 'A specific type of Azure virtual machine.'],
        correctAnswerIndex: 2,
        feedback: 'Infrastructure as Code (IaC) is the practice of managing and provisioning infrastructure using code (e.g., ARM templates, Bicep, Terraform) for automation and consistency.',
      },
      {
        id: 'amg-exam-q7',
        text: 'Which Azure service provides personalized recommendations to optimize your Azure deployments for cost, security, performance, and reliability?',
        options: ['Azure Service Health', 'Azure Monitor', 'Azure Advisor', 'Azure Cost Management'],
        correctAnswerIndex: 2,
        feedback: 'Azure Advisor analyzes your Azure resource configurations and usage telemetry to provide actionable recommendations for optimization.',
      },
      {
        id: 'amg-exam-q8',
        text: 'What is Azure Cloud Shell?',
        options: ['A physical device for connecting to Azure.', 'A desktop application for managing Azure Storage.', 'A browser-accessible, authenticated shell for managing Azure resources with CLI or PowerShell.', 'A monitoring dashboard in the Azure portal.'],
        correctAnswerIndex: 2,
        feedback: 'Azure Cloud Shell is an interactive, browser-based shell that provides pre-configured access to Azure CLI and Azure PowerShell for managing Azure resources.',
      },
      {
        id: 'amg-exam-q9',
        text: 'If you want to be notified about Azure platform outages or planned maintenance that might specifically affect your resources, which service should you consult?',
        options: ['Azure Advisor', 'Azure Monitor', 'Azure Service Health', 'Azure Policy'],
        correctAnswerIndex: 2,
        feedback: 'Azure Service Health provides personalized information and alerts about Azure service issues, planned maintenance, and health advisories relevant to your specific resources and subscriptions.',
      },
      {
        id: 'amg-exam-q10',
        text: 'Which component of Azure Monitor is used to query and analyze log data collected from Azure resources and applications using Kusto Query Language (KQL)?',
        options: ['Application Insights', 'Azure Monitor Alerts', 'Log Analytics', 'Azure Dashboards'],
        correctAnswerIndex: 2,
        feedback: 'Log Analytics is the tool within Azure Monitor for writing and running log queries (using KQL) against data stored in Log Analytics workspaces.',
      },
      // TODO: Add 40 more questions for Azure Management and Governance Exam
    ],
  },
];

export const getExamById = (id: string): Exam | undefined => {
  return exams.find((exam) => exam.id === id);
};
