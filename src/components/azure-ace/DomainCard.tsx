import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Domain } from '@/lib/az900-domains';

interface DomainCardProps {
  domain: Domain;
  onDomainSelect: (domainId: number) => void;
}

export const DomainCard: React.FC<DomainCardProps> = ({ domain, onDomainSelect }) => {
  return (
    <Card 
      className="hover:shadow-lg transition-shadow cursor-pointer border-l-4"
      style={{ borderLeftColor: domain.color.replace('bg-', '#') }}
      onClick={() => onDomainSelect(domain.id)}
    >
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className={`w-12 h-12 ${domain.color} rounded-lg flex items-center justify-center text-white text-xl font-bold shadow-md`}>
              {domain.id}
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-gray-800 mb-1">
                {domain.title}
              </h3>
              <p className="text-sm text-gray-600 mb-2">
                {domain.description}
              </p>
            </div>
          </div>
          <div className="text-right">
            <Badge 
              variant="secondary" 
              className={`${domain.color} text-white border-0 text-sm font-semibold px-3 py-1`}
            >
              {domain.percentage}
            </Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};