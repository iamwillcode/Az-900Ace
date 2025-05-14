
'use client';
import { topics } from '@/lib/azure-data';
import { TopicCard } from '@/components/azure-ace/TopicCard';
import { Navbar } from '@/components/azure-ace/Navbar';
import { useGamificationStats } from '@/hooks/useGamificationStats';
import { BadgeCard } from '@/components/azure-ace/BadgeCard';
import { allBadges } from '@/lib/gamification';
import { Award, Trophy } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';

export default function Home() {
  const { earnedBadges, isLoading: gamificationLoading } = useGamificationStats();
  const earnedBadgeIds = earnedBadges.map(b => b.id);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <header className="mb-12 text-center">
          <h1 className="text-5xl font-extrabold tracking-tight text-primary mb-4">
            Welcome to AzureAce!
          </h1>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
            Your ultimate companion for mastering the AZ-900 Microsoft Azure Fundamentals exam.
            Select a topic below to start your learning journey.
          </p>
        </header>

        {/* Achievements Section */}
        <section className="mb-16">
          <div className="flex items-center justify-center mb-6">
            <Trophy className="h-8 w-8 text-yellow-500 mr-3" />
            <h2 className="text-3xl font-semibold text-center text-primary">Your Achievements</h2>
          </div>
          {gamificationLoading ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[...Array(3)].map((_, i) => (
                 <div key={i} className="flex flex-col items-center p-4 border rounded-lg">
                    <Skeleton className="h-12 w-12 rounded-full mb-2" />
                    <Skeleton className="h-4 w-3/4 mb-1" />
                    <Skeleton className="h-3 w-1/2" />
                 </div>
              ))}
            </div>
          ) : allBadges.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {allBadges.map((badge) => (
                <BadgeCard key={badge.id} badge={badge} isEarned={earnedBadgeIds.includes(badge.id)} />
              ))}
            </div>
          ) : (
            <p className="text-center text-muted-foreground">No achievements defined yet. Start learning to earn them!</p>
          )}
        </section>
        
        {/* Topics Section */}
         <div className="flex items-center justify-center mb-6">
             <Award className="h-8 w-8 text-primary mr-3" />
            <h2 className="text-3xl font-semibold text-center text-primary">Study Topics</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {topics.map((topic) => (
            <TopicCard key={topic.id} topic={topic} />
          ))}
        </div>
      </main>
      <footer className="text-center py-6 bg-card border-t">
        <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} AzureAce. Conquer the Cloud!</p>
      </footer>
    </div>
  );
}
