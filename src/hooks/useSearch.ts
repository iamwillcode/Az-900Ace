import { useState } from 'react';
import { conceptExplanations, ConceptExplanation } from '@/lib/az900-concepts';

export const useSearch = (getDomainFromKey: (key: string) => string) => {
  const [searchTerm, setSearchTerm] = useState('');

  const searchConcepts = (term: string): Array<ConceptExplanation & { key: string; domain: string; relevanceScore: number }> => {
    if (!term || term.length < 2) return [];

    const results: Array<ConceptExplanation & { key: string; domain: string; relevanceScore: number }> = [];
    const lowerTerm = term.toLowerCase();

    Object.entries(conceptExplanations).forEach(([key, concept]) => {
      let relevanceScore = 0;
      const title = concept.title.toLowerCase();
      const explanation = concept.explanation.toLowerCase();
      const examples = concept.examples?.toLowerCase() || '';
      const mnemonic = concept.mnemonic?.toLowerCase() || '';

      // Title matches get highest score
      if (title.includes(lowerTerm)) {
        relevanceScore += 20;
        if (title.startsWith(lowerTerm)) relevanceScore += 10;
      }

      // Explanation matches
      if (explanation.includes(lowerTerm)) {
        relevanceScore += 10;
      }

      // Examples and mnemonic matches
      if (examples.includes(lowerTerm)) relevanceScore += 5;
      if (mnemonic.includes(lowerTerm)) relevanceScore += 5;

      // Key matches (kebab-case)
      if (key.includes(lowerTerm.replace(/\s+/g, '-'))) {
        relevanceScore += 15;
      }

      if (relevanceScore > 0) {
        results.push({
          ...concept,
          key,
          domain: getDomainFromKey(key),
          relevanceScore
        });
      }
    });

    // Sort by relevance score (highest first)
    return results.sort((a, b) => b.relevanceScore - a.relevanceScore);
  };

  return {
    searchTerm,
    setSearchTerm,
    searchConcepts
  };
};