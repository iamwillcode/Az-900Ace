import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { BookmarkIcon, X } from 'lucide-react';
import { ConceptExplanation } from '@/lib/az900-concepts';

interface ConceptModalProps {
  selectedConcept: (ConceptExplanation & { key: string }) | null;
  onClose: () => void;
  bookmarkedConcepts: Set<string>;
  toggleBookmark: (key: string) => void;
}

export const ConceptModal: React.FC<ConceptModalProps> = ({
  selectedConcept,
  onClose,
  bookmarkedConcepts,
  toggleBookmark
}) => {
  if (!selectedConcept) return null;

  const isBookmarked = bookmarkedConcepts.has(selectedConcept.key);

  return (
    <Dialog open={!!selectedConcept} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <DialogTitle className="text-2xl font-bold text-blue-600 mb-2">
                {selectedConcept.title}
              </DialogTitle>
              <div className="mb-4">
                <Badge variant="secondary">
                  AZ-900 Concept
                </Badge>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => toggleBookmark(selectedConcept.key)}
                className={isBookmarked ? 'text-yellow-600' : 'text-gray-400'}
              >
                <BookmarkIcon className="h-5 w-5" fill={isBookmarked ? 'currentColor' : 'none'} />
              </Button>
              <Button variant="ghost" size="sm" onClick={onClose}>
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Main Explanation */}
          <div>
            <div className="text-gray-700 leading-relaxed whitespace-pre-line">
              {selectedConcept.explanation}
            </div>
          </div>

          {/* Examples */}
          {selectedConcept.examples && (
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <div className="text-green-700 whitespace-pre-line">
                {selectedConcept.examples}
              </div>
            </div>
          )}

          {/* Use Case */}
          {selectedConcept.useCase && (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="text-blue-700 whitespace-pre-line">
                {selectedConcept.useCase}
              </div>
            </div>
          )}

          {/* Memory Aid */}
          {selectedConcept.mnemonic && (
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
              <div className="text-purple-700 font-medium whitespace-pre-line">
                {selectedConcept.mnemonic}
              </div>
            </div>
          )}

          {/* Visual */}
          {selectedConcept.visual && (
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <pre className="text-gray-700 text-sm font-mono whitespace-pre overflow-x-auto">
                {selectedConcept.visual}
              </pre>
            </div>
          )}

          {/* Study Tips */}
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
            <h3 className="font-semibold text-lg mb-2 text-purple-800 flex items-center">
              📚 Study Tips
            </h3>
            <ul className="text-purple-700 space-y-1">
              <li>• Try to relate this concept to real-world scenarios</li>
              <li>• Practice explaining this in your own words</li>
              <li>• Look for this concept in Azure portal or documentation</li>
              {isBookmarked ? (
                <li>• ⭐ You've bookmarked this - review it regularly!</li>
              ) : (
                <li>• Consider bookmarking if this is challenging for you</li>
              )}
            </ul>
          </div>
        </div>

        <div className="flex justify-end space-x-3 pt-4 border-t">
          <Button variant="outline" onClick={onClose}>
            Close
          </Button>
          <Button 
            onClick={() => toggleBookmark(selectedConcept.key)}
            variant={isBookmarked ? "destructive" : "default"}
          >
            {isBookmarked ? 'Remove Bookmark' : 'Bookmark Concept'}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};