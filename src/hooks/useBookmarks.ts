import { useState, useEffect } from 'react';
import { ConceptExplanation, conceptExplanations } from '@/lib/az900-concepts';

export const useBookmarks = (getDomainFromKey: (key: string) => string) => {
  const [bookmarkedConcepts, setBookmarkedConcepts] = useState<Set<string>>(new Set());
  const [showBookmarks, setShowBookmarks] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('az900-bookmarks');
    if (saved) {
      try {
        const bookmarks = JSON.parse(saved);
        setBookmarkedConcepts(new Set(bookmarks));
      } catch (error) {
        console.error('Error loading bookmarks:', error);
      }
    }
  }, []);

  const toggleBookmark = (conceptKey: string) => {
    setBookmarkedConcepts(prev => {
      const newBookmarks = new Set(prev);
      if (newBookmarks.has(conceptKey)) {
        newBookmarks.delete(conceptKey);
      } else {
        newBookmarks.add(conceptKey);
      }
      
      // Save to localStorage
      localStorage.setItem('az900-bookmarks', JSON.stringify([...newBookmarks]));
      return newBookmarks;
    });
  };

  const getBookmarkedConcepts = (): Array<ConceptExplanation & { key: string; domain: string }> => {
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

  return {
    bookmarkedConcepts,
    showBookmarks,
    setShowBookmarks,
    toggleBookmark,
    getBookmarkedConcepts
  };
};