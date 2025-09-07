
'use client';
import { useState } from 'react';
import { domains, getDomainFromKey } from '@/lib/az900-domains';
import { conceptExplanations, ConceptExplanation } from '@/lib/az900-concepts';
import { PersonalHeader } from '@/components/azure-ace/PersonalHeader';
import { SearchBar } from '@/components/azure-ace/SearchBar';
import { StudyTimer } from '@/components/azure-ace/StudyTimer';
import { ProgressTracker } from '@/components/azure-ace/ProgressTracker';
import { PracticeMode } from '@/components/azure-ace/PracticeMode';
import { DomainContent } from '@/components/azure-ace/DomainContent';
import { ConceptModal } from '@/components/azure-ace/ConceptModal';
import { DomainCard } from '@/components/azure-ace/DomainCard';
import { useBookmarks } from '@/hooks/useBookmarks';
import { useSearch } from '@/hooks/useSearch';
import { useStudyTimer } from '@/hooks/useStudyTimer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Info } from 'lucide-react';

export default function Home() {
  const [selectedDomain, setSelectedDomain] = useState<number | null>(null);
  const [selectedConcept, setSelectedConcept] = useState<(ConceptExplanation & { key: string }) | null>(null);
  const [viewedConcepts, setViewedConcepts] = useState<Set<string>>(new Set());
  const [practiceMode, setPracticeMode] = useState(false);

  // Custom hooks
  const {
    bookmarkedConcepts,
    showBookmarks,
    setShowBookmarks,
    toggleBookmark,
    getBookmarkedConcepts
  } = useBookmarks(getDomainFromKey);

  const {
    searchTerm,
    setSearchTerm,
    searchConcepts
  } = useSearch(getDomainFromKey);

  const {
    studyTime,
    isStudying,
    startStudySession,
    pauseStudySession,
    resetStudySession,
    getCurrentStudyTime,
    formatTime
  } = useStudyTimer(selectedConcept, selectedDomain, searchTerm);

  const totalConcepts = Object.keys(conceptExplanations).length;

  // Enhanced getBookmarkedConcepts with actual data
  const getBookmarkedConceptsWithData = (): Array<ConceptExplanation & { key: string; domain: string }> => {
    return Array.from(bookmarkedConcepts)
      .map(key => {
        const concept = conceptExplanations[key];
        if (concept) {
          return {
            ...concept,
            key,
            domain: getDomainFromKey(key)
          };
        }
        return null;
      })
      .filter(Boolean) as Array<ConceptExplanation & { key: string; domain: string }>;
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white min-h-screen">
      <PersonalHeader />
      
      {/* Search and Controls */}
      <SearchBar 
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        showBookmarks={showBookmarks}
        setShowBookmarks={setShowBookmarks}
        practiceMode={practiceMode}
        setPracticeMode={setPracticeMode}
        bookmarkedConcepts={bookmarkedConcepts}
        searchConcepts={searchConcepts}
        getBookmarkedConcepts={getBookmarkedConceptsWithData}
        setSelectedConcept={setSelectedConcept}
        toggleBookmark={toggleBookmark}
      />
      
      {/* Progress Tracker */}
      <ProgressTracker 
        viewedConcepts={viewedConcepts}
        bookmarkedConcepts={bookmarkedConcepts}
        totalConcepts={totalConcepts}
        practiceMode={practiceMode}
      />
      
      {/* Study Timer */}
      <StudyTimer 
        studyTime={studyTime}
        isStudying={isStudying}
        formatTime={formatTime}
        getCurrentStudyTime={getCurrentStudyTime}
        startStudySession={startStudySession}
        pauseStudySession={pauseStudySession}
        resetStudySession={resetStudySession}
      />
      
      {/* Practice Mode */}
      <PracticeMode practiceMode={practiceMode} />

      {/* Domain Navigation */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-3 mb-6">
          <Button
            onClick={() => setSelectedDomain(null)}
            variant={selectedDomain === null ? "default" : "outline"}
            className={selectedDomain === null ? 'bg-gray-800 text-white' : ''}
          >
            All Domains
          </Button>
          {domains.map((domain) => (
            <Button
              key={domain.id}
              onClick={() => setSelectedDomain(domain.id)}
              variant={selectedDomain === domain.id ? "default" : "outline"}
              className={selectedDomain === domain.id ? domain.color + ' text-white' : ''}
            >
              Domain {domain.id}
            </Button>
          ))}
        </div>
        {selectedDomain && (
          <Card className="bg-blue-50 border-l-4 border-l-blue-400">
            <CardContent className="p-4">
              <p className="text-sm text-blue-700 flex items-center">
                <Info className="h-4 w-4 mr-2" />
                Click on any item with details badge to see comprehensive explanations and memory aids!
              </p>
            </CardContent>
          </Card>
        )}
      </div>

      {/* Domain Overview or Specific Domain */}
      {selectedDomain === null ? (
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">AZ-900 Exam Domains</h2>
          <div className="grid gap-6">
            {domains.map((domain) => (
              <DomainCard 
                key={domain.id}
                domain={domain}
                onDomainSelect={setSelectedDomain}
              />
            ))}
          </div>
        </div>
      ) : (
        <div>
          <div className="mb-6">
            <h2 className={`text-2xl font-bold mb-2 ${domains[selectedDomain - 1].iconColor}`}>
              Domain {selectedDomain}: {domains[selectedDomain - 1].title}
            </h2>
            <Button
              onClick={() => setSelectedDomain(null)}
              variant="outline"
              size="sm"
            >
              ← Back to all domains
            </Button>
          </div>
          <DomainContent 
            selectedDomain={selectedDomain}
            setSelectedDomain={setSelectedDomain}
            setSelectedConcept={setSelectedConcept}
            setViewedConcepts={setViewedConcepts}
            viewedConcepts={viewedConcepts}
            bookmarkedConcepts={bookmarkedConcepts}
          />
        </div>
      )}

      <ConceptModal 
        selectedConcept={selectedConcept}
        onClose={() => setSelectedConcept(null)}
        bookmarkedConcepts={bookmarkedConcepts}
        toggleBookmark={toggleBookmark}
      />

      {/* Footer */}
      <footer className="mt-12 pt-6 border-t border-gray-200 text-center text-sm text-gray-500">
        <p>
          This study app is designed to help you prepare for the Microsoft Azure Fundamentals AZ-900 certification exam.
          Always refer to the official Microsoft Learn materials and exam objectives for the most up-to-date information.
        </p>
        <p className="mt-2">Made with <span className="text-blue-600">❤️</span> by Free Will • Not affiliated with Microsoft</p>
      </footer>
    </div>
  );
}
