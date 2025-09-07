import React from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Search, Bookmark, Target, X } from 'lucide-react';
import { ConceptExplanation } from '@/lib/az900-concepts';

interface SearchBarProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  showBookmarks: boolean;
  setShowBookmarks: (show: boolean) => void;
  practiceMode: boolean;
  setPracticeMode: (mode: boolean) => void;
  bookmarkedConcepts: Set<string>;
  searchConcepts: (term: string) => Array<ConceptExplanation & { key: string; domain: string; relevanceScore: number }>;
  getBookmarkedConcepts: () => Array<ConceptExplanation & { key: string; domain: string }>;
  setSelectedConcept: (concept: ConceptExplanation & { key: string }) => void;
  toggleBookmark: (key: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  searchTerm,
  setSearchTerm,
  showBookmarks,
  setShowBookmarks,
  practiceMode,
  setPracticeMode,
  bookmarkedConcepts,
  searchConcepts,
  getBookmarkedConcepts,
  setSelectedConcept,
  toggleBookmark
}) => {
  const searchResults = searchTerm.length >= 2 ? searchConcepts(searchTerm) : [];
  const bookmarkedResults = getBookmarkedConcepts();

  return (
    <Card className="mb-6 bg-gray-50 border-gray-200">
      <CardContent className="p-6">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
          {/* Search Input */}
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              type="text"
              placeholder="Search AZ-900 concepts, explanations, and examples..."
              className="pl-10 pr-4 py-2 w-full"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-2">
            <Button
              onClick={() => setShowBookmarks(!showBookmarks)}
              variant={showBookmarks ? "default" : "outline"}
              size="sm"
              className={showBookmarks ? 'bg-yellow-500 hover:bg-yellow-600' : ''}
            >
              <Bookmark className="h-4 w-4 mr-2" />
              Bookmarks ({bookmarkedConcepts.size})
            </Button>
            
            <Button
              onClick={() => setPracticeMode(!practiceMode)}
              variant={practiceMode ? "default" : "outline"}
              size="sm"
              className={practiceMode ? 'bg-orange-500 hover:bg-orange-600' : ''}
            >
              <Target className="h-4 w-4 mr-2" />
              Practice
            </Button>
          </div>
        </div>

        {/* Search Results */}
        {searchTerm && searchTerm.length >= 2 && (
          <div className="mt-6">
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-semibold text-gray-800 flex items-center">
                <Search className="h-4 w-4 mr-2" />
                Search Results ({searchResults.length})
              </h4>
              {searchResults.length === 0 && (
                <Badge variant="secondary">No matches found</Badge>
              )}
            </div>
            
            {searchResults.length > 0 && (
              <div className="space-y-3 max-h-80 overflow-y-auto">
                {searchResults.map((concept, index) => (
                  <div
                    key={concept.key}
                    className="p-4 bg-white border rounded-lg cursor-pointer hover:bg-blue-50 hover:border-blue-200 transition-all duration-200"
                    onClick={() => setSelectedConcept(concept)}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="font-semibold text-blue-600 mb-1">
                          {concept.title || 'Untitled'}
                        </div>
                        <div className="text-sm text-gray-600 mb-2 line-clamp-2">
                          {concept.explanation || 'No description available'}
                        </div>
                        <div className="flex items-center space-x-2">
                          <Badge variant="outline" className="text-xs">
                            {concept.domain || 'General'}
                          </Badge>
                          {concept.relevanceScore > 15 && (
                            <Badge variant="default" className="text-xs bg-green-100 text-green-700">
                              ⭐ High Match
                            </Badge>
                          )}
                        </div>
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        #{index + 1}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Bookmarks Display */}
        {showBookmarks && (
          <div className="mt-6">
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-semibold text-gray-800 flex items-center">
                <Bookmark className="h-4 w-4 mr-2 text-yellow-600" />
                Bookmarked Concepts ({bookmarkedConcepts.size})
              </h4>
              {bookmarkedConcepts.size === 0 && (
                <Badge variant="secondary">No bookmarks yet</Badge>
              )}
            </div>

            {bookmarkedResults.length > 0 && (
              <div className="space-y-3 max-h-80 overflow-y-auto">
                {bookmarkedResults.map((concept) => (
                  <div
                    key={concept.key}
                    className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg cursor-pointer hover:bg-yellow-100 transition-colors duration-200"
                    onClick={() => setSelectedConcept(concept)}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="font-semibold text-yellow-700 mb-1 flex items-center">
                          <Bookmark className="h-4 w-4 mr-2 text-yellow-600" />
                          {concept.title || 'Untitled'}
                        </div>
                        <div className="text-sm text-gray-600 mb-2 line-clamp-2">
                          {concept.explanation || 'No description available'}
                        </div>
                        <Badge variant="outline" className="text-xs border-yellow-300 text-yellow-700">
                          {concept.domain}
                        </Badge>
                      </div>
                      <Button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleBookmark(concept.key);
                        }}
                        variant="ghost"
                        size="sm"
                        className="text-yellow-600 hover:text-yellow-800 hover:bg-yellow-200"
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
};