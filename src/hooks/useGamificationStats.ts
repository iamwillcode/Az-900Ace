
'use client';

import { useState, useEffect, useCallback } from 'react';
import {
  allBadges,
  getEarnedBadges,
  getTotalPoints,
  setTotalPoints,
  addEarnedBadgeId,
  getQuizzesCompletedCount,
  incrementQuizzesCompletedCount,
  type Badge
} from '@/lib/gamification';

export interface GamificationStats {
  totalPoints: number;
  earnedBadges: Badge[];
  quizzesCompleted: number;
}

const POINTS_PER_CORRECT_ANSWER = 10;

export function useGamificationStats() {
  const [stats, setStats] = useState<GamificationStats>({ totalPoints: 0, earnedBadges: [], quizzesCompleted: 0 });
  const [isLoading, setIsLoading] = useState(true);

  const loadStats = useCallback(() => {
    const points = getTotalPoints();
    const badges = getEarnedBadges();
    const quizzes = getQuizzesCompletedCount();
    setStats({ totalPoints: points, earnedBadges: badges, quizzesCompleted: quizzes });
    setIsLoading(false);
  }, []);

  useEffect(() => {
    loadStats();
    // Optional: Listen to storage events if stats could be changed in other tabs.
    // For simplicity, we're not doing that here.
  }, [loadStats]);

  const awardPoints = useCallback((correctAnswers: number): number => {
    const pointsEarned = correctAnswers * POINTS_PER_CORRECT_ANSWER;
    const newTotalPoints = getTotalPoints() + pointsEarned;
    setTotalPoints(newTotalPoints);
    // No need to update quizzesCompleted here, it's done separately
    setStats(prev => ({ ...prev, totalPoints: newTotalPoints }));
    return pointsEarned;
  }, []);

  const recordQuizCompleted = useCallback(() => {
    incrementQuizzesCompletedCount();
    setStats(prev => ({...prev, quizzesCompleted: getQuizzesCompletedCount()}));
  }, []);


  const checkAndAwardNewBadges = useCallback((currentScore?: number, totalQuestions?: number): Badge[] => {
    const currentPoints = getTotalPoints(); // Use latest from storage
    const currentEarnedBadgeIds = getEarnedBadges().map(b => b.id); // Use latest from storage
    const quizzesDone = getQuizzesCompletedCount(); // Use latest from storage

    const newlyAwardedBadges: Badge[] = [];

    // Check for BADGE_FIRST_QUIZ
    const firstQuizBadge = allBadges.find(b => b.id === 'BADGE_FIRST_QUIZ');
    if (firstQuizBadge && quizzesDone > 0 && !currentEarnedBadgeIds.includes(firstQuizBadge.id)) {
        addEarnedBadgeId(firstQuizBadge.id);
        newlyAwardedBadges.push(firstQuizBadge);
    }

    // Check for BADGE_PERFECT_SCORE
    if (currentScore !== undefined && totalQuestions !== undefined && currentScore === totalQuestions && totalQuestions > 0) {
        const perfectScoreBadge = allBadges.find(b => b.id === 'BADGE_PERFECT_SCORE');
        if (perfectScoreBadge && !currentEarnedBadgeIds.includes(perfectScoreBadge.id)) {
            addEarnedBadgeId(perfectScoreBadge.id);
            newlyAwardedBadges.push(perfectScoreBadge);
        }
    }

    // Check for BADGE_POINT_EXPLORER
    const pointExplorerBadge = allBadges.find(b => b.id === 'BADGE_POINT_EXPLORER');
    if (pointExplorerBadge && currentPoints >= 100 && !currentEarnedBadgeIds.includes(pointExplorerBadge.id)) {
        addEarnedBadgeId(pointExplorerBadge.id);
        newlyAwardedBadges.push(pointExplorerBadge);
    }

    if (newlyAwardedBadges.length > 0) {
      // Update local state with all earned badges including new ones
      setStats(prev => ({ ...prev, earnedBadges: getEarnedBadges() }));
    }
    return newlyAwardedBadges;
  }, []);


  return { ...stats, isLoading, awardPoints, checkAndAwardNewBadges, recordQuizCompleted, refreshStats: loadStats };
}
