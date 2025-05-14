
'use client';
import type { LucideIcon } from 'lucide-react';
import { Medal, Target, TrendingUp } from 'lucide-react';

export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: LucideIcon;
  criteriaText?: string;
}

const LOCAL_STORAGE_POINTS_KEY = 'azureAce_totalPoints_v1';
const LOCAL_STORAGE_BADGES_KEY = 'azureAce_earnedBadges_v1';
const LOCAL_STORAGE_QUIZZES_COMPLETED_KEY = 'azureAce_quizzesCompleted_v1';


export const allBadges: Badge[] = [
  {
    id: 'BADGE_FIRST_QUIZ',
    name: 'First Quiz Taker',
    description: 'Completed your first quiz!',
    icon: Medal,
    criteriaText: 'Complete any quiz.',
  },
  {
    id: 'BADGE_PERFECT_SCORE',
    name: 'Perfectionist',
    description: 'Achieved a perfect score on a quiz.',
    icon: Target,
    criteriaText: 'Score 100% on any quiz.',
  },
  {
    id: 'BADGE_POINT_EXPLORER',
    name: 'Point Explorer',
    description: 'Earned your first 100 points.',
    icon: TrendingUp,
    criteriaText: 'Accumulate 100 points.',
  },
];

// Points functions
export function getTotalPoints(): number {
  if (typeof window === 'undefined') return 0;
  const points = localStorage.getItem(LOCAL_STORAGE_POINTS_KEY);
  return points ? parseInt(points, 10) : 0;
}

export function setTotalPoints(points: number): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem(LOCAL_STORAGE_POINTS_KEY, points.toString());
}

// Badge functions
export function getEarnedBadgeIds(): string[] {
  if (typeof window === 'undefined') return [];
  const badgesJson = localStorage.getItem(LOCAL_STORAGE_BADGES_KEY);
  return badgesJson ? JSON.parse(badgesJson) : [];
}

export function getEarnedBadges(): Badge[] {
    if (typeof window === 'undefined') return [];
    const badgeIds = getEarnedBadgeIds();
    return badgeIds.map(id => allBadges.find(b => b.id === id)).filter(Boolean) as Badge[];
}

export function addEarnedBadgeId(badgeId: string): void {
  if (typeof window === 'undefined') return;
  const earnedBadgeIds = getEarnedBadgeIds();
  if (!earnedBadgeIds.includes(badgeId)) {
    const updatedBadgeIds = [...earnedBadgeIds, badgeId];
    localStorage.setItem(LOCAL_STORAGE_BADGES_KEY, JSON.stringify(updatedBadgeIds));
  }
}

// Quizzes completed functions
export function getQuizzesCompletedCount(): number {
    if (typeof window === 'undefined') return 0;
    const count = localStorage.getItem(LOCAL_STORAGE_QUIZZES_COMPLETED_KEY);
    return count ? parseInt(count, 10) : 0;
}

export function incrementQuizzesCompletedCount(): void {
    if (typeof window === 'undefined') return;
    const currentCount = getQuizzesCompletedCount();
    localStorage.setItem(LOCAL_STORAGE_QUIZZES_COMPLETED_KEY, (currentCount + 1).toString());
}
