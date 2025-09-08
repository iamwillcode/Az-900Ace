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
                <h4 className="font-semibold mb-3">
                  <ClickableBullet 
                    conceptKey="cloud-models"
                    onClick={() => handleConceptClick('cloud-models')}
                    isViewed={viewedConcepts.has('cloud-models')}
                    isBookmarked={bookmarkedConcepts.has('cloud-models')}
                  >
                    • Cloud models
                  </ClickableBullet>
                </h4>
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
              <h4 className="font-semibold mb-3">
                <ClickableBullet 
                  conceptKey="shared-responsibility-model"
                  onClick={() => handleConceptClick('shared-responsibility-model')}
                  isViewed={viewedConcepts.has('shared-responsibility-model')}
                  isBookmarked={bookmarkedConcepts.has('shared-responsibility-model')}
                >
                  • Shared responsibility model
                </ClickableBullet>
              </h4>
              <ul className="ml-4 space-y-2">
                <ClickableBullet 
                  conceptKey="responsibilities-cloud-provider"
                  onClick={() => handleConceptClick('responsibilities-cloud-provider')}
                  isViewed={viewedConcepts.has('responsibilities-cloud-provider')}
                  isBookmarked={bookmarkedConcepts.has('responsibilities-cloud-provider')}
                  level={1}
                >
                  - Responsibilities of cloud provider
                </ClickableBullet>
                <ClickableBullet 
                  conceptKey="responsibilities-customer"
                  onClick={() => handleConceptClick('responsibilities-customer')}
                  isViewed={viewedConcepts.has('responsibilities-customer')}
                  isBookmarked={bookmarkedConcepts.has('responsibilities-customer')}
                  level={1}
                >
                  - Responsibilities of customer
                </ClickableBullet>
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
            Describe the consumption-based model
          </h3>
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div>
              <h4 className="font-semibold mb-3">
                <ClickableBullet 
                  conceptKey="consumption-based-model"
                  onClick={() => handleConceptClick('consumption-based-model')}
                  isViewed={viewedConcepts.has('consumption-based-model')}
                  isBookmarked={bookmarkedConcepts.has('consumption-based-model')}
                >
                  • Consumption-based model
                </ClickableBullet>
              </h4>
              <ul className="ml-4 space-y-2">
                <ClickableBullet 
                  conceptKey="opex-vs-capex"
                  onClick={() => handleConceptClick('opex-vs-capex')}
                  isViewed={viewedConcepts.has('opex-vs-capex')}
                  isBookmarked={bookmarkedConcepts.has('opex-vs-capex')}
                  level={1}
                >
                  - OpEx vs CapEx
                </ClickableBullet>
                <ClickableBullet 
                  conceptKey="pay-as-you-go"
                  onClick={() => handleConceptClick('pay-as-you-go')}
                  isViewed={viewedConcepts.has('pay-as-you-go')}
                  isBookmarked={bookmarkedConcepts.has('pay-as-you-go')}
                  level={1}
                >
                  - Pay-as-you-go billing
                </ClickableBullet>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-l-4 border-l-blue-600">
        <CardContent className="p-6">
          <h3 className="text-lg font-semibold mb-4 flex items-center">
            <Badge className="bg-blue-600 text-white mr-3">1.3</Badge>
            Describe benefits of cloud services
          </h3>
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div>
              <h4 className="font-semibold mb-3">
                <ClickableBullet 
                  conceptKey="benefits-of-cloud-services"
                  onClick={() => handleConceptClick('benefits-of-cloud-services')}
                  isViewed={viewedConcepts.has('benefits-of-cloud-services')}
                  isBookmarked={bookmarkedConcepts.has('benefits-of-cloud-services')}
                >
                  • Benefits of cloud services
                </ClickableBullet>
              </h4>
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
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">
                <ClickableBullet 
                  conceptKey="business-continuity"
                  onClick={() => handleConceptClick('business-continuity')}
                  isViewed={viewedConcepts.has('business-continuity')}
                  isBookmarked={bookmarkedConcepts.has('business-continuity')}
                >
                  • Business continuity
                </ClickableBullet>
              </h4>
              <ul className="ml-4 space-y-2">
                <ClickableBullet 
                  conceptKey="agility"
                  onClick={() => handleConceptClick('agility')}
                  isViewed={viewedConcepts.has('agility')}
                  isBookmarked={bookmarkedConcepts.has('agility')}
                  level={1}
                >
                  - Agility
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
            <Badge className="bg-blue-600 text-white mr-3">1.4</Badge>
            Describe cloud service types
          </h3>
          <div className="grid md:grid-cols-3 gap-6 text-sm">
            <div>
              <h4 className="font-semibold mb-3">
                <ClickableBullet 
                  conceptKey="cloud-service-types"
                  onClick={() => handleConceptClick('cloud-service-types')}
                  isViewed={viewedConcepts.has('cloud-service-types')}
                  isBookmarked={bookmarkedConcepts.has('cloud-service-types')}
                >
                  • Cloud service types
                </ClickableBullet>
              </h4>
              <ul className="ml-4 space-y-2">
                <ClickableBullet 
                  conceptKey="iaas"
                  onClick={() => handleConceptClick('iaas')}
                  isViewed={viewedConcepts.has('iaas')}
                  isBookmarked={bookmarkedConcepts.has('iaas')}
                  level={1}
                >
                  - Infrastructure as a Service (IaaS)
                </ClickableBullet>
                <ClickableBullet 
                  conceptKey="paas"
                  onClick={() => handleConceptClick('paas')}
                  isViewed={viewedConcepts.has('paas')}
                  isBookmarked={bookmarkedConcepts.has('paas')}
                  level={1}
                >
                  - Platform as a Service (PaaS)
                </ClickableBullet>
                <ClickableBullet 
                  conceptKey="saas"
                  onClick={() => handleConceptClick('saas')}
                  isViewed={viewedConcepts.has('saas')}
                  isBookmarked={bookmarkedConcepts.has('saas')}
                  level={1}
                >
                  - Software as a Service (SaaS)
                </ClickableBullet>
              </ul>
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
              <h4 className="font-semibold mb-3">
                <ClickableBullet 
                  conceptKey="azure-regions"
                  onClick={() => handleConceptClick('azure-regions')}
                  isViewed={viewedConcepts.has('azure-regions')}
                  isBookmarked={bookmarkedConcepts.has('azure-regions')}
                >
                  • Azure regions
                </ClickableBullet>
              </h4>
              <ul className="ml-4 space-y-2">
                <ClickableBullet 
                  conceptKey="regional-availability"
                  onClick={() => handleConceptClick('regional-availability')}
                  isViewed={viewedConcepts.has('regional-availability')}
                  isBookmarked={bookmarkedConcepts.has('regional-availability')}
                  level={1}
                >
                  - Regional availability
                </ClickableBullet>
                <ClickableBullet 
                  conceptKey="region-pairs"
                  onClick={() => handleConceptClick('region-pairs')}
                  isViewed={viewedConcepts.has('region-pairs')}
                  isBookmarked={bookmarkedConcepts.has('region-pairs')}
                  level={1}
                >
                  - Region pairs
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
            <div>
              <h4 className="font-semibold mb-3">
                <ClickableBullet 
                  conceptKey="resource-hierarchy"
                  onClick={() => handleConceptClick('resource-hierarchy')}
                  isViewed={viewedConcepts.has('resource-hierarchy')}
                  isBookmarked={bookmarkedConcepts.has('resource-hierarchy')}
                >
                  • Resource hierarchy
                </ClickableBullet>
              </h4>
              <ul className="ml-4 space-y-2">
                <ClickableBullet 
                  conceptKey="subscriptions"
                  onClick={() => handleConceptClick('subscriptions')}
                  isViewed={viewedConcepts.has('subscriptions')}
                  isBookmarked={bookmarkedConcepts.has('subscriptions')}
                  level={1}
                >
                  - Subscriptions
                </ClickableBullet>
                <ClickableBullet 
                  conceptKey="management-groups"
                  onClick={() => handleConceptClick('management-groups')}
                  isViewed={viewedConcepts.has('management-groups')}
                  isBookmarked={bookmarkedConcepts.has('management-groups')}
                  level={1}
                >
                  - Management groups
                </ClickableBullet>
                <ClickableBullet 
                  conceptKey="arm-templates"
                  onClick={() => handleConceptClick('arm-templates')}
                  isViewed={viewedConcepts.has('arm-templates')}
                  isBookmarked={bookmarkedConcepts.has('arm-templates')}
                  level={1}
                >
                  • ARM Templates
                </ClickableBullet>
                <ClickableBullet 
                  conceptKey="deployment-consistency"
                  onClick={() => handleConceptClick('deployment-consistency')}
                  isViewed={viewedConcepts.has('deployment-consistency')}
                  isBookmarked={bookmarkedConcepts.has('deployment-consistency')}
                  level={1}
                >
                  - Deployment consistency
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
              <h4 className="font-semibold mb-3">
                <ClickableBullet 
                  conceptKey="compute-services"
                  onClick={() => handleConceptClick('compute-services')}
                  isViewed={viewedConcepts.has('compute-services')}
                  isBookmarked={bookmarkedConcepts.has('compute-services')}
                >
                  • Compute services
                </ClickableBullet>
              </h4>
              <ul className="ml-4 space-y-2">
                <ClickableBullet 
                  conceptKey="virtual-machines"
                  onClick={() => handleConceptClick('virtual-machines')}
                  isViewed={viewedConcepts.has('virtual-machines')}
                  isBookmarked={bookmarkedConcepts.has('virtual-machines')}
                  level={1}
                >
                  - Virtual Machines
                </ClickableBullet>
                <ClickableBullet 
                  conceptKey="app-service"
                  onClick={() => handleConceptClick('app-service')}
                  isViewed={viewedConcepts.has('app-service')}
                  isBookmarked={bookmarkedConcepts.has('app-service')}
                  level={1}
                >
                  - App Services
                </ClickableBullet>
                <ClickableBullet 
                  conceptKey="azure-functions"
                  onClick={() => handleConceptClick('azure-functions')}
                  isViewed={viewedConcepts.has('azure-functions')}
                  isBookmarked={bookmarkedConcepts.has('azure-functions')}
                  level={1}
                >
                  - Functions
                </ClickableBullet>
                <ClickableBullet 
                  conceptKey="containers"
                  onClick={() => handleConceptClick('containers')}
                  isViewed={viewedConcepts.has('containers')}
                  isBookmarked={bookmarkedConcepts.has('containers')}
                  level={1}
                >
                  - Containers (AKS, Container Instances)
                </ClickableBullet>
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
              <h4 className="font-semibold mb-3">
                <ClickableBullet 
                  conceptKey="networking-services"
                  onClick={() => handleConceptClick('networking-services')}
                  isViewed={viewedConcepts.has('networking-services')}
                  isBookmarked={bookmarkedConcepts.has('networking-services')}
                >
                  • Networking services
                </ClickableBullet>
              </h4>
              <ul className="ml-4 space-y-2">
                <ClickableBullet 
                  conceptKey="virtual-networks"
                  onClick={() => handleConceptClick('virtual-networks')}
                  isViewed={viewedConcepts.has('virtual-networks')}
                  isBookmarked={bookmarkedConcepts.has('virtual-networks')}
                  level={1}
                >
                  - Virtual Networks
                </ClickableBullet>
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
                <ClickableBullet 
                  conceptKey="load-balancer"
                  onClick={() => handleConceptClick('load-balancer')}
                  isViewed={viewedConcepts.has('load-balancer')}
                  isBookmarked={bookmarkedConcepts.has('load-balancer')}
                  level={1}
                >
                  - Load Balancer
                </ClickableBullet>
                <ClickableBullet 
                  conceptKey="azure-dns"
                  onClick={() => handleConceptClick('azure-dns')}
                  isViewed={viewedConcepts.has('azure-dns')}
                  isBookmarked={bookmarkedConcepts.has('azure-dns')}
                  level={1}
                >
                  - Azure DNS
                </ClickableBullet>
                <ClickableBullet 
                  conceptKey="azure-cdn"
                  onClick={() => handleConceptClick('azure-cdn')}
                  isViewed={viewedConcepts.has('azure-cdn')}
                  isBookmarked={bookmarkedConcepts.has('azure-cdn')}
                  level={1}
                >
                  - CDN
                </ClickableBullet>
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
              <h4 className="font-semibold mb-3">
                <ClickableBullet 
                  conceptKey="storage-services"
                  onClick={() => handleConceptClick('storage-services')}
                  isViewed={viewedConcepts.has('storage-services')}
                  isBookmarked={bookmarkedConcepts.has('storage-services')}
                >
                  • Storage services
                </ClickableBullet>
              </h4>
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
                  conceptKey="archive-storage"
                  onClick={() => handleConceptClick('archive-storage')}
                  isViewed={viewedConcepts.has('archive-storage')}
                  isBookmarked={bookmarkedConcepts.has('archive-storage')}
                  level={1}
                >
                  - Archive storage
                </ClickableBullet>
              </ul>
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
              <h4 className="font-semibold mb-3">
                <ClickableBullet 
                  conceptKey="identity-access-management"
                  onClick={() => handleConceptClick('identity-access-management')}
                  isViewed={viewedConcepts.has('identity-access-management')}
                  isBookmarked={bookmarkedConcepts.has('identity-access-management')}
                >
                  • Identity and access management
                </ClickableBullet>
              </h4>
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
              <h4 className="font-semibold mb-3">
                <ClickableBullet 
                  conceptKey="security-defense"
                  onClick={() => handleConceptClick('security-defense')}
                  isViewed={viewedConcepts.has('security-defense')}
                  isBookmarked={bookmarkedConcepts.has('security-defense')}
                >
                  • Security and defense
                </ClickableBullet>
              </h4>
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

      <Card className="border-l-4 border-l-green-600">
        <CardContent className="p-6">
          <h3 className="text-lg font-semibold mb-4 flex items-center">
            <Badge className="bg-green-600 text-white mr-3">2.5</Badge>
            Describe Azure database services
          </h3>
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div>
              <h4 className="font-semibold mb-3">
                <ClickableBullet 
                  conceptKey="relational-databases"
                  onClick={() => handleConceptClick('relational-databases')}
                  isViewed={viewedConcepts.has('relational-databases')}
                  isBookmarked={bookmarkedConcepts.has('relational-databases')}
                >
                  • Relational databases
                </ClickableBullet>
              </h4>
              <ul className="ml-4 space-y-2">
                <ClickableBullet 
                  conceptKey="azure-sql-database"
                  onClick={() => handleConceptClick('azure-sql-database')}
                  isViewed={viewedConcepts.has('azure-sql-database')}
                  isBookmarked={bookmarkedConcepts.has('azure-sql-database')}
                  level={1}
                >
                  - Azure SQL Database
                </ClickableBullet>
                <ClickableBullet 
                  conceptKey="azure-database-postgresql"
                  onClick={() => handleConceptClick('azure-database-postgresql')}
                  isViewed={viewedConcepts.has('azure-database-postgresql')}
                  isBookmarked={bookmarkedConcepts.has('azure-database-postgresql')}
                  level={1}
                >
                  - Azure Database for PostgreSQL
                </ClickableBullet>
                <ClickableBullet 
                  conceptKey="azure-database-mysql"
                  onClick={() => handleConceptClick('azure-database-mysql')}
                  isViewed={viewedConcepts.has('azure-database-mysql')}
                  isBookmarked={bookmarkedConcepts.has('azure-database-mysql')}
                  level={1}
                >
                  - Azure Database for MySQL
                </ClickableBullet>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">
                <ClickableBullet 
                  conceptKey="nosql-databases"
                  onClick={() => handleConceptClick('nosql-databases')}
                  isViewed={viewedConcepts.has('nosql-databases')}
                  isBookmarked={bookmarkedConcepts.has('nosql-databases')}
                >
                  • NoSQL databases
                </ClickableBullet>
              </h4>
              <ul className="ml-4 space-y-2">
                <ClickableBullet 
                  conceptKey="azure-cosmos-db"
                  onClick={() => handleConceptClick('azure-cosmos-db')}
                  isViewed={viewedConcepts.has('azure-cosmos-db')}
                  isBookmarked={bookmarkedConcepts.has('azure-cosmos-db')}
                  level={1}
                >
                  - Azure Cosmos DB
                </ClickableBullet>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-l-4 border-l-green-600">
        <CardContent className="p-6">
          <h3 className="text-lg font-semibold mb-4 flex items-center">
            <Badge className="bg-green-600 text-white mr-3">2.6</Badge>
            Describe Azure solutions
          </h3>
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div>
              <h4 className="font-semibold mb-3">
                <ClickableBullet 
                  conceptKey="internet-of-things"
                  onClick={() => handleConceptClick('internet-of-things')}
                  isViewed={viewedConcepts.has('internet-of-things')}
                  isBookmarked={bookmarkedConcepts.has('internet-of-things')}
                >
                  • Internet of Things (IoT)
                </ClickableBullet>
              </h4>
              <ul className="ml-4 space-y-2">
                <ClickableBullet 
                  conceptKey="azure-iot-hub"
                  onClick={() => handleConceptClick('azure-iot-hub')}
                  isViewed={viewedConcepts.has('azure-iot-hub')}
                  isBookmarked={bookmarkedConcepts.has('azure-iot-hub')}
                  level={1}
                >
                  - IoT Hub
                </ClickableBullet>
                <ClickableBullet 
                  conceptKey="azure-iot-central"
                  onClick={() => handleConceptClick('azure-iot-central')}
                  isViewed={viewedConcepts.has('azure-iot-central')}
                  isBookmarked={bookmarkedConcepts.has('azure-iot-central')}
                  level={1}
                >
                  - IoT Central
                </ClickableBullet>
                <ClickableBullet 
                  conceptKey="azure-iot-hub"
                  onClick={() => handleConceptClick('azure-iot-hub')}
                  isViewed={viewedConcepts.has('azure-iot-hub')}
                  isBookmarked={bookmarkedConcepts.has('azure-iot-hub')}
                  level={1}
                >
                  - IoT Hub
                </ClickableBullet>
              </ul>
              
              <h4 className="font-semibold mb-3">
                <ClickableBullet 
                  conceptKey="ai-machine-learning"
                  onClick={() => handleConceptClick('ai-machine-learning')}
                  isViewed={viewedConcepts.has('ai-machine-learning')}
                  isBookmarked={bookmarkedConcepts.has('ai-machine-learning')}
                >
                  • AI and Machine Learning
                </ClickableBullet>
              </h4>
              <ul className="ml-4 space-y-2">
                <ClickableBullet 
                  conceptKey="azure-machine-learning"
                  onClick={() => handleConceptClick('azure-machine-learning')}
                  isViewed={viewedConcepts.has('azure-machine-learning')}
                  isBookmarked={bookmarkedConcepts.has('azure-machine-learning')}
                  level={1}
                >
                  - Azure Machine Learning
                </ClickableBullet>
              </ul>
              
              <h4 className="font-semibold mb-3">
                <ClickableBullet 
                  conceptKey="serverless-computing"
                  onClick={() => handleConceptClick('serverless-computing')}
                  isViewed={viewedConcepts.has('serverless-computing')}
                  isBookmarked={bookmarkedConcepts.has('serverless-computing')}
                >
                  • Serverless computing
                </ClickableBullet>
              </h4>
              <ul className="ml-4 space-y-2">
                <ClickableBullet 
                  conceptKey="azure-logic-apps"
                  onClick={() => handleConceptClick('azure-logic-apps')}
                  isViewed={viewedConcepts.has('azure-logic-apps')}
                  isBookmarked={bookmarkedConcepts.has('azure-logic-apps')}
                  level={1}
                >
                  - Logic Apps
                </ClickableBullet>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">
                <ClickableBullet 
                  conceptKey="big-data-analytics"
                  onClick={() => handleConceptClick('big-data-analytics')}
                  isViewed={viewedConcepts.has('big-data-analytics')}
                  isBookmarked={bookmarkedConcepts.has('big-data-analytics')}
                >
                  • Big Data and Analytics
                </ClickableBullet>
              </h4>
              <ul className="ml-4 space-y-2">
                <ClickableBullet 
                  conceptKey="azure-synapse-analytics"
                  onClick={() => handleConceptClick('azure-synapse-analytics')}
                  isViewed={viewedConcepts.has('azure-synapse-analytics')}
                  isBookmarked={bookmarkedConcepts.has('azure-synapse-analytics')}
                  level={1}
                >
                  - Synapse Analytics
                </ClickableBullet>
                <ClickableBullet 
                  conceptKey="azure-hdinsight"
                  onClick={() => handleConceptClick('azure-hdinsight')}
                  isViewed={viewedConcepts.has('azure-hdinsight')}
                  isBookmarked={bookmarkedConcepts.has('azure-hdinsight')}
                  level={1}
                >
                  - HDInsight
                </ClickableBullet>
                <ClickableBullet 
                  conceptKey="azure-databricks"
                  onClick={() => handleConceptClick('azure-databricks')}
                  isViewed={viewedConcepts.has('azure-databricks')}
                  isBookmarked={bookmarkedConcepts.has('azure-databricks')}
                  level={1}
                >
                  - Databricks
                </ClickableBullet>
                <ClickableBullet 
                  conceptKey="azure-synapse-analytics"
                  onClick={() => handleConceptClick('azure-synapse-analytics')}
                  isViewed={viewedConcepts.has('azure-synapse-analytics')}
                  isBookmarked={bookmarkedConcepts.has('azure-synapse-analytics')}
                  level={1}
                >
                  - Azure Synapse Analytics
                </ClickableBullet>
              </ul>
              
              <h4 className="font-semibold mb-3">
                <ClickableBullet 
                  conceptKey="devops-solutions"
                  onClick={() => handleConceptClick('devops-solutions')}
                  isViewed={viewedConcepts.has('devops-solutions')}
                  isBookmarked={bookmarkedConcepts.has('devops-solutions')}
                >
                  • DevOps solutions
                </ClickableBullet>
              </h4>
              <ul className="ml-4 space-y-2">
                <ClickableBullet 
                  conceptKey="azure-devops"
                  onClick={() => handleConceptClick('azure-devops')}
                  isViewed={viewedConcepts.has('azure-devops')}
                  isBookmarked={bookmarkedConcepts.has('azure-devops')}
                  level={1}
                >
                  - Azure DevOps
                </ClickableBullet>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-l-4 border-l-green-600">
        <CardContent className="p-6">
          <h3 className="text-lg font-semibold mb-4 flex items-center">
            <Badge className="bg-green-600 text-white mr-3">2.7</Badge>
            Describe Azure management tools
          </h3>
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div>
              <h4 className="font-semibold mb-3">
                <ClickableBullet 
                  conceptKey="management-interfaces"
                  onClick={() => handleConceptClick('management-interfaces')}
                  isViewed={viewedConcepts.has('management-interfaces')}
                  isBookmarked={bookmarkedConcepts.has('management-interfaces')}
                >
                  • Management interfaces
                </ClickableBullet>
              </h4>
              <ul className="ml-4 space-y-2">
                <ClickableBullet 
                  conceptKey="azure-portal"
                  onClick={() => handleConceptClick('azure-portal')}
                  isViewed={viewedConcepts.has('azure-portal')}
                  isBookmarked={bookmarkedConcepts.has('azure-portal')}
                  level={1}
                >
                  - Portal
                </ClickableBullet>
                <ClickableBullet 
                  conceptKey="azure-powershell"
                  onClick={() => handleConceptClick('azure-powershell')}
                  isViewed={viewedConcepts.has('azure-powershell')}
                  isBookmarked={bookmarkedConcepts.has('azure-powershell')}
                  level={1}
                >
                  - PowerShell
                </ClickableBullet>
                <ClickableBullet 
                  conceptKey="azure-cli"
                  onClick={() => handleConceptClick('azure-cli')}
                  isViewed={viewedConcepts.has('azure-cli')}
                  isBookmarked={bookmarkedConcepts.has('azure-cli')}
                  level={1}
                >
                  - CLI
                </ClickableBullet>
                <ClickableBullet 
                  conceptKey="azure-cloud-shell"
                  onClick={() => handleConceptClick('azure-cloud-shell')}
                  isViewed={viewedConcepts.has('azure-cloud-shell')}
                  isBookmarked={bookmarkedConcepts.has('azure-cloud-shell')}
                  level={1}
                >
                  - Cloud Shell
                </ClickableBullet>
                <ClickableBullet 
                  conceptKey="azure-mobile-app"
                  onClick={() => handleConceptClick('azure-mobile-app')}
                  isViewed={viewedConcepts.has('azure-mobile-app')}
                  isBookmarked={bookmarkedConcepts.has('azure-mobile-app')}
                  level={1}
                >
                  - Mobile App
                </ClickableBullet>
                <ClickableBullet 
                  conceptKey="azure-portal"
                  onClick={() => handleConceptClick('azure-portal')}
                  isViewed={viewedConcepts.has('azure-portal')}
                  isBookmarked={bookmarkedConcepts.has('azure-portal')}
                  level={1}
                >
                  - Azure Portal
                </ClickableBullet>
                <ClickableBullet 
                  conceptKey="azure-powershell"
                  onClick={() => handleConceptClick('azure-powershell')}
                  isViewed={viewedConcepts.has('azure-powershell')}
                  isBookmarked={bookmarkedConcepts.has('azure-powershell')}
                  level={1}
                >
                  - Azure PowerShell
                </ClickableBullet>
                <ClickableBullet 
                  conceptKey="azure-cli"
                  onClick={() => handleConceptClick('azure-cli')}
                  isViewed={viewedConcepts.has('azure-cli')}
                  isBookmarked={bookmarkedConcepts.has('azure-cli')}
                  level={1}
                >
                  - Azure CLI
                </ClickableBullet>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">
                <ClickableBullet 
                  conceptKey="infrastructure-as-code"
                  onClick={() => handleConceptClick('infrastructure-as-code')}
                  isViewed={viewedConcepts.has('infrastructure-as-code')}
                  isBookmarked={bookmarkedConcepts.has('infrastructure-as-code')}
                >
                  • Infrastructure as Code
                </ClickableBullet>
              </h4>
              <ul className="ml-4 space-y-2">
                <ClickableBullet 
                  conceptKey="arm-templates"
                  onClick={() => handleConceptClick('arm-templates')}
                  isViewed={viewedConcepts.has('arm-templates')}
                  isBookmarked={bookmarkedConcepts.has('arm-templates')}
                  level={1}
                >
                  - ARM templates
                </ClickableBullet>
                <ClickableBullet 
                  conceptKey="arm-templates"
                  onClick={() => handleConceptClick('arm-templates')}
                  isViewed={viewedConcepts.has('arm-templates')}
                  isBookmarked={bookmarkedConcepts.has('arm-templates')}
                  level={1}
                >
                  - ARM Templates
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
            Describe security and network security
          </h3>
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div>
              <h4 className="font-semibold mb-3">
                <ClickableBullet 
                  conceptKey="azure-security-tools"
                  onClick={() => handleConceptClick('azure-security-tools')}
                  isViewed={viewedConcepts.has('azure-security-tools')}
                  isBookmarked={bookmarkedConcepts.has('azure-security-tools')}
                >
                  • Azure security tools
                </ClickableBullet>
              </h4>
              <ul className="ml-4 space-y-2">
                <ClickableBullet 
                  conceptKey="microsoft-defender-cloud"
                  onClick={() => handleConceptClick('microsoft-defender-cloud')}
                  isViewed={viewedConcepts.has('microsoft-defender-cloud')}
                  isBookmarked={bookmarkedConcepts.has('microsoft-defender-cloud')}
                  level={1}
                >
                  - Defender for Cloud
                </ClickableBullet>
                <ClickableBullet 
                  conceptKey="azure-key-vault"
                  onClick={() => handleConceptClick('azure-key-vault')}
                  isViewed={viewedConcepts.has('azure-key-vault')}
                  isBookmarked={bookmarkedConcepts.has('azure-key-vault')}
                  level={1}
                >
                  - Key Vault
                </ClickableBullet>
                <ClickableBullet 
                  conceptKey="information-protection"
                  onClick={() => handleConceptClick('information-protection')}
                  isViewed={viewedConcepts.has('information-protection')}
                  isBookmarked={bookmarkedConcepts.has('information-protection')}
                  level={1}
                >
                  - Information Protection
                </ClickableBullet>
                <ClickableBullet 
                  conceptKey="defender-for-identity"
                  onClick={() => handleConceptClick('defender-for-identity')}
                  isViewed={viewedConcepts.has('defender-for-identity')}
                  isBookmarked={bookmarkedConcepts.has('defender-for-identity')}
                  level={1}
                >
                  - Defender for Identity
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
                <ClickableBullet 
                  conceptKey="azure-key-vault"
                  onClick={() => handleConceptClick('azure-key-vault')}
                  isViewed={viewedConcepts.has('azure-key-vault')}
                  isBookmarked={bookmarkedConcepts.has('azure-key-vault')}
                  level={1}
                >
                  - Azure Key Vault
                </ClickableBullet>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">
                <ClickableBullet 
                  conceptKey="network-security"
                  onClick={() => handleConceptClick('network-security')}
                  isViewed={viewedConcepts.has('network-security')}
                  isBookmarked={bookmarkedConcepts.has('network-security')}
                >
                  • Network security
                </ClickableBullet>
              </h4>
              <ul className="ml-4 space-y-2">
                <ClickableBullet 
                  conceptKey="network-security-groups"
                  onClick={() => handleConceptClick('network-security-groups')}
                  isViewed={viewedConcepts.has('network-security-groups')}
                  isBookmarked={bookmarkedConcepts.has('network-security-groups')}
                  level={1}
                >
                  - NSGs
                </ClickableBullet>
                <ClickableBullet 
                  conceptKey="azure-firewall"
                  onClick={() => handleConceptClick('azure-firewall')}
                  isViewed={viewedConcepts.has('azure-firewall')}
                  isBookmarked={bookmarkedConcepts.has('azure-firewall')}
                  level={1}
                >
                  - Firewall
                </ClickableBullet>
                <ClickableBullet 
                  conceptKey="azure-ddos-protection"
                  onClick={() => handleConceptClick('azure-ddos-protection')}
                  isViewed={viewedConcepts.has('azure-ddos-protection')}
                  isBookmarked={bookmarkedConcepts.has('azure-ddos-protection')}
                  level={1}
                >
                  - DDoS Protection
                </ClickableBullet>
                <ClickableBullet 
                  conceptKey="azure-bastion"
                  onClick={() => handleConceptClick('azure-bastion')}
                  isViewed={viewedConcepts.has('azure-bastion')}
                  isBookmarked={bookmarkedConcepts.has('azure-bastion')}
                  level={1}
                >
                  - Bastion
                </ClickableBullet>
                <ClickableBullet 
                  conceptKey="network-security-groups"
                  onClick={() => handleConceptClick('network-security-groups')}
                  isViewed={viewedConcepts.has('network-security-groups')}
                  isBookmarked={bookmarkedConcepts.has('network-security-groups')}
                  level={1}
                >
                  - Network Security Groups
                </ClickableBullet>
                <ClickableBullet 
                  conceptKey="azure-firewall"
                  onClick={() => handleConceptClick('azure-firewall')}
                  isViewed={viewedConcepts.has('azure-firewall')}
                  isBookmarked={bookmarkedConcepts.has('azure-firewall')}
                  level={1}
                >
                  - Azure Firewall
                </ClickableBullet>
                <ClickableBullet 
                  conceptKey="azure-ddos-protection"
                  onClick={() => handleConceptClick('azure-ddos-protection')}
                  isViewed={viewedConcepts.has('azure-ddos-protection')}
                  isBookmarked={bookmarkedConcepts.has('azure-ddos-protection')}
                  level={1}
                >
                  - DDoS Protection
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
            Describe identity, governance, and compliance
          </h3>
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div>
              <h4 className="font-semibold mb-3">
                <ClickableBullet 
                  conceptKey="identity-services"
                  onClick={() => handleConceptClick('identity-services')}
                  isViewed={viewedConcepts.has('identity-services')}
                  isBookmarked={bookmarkedConcepts.has('identity-services')}
                >
                  • Identity services
                </ClickableBullet>
              </h4>
              <ul className="ml-4 space-y-2">
                <ClickableBullet 
                  conceptKey="microsoft-entra-id"
                  onClick={() => handleConceptClick('microsoft-entra-id')}
                  isViewed={viewedConcepts.has('microsoft-entra-id')}
                  isBookmarked={bookmarkedConcepts.has('microsoft-entra-id')}
                  level={1}
                >
                  - Azure AD
                </ClickableBullet>
                <ClickableBullet 
                  conceptKey="multi-factor-authentication"
                  onClick={() => handleConceptClick('multi-factor-authentication')}
                  isViewed={viewedConcepts.has('multi-factor-authentication')}
                  isBookmarked={bookmarkedConcepts.has('multi-factor-authentication')}
                  level={1}
                >
                  - MFA
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
                  - Multi-Factor Authentication
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
              <h4 className="font-semibold mb-3">
                <ClickableBullet 
                  conceptKey="governance-tools"
                  onClick={() => handleConceptClick('governance-tools')}
                  isViewed={viewedConcepts.has('governance-tools')}
                  isBookmarked={bookmarkedConcepts.has('governance-tools')}
                >
                  • Governance tools
                </ClickableBullet>
              </h4>
              <ul className="ml-4 space-y-2">
                <ClickableBullet 
                  conceptKey="role-based-access-control"
                  onClick={() => handleConceptClick('role-based-access-control')}
                  isViewed={viewedConcepts.has('role-based-access-control')}
                  isBookmarked={bookmarkedConcepts.has('role-based-access-control')}
                  level={1}
                >
                  - RBAC
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
                  conceptKey="resource-tags"
                  onClick={() => handleConceptClick('resource-tags')}
                  isViewed={viewedConcepts.has('resource-tags')}
                  isBookmarked={bookmarkedConcepts.has('resource-tags')}
                  level={1}
                >
                  - Tags
                </ClickableBullet>
                <ClickableBullet 
                  conceptKey="azure-policy"
                  onClick={() => handleConceptClick('azure-policy')}
                  isViewed={viewedConcepts.has('azure-policy')}
                  isBookmarked={bookmarkedConcepts.has('azure-policy')}
                  level={1}
                >
                  - Policy
                </ClickableBullet>
                <ClickableBullet 
                  conceptKey="azure-blueprints"
                  onClick={() => handleConceptClick('azure-blueprints')}
                  isViewed={viewedConcepts.has('azure-blueprints')}
                  isBookmarked={bookmarkedConcepts.has('azure-blueprints')}
                  level={1}
                >
                  - Blueprints
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
                  conceptKey="azure-policy"
                  onClick={() => handleConceptClick('azure-policy')}
                  isViewed={viewedConcepts.has('azure-policy')}
                  isBookmarked={bookmarkedConcepts.has('azure-policy')}
                  level={1}
                >
                  - Azure Policy
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
            Describe cost management in Azure
          </h3>
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div>
              <h4 className="font-semibold mb-3">
                <ClickableBullet 
                  conceptKey="azure-cost-management"
                  onClick={() => handleConceptClick('azure-cost-management')}
                  isViewed={viewedConcepts.has('azure-cost-management')}
                  isBookmarked={bookmarkedConcepts.has('azure-cost-management')}
                >
                  • Azure cost management
                </ClickableBullet>
              </h4>
              <ul className="ml-4 space-y-2">
                <ClickableBullet 
                  conceptKey="cost-factors"
                  onClick={() => handleConceptClick('cost-factors')}
                  isViewed={viewedConcepts.has('cost-factors')}
                  isBookmarked={bookmarkedConcepts.has('cost-factors')}
                  level={1}
                >
                  - Cost factors
                </ClickableBullet>
                <ClickableBullet 
                  conceptKey="pricing-calculator"
                  onClick={() => handleConceptClick('pricing-calculator')}
                  isViewed={viewedConcepts.has('pricing-calculator')}
                  isBookmarked={bookmarkedConcepts.has('pricing-calculator')}
                  level={1}
                >
                  - Pricing Calculator
                </ClickableBullet>
                <ClickableBullet 
                  conceptKey="total-cost-ownership"
                  onClick={() => handleConceptClick('total-cost-ownership')}
                  isViewed={viewedConcepts.has('total-cost-ownership')}
                  isBookmarked={bookmarkedConcepts.has('total-cost-ownership')}
                  level={1}
                >
                  - TCO calculator
                </ClickableBullet>
                <ClickableBullet 
                  conceptKey="azure-cost-management"
                  onClick={() => handleConceptClick('azure-cost-management')}
                  isViewed={viewedConcepts.has('azure-cost-management')}
                  isBookmarked={bookmarkedConcepts.has('azure-cost-management')}
                  level={1}
                >
                  - Cost Management tool
                </ClickableBullet>
              </ul>
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
              <h4 className="font-semibold mb-3">
                <ClickableBullet 
                  conceptKey="governance-tools"
                  onClick={() => handleConceptClick('governance-tools')}
                  isViewed={viewedConcepts.has('governance-tools')}
                  isBookmarked={bookmarkedConcepts.has('governance-tools')}
                >
                  • Governance tools
                </ClickableBullet>
              </h4>
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
              <h4 className="font-semibold mb-3">
                <ClickableBullet 
                  conceptKey="monitoring-management-tools"
                  onClick={() => handleConceptClick('monitoring-management-tools')}
                  isViewed={viewedConcepts.has('monitoring-management-tools')}
                  isBookmarked={bookmarkedConcepts.has('monitoring-management-tools')}
                >
                  • Monitoring and management tools
                </ClickableBullet>
              </h4>
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

      <Card className="border-l-4 border-l-purple-600">
        <CardContent className="p-6">
          <h3 className="text-lg font-semibold mb-4 flex items-center">
            <Badge className="bg-purple-600 text-white mr-3">3.4</Badge>
            Describe privacy and compliance resources
          </h3>
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div>
              <h4 className="font-semibold mb-3">
                <ClickableBullet 
                  conceptKey="privacy-compliance-resources"
                  onClick={() => handleConceptClick('privacy-compliance-resources')}
                  isViewed={viewedConcepts.has('privacy-compliance-resources')}
                  isBookmarked={bookmarkedConcepts.has('privacy-compliance-resources')}
                >
                  • Privacy and compliance resources
                </ClickableBullet>
              </h4>
              <ul className="ml-4 space-y-2">
                <ClickableBullet 
                  conceptKey="microsoft-privacy-statement"
                  onClick={() => handleConceptClick('microsoft-privacy-statement')}
                  isViewed={viewedConcepts.has('microsoft-privacy-statement')}
                  isBookmarked={bookmarkedConcepts.has('microsoft-privacy-statement')}
                  level={1}
                >
                  - Privacy Statement
                </ClickableBullet>
                <ClickableBullet 
                  conceptKey="microsoft-trust-center"
                  onClick={() => handleConceptClick('microsoft-trust-center')}
                  isViewed={viewedConcepts.has('microsoft-trust-center')}
                  isBookmarked={bookmarkedConcepts.has('microsoft-trust-center')}
                  level={1}
                >
                  - Trust Center
                </ClickableBullet>
                <ClickableBullet 
                  conceptKey="azure-compliance-documentation"
                  onClick={() => handleConceptClick('azure-compliance-documentation')}
                  isViewed={viewedConcepts.has('azure-compliance-documentation')}
                  isBookmarked={bookmarkedConcepts.has('azure-compliance-documentation')}
                  level={1}
                >
                  - Compliance documentation
                </ClickableBullet>
                <ClickableBullet 
                  conceptKey="sovereign-regions"
                  onClick={() => handleConceptClick('sovereign-regions')}
                  isViewed={viewedConcepts.has('sovereign-regions')}
                  isBookmarked={bookmarkedConcepts.has('sovereign-regions')}
                  level={1}
                >
                  - Sovereign Regions
                </ClickableBullet>
              </ul>
              <ul className="ml-4 space-y-2">
                <ClickableBullet 
                  conceptKey="microsoft-privacy-statement"
                  onClick={() => handleConceptClick('microsoft-privacy-statement')}
                  isViewed={viewedConcepts.has('microsoft-privacy-statement')}
                  isBookmarked={bookmarkedConcepts.has('microsoft-privacy-statement')}
                  level={1}
                >
                  - Microsoft Privacy Statement
                </ClickableBullet>
                <ClickableBullet 
                  conceptKey="microsoft-trust-center"
                  onClick={() => handleConceptClick('microsoft-trust-center')}
                  isViewed={viewedConcepts.has('microsoft-trust-center')}
                  isBookmarked={bookmarkedConcepts.has('microsoft-trust-center')}
                  level={1}
                >
                  - Microsoft Trust Center
                </ClickableBullet>
                <ClickableBullet 
                  conceptKey="azure-compliance-documentation"
                  onClick={() => handleConceptClick('azure-compliance-documentation')}
                  isViewed={viewedConcepts.has('azure-compliance-documentation')}
                  isBookmarked={bookmarkedConcepts.has('azure-compliance-documentation')}
                  level={1}
                >
                  - Azure compliance documentation
                </ClickableBullet>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-l-4 border-l-purple-600">
        <CardContent className="p-6">
          <h3 className="text-lg font-semibold mb-4 flex items-center">
            <Badge className="bg-purple-600 text-white mr-3">3.5</Badge>
            Describe Service Level Agreements (SLAs)
          </h3>
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div>
              <h4 className="font-semibold mb-3">
                <ClickableBullet 
                  conceptKey="service-level-agreements"
                  onClick={() => handleConceptClick('service-level-agreements')}
                  isViewed={viewedConcepts.has('service-level-agreements')}
                  isBookmarked={bookmarkedConcepts.has('service-level-agreements')}
                >
                  • Service Level Agreements
                </ClickableBullet>
              </h4>
              <ul className="ml-4 space-y-2">
                <ClickableBullet 
                  conceptKey="azure-sla"
                  onClick={() => handleConceptClick('azure-sla')}
                  isViewed={viewedConcepts.has('azure-sla')}
                  isBookmarked={bookmarkedConcepts.has('azure-sla')}
                  level={1}
                >
                  - Purpose of SLAs
                </ClickableBullet>
                <ClickableBullet 
                  conceptKey="sla-factors"
                  onClick={() => handleConceptClick('sla-factors')}
                  isViewed={viewedConcepts.has('sla-factors')}
                  isBookmarked={bookmarkedConcepts.has('sla-factors')}
                  level={1}
                >
                  - Factors impacting SLAs
                </ClickableBullet>
                <ClickableBullet 
                  conceptKey="azure-sla"
                  onClick={() => handleConceptClick('azure-sla')}
                  isViewed={viewedConcepts.has('azure-sla')}
                  isBookmarked={bookmarkedConcepts.has('azure-sla')}
                  level={1}
                >
                  - Purpose of SLAs
                </ClickableBullet>
                <ClickableBullet 
                  conceptKey="sla-factors"
                  onClick={() => handleConceptClick('sla-factors')}
                  isViewed={viewedConcepts.has('sla-factors')}
                  isBookmarked={bookmarkedConcepts.has('sla-factors')}
                  level={1}
                >
                  - Factors impacting SLAs
                </ClickableBullet>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">
                <ClickableBullet 
                  conceptKey="service-lifecycle"
                  onClick={() => handleConceptClick('service-lifecycle')}
                  isViewed={viewedConcepts.has('service-lifecycle')}
                  isBookmarked={bookmarkedConcepts.has('service-lifecycle')}
                >
                  • Service lifecycle
                </ClickableBullet>
              </h4>
              <ul className="ml-4 space-y-2">
                <ClickableBullet 
                  conceptKey="azure-preview-ga"
                  onClick={() => handleConceptClick('azure-preview-ga')}
                  isViewed={viewedConcepts.has('azure-preview-ga')}
                  isBookmarked={bookmarkedConcepts.has('azure-preview-ga')}
                  level={1}
                >
                  - Preview vs General Availability
                </ClickableBullet>
                <ClickableBullet 
                  conceptKey="azure-preview-ga"
                  onClick={() => handleConceptClick('azure-preview-ga')}
                  isViewed={viewedConcepts.has('azure-preview-ga')}
                  isBookmarked={bookmarkedConcepts.has('azure-preview-ga')}
                  level={1}
                >
                  - Preview vs General Availability
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