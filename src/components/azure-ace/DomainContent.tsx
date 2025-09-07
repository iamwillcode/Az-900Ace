import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ChevronRight, Cloud, Server, Settings } from 'lucide-react';
import { ClickableBullet } from './ClickableBullet';
import { conceptExplanations, ConceptExplanation } from '@/lib/az900-concepts';

interface DomainContentProps {
  selectedDomain: number | null;
  setSelectedDomain: (domain: number | null) => void;
  setSelectedConcept: (concept: ConceptExplanation & { key: string }) => void;
  setViewedConcepts: React.Dispatch<React.SetStateAction<Set<string>>>;
  viewedConcepts: Set<string>;
  bookmarkedConcepts: Set<string>;
}

export const DomainContent: React.FC<DomainContentProps> = ({
  selectedDomain,
  setSelectedDomain,
  setSelectedConcept,
  setViewedConcepts,
  viewedConcepts,
  bookmarkedConcepts
}) => {
  const handleConceptClick = (conceptKey: string) => {
    const concept = conceptExplanations[conceptKey];
    if (concept) {
      setSelectedConcept({ ...concept, key: conceptKey });
      setViewedConcepts(prev => new Set([...prev, conceptKey]));
    }
  };

  // Domain 1: Cloud Concepts (25-30%)
  const Domain1Content = () => (
    <div className="space-y-8">
      <Card className="border-l-4 border-l-blue-600">
        <CardContent className="p-6">
          <h3 className="text-lg font-semibold mb-4 flex items-center">
            <Badge className="bg-blue-600 text-white mr-3">1.1</Badge>
            Describe cloud computing
          </h3>
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div>
              <h4 className="font-semibold mb-3">
                <ClickableBullet 
                  conceptKey="cloud-computing"
                  onClick={() => handleConceptClick('cloud-computing')}
                  isViewed={viewedConcepts.has('cloud-computing')}
                  isBookmarked={bookmarkedConcepts.has('cloud-computing')}
                >
                  • Define cloud computing
                </ClickableBullet>
              </h4>
              <ul className="ml-4 space-y-2">
                <ClickableBullet 
                  conceptKey="shared-responsibility-model"
                  onClick={() => handleConceptClick('shared-responsibility-model')}
                  isViewed={viewedConcepts.has('shared-responsibility-model')}
                  isBookmarked={bookmarkedConcepts.has('shared-responsibility-model')}
                  level={1}
                >
                  - Shared responsibility model
                </ClickableBullet>
                <ClickableBullet 
                  conceptKey="public-cloud"
                  onClick={() => handleConceptClick('public-cloud')}
                  isViewed={viewedConcepts.has('public-cloud')}
                  isBookmarked={bookmarkedConcepts.has('public-cloud')}
                  level={1}
                >
                  - Public cloud
                </ClickableBullet>
                <ClickableBullet 
                  conceptKey="private-cloud"
                  onClick={() => handleConceptClick('private-cloud')}
                  isViewed={viewedConcepts.has('private-cloud')}
                  isBookmarked={bookmarkedConcepts.has('private-cloud')}
                  level={1}
                >
                  - Private cloud
                </ClickableBullet>
                <ClickableBullet 
                  conceptKey="hybrid-cloud"
                  onClick={() => handleConceptClick('hybrid-cloud')}
                  isViewed={viewedConcepts.has('hybrid-cloud')}
                  isBookmarked={bookmarkedConcepts.has('hybrid-cloud')}
                  level={1}
                >
                  - Hybrid cloud
                </ClickableBullet>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Benefits and considerations</h4>
              <ul className="ml-4 space-y-2">
                <ClickableBullet 
                  conceptKey="high-availability"
                  onClick={() => handleConceptClick('high-availability')}
                  isViewed={viewedConcepts.has('high-availability')}
                  isBookmarked={bookmarkedConcepts.has('high-availability')}
                  level={1}
                >
                  - High availability
                </ClickableBullet>
                <ClickableBullet 
                  conceptKey="scalability"
                  onClick={() => handleConceptClick('scalability')}
                  isViewed={viewedConcepts.has('scalability')}
                  isBookmarked={bookmarkedConcepts.has('scalability')}
                  level={1}
                >
                  - Scalability
                </ClickableBullet>
                <ClickableBullet 
                  conceptKey="elasticity"
                  onClick={() => handleConceptClick('elasticity')}
                  isViewed={viewedConcepts.has('elasticity')}
                  isBookmarked={bookmarkedConcepts.has('elasticity')}
                  level={1}
                >
                  - Elasticity
                </ClickableBullet>
                <ClickableBullet 
                  conceptKey="fault-tolerance"
                  onClick={() => handleConceptClick('fault-tolerance')}
                  isViewed={viewedConcepts.has('fault-tolerance')}
                  isBookmarked={bookmarkedConcepts.has('fault-tolerance')}
                  level={1}
                >
                  - Fault tolerance
                </ClickableBullet>
                <ClickableBullet 
                  conceptKey="disaster-recovery"
                  onClick={() => handleConceptClick('disaster-recovery')}
                  isViewed={viewedConcepts.has('disaster-recovery')}
                  isBookmarked={bookmarkedConcepts.has('disaster-recovery')}
                  level={1}
                >
                  - Disaster recovery
                </ClickableBullet>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-l-4 border-l-blue-600">
        <CardContent className="p-6">
          <h3 className="text-lg font-semibold mb-4 flex items-center">
            <Badge className="bg-blue-600 text-white mr-3">1.2</Badge>
            Describe cloud service types
          </h3>
          <div className="grid md:grid-cols-3 gap-6 text-sm">
            <div>
              <ClickableBullet 
                conceptKey="iaas"
                onClick={() => handleConceptClick('iaas')}
                isViewed={viewedConcepts.has('iaas')}
                isBookmarked={bookmarkedConcepts.has('iaas')}
              >
                • Infrastructure as a Service (IaaS)
              </ClickableBullet>
            </div>
            <div>
              <ClickableBullet 
                conceptKey="paas"
                onClick={() => handleConceptClick('paas')}
                isViewed={viewedConcepts.has('paas')}
                isBookmarked={bookmarkedConcepts.has('paas')}
              >
                • Platform as a Service (PaaS)
              </ClickableBullet>
            </div>
            <div>
              <ClickableBullet 
                conceptKey="saas"
                onClick={() => handleConceptClick('saas')}
                isViewed={viewedConcepts.has('saas')}
                isBookmarked={bookmarkedConcepts.has('saas')}
              >
                • Software as a Service (SaaS)
              </ClickableBullet>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="mt-8 text-center">
        <Button
          onClick={() => setSelectedDomain(2)}
          className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg"
        >
          Next: Domain 2 - Azure Architecture & Services
          <ChevronRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </div>
  );

  // Domain 2: Azure Architecture and Services (35-40%)
  const Domain2Content = () => (
    <div className="space-y-8">
      <Card className="border-l-4 border-l-green-600">
        <CardContent className="p-6">
          <h3 className="text-lg font-semibold mb-4 flex items-center">
            <Badge className="bg-green-600 text-white mr-3">2.1</Badge>
            Describe Azure architectural components
          </h3>
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div>
              <h4 className="font-semibold mb-3">Core architectural components</h4>
              <ul className="ml-4 space-y-2">
                <ClickableBullet 
                  conceptKey="azure-regions"
                  onClick={() => handleConceptClick('azure-regions')}
                  isViewed={viewedConcepts.has('azure-regions')}
                  isBookmarked={bookmarkedConcepts.has('azure-regions')}
                  level={1}
                >
                  - Azure regions
                </ClickableBullet>
                <ClickableBullet 
                  conceptKey="availability-zones"
                  onClick={() => handleConceptClick('availability-zones')}
                  isViewed={viewedConcepts.has('availability-zones')}
                  isBookmarked={bookmarkedConcepts.has('availability-zones')}
                  level={1}
                >
                  - Availability zones
                </ClickableBullet>
                <ClickableBullet 
                  conceptKey="resource-groups"
                  onClick={() => handleConceptClick('resource-groups')}
                  isViewed={viewedConcepts.has('resource-groups')}
                  isBookmarked={bookmarkedConcepts.has('resource-groups')}
                  level={1}
                >
                  - Resource groups
                </ClickableBullet>
                <ClickableBullet 
                  conceptKey="azure-resource-manager"
                  onClick={() => handleConceptClick('azure-resource-manager')}
                  isViewed={viewedConcepts.has('azure-resource-manager')}
                  isBookmarked={bookmarkedConcepts.has('azure-resource-manager')}
                  level={1}
                >
                  - Azure Resource Manager
                </ClickableBullet>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-l-4 border-l-green-600">
        <CardContent className="p-6">
          <h3 className="text-lg font-semibold mb-4 flex items-center">
            <Badge className="bg-green-600 text-white mr-3">2.2</Badge>
            Describe Azure compute and networking services
          </h3>
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div>
              <h4 className="font-semibold mb-3">Compute services</h4>
              <ul className="ml-4 space-y-2">
                <ClickableBullet 
                  conceptKey="virtual-machines"
                  onClick={() => handleConceptClick('virtual-machines')}
                  isViewed={viewedConcepts.has('virtual-machines')}
                  isBookmarked={bookmarkedConcepts.has('virtual-machines')}
                  level={1}
                >
                  - Virtual machines
                </ClickableBullet>
                <ClickableBullet 
                  conceptKey="app-service"
                  onClick={() => handleConceptClick('app-service')}
                  isViewed={viewedConcepts.has('app-service')}
                  isBookmarked={bookmarkedConcepts.has('app-service')}
                  level={1}
                >
                  - App Service
                </ClickableBullet>
                <ClickableBullet 
                  conceptKey="container-instances"
                  onClick={() => handleConceptClick('container-instances')}
                  isViewed={viewedConcepts.has('container-instances')}
                  isBookmarked={bookmarkedConcepts.has('container-instances')}
                  level={1}
                >
                  - Container Instances
                </ClickableBullet>
                <ClickableBullet 
                  conceptKey="kubernetes-service"
                  onClick={() => handleConceptClick('kubernetes-service')}
                  isViewed={viewedConcepts.has('kubernetes-service')}
                  isBookmarked={bookmarkedConcepts.has('kubernetes-service')}
                  level={1}
                >
                  - Kubernetes Service
                </ClickableBullet>
                <ClickableBullet 
                  conceptKey="azure-functions"
                  onClick={() => handleConceptClick('azure-functions')}
                  isViewed={viewedConcepts.has('azure-functions')}
                  isBookmarked={bookmarkedConcepts.has('azure-functions')}
                  level={1}
                >
                  - Azure Functions
                </ClickableBullet>
                <ClickableBullet 
                  conceptKey="azure-virtual-desktop"
                  onClick={() => handleConceptClick('azure-virtual-desktop')}
                  isViewed={viewedConcepts.has('azure-virtual-desktop')}
                  isBookmarked={bookmarkedConcepts.has('azure-virtual-desktop')}
                  level={1}
                >
                  - Azure Virtual Desktop
                </ClickableBullet>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Networking services</h4>
              <ul className="ml-4 space-y-2">
                <ClickableBullet 
                  conceptKey="vpn-gateway"
                  onClick={() => handleConceptClick('vpn-gateway')}
                  isViewed={viewedConcepts.has('vpn-gateway')}
                  isBookmarked={bookmarkedConcepts.has('vpn-gateway')}
                  level={1}
                >
                  - VPN Gateway
                </ClickableBullet>
                <ClickableBullet 
                  conceptKey="expressroute"
                  onClick={() => handleConceptClick('expressroute')}
                  isViewed={viewedConcepts.has('expressroute')}
                  isBookmarked={bookmarkedConcepts.has('expressroute')}
                  level={1}
                >
                  - ExpressRoute
                </ClickableBullet>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-l-4 border-l-green-600">
        <CardContent className="p-6">
          <h3 className="text-lg font-semibold mb-4 flex items-center">
            <Badge className="bg-green-600 text-white mr-3">2.3</Badge>
            Describe Azure storage services
          </h3>
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div>
              <h4 className="font-semibold mb-3">Storage services</h4>
              <ul className="ml-4 space-y-2">
                <ClickableBullet 
                  conceptKey="blob-storage"
                  onClick={() => handleConceptClick('blob-storage')}
                  isViewed={viewedConcepts.has('blob-storage')}
                  isBookmarked={bookmarkedConcepts.has('blob-storage')}
                  level={1}
                >
                  - Blob storage
                </ClickableBullet>
                <ClickableBullet 
                  conceptKey="disk-storage"
                  onClick={() => handleConceptClick('disk-storage')}
                  isViewed={viewedConcepts.has('disk-storage')}
                  isBookmarked={bookmarkedConcepts.has('disk-storage')}
                  level={1}
                >
                  - Disk storage
                </ClickableBullet>
                <ClickableBullet 
                  conceptKey="file-storage"
                  onClick={() => handleConceptClick('file-storage')}
                  isViewed={viewedConcepts.has('file-storage')}
                  isBookmarked={bookmarkedConcepts.has('file-storage')}
                  level={1}
                >
                  - File storage
                </ClickableBullet>
                <ClickableBullet 
                  conceptKey="storage-tiers"
                  onClick={() => handleConceptClick('storage-tiers')}
                  isViewed={viewedConcepts.has('storage-tiers')}
                  isBookmarked={bookmarkedConcepts.has('storage-tiers')}
                  level={1}
                >
                  - Storage tiers
                </ClickableBullet>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-l-4 border-l-green-600">
        <CardContent className="p-6">
          <h3 className="text-lg font-semibold mb-4 flex items-center">
            <Badge className="bg-green-600 text-white mr-3">2.4</Badge>
            Describe Azure identity, access, and security
          </h3>
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div>
              <h4 className="font-semibold mb-3">Identity and access management</h4>
              <ul className="ml-4 space-y-2">
                <ClickableBullet 
                  conceptKey="microsoft-entra-id"
                  onClick={() => handleConceptClick('microsoft-entra-id')}
                  isViewed={viewedConcepts.has('microsoft-entra-id')}
                  isBookmarked={bookmarkedConcepts.has('microsoft-entra-id')}
                  level={1}
                >
                  - Microsoft Entra ID
                </ClickableBullet>
                <ClickableBullet 
                  conceptKey="multi-factor-authentication"
                  onClick={() => handleConceptClick('multi-factor-authentication')}
                  isViewed={viewedConcepts.has('multi-factor-authentication')}
                  isBookmarked={bookmarkedConcepts.has('multi-factor-authentication')}
                  level={1}
                >
                  - Multi-Factor Authentication (MFA)
                </ClickableBullet>
                <ClickableBullet 
                  conceptKey="single-sign-on"
                  onClick={() => handleConceptClick('single-sign-on')}
                  isViewed={viewedConcepts.has('single-sign-on')}
                  isBookmarked={bookmarkedConcepts.has('single-sign-on')}
                  level={1}
                >
                  - Single Sign-On (SSO)
                </ClickableBullet>
                <ClickableBullet 
                  conceptKey="conditional-access"
                  onClick={() => handleConceptClick('conditional-access')}
                  isViewed={viewedConcepts.has('conditional-access')}
                  isBookmarked={bookmarkedConcepts.has('conditional-access')}
                  level={1}
                >
                  - Conditional Access
                </ClickableBullet>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Security and defense</h4>
              <ul className="ml-4 space-y-2">
                <ClickableBullet 
                  conceptKey="zero-trust-model"
                  onClick={() => handleConceptClick('zero-trust-model')}
                  isViewed={viewedConcepts.has('zero-trust-model')}
                  isBookmarked={bookmarkedConcepts.has('zero-trust-model')}
                  level={1}
                >
                  - Zero Trust model
                </ClickableBullet>
                <ClickableBullet 
                  conceptKey="defense-in-depth"
                  onClick={() => handleConceptClick('defense-in-depth')}
                  isViewed={viewedConcepts.has('defense-in-depth')}
                  isBookmarked={bookmarkedConcepts.has('defense-in-depth')}
                  level={1}
                >
                  - Defense in depth
                </ClickableBullet>
                <ClickableBullet 
                  conceptKey="microsoft-defender-cloud"
                  onClick={() => handleConceptClick('microsoft-defender-cloud')}
                  isViewed={viewedConcepts.has('microsoft-defender-cloud')}
                  isBookmarked={bookmarkedConcepts.has('microsoft-defender-cloud')}
                  level={1}
                >
                  - Microsoft Defender for Cloud
                </ClickableBullet>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="mt-8 text-center">
        <Button
          onClick={() => setSelectedDomain(3)}
          className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg"
        >
          Next: Domain 3 - Management & Governance
          <ChevronRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </div>
  );

  // Domain 3: Management and Governance (30-35%)
  const Domain3Content = () => (
    <div className="space-y-8">
      <Card className="border-l-4 border-l-purple-600">
        <CardContent className="p-6">
          <h3 className="text-lg font-semibold mb-4 flex items-center">
            <Badge className="bg-purple-600 text-white mr-3">3.1</Badge>
            Describe cost management in Azure
          </h3>
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div>
              <h4 className="font-semibold mb-3">Cost management</h4>
              <ul className="ml-4 space-y-2">
                <ClickableBullet 
                  conceptKey="azure-cost-management"
                  onClick={() => handleConceptClick('azure-cost-management')}
                  isViewed={viewedConcepts.has('azure-cost-management')}
                  isBookmarked={bookmarkedConcepts.has('azure-cost-management')}
                  level={1}
                >
                  - Cost Management + Billing
                </ClickableBullet>
                <ClickableBullet 
                  conceptKey="pricing-calculator"
                  onClick={() => handleConceptClick('pricing-calculator')}
                  isViewed={viewedConcepts.has('pricing-calculator')}
                  isBookmarked={bookmarkedConcepts.has('pricing-calculator')}
                  level={1}
                >
                  - Pricing calculator
                </ClickableBullet>
                <ClickableBullet 
                  conceptKey="total-cost-ownership"
                  onClick={() => handleConceptClick('total-cost-ownership')}
                  isViewed={viewedConcepts.has('total-cost-ownership')}
                  isBookmarked={bookmarkedConcepts.has('total-cost-ownership')}
                  level={1}
                >
                  - Total Cost of Ownership (TCO)
                </ClickableBullet>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-l-4 border-l-purple-600">
        <CardContent className="p-6">
          <h3 className="text-lg font-semibold mb-4 flex items-center">
            <Badge className="bg-purple-600 text-white mr-3">3.2</Badge>
            Describe features and tools for governance and compliance
          </h3>
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div>
              <h4 className="font-semibold mb-3">Governance tools</h4>
              <ul className="ml-4 space-y-2">
                <ClickableBullet 
                  conceptKey="azure-policy"
                  onClick={() => handleConceptClick('azure-policy')}
                  isViewed={viewedConcepts.has('azure-policy')}
                  isBookmarked={bookmarkedConcepts.has('azure-policy')}
                  level={1}
                >
                  - Azure Policy
                </ClickableBullet>
                <ClickableBullet 
                  conceptKey="role-based-access-control"
                  onClick={() => handleConceptClick('role-based-access-control')}
                  isViewed={viewedConcepts.has('role-based-access-control')}
                  isBookmarked={bookmarkedConcepts.has('role-based-access-control')}
                  level={1}
                >
                  - Role-based access control
                </ClickableBullet>
                <ClickableBullet 
                  conceptKey="resource-locks"
                  onClick={() => handleConceptClick('resource-locks')}
                  isViewed={viewedConcepts.has('resource-locks')}
                  isBookmarked={bookmarkedConcepts.has('resource-locks')}
                  level={1}
                >
                  - Resource locks
                </ClickableBullet>
                <ClickableBullet 
                  conceptKey="azure-blueprints"
                  onClick={() => handleConceptClick('azure-blueprints')}
                  isViewed={viewedConcepts.has('azure-blueprints')}
                  isBookmarked={bookmarkedConcepts.has('azure-blueprints')}
                  level={1}
                >
                  - Azure Blueprints
                </ClickableBullet>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-l-4 border-l-purple-600">
        <CardContent className="p-6">
          <h3 className="text-lg font-semibold mb-4 flex items-center">
            <Badge className="bg-purple-600 text-white mr-3">3.3</Badge>
            Describe features and tools for managing and deploying Azure resources
          </h3>
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div>
              <h4 className="font-semibold mb-3">Monitoring and management tools</h4>
              <ul className="ml-4 space-y-2">
                <ClickableBullet 
                  conceptKey="azure-advisor"
                  onClick={() => handleConceptClick('azure-advisor')}
                  isViewed={viewedConcepts.has('azure-advisor')}
                  isBookmarked={bookmarkedConcepts.has('azure-advisor')}
                  level={1}
                >
                  - Azure Advisor
                </ClickableBullet>
                <ClickableBullet 
                  conceptKey="azure-monitor"
                  onClick={() => handleConceptClick('azure-monitor')}
                  isViewed={viewedConcepts.has('azure-monitor')}
                  isBookmarked={bookmarkedConcepts.has('azure-monitor')}
                  level={1}
                >
                  - Azure Monitor
                </ClickableBullet>
                <ClickableBullet 
                  conceptKey="azure-service-health"
                  onClick={() => handleConceptClick('azure-service-health')}
                  isViewed={viewedConcepts.has('azure-service-health')}
                  isBookmarked={bookmarkedConcepts.has('azure-service-health')}
                  level={1}
                >
                  - Azure Service Health
                </ClickableBullet>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="mt-8 text-center text-gray-600">
        <p className="text-lg font-medium">
          🎉 Congratulations! You've completed all AZ-900 domains!
        </p>
        <p className="text-sm mt-2">
          Continue practicing and reviewing concepts to master the exam.
        </p>
      </div>
    </div>
  );

  const renderDomainContent = () => {
    switch (selectedDomain) {
      case 1:
        return <Domain1Content />;
      case 2:
        return <Domain2Content />;
      case 3:
        return <Domain3Content />;
      default:
        return null;
    }
  };

  return renderDomainContent();
};