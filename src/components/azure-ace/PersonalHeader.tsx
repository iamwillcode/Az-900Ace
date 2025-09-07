import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Mail, MessageCircle } from 'lucide-react';
import { domains } from '@/lib/az900-domains';

export const PersonalHeader: React.FC = () => {
  return (
    <>
      {/* Main Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-3">
          Microsoft Azure Fundamentals
        </h1>
        <Badge variant="default" className="text-lg px-4 py-1 bg-blue-600">
          EXAM NUMBER: AZ-900
        </Badge>
        <div className="flex justify-center space-x-3 mt-6">
          {domains.map((domain, i) => (
            <div 
              key={domain.id} 
              className={`w-14 h-14 ${domain.color} rounded-lg flex items-center justify-center text-white text-xl shadow-lg`}
              title={domain.title}
            >
              {i === 0 ? '☁️' : i === 1 ? '🏗️' : '⚙️'}
            </div>
          ))}
        </div>
      </div>

      {/* Personal Message */}
      <Card className="mb-8 bg-blue-50 border-blue-200">
        <CardContent className="p-6">
          <div className="text-gray-700 text-sm leading-relaxed">
            <p className="mb-4">
              <strong>Hi, my name is Free Will,</strong> I made this app to help you study and hopefully pass the Microsoft AZ-900 exam. 
              Please always refer to the{' '}
              <a 
                href="https://docs.microsoft.com/en-us/certifications/exams/az-900" 
                className="text-blue-600 hover:text-blue-800 underline inline-flex items-center"
                target="_blank" 
                rel="noopener noreferrer"
              >
                official Microsoft website
                <ExternalLink className="h-3 w-3 ml-1" />
              </a>{' '}
              for any changes in the exam or objectives, and also please download a copy of the official exam objectives from Microsoft Learn. 
              This app has no affiliations with Microsoft.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
              <p className="flex items-center">
                If you have any issues with the app, you can email me at{' '}
                <a 
                  href="mailto:freewill@example.com" 
                  className="text-blue-600 hover:text-blue-800 underline inline-flex items-center ml-1"
                >
                  <Mail className="h-4 w-4 mr-1" />
                  freewill@example.com
                </a>
              </p>
              <div className="flex items-center">
                <span className="text-gray-600 mr-2">or join our</span>
                <a 
                  href="#" 
                  className="inline-flex items-center px-3 py-1 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors text-sm font-medium"
                  target="_blank" 
                  rel="noopener noreferrer"
                  title="Join Study Support Group"
                >
                  <MessageCircle className="h-4 w-4 mr-1" />
                  Study Group
                </a>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
};